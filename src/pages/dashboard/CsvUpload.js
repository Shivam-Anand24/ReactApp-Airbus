import { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "../../api/axios";
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Typography from "@mui/material/Typography";


const InvisibleInput = styled("input")({
  display: "none",
});

function CSVUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("csvFile", selectedFile);
    try {
      const response = await axios.post("/api/upload-csv", formData, {
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
    
    <Typography variant="body1" sx={{ marginLeft: '8px', fontWeight: 'bold', fontSize: '1.2rem', color: '#333',  fontFamily: 'Poppins' }}>
    Kindly Upload Your CSV here:-
  </Typography>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
  <label htmlFor="csv-upload">
  <Typography
    component="span"
    variant="body1"
    sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer',
     marginLeft: '15px',
     textDecoration: 'underline', 
     marginRight: '20px'}}
  >
    <CloudUploadOutlinedIcon sx={{ marginRight: '5px' }} />
    Choose Your File
  </Typography>
</label>



      <InvisibleInput
        id="csv-upload"
        type="file"
        onChange={handleFileChange}
        accept=".csv"
      />
        <Button onClick={handleFileUpload} disabled={!file}
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
