document.getElementById("Home_Eror").addEventListener("click", () => {
    // alert("شما اکنون در  صفحه خانه هستی")
    let erorpage = new Error(" " + "شما در صحفه خانه هستی");
    alert(erorpage);
});

document.getElementById("Darkmod").addEventListener("click", () => {
    const body = document.getElementsByTagName("body")[0];
    const moon = document.getElementById("bi-moon");
    const sun = document.getElementById("bi-sun");

    body.classList.toggle("dark");
    moon.classList.toggle("none");
    sun.classList.toggle("none");
});
document.getElementById("Le_box").style.cursor = "pointer";

document.getElementById("Le_box").addEventListener("click", () => {
    document.getElementById("F").classList.toggle("none");
    document.getElementById("E").classList.toggle("none");
});

const abutkiarash = {
    name : "کیارش",
    family : "عبداللهی",
    age : 18,
    sabege : 3,
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

