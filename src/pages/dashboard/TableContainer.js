import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./Orders";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "../../api/axios";

function TableContainer() {
  const [tableName, setTableName] = useState("");
  const [tableData, setTableData] = useState({ headers: [], values: [] });

  const handleChange = (event) => {
    setTableName(event.target.value);
  };

  useEffect(() => {
    if (tableName) {
      axios
        .get(`/data/${tableName}`)
        .then((response) => {
          setTableData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [tableName]);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Table Name</InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value={tableName}
              label="Table Name"
              onChange={handleChange}
            >
              <MenuItem value="assembly">Assembly</MenuItem>
              <MenuItem value="fabrication">Fabrication</MenuItem>
              <MenuItem value="process">Process</MenuItem>
              <MenuItem value="sub_assembly">Sub Assembly</MenuItem>
              <MenuItem value="item_category">Item Category</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
      {tableName && (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders
                  headers={tableData.headers}
                  values={tableData.values}
                  name={tableName}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default TableContainer;
