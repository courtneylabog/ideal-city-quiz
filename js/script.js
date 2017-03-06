// Global Scope Variables
var counter = 0;
var userInput;
var winner = userInput;
var nextCard;
var isActive;
const rand = Math.random() < 0.5;

// Cities
var groupA = 0;
var groupB = 0;
var groupC = 0;
var groupD = 0;
var groupE = 0;

//FUNCTIONS

// Initialize App.
// Set the first card to active (.active);
// hide appropriate elements.
function initialize(){
	isActive = $('.card1').addClass('active');
	$('.start').hide();
	$('.tagline').hide();
	$('.svg').hide();
	$('h1').addClass('mini');
	$('svg').removeClass('globeSVG');
	$('svg').addClass('globeMini');
};

// Validate User Answer
// Set userInput to any active classes checked input value.
// Compare userInput for value. Validate to continue.
// Once answer is valid,call pointDistribution function.
function validatesUserInput(){
	userInput = $('div.active input:checked').val();

	if(userInput === undefined){
		$('.warning').show();
	}else if(userInput != undefined){
		$('.warning').hide();
		counter++;
		nextCard = $('.card');
		$('.active').removeClass('active');
		nextCard.eq(counter).addClass('active');
		pointDistributor();
	};
	// Show submit button when array hits length.
	if(counter >= nextCard.length){
		$('.submit').show();
		$('svg').removeClass('bounce');
		$('svg').removeClass('globeMini');
       	$('svg').removeClass('animate');
	   	$('svg').addClass('globeSVG');
	}
};

// Compares user input and assigns corresponding value to appropriate group.
function pointDistributor(){
	
	if(userInput === "2"){
		groupA ++;
	}
	else if(userInput === "4"){
		groupB ++;
	}
	else if(userInput === "6"){
		groupC ++;
	}
	else if(userInput === "8"){
		groupD ++;
	}
	else if(userInput === "10"){
		groupE ++;
	}
	else if(userInput === "1"){
		groupA ++;
		groupB ++;
		groupC ++;
		groupD ++;
		groupE ++;
	}
};

// 
function calculateWinningCity(){
	if(groupA > groupB &&  groupA > groupC && groupA > groupD && groupA > groupE){
		winner = groupA;
	}else if(groupB > groupA &&  groupB > groupC && groupB > groupD && groupB > groupE){
		winner = groupB;
	}else if(groupC > groupA &&  groupC > groupB && groupC > groupD && groupC > groupE){
		winner = groupC;
	}else if(groupD > groupA &&  groupD > groupB && groupD > groupC && groupD > groupE){
		winner = groupD;
	}else if(groupE > groupA && groupE > groupB && groupE > groupC && groupE > groupD){
		winner = groupE;
	}else{
        winner = groupA;
    }
	
	if(winner === groupA && rand === true){
		winner = "Toronto";
	}
	if(winner === groupA && rand === false){
		winner = "NewYork";
	};
	if(winner === groupB && rand === true){
		winner = "Tokyo";
	}
	if(winner === groupB && rand === false){
		winner = "LA";
	};
	if(winner === groupC && rand === true){
		winner = "Dubai";
	}
	if(winner === groupC && rand === false){
		 winner = "Shanghai";
	};
	if(winner === groupD && rand === true){
		winner = "London";
	}
	if(winner === groupD && rand === false){
		winner = "Paris";
	};
	if(winner === groupE && rand === true){
		winner = "Rome";
	}
	if(winner === groupE && rand === false){
		winner = "Athens";
	}
};

function displayResultCard(){
	// Hid Submit
	$('.submit').hide();
	$('header').hide();
	$('.cityWrapper').removeClass('unanswered');
	$('.cityWrapper').addClass('active');
	$('.replay').css(("visibility", "visible"));
    $('.answerResult').html("<h1>Your city is " + winner + "</h1>");
	if(winner === "Toronto"){
		$(".toronto").removeClass("unanswered");
		$(".toronto").addClass("active");
	}
	if(winner === "NewYork"){
		$(".nyc").removeClass("unanswered");
		$(".nyc").addClass("active");
	}
	if(winner==="LA"){
		$(".la").removeClass("unanswered");
		$(".la").addClass("active");
	}
	if(winner === "Tokyo"){
        $('.tokyo').removeClass('unanswered');
        $('.tokyo').addClass('active');
    }
	if(winner==="Dubai"){
		$(".dubai").removeClass("unanswered");
		$(".dubai").addClass("active");
	}
	if(winner==="Shanghai"){
		$(".shanghai").removeClass("unanswered");
		$(".shanghai").addClass("active");
	}
		if(winner==="London"){
		$(".london").removeClass("unanswered");
		$(".london").addClass("active");
	}
	if(winner==="Paris"){
		$(".paris").removeClass("unanswered");
		$(".paris").addClass("active");
	}
	if(winner==="Rome"){
		$(".rome").removeClass("unanswered");
		$(".rome").addClass("active");
	}
	if(winner==="Athens"){
		$(".athens").removeClass("unanswered");
		$(".athens").addClass("active");
	}
	
};

function reset(){
	location.reload();
};


$('#start').on('click', function(){
	initialize();
	$('.warning').hide();
	// $('.replay').hide();
});

$('button.next').on('click', function(e){
	e.preventDefault();
	validatesUserInput();	

});

$('button.replay').on('click', function(e){
	e.preventDefault();
	reset();
});


$('form').on('submit', function(e){
	e.preventDefault();
	calculateWinningCity();
	displayResultCard();
});










