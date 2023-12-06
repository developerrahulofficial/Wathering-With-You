//-------SETUP


// Define the values for firstPerson, firstLocation, secondPerson, and secondLocation
var firstPerson = 'Rahul'; // Replace with the actual name
var firstLocation = 'Delhi, India'; // Replace with the actual location

var secondPerson = 'Vanshika'; // Replace with the actual name
var secondLocation = 'Chandigarh, India';

//name, location, number
var oneLoc = new Location(firstPerson, firstLocation, 'one'); //first person's name as string, location (City, Country) as string

//name, location, number
var twoLoc = new Location(secondPerson, secondLocation, 'two'); //first person's name as string, location (City, Country) as string

//last day of contact (year, month, day)
var timeLeaveStamp = new Date(2020, 01, 01);

//first day of renewed contact (year, month, day)
var timeMeetStamp = new Date(2024, 11, 25);

//earliest and latest time appropirate for call
var earliestCall = 8;
var latestCall = 2;

//-------LOGIC

//location data
oneLoc.loadData();
twoLoc.loadData();

//time separation data
var today = new Date();

var totalTime = dateDiff('d', timeLeaveStamp, timeMeetStamp);
var timeApart = dateDiff('d', timeLeaveStamp, today);
var timeTillMeet = dateDiff('d', today, timeMeetStamp) + 1;
if (timeTillMeet <= 0) timeTillMeet = 0;
if (totalTime < timeApart) timeApart = totalTime;
var heartRate = 1.084;
var heartbeats;

//fill header
var pageTitle = document.getElementById('page-title');
pageTitle.innerHTML = oneLoc.name + ' + ' + twoLoc.name;

//fill dates
var separate = document.getElementById('time-separate');
separate.innerHTML = 'Time apart: ' + timeApart + ' days.';

var together = document.getElementById('time-till-meet');
together.innerHTML = 'Time until meet: ' + timeTillMeet + ' days.';

//move progress bar
var bar = document.getElementById('heartbeats');
bar.style.width = (timeApart / totalTime) * 100 + '%';

//get time difference between two dates in custom format
function dateDiff(datetype, fromdate, todate) {
	datetype = datetype.toLowerCase();
	var diff = todate - fromdate;
	var divideBy = {w:604800000,
					d:86400000,
					h:3600000,
					m:60000,
					s:1000};
	return Math.floor(diff/divideBy[datetype]);
}

//update heartbeat count
var beats = document.getElementById('heartbeats-left');

setInterval(function() {
	today = new Date();
	heartbeats = Math.floor(dateDiff('s', today, timeMeetStamp) * heartRate);
	if (heartbeats < 1) heartbeats = 0;
	beats.innerHTML = heartbeats + '<br> heartbeats <br> away';
}, 500);