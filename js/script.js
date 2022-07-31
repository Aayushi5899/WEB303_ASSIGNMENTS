$(document).ready(function () {
  arr = new Array();
  $("td").each(function () {
    t = $(this).text();
    arr.push(t);
  });

  //Search and highlight
  $("#input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    var a;
    $("#mytable tr").filter(function () {
       $(this).toggle(
        $(this).find("td:eq(0)").text().toLowerCase().indexOf(value) > -1
      ).toggleClass('rowhighlight');
    });
  });

  //sorting table
  $(function () {
    var count = 0;
    $("table").on("click", "th", function () {
      count += 1;
      var i = $(this).index(),
        rows = [],
        thclass = $(this).hasClass("asc") ? "desc" : "asc";
      console.log(thclass);

      $("#mytable th").removeClass("asc desc");
      $(this).addClass(thclass);

      $("#mytable tbody tr").each(function (_, row) {
        rows.push($(row).detach());
      });
      console.log(count);

      if (count == 3 || count == 6 || count == 9 || count == 12) {
        console.log(count);
      } else {
        rows.sort(function (a, b) {
          var aValue = $(a).find("td").eq(i).text(),
            bValue = $(b).find("td").eq(i).text();
          console.log("aValue    " + aValue);
          console.log("bValue    " + bValue);
          return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        });
      }

      if ($(this).hasClass("desc")) {
        rows.reverse();
      }

      $.each(rows, function (index, row) {
        $("#mytable tbody").append(row);
      });
    });
  });
});
