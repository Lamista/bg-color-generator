var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
var button = document.querySelector("button");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	button.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColors() {
	var random1 = "#" + ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2) + ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2) + ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
	var random2 = "#" + ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2) + ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2) + ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
	color1.value = random1;
	color2.value = random2;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColors);