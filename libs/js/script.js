AOS.init({
    duration: 1200,
})
document.querySelectorAll(".nav-link").forEach((elem) => {

	elem.onmouseenter =
	elem.onmouseleave = (e) => {
		const tolerance = 10;
		const left = 0;
		const right = elem.clientWidth;
		let x = e.pageX - elem.offsetLeft;
		if (x - tolerance < left) x = left;
		if (x + tolerance > right) x = right;
		elem.style.setProperty("--x", `${ x }px`);
	}

})
let themeSwitcher = document.querySelector(".theme");
var darkMode = false;
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	darkMode = true;
}
if (localStorage.getItem("theme") === "dark") {
	darkMode = true;
} else if (localStorage.getItem("theme") === "light") {
	darkMode = false;
}
if (darkMode) {
	document.body.classList.toggle("dark");
    themeSwitcher.classList.toggle("switch")
}
document.addEventListener("DOMContentLoaded", () => {
    themeSwitcher.addEventListener("click", () => {
		document.body.classList.toggle("dark");      
        themeSwitcher.classList.toggle("switch")  
    	localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
	});

});
let burger = document.querySelector(".burger");
burger.onclick = function () {
    let header = document.querySelector("header");
    header.classList.toggle("show");
    burger.classList.toggle("open");
}
window.addEventListener("scroll", function () {
    let btnUp = document.querySelector(".back-to-top")
    if (window.pageYOffset > 475) {
        btnUp.classList.remove("hidden");
    } 
    else {
        btnUp.classList.add("hidden");
    }
})