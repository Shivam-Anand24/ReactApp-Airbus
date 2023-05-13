import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

const headers = ["id", "item", "quan"];

const values = [
  { id: "1", item: "tub", quan: 10 },
  { id: "2", item: "tubbbbffjj", quan: 20 },
  { id: "3", item: "spinner", quan: 15 },
];

export default function Orders(props) {
  return (
    <React.Fragment>
      <Title>Recent Orders{props.name}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row) => (
            <TableRow key={row.id}>
              {headers.map((header) => (
                <TableCell key={`${row.id}-${header}`}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
