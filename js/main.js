// FACT COLLECTING

var factHeading = document.getElementById("fact-heading");
var factContent = document.getElementById("fact-content");

var collected1 = document.getElementById("fact-1");
var collected2 = document.getElementById("fact-2");
var collected3 = document.getElementById("fact-3");
var collected4 = document.getElementById("fact-4");
var collected5 = document.getElementById("fact-5");
var collected6 = document.getElementById("fact-6");
var collected7 = document.getElementById("fact-7");
var collected8 = document.getElementById("fact-8");
var collected9 = document.getElementById("fact-9");
var collected10 = document.getElementById("fact-10");

var fact1clickable = false;
var fact2clickable = false;
var fact3clickable = false;
var fact4clickable = false;
var fact5clickable = false;
var fact6clickable = false;
var fact7clickable = false;
var fact8clickable = false;
var fact9clickable = false;
var fact10clickable = false;


var factHeader1 = "The Colors of the Irish Flag";
var factBody1 = "Green represents the Gaelic tradition of Ireland and hence stands for the Roman Catholics. White symbolizes the aspiration for peace between the Roman Catholic majority and the Protestant minority. Orange represents the followers of William of Orange in Ireland and hence stands for the Protestants";

function fact1print() {
	factHeading.innerHTML = factHeader1;
	factContent.innerHTML = factBody1;
};

var factHeader2 = "The Legend of Snakes";
var factBody2 = "According to legend, the patron saint of Ireland chased the slithering reptiles into the sea after they began attacking him during a 40-day fast he undertook on top of a hill. The banished snakes were thought to be symbolic of the pagan druid priests with whom Patrick might have had a few issues to iron out.";

function fact2print() {
	factHeading.innerHTML = factHeader2;
	factContent.innerHTML = factBody2;
};

var factHeader3 = "Why a Clover?";
var factBody3 = "According to Irish legend, the saint used the three-leafed plant as a metaphor for the Holy Trinity when he was first introducing Christianity to Ireland.";

function fact3print() {
	factHeading.innerHTML = factHeader3;
	factContent.innerHTML = factBody3;
};

var factHeader4 = "An American Celebration?";
var factBody4 = "The world’s first recorded Saint Patrick's Day Parade took place in Boston on March 18, 1737, followed by the New York Parade, which first took place in 1762. ";

function fact4print() {
	factHeading.innerHTML = factHeader4;
	factContent.innerHTML = factBody4;
};

var factHeader5 = "Green vs. Blue";
var factBody5 = "The original color associated with St. Patrick is blue, not green as commonly believed. In several artworks depicting the saint, he is shown wearing blue vestments.";

function fact5print() {
	factHeading.innerHTML = factHeader5;
	factContent.innerHTML = factBody5;
};

var factHeader6 = "";
var factBody6 = "";

function fact6print() {
	factHeading.innerHTML = factHeader6;
	factContent.innerHTML = factBody6;
};

var factHeader7 = "";
var factBody7 = "";

function fact7print() {
	factHeading.innerHTML = factHeader7;
	factContent.innerHTML = factBody7;
};

var factHeader8 = "";
var factBody8 = "";

function fact8print() {
	factHeading.innerHTML = factHeader8;
	factContent.innerHTML = factBody8;
};

var factHeader9 = "";
var factBody9 = "";

function fact9print() {
	factHeading.innerHTML = factHeader9;
	factContent.innerHTML = factBody9;
};

var factHeader10 = "";
var factBody10 = "";

function fact10print() {
	factHeading.innerHTML = factHeader10;
	factContent.innerHTML = factBody10;
};

collected1.addEventListener('click', function () {
	if (fact1clickable == true) {
		fact1print();
	}
});

collected2.addEventListener('click', function () {
	if (fact2clickable == true) {
		fact2print();
	}
});

collected3.addEventListener('click', function () {
	if (fact3clickable == true) {
		fact3print();
	}
});

collected4.addEventListener('click', function () {
	if (fact4clickable == true) {
		fact4print();
	}
});

collected5.addEventListener('click', function () {
	if (fact5clickable == true) {
		fact5print();
	}
});

collected6.addEventListener('click', function () {
	if (fact6clickable == true) {
		fact6print();
	}
});

collected7.addEventListener('click', function () {
	if (fact7clickable == true) {
		fact7print();
	}
});

collected8.addEventListener('click', function () {
	if (fact8clickable == true) {
		fact8print();
	}
});

collected9.addEventListener('click', function () {
	if (fact9clickable == true) {
		fact9print();
	}
});

collected10.addEventListener('click', function () {
	if (fact10clickable == true) {
		fact10print();
	}
});

// FACTBOX OPEN AND CLOSE

var factbox = document.getElementById("factbox");
var factChev = document.getElementById("factbox-chevron");
var chevDown = false;

function factboxOpen() {
	factChev.style.transform = "none";
	chevDown = false;
	factbox.style.transform = "none";
	factbox.style.top = "0";
}

factChev.addEventListener("click", function () {
	if (chevDown == false) {
		factChev.style.transform = "rotate(-135deg)";
		chevDown = true;
		factbox.style.transform = "translate(-828px, 480px)"
	} else {
		factboxOpen();
	}
});


// CLOUDS

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
	clover1.style.left = "205px";
	clover1.style.width = "40px";
});

cloud2.addEventListener("click", function () {
	clover2.style.left = "420px";
	clover2.style.width = "40px";
});

cloud3.addEventListener("click", function () {
	clover3.style.right = "280px";
	clover3.style.width = "40px";
});

cloud4.addEventListener("click", function () {
	clover4.style.right = "80px";
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
		// OPEN FACTBOX
		fact3print();
		fact3clickable = true;
		factboxOpen();
		collected3.className = "fa fa-check-circle-o";
		fact3clickable = true;
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
		// OPEN FACTBOX
		fact4print();
		fact4clickable = true;
		factboxOpen();
		collected4.className = "fa fa-check-circle-o";
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
		// OPEN FACTBOX
		fact5print();
		fact5clickable = true;
		factboxOpen();
		collected5.className = "fa fa-check-circle-o";
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
		// OPEN FACTBOX
		fact6print();
		fact6clickable = true;
		factboxOpen();
		collected6.className = "fa fa-check-circle-o";
	}
});


// FLAG AND SNAKE CLICK EVENTS

var flag = document.getElementById("flag");
var snek = document.getElementById("mr-snek");

flag.addEventListener("click", function () {
	// OPEN FACTBOX
	fact1print();
	fact1clickable = true;
	factboxOpen();
	collected1.className = "fa fa-check-circle-o";
});

snek.addEventListener("click", function () {
	// OPEN FACTBOX
	fact2print();
	fact2clickable = true;
	factboxOpen();
	collected2.className = "fa fa-check-circle-o";
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
		hillL.style.transform = "scale(2)";
		hillR.style.right = "-1000px";
		hillR.style.transform = "scale(2)";
		rainbow.style.right = "270px";
		sun.style.left = "10px";
		moon.style.left = "20px";
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