import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero_text_box">
        <h1 dir="rtl">إشتري البتعرف تبيعو, وبيع البتعرف تشتريه.</h1>
        <p dir="rtl" className="hero_p">
          اكتشف عالم التجارة والإستيراد من الصين بأقصى قدر من المصداقية
          والاحترافية وبأفضل الاسعار.
        </p>
        <a href="#course" className="hero_btn">
          ابدأ الآن
        </a>
      </div>

      <div className="hero_image_box">
        <img src={hero} alt="" />
      </div>
    </section>
  );
}
export default Hero;
