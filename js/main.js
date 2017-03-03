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

// CHANGE BETWEEN DAY + NIGHT

var background = document.getElementById("background");
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

sun.addEventListener("click", function () {
	sun.style.top = "1000px";
	moon.style.top = "40px";
	background.style.filter = "brightness(0.3)";
});

moon.addEventListener("click", function () {
	sun.style.top = "20px";
	moon.style.top = "1000px";
	background.style.filter = "brightness(1)";
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

clover1.addEventListener("click", function (){
	rainbowProgress += 0.25;
	rainbow.style.opacity = rainbowProgress;
});

clover2.addEventListener("click", function (){
	rainbowProgress += 0.25;
	rainbow.style.opacity = rainbowProgress;
});

clover3.addEventListener("click", function (){
	rainbowProgress += 0.25;
	rainbow.style.opacity = rainbowProgress;
});

clover4.addEventListener("click", function (){
	rainbowProgress += 0.25;
	rainbow.style.opacity = rainbowProgress;
});