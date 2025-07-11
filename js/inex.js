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

document.getElementById("Le_box").style.cursor = "pointer";

document.getElementById("Le_box").addEventListener("click", () => {
    document.getElementById("F").classList.toggle("none");
    document.getElementById("E").classList.toggle("none");
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