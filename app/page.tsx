import HeroContent from "@/components/Hero/hero";
import AboutContent from "@/components/About/about";
import ServiceContent from "@/components/Services/service";
import ContactContent from "@/components/Contact/contact";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroContent />
      <AboutContent />
      <ServiceContent />
      <ContactContent />
    </Layout>
  );
}
