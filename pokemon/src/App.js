import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import PictureBg from "../src/img/bg1.jpg"

function App() {
  return (
      <>
      <Header title='This is title!' descr='This is description!' />
      <Layout title='Title' desc='Description' />
      <Layout urlBg={PictureBg} />
      <Layout colorBg='#e2e2e2'/>
      <Layout urlBg={PictureBg} />
      <Footer/>
      </>
  );
}

export default App;
