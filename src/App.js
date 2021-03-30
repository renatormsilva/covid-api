import { Helmet } from "react-helmet";
import React from "react";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <Routes />
      <Helmet>
        <meta property="og:image" content={process.env.REACT_APP_IMAGE} />
      </Helmet>
    </>
  );
}

export default App;
