$(document).ready(function() {

  onLoad();

  $("#btnInsert").click(function() {
    $.get("/insertReceipt").then(function() {
      window.location.replace("/insertReceipt");
    });
  });

  $("#btnExport").click(function() {
    var content = "What's up , hello world";
    var filename = "hello.txt";
    var blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });

    saveAs(blob, filename);
  });

  $("#btnLogout").click(function() {
    $.get("/logout").then(function() {
      window.location.replace("/");
    });
  });

});

async function onLoad() {
  var user = {};
  await $.get("/api/currentUser", function(data) {
    user = data;
  });
  $('#welcomeSpan').text(`Welcome ${user.firstName} ${user.lastName}`);
}