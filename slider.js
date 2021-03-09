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

function setIcon(icon) {
	document.getElementById("icon").src = icon;
}

function updateIcon(value) {

<<<<<<< HEAD
	if (value >= 1000) {
		src = "home.svg";
		setLabel("A Home built with plastic bottles");
	}
	else if (value >= 600) {
		src = "salary.svg";
		setLabel("A months salary of a recycling factory worker");
	}
	else if (value >= 300) {
		src = "feast.svg"
		setLabel("Feeds a Family for a week");
	}
	else if (value >= 10) {
		src = "meal.svg";
		setLabel("One meal")
	}
	else {
		src = "nothing.svg";
		setLabel("");
	}
=======
	switch (true) {

		case value > 1000:
			setIcon("home.svg");
			setLabel("A Home built with plastic bottles");
			break;

		case value > 500:
			setIcon("salary.svg");
			setLabel("A months salary of a recycling factory worker");
			break;
>>>>>>> 7af59cb477faff636d73ce0b33a5bcec20a62290

		case value > 100:
			setIcon("feast.svg");
			setLabel("Feeds a Family for a week");
			break;

		case value > 10:
			setIcon("meal.svg");
			setLabel("One meal");
			break;

		default:
			setIcon("nothing.svg");
			setLabel("");
			break;
	}
}