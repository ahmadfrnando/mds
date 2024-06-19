import React from "react";
import Layout from "@/components/Layout";
import ServiceContent from "@/components/Services/service";
import CallContent from "@/components/Contact/call";
export default function Services() {
  return (
    <Layout>
      <ServiceContent />
      <CallContent />
    </Layout>
  );
}

