import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import "./styles.css";
export default async function getAuth(inputname,inputpass,session_url) {   
    const res =axios.get(session_url, {
      // Axios looks for the `auth` option, and, if it is set, formats a
      // basic auth header for you automatically.
      auth: {
        username: inputname,
        password: inputpass
      }
    }
    )
    return res;
}