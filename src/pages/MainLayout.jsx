import { Fragment } from "react";  
import PropTypes from "prop-types";
import TopHeaderbar from "../components/topbar/TopHeaderBar";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


export default function MainLayout({children}) {

  return (
    <Fragment>
      <div className="layoutOne">
        {/* <TopHeaderbar /> */}
        <Navbar />
        {children}
        <Footer />
      </div>
    </Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any.isRequired
}