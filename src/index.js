import React from 'react'
import ReactDOM from "react-dom";
import "./components/styles/index.css";
import App from "./App";
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  ,document.getElementById('root')
);
