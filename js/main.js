//$("#sun").click(function () {
//	$("#background").addClass("darken");
//});
//
//$("#moon").click(function () {
//	$("#background").removeClass("darken");
//});

$("#cloud1").click(function () {
	$("#cloud1").css("animation", "cloud-drop .5s");
	$(".cloud1-rain").removeClass("hidden").addClass("cloud1-raindrop");
});

$("#cloud2").click(function () {
	$("#cloud2").css("animation", "cloud-drop .5s");
	$(".cloud2-rain").removeClass("hidden").addClass("cloud2-raindrop");
});

$("#cloud3").click(function () {
	$("#cloud3").css("animation", "cloud-drop .5s");
	$(".cloud3-rain").removeClass("hidden").addClass("cloud3-raindrop");
});

$("#cloud4").click(function () {
	$("#cloud4").css("animation", "cloud-drop .5s");
	$(".cloud4-rain").removeClass("hidden").addClass("cloud4-raindrop");
});



// CLOVERS FROM CLOUD TEARS

var cloud1 = document.getElementById("cloud1");
var clover1 = document.getElementById("clover1");

var cloud2 = document.getElementById("cloud2");
var clover2 = document.getElementById("clover2");

var cloud3 = document.getElementById("cloud3");
var clover3 = document.getElementById("clover3");

var cloud4 = document.getElementById("cloud4");
var clover4 = document.getElementById("clover4");

cloud1.addEventListener("click", function () {
	clover1.style.left = "217px";
	clover1.style.width = "40px";
});

cloud2.addEventListener("click", function () {
	clover2.style.left = "408px";
	clover2.style.width = "40px";
});

cloud3.addEventListener("click", function () {
	clover3.style.right = "268px";
	clover3.style.width = "40px";
});

cloud4.addEventListener("click", function () {
	clover4.style.right = "92px";
	clover4.style.width = "40px";
});


// RAINBOW OPACITY ON CLOVER HOARDING

var rainbow = document.getElementById("rainbow");
var rainbowProgress = 0;
var clover1clicked = false;
var clover2clicked = false;
var clover3clicked = false;
var clover4clicked = false;

clover1.addEventListener("click", function () {
	if (clover1clicked == false) {
		clover1.style.animation = "pulse 0.5s";
		rainbowProgress += 0.25;
		if (isDaytime == true) {
			rainbow.style.opacity = rainbowProgress;
		}
		clover1clicked = true;
		console.log(rainbowProgress);
	}
});

clover2.addEventListener("click", function () {
	if (clover2clicked == false) {
		clover2.style.animation = "pulse 0.5s";
		rainbowProgress += 0.25;
		if (isDaytime == true) {
			rainbow.style.opacity = rainbowProgress;
		}
		clover2clicked = true;
		console.log(rainbowProgress);
	}
});

clover3.addEventListener("click", function () {
	if (clover3clicked == false) {
		clover3.style.animation = "pulse 0.5s";
		rainbowProgress += 0.25;
		if (isDaytime == true) {
			rainbow.style.opacity = rainbowProgress;
		}
		clover3clicked = true;
		console.log(rainbowProgress);
	}
});

clover4.addEventListener("click", function () {
	if (clover4clicked == false) {
		clover4.style.animation = "pulse 0.5s";
		rainbowProgress += 0.25;
		if (isDaytime == true) {
			rainbow.style.opacity = rainbowProgress;
		}
		clover4clicked = true;
		console.log(rainbowProgress);
	}
});

// MOVE MOUNTAINS

var bgMountL = document.getElementById("bg-mountain-1");
var bgMountM = document.getElementById("bg-mountain-2");
var bgMountR = document.getElementById("bg-mountain-3");
var hillL = document.getElementById("hill-left-container");
var hillR = document.getElementById("hill-right-container");

rainbow.addEventListener("click", function () {
	if (rainbowProgress == 1) {
		bgMountL.style.left = "-1000px";
		bgMountM.style.left = "-450px";
		bgMountR.style.right = "-300px";
		hillL.style.left = "-1000px";
		hillR.style.right = "-1000px";
		rainbow.style.right = "270px";
		sun.style.left = "10px";
		cloud1.style.left = "70px"
		cloud2.style.left = "320px"
		cloud3.style.right = "185px"
		cloud4.style.right = "10px"
	}
});

// CHANGE BETWEEN DAY + NIGHT

var background = document.getElementById("background");
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");
var isDaytime = true;

sun.addEventListener("click", function () {
	sun.style.top = "1000px";
	moon.style.top = "40px";
	background.style.filter = "brightness(0.3)";
	rainbow.style.opacity = "0";
	rainbow.style.pointerEvents = "none";
	isDaytime = false;
});

moon.addEventListener("click", function () {
	sun.style.top = "20px";
	moon.style.top = "1000px";
	background.style.filter = "brightness(1)";
	rainbow.style.opacity = rainbowProgress;
	rainbow.style.pointerEvents = "all";
	isDaytime = true;
});
