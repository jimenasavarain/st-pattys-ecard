// FACTBOX SETUP

var factbox = document.getElementById("factbox");
var factChev = document.getElementById("factbox-chevron");
var factContentContainer = document.getElementById("fact-content-container");
var minimized = false;

var hintText = document.getElementById("hint");

function factboxOpen() {
	factChev.style.transform = "none";
	minimized = false;
	factbox.style.transform = "none";
	factbox.style.top = "130px";
	factbox.style.left = "180px";
	factbox.style.width = "700px";
	factbox.style.opacity = "1";
	factContentContainer.style.transition = "1s";
	factContentContainer.style.opacity = "1";
}

function factboxClose() {
	factChev.style.transform = "rotate(-180deg)";
	minimized = true;
	factbox.style.width = "310px";
	factbox.style.top = "610px";
	factbox.style.left = "0";
	factbox.style.opacity = "0.8";
	factContentContainer.style.transition = "none";
	factContentContainer.style.opacity = "0";
}

factContentContainer.addEventListener("click", function () {
	if (minimized === false) {
		factboxClose();
	} else {
		factboxOpen();
	}
});

factChev.addEventListener("click", function () {
	if (minimized === false) {
		factboxClose();
	} else {
		factboxOpen();
	}
});




// FACT COLLECTING

var factHeading = document.getElementById("fact-heading"),
	factContent = document.getElementById("fact-content");

var factIcon1 = document.getElementById("fact-1"),
	factIcon2 = document.getElementById("fact-2"),
	factIcon3 = document.getElementById("fact-3"),
	factIcon4 = document.getElementById("fact-4"),
	factIcon5 = document.getElementById("fact-5"),
	factIcon6 = document.getElementById("fact-6"),
	factIcon7 = document.getElementById("fact-7"),
	factIcon8 = document.getElementById("fact-8"),
	factIcon9 = document.getElementById("fact-9"),
	factIcon10 = document.getElementById("fact-10");

var fact1clickable = false,
	fact2clickable = false,
	fact3clickable = false,
	fact4clickable = false,
	fact5clickable = false,
	fact6clickable = false,
	fact7clickable = false,
	fact8clickable = false,
	fact9clickable = false,
	fact10clickable = false;


var factHeader1 = "The Colors of the Irish Flag",
	factBody1 = "Green represents the Gaelic tradition of Ireland and hence stands for the Roman Catholics. White symbolizes the aspiration for peace between the Roman Catholic majority and the Protestant minority. Orange represents the followers of William of Orange in Ireland and hence stands for the Protestants";

function fact1print() {
	factHeading.innerHTML = factHeader1;
	factContent.innerHTML = factBody1;
}

var factHeader2 = "The Legend of Snakes",
	factBody2 = "Legends credit Patrick with banishing snakes from Ireland, though all evidence suggests that post-glacial Ireland never had snakes. The banished snakes were thought to be symbolic of the pagan druid priests with whom Patrick might have had a few issues to iron out.";

function fact2print() {
	factHeading.innerHTML = factHeader2;
	factContent.innerHTML = factBody2;
}

var factHeader3 = "Why a Clover?",
	factBody3 = "The shamrock as symbol of Ireland and St. Patrick's Day is partly due to the natural abundance of clover plants in the country, but largely due to its strong association with Christianity. Legend says that St. Patrick used the shamrock to visually illustrate the concept of the Trinity (the Father, the Son, and the Holy Spirit) when trying to convert polytheistic pagans to Christianity.";

function fact3print() {
	factHeading.innerHTML = factHeader3;
	factContent.innerHTML = factBody3;
}

var factHeader4 = "An Irish Holiday, but an American Parade",
	factBody4 = "The world’s first recorded Saint Patrick's Day Parade took place in Boston on March 18, 1737, followed by the New York Parade, which first took place in 1762. ";

function fact4print() {
	factHeading.innerHTML = factHeader4;
	factContent.innerHTML = factBody4;
}

var factHeader5 = "The Real Color of St. Patrick",
	factBody5 = "The original color associated with St. Patrick is blue, not green as commonly believed. In several artworks depicting the saint, he is shown wearing blue vestments.";

function fact5print() {
	factHeading.innerHTML = factHeader5;
	factContent.innerHTML = factBody5;
}

var factHeader6 = "St. Patrick's Day Feast",
	factBody6 = "Whether it's a Shamrock Shakes, Irish Stew, Corned Beef and Cabbage, or Irish Soda Bread, your St. Patrick's Day feast can feature the traditional or be a variation on green: avocado dip, green deviled eggs, broccoli.  Armed with green food coloring, the sky's the limit on creating a festive St. Patrick's Day feast that you can enjoy with your family and friends.";

