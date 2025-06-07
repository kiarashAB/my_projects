let num = []
num[0] = prompt(0,"لطفا عدد وارد بکنید")
num[1] = prompt(0,"لطفا عدد وارد بکنید")
num[2] = prompt(0,"لطفا عدد وارد بکنید")

function test(){
    let Result = Number(num[0]);
    let Result2 = Number(num[1]);
    let Result3 = Number(num[2]);
    
    let m = (Result + Result2 + Result3) / 3
    document.getElementById("a").innerHTML = m;
}
test()
console.log(typeof Result);

