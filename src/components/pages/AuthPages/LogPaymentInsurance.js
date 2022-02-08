import React from "react";
import { paymentObjone } from "../../data/PaymentInsuranceData";
import LogHeroSection from "../../layout/AuthLayout/LogHeroSection";
import LogMainNav from "../../layout/AuthLayout/LogMainNav";
import LogFooter from "../../layout/AuthLayout/LogFooter";

function LogPaymentInsurance() {
  return (
    <div>
      <LogMainNav />
      <LogHeroSection {...paymentObjone} />
      <LogFooter />
    </div>
  );
}

export default LogPaymentInsurance;
