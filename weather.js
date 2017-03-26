$(document).ready(function() {
	$("#avg").hide();
	$("#rec").hide();
	$("#weather_content").hide();
	$("#avgt").click(function() {
		$("#norm").hide();
		$("#rec").hide();
		$("#avg").fadeToggle(1000);

	});

	$("#nmode").click(function() {
		$("#avg").hide();
		$("#rec").hide();
		$("#norm").fadeToggle(1000);
	});

	$("#recent").click(function() {
		$("#avg").hide();
		$("#norm").hide();
		$("#weather_content").hide();
		$("#rec").fadeToggle(1000);
	});
	
	$("#click").click(function() {

		var city = $("#inp_city").val();
		$("#norm").hide();
		$("#weather_content").fadeToggle(1000);
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


					$("#cty").append("<br>" + c);
					$("#tmp").append("<br>" + t);
					$("#mintp").append("<br>" + min);
					$("#maxtp").append("<br>" + max);
					$("#humid").append("<br>" + h);
					$("#pres").append("<br>" + p);

				}
			});
		}
		else {
			alert("*** FIELD ID LEFT EMPTY ***");
			$("#norm").show();
			$("#weather_content").hide();
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

function temper(data) {
	return data.main.temp;
}
