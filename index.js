const bar = document.getElementById("icon-bar");
const navbar = document.getElementById("navbarid");
const xIcon = document.getElementById("x");

bar.addEventListener("click", () => {
	navbar.classList.add("active");
});
xIcon.addEventListener("click", () => {
	navbar.classList.remove("active");
});

const mainImg = document.getElementById("main-img");
const smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
	smallImg[i].onclick = function () {
		mainImg.src = smallImg[i].src;
	};
}
