import { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "../../api/axios";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";

const InvisibleInput = styled("input")({
  display: "none",
});

function CSVUploader() {
  const [file, setFile] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const selectedFile = file;
    console.log(file, "here");
    const formData = new FormData();
    formData.append("csv_file", selectedFile);
    formData.append("key", "fabrication");
    try {
      const response = await axios.post("/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSnackbarMessage(response.data);
    } catch (error) {
      setSnackbarMessage(error);
    }
    setFile(selectedFile);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setSnackbarOpen(false)}
      />
      <Typography
        variant="body1"
        sx={{
          marginLeft: "8px",
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "#333",
          fontFamily: "Poppins",
        }}
      >
        Kindly Upload Your CSV here:-
      </Typography>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "15px" }}
      >
        <label htmlFor="csv-upload">
          <Typography
            component="span"
            variant="body1"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              marginLeft: "15px",
              textDecoration: "underline",
              marginRight: "20px",
            }}
          >
            <CloudUploadOutlinedIcon sx={{ marginRight: "5px" }} />
            Choose Your File
          </Typography>
        </label>

        <InvisibleInput
          id="csv-upload"
          type="file"
          onChange={handleFileChange}
          accept=".csv"
        />
        <Button
          onClick={() => handleFileUpload()}
          disabled={!file}
          variant="contained"
          style={{ backgroundColor: "#40362A", color: "#ffffff" }}
          startIcon={<CloudUploadOutlinedIcon />}
        >
          Upload
        </Button>
      </div>
    </>
  );
}

export default CSVUploader;
