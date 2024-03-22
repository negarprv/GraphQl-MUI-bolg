import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        height: "100vh",
      }}
    >
      <div style={{ marginTop: "20px" }}>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
