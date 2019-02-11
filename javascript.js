
//==================== Todays Date =========================

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = yyyy  + mm  + dd;

//====================== Get Request for Todays Games ============
var gameUrl = "https://api.mysportsfeeds.com/v2.0/pull/nba/2018-2019/date/" + today + "/games.json"

var api = config.MY_KEY;

$.ajax
({
  type: "GET",
  url: gameUrl,
  dataType: 'json',
  headers: {
    "Authorization": "Basic " + btoa(api + ":" + "MYSPORTSFEEDS")
  },

})
.then(function (response) {
    console.log(response); 
    console.log(response.games[0].schedule);

    console.log(response.games[0].schedule.homeTeam.abbreviation);
    console.log(response.games[0].schedule.awayTeam.abbreviation);

    var dateFromAPI = response.games[3].schedule.startTime;

    var localDate = new Date(dateFromAPI);
    var localDateString = localDate.toLocaleDateString(undefined, {  
        day : 'numeric',
        month : 'short',
        year : 'numeric'
    })
   
    var localTimeString = localDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    })
    console.log(localTimeString);

    var hTeam = response.games[3].schedule.homeTeam.abbreviation;
    var aTeam = response.games[3].schedule.awayTeam.abbreviation;
    var aScore = response.games[3].score.awayScoreTotal;
    var hScore = response.games[3].score.homeScoreTotal;


    $("#start0").text(localTimeString + "    " + response.games[3].schedule.playedStatus);
    $("#away-team0").text(aTeam + "     " + aScore);
    $("#home-team0").text(hTeam + "     " + hScore);

})




