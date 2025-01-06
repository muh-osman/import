import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    const AiOutlineCopyrightCircles = { color: "#6e6e73", fontSize: ".7em" }
    const FaHearts = { color: "red", fontSize: ".7em" }
  return (
    <section className="footer">
        <p><span><AiOutlineCopyrightCircle style={AiOutlineCopyrightCircles}/></span> 2025 All rights reserved.</p>
        {/* <p>Made with <span> &nbsp; <FaHeart style={FaHearts}/> &nbsp; </span> by&nbsp;<a href="https://github.com/muh-osman" target="_blank" rel="noopener noreferrer">Muh-Osman</a></p> */}
    </section>
  )
}
export default Footer