function fact6print() {
	factHeading.innerHTML = factHeader6;
	factContent.innerHTML = factBody6;
}

var factHeader7 = "Follow the Rainbow",
	factBody7 = "In Irish mythology, there is a pot of gold is hidden at the end of every rainbow. This place is impossible to reach, because the rainbow is an optical effect which depends on the location of the viewer.";

function fact7print() {
	factHeading.innerHTML = factHeader7;
	factContent.innerHTML = factBody7;
}

var factHeader8 = "Green River, Green Beer",
	factBody8 = "Green liquids are a St. Patty's tradition. Every year since 1962, the Chicago River has had 25 pounds of green dye poured in. This spreads quickly and turns the river bright green for a whole 5 hours!<br/><br/>The tradition of green beer is assumed to have started with the Irish tradition of dropping a clover in one's drink for good luck.";

function fact8print() {
	factHeading.innerHTML = factHeader8;
	factContent.innerHTML = factBody8;
}

var factHeader9 = "Wear Green or Get Pinched",
	factBody9 = "On St. Patrick's Day, you're supposed to wear green to remember and honor Ireland. If you're not wearing green, you get pinched as a way to say shame on you!";

function fact9print() {
	factHeading.innerHTML = factHeader9;
	factContent.innerHTML = factBody9;
}

var factHeader10 = "You Caught the Henrechaun!",
	factBody10 = "Leprechauns usually take the form of old men who enjoy partaking in mischief. Their trade is that of a cobbler or shoemaker. They are said to be very rich, having many treasure crocks buried during war-time. According to legend, if anyone keeps an eye fixed upon one, he cannot escape, but the moment the gaze is withdrawn, he vanishes.";

function fact10print() {
	factHeading.innerHTML = factHeader10;
	factContent.innerHTML = factBody10;
}

