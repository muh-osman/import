import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { green } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import Swal from "sweetalert2";

const Price = () => {

    var showHide = ()=>{

        const vid = document.getElementById('hiden_vid')
        const chevron = document.getElementById('chevron')

        vid.classList.toggle("show_vid")
        chevron.classList.toggle("show_chevron")
    }



    const info = ()=> {
        Swal.fire({
            title:'شراء الكورس هو استثمار بحد ذاته بسبب الفائدة العقلية و المالية التي سوف تحصل عليها إذا طبقت ما تتعلمه',
            icon: 'question',
        })
    }

  return (
    <div className='cont'>

        <div dir="rtl" className="price_box">
            <div className='g_one'>
                <ul>
                    <li className='u_padd'><VerifiedUserIcon sx={{ color: green[500] }}/>يمكن شراء المنتجات ابتداء من كرتونة واحدة.</li>
                    <li><VerifiedUserIcon sx={{ color: green[500] }}/>يمكن للتاجر شراء جزء من حاوية مع أسعار تنافسية بالتأكيد.</li>
                    <li><VerifiedUserIcon sx={{ color: green[500] }}/>تسهيل المدفوعات​​ للتجار لعمليات الشراء بسهولة وأمان.</li>
                    <li><VerifiedUserIcon sx={{ color: green[500] }}/>ضمان ذهبي للمنتجات ووصولها للتاجر بنفس الحالة المعروضة بالصور او فيديوهات المنتج.</li>
                    {/* <li><VerifiedUserIcon sx={{ color: green[500] }}/>إدارة المخاطر و سيكولوجية المتداول</li> */}
                </ul>
            </div>

            <div className='buy_btn_box'>
                {/* <h3>مجانا</h3> */}
                {/* <h2>مجانا</h2> */}
                <a href='https://whatsapp.com/channel/0029VaDXMFK2v1IoEzzemL3a' className="buy_btn" target="_blank" rel="noopener noreferrer">إنضم الآن مجانا</a>
                {/* <p>الكورس عبارة عن مجموعة من المحاضرات المسجلة بالفيديو بالاضافة الى متابعة مدى الحياة <InfoIcon onClick={()=> {info()}} /></p> */}
            </div>

            <div className='g_two'>
                <ul>
                    <li className='m_padd'><VerifiedUserIcon sx={{ color: green[500] }}/>الفحص الفني الشامل للبضائع من خلال فريق العمل بالصين مقدم مجاناً ودعماً لصغار التجار والبائعين.</li>
                    <li><VerifiedUserIcon sx={{ color: green[500] }}/>يمكن للتجار ارسال طلب شراء منتجات محددة وبتفاصيل مطلوبة بالدخول على الرابط : (النموذج )</li>
                    <li><VerifiedUserIcon sx={{ color: green[500] }}/>قائمة المنتجات سوف يتم وضعها بشكل مستمر ومنظم وبأسعار تنافسية شاملة التوصيل الى موقع التاجر.</li>
                    {/* <li><VerifiedUserIcon sx={{ color: green[500] }}/>أساسيات التحليل الفني</li> */}
                    {/* <li className='d_padd'><VerifiedUserIcon sx={{ color: green[500] }}/>أوامر التداول المختلفة</li> */}
                </ul>
            </div>
        </div>

        {/* <button onClick={()=>{showHide()}} className='course_containt_btn'><svg id='chevron' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg> محتوى الكورس</button> */}

        {/* <div id='hiden_vid' className='hiden_vid'>
            <iframe
                className='ifrme_vid'
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fC7iFvM5r30"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
                />
        </div> */}
    </div>
  )
}
export default Price