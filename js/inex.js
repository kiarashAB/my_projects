document.getElementById("Home_Eror").addEventListener("click", () => {
    // alert("شما اکنون در  صفحه خانه هستی")
    let erorpage = new Error(" " + "شما در صحفه خانه هستی");
    alert(erorpage);
});

const body = document.getElementsByTagName("body")[0];
const moon = document.getElementById("bi-moon");
const sun = document.getElementById("bi-sun");

document.getElementById("Darkmod").addEventListener("click", () => {
    body.classList.toggle("dark");
    sun.classList.toggle("none");
    moon.classList.toggle("none");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    sun.classList.remove("none");
    moon.classList.add("none");
} else {
    sun.classList.add("none");
    moon.classList.remove("none");
}

document.getElementById("Le_box").addEventListener("click", () => {
    const farsi = document.getElementById("F");
    const english = document.getElementById("E");

    farsi.classList.toggle("none");
    english.classList.toggle("none");


    // if (english.classList.contains("none")) {
    //     localStorage.setItem("lang", "fa");
    // } else {
    //     localStorage.setItem("lang", "en");
    // }

//     function updateLanguage() {
//         const lang = localStorage.getItem("lang") || "fa";

//         if (lang === "en") {
//             document.getElementById("F").classList.add("none");
//             document.getElementById("E").classList.remove("none");
//             document.querySelector("html").setAttribute("dir","ltr")
//             // اینجارو با ترجمه‌های خودت پر کن
//             document.querySelector(".Re_Header").innerHTML =
//                 ` 
//              <ul>
//                     <li id="Home_Eror">Home</li>
//                     <a href="">
//                         <li>Abut me</li>
//                     </a>
//                     <a href="">
//                         <li>mySample</li>
//                     </a>
//                     <a href="">
//                         <li>Skills</li>
//                     </a>
//                     <a href="">
//                         <li>Call</li>
//                     </a>
//                 </ul>
//                 `;
//             // بقیه المان‌ها رو هم تغییر بده
//             // مثلاً:
//             // document.querySelector("#nav-about").innerText = "About Me";

//         } else {
//             document.getElementById("F").classList.remove("none");
//             document.getElementById("E").classList.add("none");
//              document.querySelector("html").setAttribute("dir","rtl");
//             document.querySelector(".Re_Header").innerHTML =
//                 ` 
//              <ul>
//                     <li id="Home_Eror">خانه</li>
//                     <a href="">
//                         <li>درباره من</li>
//                     </a>
//                     <a href="">
//                         <li>نمونه کارهام</li>
//                     </a>
//                     <a href="">
//                         <li>مهارت ها</li>
//                     </a>
//                     <a href="">
//                         <li>تماس</li>
//                     </a>
//                 </ul>
//                 `;
//             // بقیه المان‌ها...
//         }
//     }
//     updateLanguage();
 });


const abutkiarash = {
    name: "کیارش",
    family: "عبداللهی",
    age: 18,
    sabege: 3,
    proje: 1,
    Satisfied_customer: 1,

}

document.getElementById("blur_but").innerHTML =
    `<div class="Heder_p">
                    <h1>سلام، من ${abutkiarash.name} ${abutkiarash.family} هستم</h1>
                    <h3>توسعه‌دهنده وب حرفه‌ای</h3>
                    <p>با بیش از ${abutkiarash.sabege} سال تجربه در توسعه وب‌سایت‌های مدرن</p>
                    <div class="Btn_Header">
                    <button class="btn">مشاهده نمونه کارها</button>
                    <button class="btn">تماس با من</button>
                    </div>
                </div>
`;

document.querySelector(".BoxAmar").innerHTML =
    `
       <div class="Box">
            <h2>${abutkiarash.proje}+</h2>
            <p>پروژه تکمیل شده</p>
        </div>
        <div class="Box">
            <h2>${abutkiarash.Satisfied_customer}+</h2>
            <p>مشتری راضی</p>
        </div>
        <div class="Box">
            <h2>${abutkiarash.sabege}+</h2>
            <p>سال تجربه</p>
        </div>
`

window.addEventListener("scroll", () => {
    const header = document.getElementById("hedear");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});