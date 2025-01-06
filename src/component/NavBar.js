import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png"
import Swal from "sweetalert2";

function NavBar() {

  function about() {
    Swal.fire(
      'Skash حول',
      'جميع الآراء تمثل رأيي الخاص و ليست نصائح مالية. هناك مخاطر كبيرة للإستثمار قد تؤدي إلى خسارة أموالك. قم بإستشارة مختص مالي قبل الإستثمار. بعض الروابط المدرجة يتم حصولي على مقابل من الشركات المعلن لها عن طريق التسويق بالعمولة',
      'info'
    )
  }

  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <img alt="Skash logo" src={logo} height="60" className="d-inline-block align-top logo_img"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <Nav>
            {/* <Nav.Link href="#top">الرئيسية</Nav.Link> */}
            {/* <Nav.Link href="#course">مشاريع ناجحة</Nav.Link> */}
            {/* <Nav.Link href="#trading">تداول الأسهم</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{about()}}>حول</Nav.Link> */}
            <a href="#contact" className="contact_us_btn">اتصل بنا</a>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
