import AboutContent from "@/components/About/about";
import SolutionContent from "@/components/About/solution";
import CallContent from "@/components/Contact/call";
import Layout from "@/components/Layout";
export default function About() {
  return (
    <Layout>
      <AboutContent />
      <SolutionContent />
      <CallContent />
    </Layout>
  );
}
