import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Social = () => {
  const FaTiktoks = { color: "#000000", fontSize: "2.5em" };
  const FaInstagrams = { color: "#833AB4", fontSize: "2.5em" };
  const FaYoutubes = { color: "#FF0000", fontSize: "2.5em" };
  const FaTelegramPlanes = { color: "#229ED9", fontSize: "2.5em" };
  const MdEmails = { color: "#183153", fontSize: "2.5em" };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <section className="contact uniform" id="contact">
      <h1>اتصل بنا</h1>

      <div className="container ico_box">
        <a
          href="https://www.tiktok.com/@alfatih1166"
          className="box"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok style={FaTiktoks} />
          <span className="number">+3K</span>
          <span className="text">TikTok</span>
        </a>
        {/* <a href="https://www.instagram.com/skash__1/" className="box" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={FaInstagrams}/>
                <span className="number">+235K</span>
                <span className="text">Instagram</span>
            </a> */}
        <a
          href="https://youtube.com/@moalfatih1?si=F54c8bkjoTyaf71R"
          className="box"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube style={FaYoutubes} />
          <span className="number">+5K</span>
          <span className="text">YouTube</span>
        </a>
        <a
          href="https://t.me/moalfatih2"
          className="box"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane style={FaTelegramPlanes} />
          <span className="number">+1K</span>
          <span className="text">Telegram</span>
        </a>

        <a
          href="https://whatsapp.com/channel/0029VaDXMFK2v1IoEzzemL3a"
          className="box"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <svg
            className="crown"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M309 106c11.4-7 19-19.7 19-34 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-57.3 114.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24 0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40h.7l45.7 251.4c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L535.3 176h.7c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"></path>
          </svg> */}
          {/* <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="skash avatar"
              src={<WhatsAppIcon />}
              sx={{ width: 56, height: 56 }}
            />
          </StyledBadge> */}
          <WhatsAppIcon sx={{ color: "#25d366", fontSize: "3em" }} />
          <span className="number">+1K</span>
          <span className="text">WhatsApp</span>
          <div className="vip_lay">
            <ul>
              <li>توصيات للعملات الرقمية سبوت و للأسهم</li>
              <li>يتضمن نقاط الدخول و الخروج من الصفقات</li>
              <li>معدل ٢-٣ صفقات يوميا</li>
            </ul>
          </div>
        </a>

        <a href="mailto:info@moalfatih.com" className="box">
          <MdEmail style={MdEmails} />
          <span className="number email">info@moalfatih.com</span>
          <span className="text">Email</span>
        </a>
      </div>
    </section>
  );
};
export default Social;
