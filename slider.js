const conversionrate = 8;

function updateNum() {
	let value = document.getElementById("slider").value;
	document.getElementById("num").value = value;
	updateText(value);
	updateIcon(value);
}

function updateSlider() {
	let value = document.getElementById("num").value;
	document.getElementById("slider").value = value;
	updateText(value);
	updateIcon(value);
}

function updateText(value) {
	document.getElementById("label").innerHTML = Math.floor(value / conversionrate);
}

function setLabel(string) {
	document.getElementById("lbl").innerHTML = string;
}

function updateIcon(value) {

	switch (true) {

		case value > 1000:
			src = "home.svg";
			setLabel("A Home built with plastic bottles");
			break;
			
		case value > 500:
			src = "salary.svg";
			setLabel("A months salary of a recycling factory worker");
			break;

		case value > 100:
			src = "feast.svg";
			setLabel("Feeds a Family for a week");
			break;

		case value > 10:
			src = "meal.svg";
			setLabel("One meal");
			break;

		default:
			src = "nothing.svg";
			setLabel("");
			break;
	}

	document.getElementById("icon").src = src;
}