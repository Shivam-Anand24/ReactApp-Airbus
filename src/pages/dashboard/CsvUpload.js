import { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "../../api/axios";

const InvisibleInput = styled("input")({
  display: "none",
});

function CSVUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    console.log("here");
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("csv_file", selectedFile);
    formData.append("key", "fabrication");
    try {
      const response = await axios.post("/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setFile(selectedFile);
  };

  return (
    <>
      <label htmlFor="csv-upload">
        <Button component="span">Upload CSV</Button>
      </label>
      <InvisibleInput
        id="csv-upload"
        type="file"
        onChange={handleFileChange}
        accept=".csv"
      />
      <Button onClick={handleFileUpload} disabled={!file}>
        Upload
      </Button>
    </>
  );
}

export default CSVUploader;
