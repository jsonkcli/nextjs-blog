import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const Post = () => {
  return <Layout></Layout>;
};

export default Post;
