
//==================== Todays Date =========================

var today = new Date();

function schedule(today) {

//====================== Get Request for Todays Games ============
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


today = yyyy + mm + dd;
today = parseInt(today) 



var gameUrl = "https://api.mysportsfeeds.com/v2.0/pull/nba/current/date/" + today + "/games.json"
var teamsUrl = "https://api.mysportsfeeds.com/v2.0/pull/nba/current/team_stats_totals.json"


var api = config.MY_KEY




$.ajax
  ({
    type: "GET",
    url: teamsUrl,
    dataType: 'json',
    headers: {
      "Authorization": "Basic " + btoa(api + ":" + "MYSPORTSFEEDS")
    },

  })
  .then(function (teamStats) {
    console.log(teamStats)



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

          if (timeRemaining == "0:00") {
            timeRemaining = ""
          } else if (timeRemaining == "0:00" && quarter != null) {
            timeRemaining = "End of"
          } else {
            timeRemaining = timeRemaining + " Q"
          }

          if (quarter == null) {
            quarter = ""
          }

          if (status == "COMPLETED_PENDING_REVIEW" || status == "COMPLETED") {
            status = "FINAL";
          }

          if (status == "UNPLAYED") {
            status = " ";
          }

          if (aScore == null) {
            aScore = 0;
            hScore = 0;
          }

          var htmlString = '<div class="card  text-dark w-20 border border-dark rounded m-1 mb-1" style="width: 229px; height: 145px; background-color: oldlace;" id="'+aTeam + hTeam+'">';
          htmlString += '<div class="row justify-content-center"">';
          htmlString += '<table class="table .table-responsive table-borderless table-sm border-white" style="width: 200px; height: 120px;">';
          htmlString += '<thead class="table-borderless">';
          htmlString += '<tr>';
          htmlString += '<th class="table-borderless text-left" style=" font-size: 15px;"><small>' + localTimeString + '</small></th>';
          htmlString += '<th > </th>';
          htmlString += '<th class="table-borderless text-danger text-center " style=" font-size: 15px;"><small>' + timeRemaining + quarter + '</small></th>';
          htmlString += '<th class="table-borderless text-danger  text-right" style=" font-size: 15px;"><small>' + status + '</small></th>';
          htmlString += '</tr>';
          htmlString += '</thead>';
          htmlString += '<tbody>';
          htmlString += '<tr>';
          htmlString += '<th scope="row" class="table-borderless "><img src="images/logos/' + aTeam + '.png" height="45px" width="45px">' + " " + aTeam + '</th>'
          htmlString += '<td class="table-borderless align-middle text-left text-muted" id="'+aTeam+'record" style=" font-size: 10px;"> </td>';
          htmlString += '<td class="table-borderless align-middle "> </td>';
          htmlString += '<td class="table-borderless  align-middle text-right " style=" font-size: 15px;"><strong>' + aScore + '</strong></td>';
          htmlString += '</tr>';
          htmlString += '<tr>';
          htmlString += '<th scope="row" class=""><img src="images/logos/' + hTeam + '.png" height="45px" width="45px">' + " " + hTeam + '</th>'
          htmlString += '<td class="align-middle text-left text-muted" id="'+hTeam+'record" style=" font-size: 10px;"> </td>';
          htmlString += '<td class="align-middle "> </td>';
          htmlString += '<td class=" text-right align-middle" style=" font-size: 15px;"><strong>' + hScore + '</strong></td>';
          htmlString += '</tr>';
          htmlString += '</div>';
          htmlString += '</div>';
          htmlString += '</div>';
          htmlString += '</div>';
          htmlString += '</div>';
          $("#schedule-holder").append(htmlString);      // Append the new elements 


  

          for (j = 0; j < teamStats.teamStatsTotals.length; j++) {

            if (teamStats.teamStatsTotals[j].team.abbreviation == aTeam) {
              var aTeamStats = teamStats.teamStatsTotals[j]
              $("#"+aTeam+"record").text(teamStats.teamStatsTotals[j].stats.standings.wins + "-"+teamStats.teamStatsTotals[j].stats.standings.losses);      // Append the new elements 
            }
            if (teamStats.teamStatsTotals[j].team.abbreviation == hTeam) {
              var hTeamStats = teamStats.teamStatsTotals[j]
              $("#"+hTeam+"record").text(teamStats.teamStatsTotals[j].stats.standings.wins + "-"+teamStats.teamStatsTotals[j].stats.standings.losses);      // Append the new elements 
            }

            // if (aTeamStats.stats.standings.winPct * hTeamStats.stats.standings.winPct > .5) {
            //   $("#"+aTeam+hTeam).addClass("bg-success");      // Append the new elements 
            // }


          }
        };


      });
  });

}

schedule(today);

$("#yesterday").click(function() {
  $("#schedule-holder").empty()
  today.setDate(today.getDate() - 1)
  schedule(today);
});
$("#tomorrow").click(function() {
  $("#schedule-holder").empty()
  today.setDate(today.getDate() + 1)
  schedule(today);
});