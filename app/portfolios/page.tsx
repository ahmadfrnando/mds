import React from "react";
import Layout from "@/components/Layout";
import PortfolioContent from "@/components/Portfolios/portfolio";
import CallContent from "@/components/Contact/call";
export default function Portfolios() {
  return (
    <Layout>
      <PortfolioContent />
      <CallContent />
    </Layout>
  );
}
