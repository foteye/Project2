$(document).ready(function() {

  onLoad();

  $("#btnInsert").click(function() {
    $.get("/insertReceipt").then(function() {
      window.location.replace("/insertReceipt");
    });
  });

  $("#btnExport").click(function() {
    var content = XLSX.utils.sheet_to_csv(XLSX.utils.table_to_sheet(document.getElementById('receiptTable'), { sheet: "ReceiptExport" }));   
    saveAs(new Blob([content], { type: "text/plain;charset=utf-8" }), 'export.csv');
  });

  $("#btnLogout").click(function() {
    $.get("/logout").then(function() {
      window.location.replace("/");
    });
  });

});

function onLoad() {
  $.get("/api/currentUser", function(data) {
    $('#welcomeSpan').text(`Welcome ${data.firstName} ${data.lastName}`);
  });

  $.get('/api/getReceipts', function(data) {
    renderTable(data);
  });
}

async function renderTable(receipts) {
  const receiptTable = $("#receiptTable tbody");
  receiptTable.children().not(":first").remove();

  for (let receipt of receipts) {
    let user = await $.get("/api/getFirstLastName/" + receipt.user)

    const row = $("<tr></tr>");
    const date = new Date(Date.parse(receipt.transactionDate));

    const rowCells = $(`
      <td>${date.toDateString()}</td>
      <td>${receipt.transactionNumber}</td>
      <td>${receipt.transactionType}</td>
      <td>${receipt.amount}</td>
      <td>${receipt.tax}</td>
      <td>${receipt.description}</td>
      <td>${receipt.justification}</td>
      <td>${user.firstName} ${user.lastName}</td>
    `);

    receiptTable.append(row.append(rowCells));
  }
}