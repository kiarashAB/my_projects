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