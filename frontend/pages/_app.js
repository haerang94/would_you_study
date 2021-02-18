import "../styles/globals.css";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
// 모든 페이지를 감싸고 있다.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
