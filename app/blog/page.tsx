import BlogContent from "@/components/blog/BlogList";
import CallContent from "@/components/Contact/call";
import Layout from "@/components/Layout";
export default function Blog() {
  return (
    <Layout>
      <BlogContent />
      <CallContent />
    </Layout>
  );
}
