var teamsUrl = "https://api.mysportsfeeds.com/v2.0/pull/nba/current/standings.json"


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
    .then(function (standings) {
        console.log(standings)

        for (j = 0; j < standings.teams.length; j++) {

            switch (standings.teams[j].playoffRank.rank) {
                case 1:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>1</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam1").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>1</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam1").append(standingsStringW)
                    }
                    break;
                case 2:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>2</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam2").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>2</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam2").append(standingsStringW)
                    

                    } 
                    break;
                    case 3:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>3</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam3").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>3</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam3").append(standingsStringW)
                    }
                    break;

                case 4:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>4</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam4").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>4</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam4").append(standingsStringW)
                    }
                    break;

                case 5:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>5</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam5").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>5</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam5").append(standingsStringW)
                    }
                    break;

                case 6:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>6</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam6").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>6</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam6").append(standingsStringW)
                    }
                    break;

                case 7:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>7</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam7").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>7</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam7").append(standingsStringW)
                    }
                    break;

                case 8:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th>8</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam8").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th>8</th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam8").append(standingsStringW)
                    }
                    break;

                case 9:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam9").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam9").append(standingsStringW)
                    }
                    break;

                case 10:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam10").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam10").append(standingsStringW)
                    }
                    break;

                case 11:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam11").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam11").append(standingsStringW)
                    }
                    break;

                case 12:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam12").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam12").append(standingsStringW)
                    }
                    break;

                case 13:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam13").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam13").append(standingsStringW)
                    }
                    break;

                case 14:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam14").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam14").append(standingsStringW)
                    }
                    break;

                case 15:
                    if (standings.teams[j].playoffRank.conferenceName == "Eastern") {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#eTeam15").append(standingsStringW)
                    } else {
                        var standingsStringW = '<th></th>'
                        standingsStringW += '<td style="font-size: 15px;"><img src="images/logos/' + standings.teams[j].team.abbreviation + '.png" height="20px" width="20px">'+ " " +standings.teams[j].team.city + " " + standings.teams[j].team.name + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.wins + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.losses + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].stats.standings.winPct + '</td>'
                        standingsStringW += '<td class="text-center">' + standings.teams[j].conferenceRank.gamesBack + '</td>'
                        $("#wTeam15").append(standingsStringW)
                    }
                default:
                // code block
            }

        };

    });