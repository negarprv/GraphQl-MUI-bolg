import Header from "./components/layout/Header";

import "../src/styles/App.css";
import HomePage from "./components/home/HomePage";
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
