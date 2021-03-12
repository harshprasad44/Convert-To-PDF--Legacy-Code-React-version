import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const MainScreen = ({ match, history }) => {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [fileId, setFileId] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");

  const uploadFileHandler = async (e) => {
    try {
      var formData = new FormData();
      var file = document.querySelector("#file");
      formData.append("file", file.files[0]);
      const { data } = await axios.post("https://v2.convertapi.com/upload?filename=nerdyweb.docx", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      setFileId(data.FileId);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`/api/to-pdf/${fileId}`);
    console.log(data);
    setConvertedUrl(data);
    document.getElementById("download").click();
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <input type="file" id="file" name="File" onChange={uploadFileHandler} />
          <input type="hidden" name="StoreFile" value="true" />
          <input type="submit" value="Convert file" />
        </form>
        <a href={convertedUrl} download id="download" hidden></a>
      </FormContainer>
    </>
  );
};

export default MainScreen;
