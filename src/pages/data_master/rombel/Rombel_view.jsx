import React from "react";
import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import Data_rombel from "../../../components/data_master/rombel/Data_rombel";
import Footer from "../../../components/Footer";
import Modal_rombel from "../../../components/data_master/rombel/Modal_rombel";

function Rombel_view() {
  return (
    <>
      <Header />
      <Menu />
      <Data_rombel />
      <Modal_rombel />
      <Footer />
    </>
  );
}

export default Rombel_view;
