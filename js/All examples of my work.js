let pedarbox = document.querySelector("#pedarbox");

document.querySelector("#boxrow").classList.add("none");

pedarbox.onclick = () => {
  if (document.querySelector("#boxrow").classList.toggle("none")) {
    document.getElementById("boxrow").style.display = "flex";
    document.getElementById("ani").style.transform = "rotate(0deg)";
  } else {
    document.getElementById("boxrow").style.display = "none";
    document.getElementById("ani").style.transform = "rotate(90deg)";
  }
}

let pedarbox1 = document.querySelector("#pedarbox1");

document.querySelector("#boxrow1").classList.add("none");

pedarbox1.onclick = () => {
  if (document.querySelector("#boxrow1").classList.toggle("none")) {
    document.getElementById("boxrow1").style.display = "flex";
    document.getElementById("ani1").style.transform = "rotate(0deg)";
  } else {
    document.getElementById("boxrow1").style.display = "none";
    document.getElementById("ani1").style.transform = "rotate(90deg)";
  }
}

let pedarbox2 = document.querySelector("#pedarbox2");

document.querySelector("#boxrow2").classList.add("none");

pedarbox2.onclick = () => {
  if (document.querySelector("#boxrow2").classList.toggle("none")) {
    document.getElementById("boxrow2").style.display = "flex";
    document.getElementById("ani3").style.transform = "rotate(0deg)";
  } else {
    document.getElementById("boxrow2").style.display = "none";
    document.getElementById("ani3").style.transform = "rotate(90deg)";
  }
}
