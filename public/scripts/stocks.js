$("body").on("click", "#submitQuote", function() {
	var stockPick = $("#stockName").val();
	console.log(stockPick);
	$("#quote").attr("action", "/getquote/" + stockPick);
});
