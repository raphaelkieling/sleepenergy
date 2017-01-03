function verificar()
{
	var hora = $("#hora").val();
	var min  = $("#minuto").val();

	var data = new Date(2016, 12, 28, hora, min, 0, 0);
	var c6   = new Date(data);
	var c5   = new Date(data);
	var c4   = new Date(data);
	var c3   = new Date(data);
	var c2   = new Date(data);
	var c1   = new Date(data);

	$(".f-data").remove();

		var c6 = c6.setMinutes(data.getMinutes()-90*6); //cinco ciclos
			var format_data = moment(c6).format('LT');
			$("#c6").append("<h4 class='f-data'>"+format_data+"</h4>");

		var c5 = c5.setMinutes(data.getMinutes()-90*5); //cinco ciclos
			var format_data = moment(c5).format('LT');
			$("#c5").append("<h4 class='f-data'>"+format_data+"</h4>");

		var c4 = c4.setMinutes(data.getMinutes()-90*4); //cinco ciclos
			var format_data = moment(c4).format('LT');
			$("#c4").append("<h4 class='f-data'>"+format_data+"</h4>");

		var c3 = c3.setMinutes(data.getMinutes()-90*3); //cinco ciclos
			var format_data = moment(c3).format('LT');
			$("#c3").append("<h4 class='f-data'>"+format_data+"</h4>");

		var c2 = c2.setMinutes(data.getMinutes()-90*2); //cinco ciclos
			var format_data = moment(c2).format('LT');
			$("#c2").append("<h4 class='f-data'>"+format_data+"</h4>");



}