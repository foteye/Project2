$(document).ready(function() {
  onLoad();

  $("#btnLogout").click(function() {
    $.get("/logout").then(function() {
      window.location.replace("/");
    });
  });

  $("#btnBack").click(function() {
    $.get("/receipt").then(function() {
      window.location.replace("/receipt");
    });
  });

  $("#btnClear").click(function() {
    $(this).closest('form').find("input[type=text], input[type=number], textarea").val("");
  });

  $("#btnSubmit").click(function() {
    event.preventDefault();
    const formData = $(this).closest('form').serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

    $.post("/api/insertReceipt", {
      formData
    }).then(function() {
      $.get("/receipt").then(function() {
        window.location.replace('/receipt');
      });
    }).catch(function(err) {
      showErrMsg(err);
    });
  });
});

function showErrMsg(err) {
  console.log(err);
}

function onLoad() {
  $.get("/api/currentUser", function(data) {
    $('#welcomeSpan').text(`Welcome ${data.firstName} ${data.lastName}`);
  });
}