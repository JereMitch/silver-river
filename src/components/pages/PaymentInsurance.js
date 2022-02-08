import React from "react";
import { paymentObjone } from "../data/PaymentInsuranceData";
import HeroSection from "../layout/HeroSection";
import MainNav from "../layout/MainNav";
import Footer from "../layout/Footer";

function PaymentInsurance() {
  return (
    <div>
      <MainNav />
      <HeroSection {...paymentObjone} />
      <Footer />
    </div>
  );
}

export default PaymentInsurance;
