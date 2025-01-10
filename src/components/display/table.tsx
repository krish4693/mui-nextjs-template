"use client";
import {
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

interface Column<T> {
  id: keyof T;
  label: string;
}

interface TableProps<T> {
  url: string;
  // columns: Column<T>[];
  // data: T[];
}

export default function CustomTable<T extends Record<string, any>>({
  url,
}: TableProps<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalRows, setTotalRows] = useState(0);
  const [tableData, setTableData] = useState<T[]>();
  const [columns, setColumns] = useState<Column<T>[]>();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 8 }}>
      <TableContainer sx={{ height: 330 }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell key={String(column.id)}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {columns?.map((column) => (
                    <TableCell key={String(column.id)}>
                      {row[column.id]}
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
    </Paper>
  );
}
