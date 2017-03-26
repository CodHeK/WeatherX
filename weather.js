$(document).ready(function() {
	$("#avg").hide();
	$("#avgt").click(function() {
		$("#norm").hide();
		$("#avg").fadeToggle(1000);
	});

	$("#nmode").click(function() {
		$("#avg").hide();
		$("#norm").fadeToggle(1000);
	});

	$("#click").click(function() {

		var city = $("#inp_city").val();

		if(city != '') {

			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=b1884514adc3b3c175df2eff8f3f29e5",
				type: "GET",
				dataType: "jsonp",
				success: function(data) {
					var wt = weather(data);
					var t = temp(data);
					var h = humidity(data);
					var p = pressure(data);
					var max = maxtemp(data);
					var min = mintemp(data);
					var w = wind(data);
					var c = country(data);
					var d = wind_direction(data);

					$("#desp").html(wt);
					$("#val").html(t);
					$("#val_h").html(h);
					$("#val_p").html(p);
					$("#val_mt").html(max);
					$("#val_mit").html(min);
					$("#val_w").html(w);
					$("#country").html(c);
					$("#val_d").html(d);

					$("#inp_city").val('');

				}
			});
		}
		else {
			alert("*** FIELD ID LEFT EMPTY ***");
		}
	});
});

function weather(data) {
	return data.weather[0].description;
}

function temp(data) {
	return data.main.temp + "&deg;C";
}

function humidity(data) {
	return data.main.humidity + "%";
}

function pressure(data) {
	return data.main.pressure + "hPa";
}

function maxtemp(data) {
	return data.main.temp_max + "&deg;C";
}

function mintemp(data) {
	return data.main.temp_min + "&deg;C";
}

function wind(data) {
	return data.wind.speed + "m/s";
}

function country(data) {
	return data.name;
}

function wind_direction(data) {
	return data.wind.deg + "&deg;";
}

