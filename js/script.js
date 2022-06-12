// WEB303 Assignment 3
// Aayushi Patel

$(document).ready(function () {
  // getDataByJquery();
  getDataByAjaxx();
});

function getDataByJquery() {
  // Getting data (using getJSON method) from glicthTeam.json file
  $.getJSON("./data/glitchTeam.json", function (data, _) {
    //Bonus
    if (data["members"].length === 0) {
      $("#glitch-team").after(
        "<h3>" + "File did not contain any valid data." + "</h3>"
      );
      return;
    }

    //looping through the fetched data from glitchTeam.json and displaying it in glitch-team div tag
    $.each(data["members"], function (_, value) {
      var a = $("#glitch-team").after("<p>" + value.shortbio + "</p>");
      var b = a.after("<h6>" + value.position + "</h6>");
      b.after("<h4>" + value.fullname + "</h4>");
    });
  });
}

function getDataByAjaxx() {
  // Getting data (using AJAX method) from glicthTeam.json file
  $.ajax({
    dataType: "json",
    url: "./data/glitchTeam.json",

    //Added a callback function that runs before AJAX request to display loading Team
    beforeSend: function () {
      $("#glitch-team").after("<h3>" + "Loading team...." + "</h3>");
    },
    success: function (data) {
      $("#glitch-team").next().remove();

      //Bonus
      if (data["members"].length === 0) {
        $("#glitch-team").after(
          "<h3>" + "File did not contain any valid data." + "</h3>"
        );
        return;
      }

      //looping through the fetched data from glitchTeam.json and displaying it in glitch-team div tag
      data["members"].forEach(function (element) {
        var a = $("#glitch-team").after("<p>" + element.shortbio + "</p>");
        var b = a.after("<h6>" + element.position + "</h6>");
        b.after("<h4>" + element.fullname + "</h4>");
      });
    },

    // Added an error callback to display an error message
    error: function (_) {
      $("#glitch-team").next().remove();
      $("#glitch-team").after(
        "<h3>" + "Content could not be retrieved." + "</h3>"
      );
    },
  });
}
