import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/loginModal"
import "./home.css"
import ModalComp from "../../components/modal/loginModal"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ModalComp />
    </div>
  )
}

export default Home