import React from "react";
import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import Footer from "../../../components/Footer";
import Data_gtk from "../../../components/data_master/gtk/data_gtk";

function Gtk_view() {
  return (
    <>
      <Header />
      <Menu />
      <Data_gtk />
      <Footer />
    </>
  );
}

export default Gtk_view;
