import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { Fragment } from "react";
import "./Table.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const columns = [
  {
    id: "profile_image",
    label: "Profile Image",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "patient_id", label: "Patient ID", align: "left", minWidth: 100 },

  {
    id: "name",
    label: "Name",
    minWidth: 150,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "room", label: "Room", minWidth: 60 },
  {
    id: "gender",
    label: "Gender",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "appointment",
    label: "Appointment",
    minWidth: 120,
    align: "right",
  },
];

const createData = (
  patient_id,
  room,
  profile_image,
  name,
  gender,
  appointment
) => {
  return { patient_id, room, profile_image, name, gender, appointment };
};
/*
const rows = [
  createData("100001","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100002","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100003","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100004","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100005","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100006","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100007","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100009","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100015","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100010","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100011","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100012","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100013","A801","picture","Linda Robertson","Male","18/01/2022"),
  createData("100014","A801","picture","Linda Robertson","Male","18/01/2022")
];*/

export default function StickyHeadTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
      <TableContainer
        sx={{
          fontFamily: "Poppins, sans-serif",
          width: "auto",
          maxHeight: "calc(100vh - 55px)",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="table-head">
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    fontSize: 16,
                    minWidth: column.minWidth,
                    height: 20,
                    color: "#FFFFFF",
                    backgroundColor: "#3965F3",
                  }}
                >
                  {" "}
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.patient_id}
                    onClick={(row) => {
                      row.preventDefault();
                      row.stopPropagation();
                      props.setPreviewProfile(
                        props.data.rows[
                          (page - 1) * rowsPerPage + rowsPerPage + index
                        ]
                      );
                    }}
                    sx={{
                      cursor: "pointer",
                      userSelect: "none"
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "profile_image" ? (
                            <img
                              className="table-profile-img"
                              src={value}
                              alt=""
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
