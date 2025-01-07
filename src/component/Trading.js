import laptop from "../assets/laptop.png";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { green } from "@mui/material/colors";

const Trading = () => {
  return (
    <section dir="rtl" id="trading">
      <h1>نموذج طلب شراء والبحث عن منتج.</h1>

      <div className="trading_flex">
        <div>
          <ul>
            <h2>لماذا طلب المنتجات محددة ؟</h2>
            <li>
              <DoneOutlineIcon sx={{ color: green[500] }} /> تسهل على التاجر
              تنفيذ اعمالة بتفاصيلها وبسرعة تنفيذها من فريق عملنا بالصين .
            </li>
            <li>
              <DoneOutlineIcon sx={{ color: green[500] }} /> توصيات من فريق
              العمل للتاجر بتقليل التكاليف والمعلومات الخاصة بالمنتج.
            </li>
            <li>
              <DoneOutlineIcon sx={{ color: green[500] }} /> توفير كافة
              المعلومات اللازمة عن كل منتج لمساعدتك في إتخاذ القرار بكل سهولة
              وثقة.
            </li>
            <li>
              <DoneOutlineIcon sx={{ color: green[500] }} /> اضغط على (نموذج
              الشراء) وكن تاجر محترف باقل الخبرات واقل التكاليف واترك الباقي
              علينا ...
            </li>
          </ul>
          <a
            className="xtb"
            href="https://forms.gle/TgaMcvFCwKEWwV4g9"
            target="_blank"
            rel="noopener noreferrer"
          >
            نموذج الشراء
          </a>
        </div>

        <div className="laptop_img">
          <img src={laptop} alt="laptop" />
        </div>
      </div>
    </section>
  );
};
export default Trading;
