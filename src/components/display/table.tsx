"use client";
import { Column } from "@/interfaces/types";
import {
  Box,
  IconButton,
  InputAdornment,
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
import FormTextField from "../Inputs/formTextField";
import { Search } from "@mui/icons-material";
import SearchBox from "../Inputs/searchBox";

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
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 8 }}>
    <SearchBox />
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
                <TableRow key={String(row.id)}>
                  {columns?.map((column) => (
                    <TableCell key={String(column.id)}>
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
    </Paper>
  );
}
