import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const MainScreen = ({ match, history }) => {
  const [fileLoading, setFileLoading] = useState(false);
  const [fileConverting, setFileConverting] = useState(false);
  const [fileId, setFileId] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");

  const uploadFileHandler = async (e) => {
    try {
      var formData = new FormData();
      var file = document.querySelector("#file");
      let fName = e.target.value;
      let fileName = fName.split("fakepath")[1];
      fileName = fileName.substring(1);

      if (!fileName || fileName === null) {
        fileName = "nerdyweb.docx";
      }

      console.log(fileName);

      formData.append("file", file.files[0]);
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
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFileConverting(true);
    const { data } = await axios.get(`/api/to-pdf/${fileId}`);
    setFileConverting(false);
    console.log(data);
    setConvertedUrl(data);
    document.getElementById("download").click();
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <input type="file" accept=".docx" id="file" name="File" onChange={uploadFileHandler} />
          {fileLoading && <Loader />}
          <input type="hidden" name="StoreFile" value="true" />
          <input type="submit" value="Convert file" />
          {fileConverting && <Loader />}
        </form>
        <a href={convertedUrl} download id="download" hidden></a>
      </FormContainer>
    </>
  );
};

export default MainScreen;
