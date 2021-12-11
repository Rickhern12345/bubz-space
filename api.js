const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://fitness-calculator.p.rapidapi.com/burnedcalorie?activityid=bi_1&activitymin=25&weight=75",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "889f7fe757msh162114e71579de8p1c6780jsn52b900dd506c"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});