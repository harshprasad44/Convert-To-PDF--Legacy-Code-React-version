import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const DocxToPdf = ({ match, history }) => {
  const [fileLoading, setFileLoading] = useState(false);
  const [fileConverting, setFileConverting] = useState(false);

  const [fileUploadError, setFileUploadError] = useState(false);
  const [conversionError, setConversionError] = useState(false);

  const [fileId, setFileId] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");

  //// QUERY PARAMETERS ////
  const [FileName, setFileName] = useState(null);
  /////////////////////////

  const uploadFileHandler = async (e) => {
    try {
      var formData = new FormData();
      var file = document.querySelector("#file");
      let fName = e.target.value;
      let fileName = fName.split("fakepath")[1];
      fileName = fileName.substring(1);

      if (!fileName || fileName == null || fileName == undefined) {
        fileName = "nerdyweb.docx";
      }

      console.log(fileName);
      setFileName(fileName);

      var FileSize = file.files[0].size; // in MiB
      console.log(FileSize);
      if (FileSize > 100000) {
        alert("File size exceeds 100 KB");
        return;
      } else {
        formData.append("file", file.files[0]);
      }

      setFileLoading(true);
      const { data } = await axios.post(`https://v2.convertapi.com/upload?filename=${fileName}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFileLoading(false);

      console.log(data);
      setFileId(data.FileId);
    } catch (error) {
      setFileUploadError(true);
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setFileConverting(true);
      const { data } = await axios.get(`/api/docx-pdf/${fileId}/${FileName}`);
      setFileConverting(false);
      setConvertedUrl(data);
      document.getElementById("download").click();
    } catch (error) {
      setConversionError(true);
      setFileConverting(false);
      console.error(error);
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={submitHandler}>
          {conversionError && (
            <Message variant="danger">
              Oops! There was error converting the file. Please check the file and try again.
            </Message>
          )}

          <input type="file" accept=".docx" id="file" name="File" onChange={uploadFileHandler} required />

          {fileLoading && <Loader />}
          {fileUploadError && (
            <Message variant="danger">
              Oops! There was error uploading the file. Please check the file and try again.
            </Message>
          )}
          <input type="hidden" name="StoreFile" value="true" />
          <input type="text" placeholder="FileName" onChange={(e) => setFileName(e.target.value.trim())} />
          <input type="submit" value="Convert file" />
          {fileConverting && <Loader />}
        </form>
        <a href={convertedUrl} download id="download" hidden></a>
      </FormContainer>
    </>
  );
};

export default DocxToPdf;