factIcon1.addEventListener('click', function () {
	if (fact1clickable === true) {
		fact1print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon2.addEventListener('click', function () {
	if (fact2clickable === true) {
		fact2print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon3.addEventListener('click', function () {
	if (fact3clickable === true) {
		fact3print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon4.addEventListener('click', function () {
	if (fact4clickable === true) {
		fact4print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon5.addEventListener('click', function () {
	if (fact5clickable === true) {
		fact5print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon6.addEventListener('click', function () {
	if (fact6clickable === true) {
		fact6print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon7.addEventListener('click', function () {
	if (fact7clickable === true) {
		fact7print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon8.addEventListener('click', function () {
	if (fact8clickable === true) {
		fact8print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon9.addEventListener('click', function () {
	if (fact9clickable === true) {
		fact9print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

factIcon10.addEventListener('click', function () {
	if (fact10clickable === true) {
		fact10print();
		if (minimized === true) {
			factboxOpen();
		}
	}
});

function factUnlock1() {
	fact1print();
	fact1clickable = true;
	$("#fact-1").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon1.addEventListener("animationend", function () {
		$("#fact-1").removeClass("icon-flash");
	});
}

function factUnlock2() {
	fact2print();
	fact2clickable = true;
	$("#fact-2").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon2.addEventListener("animationend", function () {
		$("#fact-2").removeClass("icon-flash");
	});
}

function factUnlock3() {
	fact3print();
	fact3clickable = true;
	$("#fact-3").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon3.addEventListener("animationend", function () {
		$("#fact-3").removeClass("icon-flash");
	});
}

function factUnlock4() {
	fact4print();
	fact4clickable = true;
	$("#fact-4").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon4.addEventListener("animationend", function () {
		$("#fact-4").removeClass("icon-flash");
	});
}

function factUnlock5() {
	fact5print();
	fact5clickable = true;
	$("#fact-5").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon5.addEventListener("animationend", function () {
		$("#fact-5").removeClass("icon-flash");
	});
}

function factUnlock6() {
	fact6print();
	fact6clickable = true;
	$("#fact-6").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon6.addEventListener("animationend", function () {
		$("#fact-6").removeClass("icon-flash");
	});
}

function factUnlock7() {
	fact7print();
	fact7clickable = true;
	$("#fact-7").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon7.addEventListener("animationend", function () {
		$("#fact-7").removeClass("icon-flash");
	});
}

function factUnlock8() {
	fact8print();
	fact8clickable = true;
	$("#fact-8").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon8.addEventListener("animationend", function () {
		$("#fact-8").removeClass("icon-flash");
	});
}

function factUnlock9() {
	fact9print();
	fact9clickable = true;
	$("#fact-9").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon9.addEventListener("animationend", function () {
		$("#fact-9").removeClass("icon-flash");
	});
}

function factUnlock10() {
	fact10print();
	fact10clickable = true;
	$("#fact-10").removeClass("fa-circle-o").addClass("fa-check-circle-o icon-flash");
	factIcon10.addEventListener("animationend", function () {
		$("#fact-10").removeClass("icon-flash");
	});
}


// FLAG AND SNAKE FACT UNLOCKS

var flag = document.getElementById("flag"),
	snek = document.getElementById("mr-snek");

var flagClicked = false,
	snekClicked = false;

flag.addEventListener("click", function () {
	factUnlock1();
	if (flagClicked === false) {
		rainbowProgress();
		flagClicked = true;
	}
});

snek.addEventListener("click", function () {
	factUnlock2();
	if (snekClicked === false) {
		rainbowProgress();
		snekClicked = true;
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

var cloud1 = document.getElementById("cloud1"),
	cloud2 = document.getElementById("cloud2"),
	cloud3 = document.getElementById("cloud3"),
	cloud4 = document.getElementById("cloud4");

var clover1 = document.getElementById("clover1"),
	clover2 = document.getElementById("clover2"),
	clover3 = document.getElementById("clover3"),
	clover4 = document.getElementById("clover4");

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
var rainbowProg = 0;

function rainbowProgress() {
	rainbowProg += 0.15;
	if (isDaytime == true) {
		rainbow.style.opacity = rainbowProg;
	}
	if (rainbowProg == .9) {
		rainbow.style.filter = "none";
	}
}

var clover1clicked = false,
	clover2clicked = false,
	clover3clicked = false,
	clover4clicked = false;

clover1.addEventListener("click", function () {
	if (clover1clicked === false) {
		clover1.style.animation = "pulse 0.5s";
		rainbowProgress();
		clover1clicked = true;
		factUnlock3();
	}
});

clover2.addEventListener("click", function () {
	if (clover2clicked === false) {
		clover2.style.animation = "pulse 0.5s";
		rainbowProgress();
		clover2clicked = true;
		factUnlock4();
	}
});

clover3.addEventListener("click", function () {
	if (clover3clicked === false) {
		clover3.style.animation = "pulse 0.5s";
		rainbowProgress();
		clover3clicked = true;
		factUnlock5();
	}
});

clover4.addEventListener("click", function () {
	if (clover4clicked === false) {
		clover4.style.animation = "pulse 0.5s";
		rainbowProgress();
		clover4clicked = true;
		factUnlock6();
	}
});


// MOVE MOUNTAINS

var bgMountL = document.getElementById("bg-mountain-1");
var bgMountM = document.getElementById("bg-mountain-2");
var bgMountR = document.getElementById("bg-mountain-3");
var hillL = document.getElementById("hill-left-container");
var hillR = document.getElementById("hill-right-container");
var meadow = document.getElementById("meadow-container");

var rainbowFactUpdate = false;

rainbow.addEventListener("click", function () {
	if (rainbowProg === .9) {
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
		cloud1.style.left = "70px";
		cloud2.style.left = "320px";
		cloud3.style.right = "185px";
		cloud4.style.right = "10px";
		meadow.style.bottom = "-5px";
		hintText.innerHTML = "I wonder what that <span class=\"orange-text\">waterfall</span> might be hiding...";

		if (rainbowFactUpdate === false) {
			setTimeout(function () {
				factUnlock7();
				fact7print();
				factboxOpen();
			}, 3000);
			rainbowFactUpdate = true;
		}


	}

});


// GREEN BEER

var waterfall = document.getElementById("waterfall");
var beer = document.getElementById("beer");
var beerFill = document.getElementById("beer-bg");


var waterIsGreen = false;
var beerIsGreen = false;
var gotBeerFact = false;

waterfall.addEventListener("click", function () {
	if (waterIsGreen === false) {
		waterfall.style.filter = "hue-rotate(-100deg)";
		waterIsGreen = true;
	} else {
		beer.style.top = "-30px";
	}
});

beer.addEventListener("click", function () {
	if (beerIsGreen === false) {
		beerFill.style.fill = "#318C4D";
		beerIsGreen = true;
	} else if (beerIsGreen === true && gotBeerFact === false) {
		factUnlock8();
		gotBeerFact = true;
		beer.style.opacity = "0";
		hintText.innerHTML = "Who's gold is this? Maybe we can take <span class=\"orange-text\">a few</span> before they get back...";
	}
});


// GET PAID, SEE A HENRECHAUN

var goldCont = document.getElementById("gold-container");
var goldPot = document.getElementById("gold");

var doubloon1 = document.getElementById("gold-piece-1"),
	doubloon2 = document.getElementById("gold-piece-2"),
	doubloon3 = document.getElementById("gold-piece-3");

var gold1Clicked = false,
	gold2Clicked = false,
	gold3Clicked = false;

var goldVisible = 0;
var goldClicked = 0;

var gotGoldFact = false;

goldPot.addEventListener("click", function (e) {
	e.preventDefault;
	goldCont.classList.remove("gold-bounce");
	void goldCont.offsetWidth;
	goldCont.classList.add("gold-bounce");
});

goldPot.addEventListener("click", function () {
	if (goldVisible === 0) {
		doubloon1.style.bottom = "250px";
		goldVisible++
	} else if (goldVisible === 1) {
		doubloon2.style.bottom = "225px";
		doubloon2.style.right = "400px";
		goldVisible++
	} else if (goldVisible === 2) {
		doubloon3.style.bottom = "225px";
		doubloon3.style.right = "250px";
		goldVisible++
	}
});

var henrechaun = document.getElementById("henrechaun"),
	henrechaunClickable = false;

function helloHenrechaun() {
	henrechaun.style.opacity = "1";
	henrechaunClickable = true;
}

doubloon1.addEventListener("click", function () {
	if (gotGoldFact === false) {
		factUnlock9();
		gotGoldFact = true;
	}
	if (goldVisible == 3) {
		if (gold1Clicked == false) {
			goldClicked++
			gold1Clicked = true;
		}
		if (goldClicked == 3) {
			setTimeout(function () {
				helloHenrechaun();
			}, 1000);
		}
		doubloon1.style.opacity = "0";
	}
});

doubloon2.addEventListener("click", function () {
	if (gotGoldFact === false) {
		factUnlock9();
		gotGoldFact = true;
	}
	if (goldVisible == 3) {
		if (gold2Clicked == false) {
			goldClicked++
			gold2Clicked = true;
		}
		if (goldClicked == 3) {
			setTimeout(function () {
				helloHenrechaun();
			}, 1000);
		}
		doubloon2.style.opacity = "0";
	}
});

doubloon3.addEventListener("click", function () {
	if (gotGoldFact === false) {
		factUnlock9();
		gotGoldFact = true;
	}

	if (goldVisible === 3) {
		if (gold3Clicked === false) {
			goldClicked++
			gold3Clicked = true;
		}
		if (goldClicked === 3) {
			setTimeout(function () {
				helloHenrechaun();
			}, 1000);
		}
		doubloon3.style.opacity = "0";
	}
});

// THE HUNT OF THE HENRECHAUN

var henrechaunClicked = 0;

function henrechaunPoof() {
	henrechaun.style.opacity = "0";
	setTimeout(function () {
		henrechaun.style.opacity = "1";
	}, 1000);
}

function henrechaunMove1() {
	setTimeout(function () {
		henrechaun.style.bottom = "309px";
		henrechaun.style.left = "173px";
		henrechaun.style.width = "75px";
	}, 500)
}

function henrechaunMove2() {
	setTimeout(function () {
		henrechaun.style.bottom = "260px";
		henrechaun.style.left = "985px";
		henrechaun.style.width = "30px";
	}, 500)
}

function henrechaunMove3() {
	setTimeout(function () {
		henrechaun.style.bottom = "88px";
		henrechaun.style.left = "400px";
		henrechaun.style.width = "170px";
	}, 500)
}

henrechaun.addEventListener("click", function () {
	if (henrechaunClicked === 0) {
		henrechaunPoof();
		henrechaunMove1();
		henrechaunClicked++
	} else if (henrechaunClicked === 1) {
		henrechaunPoof();
		henrechaunMove2();
		henrechaunClicked++
	} else if (henrechaunClicked === 2) {
		henrechaunPoof();
		henrechaunMove3();
		henrechaunClicked++
	} else if (henrechaunClicked === 3) {
		factUnlock10();
		fact10print();
		factboxOpen();
	} else {}
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
	henrechaun.style.opacity = "0";
	henrechaun.style.pointerEvents = "none"
	isDaytime = false;
});

moon.addEventListener("click", function () {
	sun.style.top = "20px";
	moon.style.top = "1000px";
	background.style.filter = "brightness(1)";
	rainbow.style.opacity = rainbowProg;
	rainbow.style.pointerEvents = "auto";
	henrechaun.style.opacity = "1";
	henrechaun.style.pointerEvents = "auto"
	isDaytime = true;
});