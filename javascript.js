
//==================== Todays Date =========================

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

todaySchedule = monthNames[mm - 1] + " " + dd + ", " + yyyy

$("#date").text(todaySchedule);      // Append the new elements 

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

// $("#yesterday").click(function() {
//   dd--;
// });

// $("#tomorrow").click(function() {
//   dd++;
// });

today = yyyy + mm + dd;
//====================== Get Request for Todays Games ============
var gameUrl = "https://api.mysportsfeeds.com/v2.0/pull/nba/current/date/" + today + "/games.json"

var api = config.MY_KEY

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

    for (i = 0; i < response.games.length; i++) {

      var dateFromAPI = response.games[i].schedule.startTime;
      var localDate = new Date(dateFromAPI);
      var localDateString = localDate.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })

      var localTimeString = localDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      })

      var hTeam = response.games[i].schedule.homeTeam.abbreviation;
      var aTeam = response.games[i].schedule.awayTeam.abbreviation;
      var aScore = response.games[i].score.awayScoreTotal;
      var hScore = response.games[i].score.homeScoreTotal;
      var status = response.games[i].schedule.playedStatus;
      var quarter = response.games[i].score.currentQuarter

      function myTime(time) {
        var hr = ~~(time / 3600);
        var min = ~~((time % 3600) / 60);
        var sec = time % 60;
        var sec_min = "";
        if (hr > 0) {
           sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
        }
        sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
        sec_min += "" + sec;
        return sec_min;
      }
      var timeRemaining = (myTime(response.games[i].score.currentQuarterSecondsRemaining));
      
      if (timeRemaining== "0:00") {
        timeRemaining = ""
      } else {
        timeRemaining = timeRemaining + " Q"
      }

      if (quarter==null) {
        quarter = ""
      }

      if (status == "COMPLETED_PENDING_REVIEW" || status == "COMPLETED") {
        status = "FINAL";
      }

      if (status == "UNPLAYED") {
        status = "";
      }

      if (aScore == null) {
        aScore = 0;
        hScore = 0;
      }
  
      var htmlString = '<div class="card bg-white text-dark w-20 border border-dark rounded m-1 mb-1" style="width: 235px; height: 145px;">';
      htmlString += '<div class="row">';
      htmlString += '<p class="col-4 ml-2 text-left" style=" font-size: 15px;"><small>' + localTimeString + '</small></p>';
      htmlString += '<p class="text-danger text-center col "style=" font-size: 15px;"><small>' + timeRemaining  + quarter+ '</small></p>';
      htmlString += '<p class="text-danger col mr-2 text-right"><small>' + status + '</small></p>';
      htmlString += '</div>';
      htmlString += '<div class="row">';
      htmlString += '<p class="  ml-2 col"><img src="images/logos/'+ aTeam + '.png" height="45px" width="45px"></p>'
      htmlString += '<p class=" col " style="font-family: Kanit, sans-serif;">' + aTeam + '</p>';
      htmlString += '<p class=" col "></p>';
      htmlString += '<p class=" col mr-2 text-right" style="font-family: Kanit, sans-serif;"><strong>' + aScore + '</strong></p>';
      htmlString += '</div>';
      htmlString += '<div class="row">';
      htmlString += '<p class=" ml-2 mb-2 col"><img src="images/logos/' + hTeam+ '.png" height="45px" width="45px"></p>'
      htmlString += '<p class=" col " style="font-family: Kanit, sans-serif;">' + hTeam + '</p>';
      htmlString += '<p class=" col "></p>';
      htmlString += '<p class=" col mr-2 text-right" style="font-family: Kanit, sans-serif;"><strong>' + hScore + '</strong></p>';
      htmlString += '</div>';
      htmlString += '<div class="row">';
      // htmlString += '<p class="ml-2 col text-left"><small>' + timeRemaining  + quarter+ '</small></p>';
      // htmlString += '<p class="text-danger d-inline m-1 col mr-2  text-right"><small>' + status + '</small></p>';
      htmlString += '</div>';
      htmlString += '</div>';
      htmlString += '</div>';
      htmlString += '</div>';
      $("#schedule-holder").append(htmlString);      // Append the new elements 
    }


  });



