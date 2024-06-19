<<<<<<< Updated upstream
import HeroContent from "@/components/Hero/hero";
import AboutContent from "@/components/About/about";
import SolutionContent from "@/components/About/solution";
import ServiceContent from "@/components/Services/service";
import ContactContent from "@/components/Contact/contact";
import CallContent from "@/components/Contact/call";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroContent />
      <AboutContent />
      <SolutionContent />
      <ServiceContent />
      <CallContent />
    </Layout>
  );
}
=======
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
>>>>>>> Stashed changes
