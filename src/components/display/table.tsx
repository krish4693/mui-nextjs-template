"use client";
import { Column } from "@/interfaces/types";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchBox from "../Inputs/searchBox";
import Loader from "../Loader/loader";
import SelectField from "../Inputs/selectBox";

interface TableProps {
  url: string;
  // columns: Column<T>[];
  // data: T[];
}

export default function CustomTable<T extends Record<string, unknown>>({
  url,
}: TableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalRows, setTotalRows] = useState(0);
  const [tableData, setTableData] = useState<T[]>();
  const [columns, setColumns] = useState<Column<T>[]>();
  const [loading, setLoading] = useState(false);

  const options = [
    { value: "", label: "None" },
    { value: "age", label: "Age" },
    { value: "price", label: "Price" },
    { value: "date", label: "Date" },
    
  ]

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setTableData(data);
        setTotalRows(data.length);
        setColumns([
          { id: "id", label: "ID" },
          { id: "name", label: "Full Name" },
          { id: "email", label: "Email Address" },
          { id: "username", label: "Username" },
          { id: "phone", label: "Phone Number" },
          { id: "website", label: "Website" },
        ]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 4 }}>
      {!loading ? (
        <>
          <Box sx={{ display: "flex", m:2,gap:1}}>
          <SearchBox />
          <SelectField
            options={options}
            label="Filter By" 
          />
          </Box>
          <TableContainer sx={{ height: 330, px: 2 }}>
            <Table>
              <TableHead>
                <TableRow
                >
                  {columns?.map((column) => (
                    <TableCell
                      key={String(column.id)}
                      sx={{
                        backgroundColor: '#000000',
                        color: '#ffffff',
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={String(row.id)}
                    >
                      {columns?.map((column) => (
                        <TableCell
                          key={String(column.id)}  
                        >
                          {row[column.id] as React.ReactNode}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={totalRows}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10]}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <Loader />
      )}
    </Paper>
  );
}
