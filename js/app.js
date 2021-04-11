(function($, document, window){
	
	$(document).ready(function(){
		initNavigation();
		initMap();
		initGauge();
	});

	function initNavigation() {
		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
	}

	function initMap() {
		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 11,
						gestureHandling: 'none',
						zoomControl: false,
						disableDefaultUI: true
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
		}
	}

	function initGauge() {


		var grain= new RainGauge
		(
			'rain',
			{"units":" mm","minValue":0,"maxValue":50,"majorTicks":["0","10","20","30","40","50"],"highlights":[{"from":0,"to":10,"color":"#DBEFF5"},{"from":10,"to":20,"color":"#B6DFEB"},{"from":20,"to":30,"color":"#92CFE1"},{"from":30,"to":40,"color":"#6DBFD7"},{"from":40,"to":50,"color":"#49AFCD"}]}
		);
		grain.draw();
		grain.setValue(35);

		var grainrate= new RadialGauge
		(
			'rainrate',
			{"units":" mm\/h","minValue":0,"maxValue":50,"colors":{"majorTicks":"#FFFFFF"},"strokeTicks":false,"majorTicks":["0","10","20","30","40","50"],"highlights":[{"from":0,"to":10,"color":"#DBEFF5"},{"from":10,"to":20,"color":"#B6DFEB"},{"from":20,"to":30,"color":"#92CFE1"},{"from":30,"to":40,"color":"#6DBFD7"},{"from":40,"to":50,"color":"#49AFCD"}]}
		);
		grainrate.draw();
		grainrate.setValue(12);

		var guvi= new RadialGauge
		(
			'uvi',
			{"units":" ","minValue":0,"maxValue":12,"majorTicks":["0","","2","","4","","6","","8","","10","","12+"],"colors":{"majorTicks":"#FFFFFF"},"strokeTicks":false,"highlights":[{"from":0,"to":1,"color":"#20A120"},{"from":1,"to":2,"color":"#67B715"},{"from":2,"to":3,"color":"#AFCD0A"},{"from":3,"to":4,"color":"#F7E400"},{"from":4,"to":5,"color":"#F9BA0D"},{"from":5,"to":6,"color":"#FB911A"},{"from":6,"to":7,"color":"#FD6828"},{"from":7,"to":8,"color":"#DC3414"},{"from":8,"to":9,"color":"#BB0000"},{"from":9,"to":10,"color":"#A01842"},{"from":10,"to":11,"color":"#853085"},{"from":11,"to":12,"color":"#6B49C8"}]}
		);
		guvi.draw();
		guvi.setValue(8);

		var gwspd= new RadialGauge
		(
			'wspd',
			{"units":" km\/h","minValue":0,"maxValue":50,"majorTicks":["0","10","20","30","40","50"],"colors":{"majorTicks":"#FFFFFF"},"strokeTicks":false,"highlights":[{"from":0,"to":10,"color":"#D6ECF4"},{"from":10,"to":20,"color":"#ADD9E9"},{"from":20,"to":30,"color":"#85C6DF"},{"from":30,"to":40,"color":"#5CB3D4"},{"from":40,"to":50,"color":"#33A0C9"}]}
		);
		gwspd.draw();
		gwspd.setValue(45);

		var gwdir= new RadialGauge
		(
			'wdir',
			{"majorTicks":["N","NE","E","SE","S","SW","W","NW"],"dirGauge":true,"minValue":0,"maxValue":360,"minorTicks":0,"colors":{"majorTicks":"#FFFFFF"},"strokeTicks":false,"highlights":[{"from":0,"to":90,"color":"#add9e9"},{"from":90,"to":180,"color":"#add9e9"},{"from":180,"to":270,"color":"#add9e9"},{"from":270,"to":360,"color":"#add9e9"}]}
		);
		gwdir.draw();
		gwdir.setValue(45);

		var gsol= new RadialGauge
		(
			'sol',
			{"units":" W\/m²","minValue":0,"maxValue":1500,"majorTicks":["0","300","600","900","1200","1500"],"colors":{"majorTicks":"#FFFFFF"},"strokeTicks":false,"highlights":[{"from":0,"to":300,"color":"#f7e34a"},{"from":300,"to":600,"color":"#edbe3e"},{"from":600,"to":900,"color":"#e39a32"},{"from":900,"to":1200,"color":"#da7526"},{"from":1200,"to":1500,"color":"#d0511a"}]}
		);
		gsol.draw();
		gsol.setValue(45);

		var giqa= new RadialGauge
		(
			'iqa',
			{"units":"", "valueFormat": {"dec": 0}, "minValue":0,"maxValue":300,"majorTicks":["0","50","100","150","200", "250", "300+"],"colors":{"majorTicks":"#FFFFFF"},"strokeTicks":false,"highlights":[{"from":0,"to":50,"color":"#20A120"},{"from":50,"to":100,"color":"#AFCD0A"},{"from":100,"to":150,"color":"#F9BA0D"},{"from":150,"to":200,"color":"#FD6828"},{"from":200,"to":250,"color":"#BB0000"},{"from":250,"to":300,"color":"#853085"}]}
		);
		giqa.draw();
		giqa.setValue(45);
	}

})(jQuery, document, window);