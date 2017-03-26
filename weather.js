$(document).ready(function(){

	$('#submitWeather').click(function(){ //id of button search

		var city = $("#city").val();  //id of input
		if(city!=''){

			$.ajax({
				url: 'api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=b1884514adc3b3c175df2eff8f3f29e5",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);

					$("#show").html(widget); //id where the data is to be displayed(given to the empty div)
					$("#city").val('');
				}

			});
		}
		else
		{
			$("#error").html('Field cannot be empty!') //span inside div corresponding to the city name
		}
	});
});

function show(data)
{
	return 	"<h3 style='font-size: 45px; font-weight: bold;' class='text-center'>Current Weather for " + data.name + ", " + data.sys.country + "</h3>" +		
			"<h3><strong>Weather</strong>: "+ data.weather[0].main()  +"</h3>" +
		   	"<h3><strong>Description</strong>: "+ data.weather[0].description  +"</h3>" +
		  	"<h3><strong>Temperature</strong>: "+ data.main.temp  +"&deg;C</h3>" +
		  	"<h3><strong>Pressure</strong>: "+ data.main.pressure  +"hPa</h3>" +
		  	"<h3><strong>Humidity</strong>: "+ data.main.humidity  +"%</h3>" +
		  	"<h3><strong>Min. temperature</strong>: "+ data.main.temp_min +"&deg;C</h3>" +
		  	"<h3><strong>Max. temperature</strong>: "+ data.main.temp_min +"&deg;C</h3>" +
		  	"<h3><strong>Wind Speed</strong>: "+ data.wind.speed + "m/s</h3>" +
		  	"<h3><strong>Wind Direction</strong>: "+ data.wind.deg + "&deg;C</h3>";

}
}
