$.ajax
({
  type: "GET",
  url: "http://m.weather.gov.ph/agaptest/weather_bulletin.php",
  //url: "js/weatherbulletin.json",
  async: false,
  success: function (result2){
	  //alert(result2);
	  setTimeout(function(){$("#imgLoader").fadeOut();
	  var bulletin = Object.keys(result2.result);
	  
	  console.log(bulletin);

		if (bulletin == ""){
				$(".inner").html("As of today, there is no tropical cyclone within the Philippine Area of Responsibility (PAR)");
			}
			else{
	var div = Object.keys(result2.result);
		for(j=0; j<=div.length -1; j++){			
		console.log(div[j]);	
				//console.log(result2.result[j].tc_type);
				//console.log(result2.result[div[j]].tc_type);
	  var tc_type = result2.result[j].tc_type;
	  var tc_name = result2.result[j].tc_name;
	  var int_tc_name = result2.result[j].int_tc_name;
	  var movement = result2.result[j].movement;
	  var maxwind = result2.result[j].maxwind;
	  var warning_or_alert = result2.result[j].warning_or_alert;
	  var fposition = result2.result[j].fposition;
	  var signaloneL = result2.result[j].signaloneL	;
	  var signaloneV = result2.result[j].signaloneV;
	  var signaloneM = result2.result[j].signaloneM;
	  var signaltwoL = result2.result[j].signaltwoL;
	  var signaltwoV = result2.result[j].signaltwoV;
	  var signaltwoM = result2.result[j].signaltwoM;
	  var signalthreeL = result2.result[j].signalthreeL;
	  var signalthreeV = result2.result[j].signalthreeV;
	  var signalthreeM = result2.result[j].signalthreeM;
	  var signalfourL = result2.result[j].signalfourL;
	  var signalfourV = result2.result[j].signalfourV;
	  var signalfourM = result2.result[j].signalfourM;
	  var signalfiveL = result2.result[j].signalfiveL;
	  var signalfiveV = result2.result[j].signalfiveV;
	  var signalfiveM = result2.result[j].signalfiveM;
	  
	  var disSig1
	  if(signaloneL == "")
		  signaloneL = "";
	  else
		  signaloneL = "#1" +signaloneL;
	  if(signaloneV == "")
		  signaloneV = "";
	  if(signaloneM == "")
		  signaloneM = "";
	  if(signaltwoL == "")
		  signaltwoL = "";
	  if(signaltwoM == "")
		  signaltwoM = "";
	  if(signaltwoV == "")
		  signaltwoV = "";
	  if(signalthreeL == "")
		  signalthreeL = "";
	  if(signalthreeV == "")
		  signalthreeV = "";
	  if(signalthreeM == "")
		  signalthreeM = "";
	  if(signalfourL == "")
		  signalfourL = "";
	  if(signalfourV == "")
		  signalfourV = "";
	  if(signalfourM == "")
		  signalfourM = "";
	  if(signalfiveL == "")
		  signalfiveL = "";
	  if(signalfiveV == "")
		  signalfiveV = "";
	  if(signalfiveM == "")
		  signalfiveM = "";
	  
	  
	  
	  
	  
	  
	  
	  
	  

	  
	  
	  var impact_statement = result2.result[j].impact_statement;
	  var bulletin_number = result2.result[j].bulletin_number;
	  var time_issued = result2.result[j].time_issued;
	  var date_issued = result2.result[j].date_issued;
	  var location_sentence = result2.result[j].location_sentence;	  
			}
			//alert(signaloneL);

	  var issued_date = time_issued + "," +date_issued;
		
			
	  var htmlData = "";
	 
 htmlData += "<p style=text-align:center>Severe Weather Bulletin #"+bulletin_number;
	 htmlData += "<br> For:"+tc_type+" "+tc_name;
	 htmlData += "<br"+warning_or_alert+" </p>";
	 htmlData += "<p><strong>Issued Date:</strong> "+issued_date+"</p>";
	 htmlData += "<p> "+impact_statement+"</p>";
		 htmlData += "<p><strong>Location of eye/center:</strong> "+location_sentence+"</p>";			
		 htmlData += "<p><strong>Forecast Movement:</strong> "+movement+"</p>";			
		 htmlData += "<p><strong>Forecast Position:</strong> "+fposition+"</p>";			
		 htmlData += "<p>PUBBLIC STORM SIGNAL</p>";			
		 if (signalfiveL == "")
		 htmlData += "";			
			else
		 htmlData += "#5"+signalfiveL + signalfiveV +signalfiveM +"<br>";			
		if (signalfourL == "")
			htmlData += "";			
		else	
		 htmlData += "#4"+signalfourL + signalfourV +signalfourM +"<br>";			
	 	if (signalthreeL == "")
			htmlData += "";	
		else
		 htmlData += "#3"+signalthreeL + signalthreeV +signalthreeM +"<br>";			
	 	if (signaltwoL == "")
			htmlData += "";	
		else
		 htmlData += "#2"+signaltwoL + signaltwoV +signaltwoM +"<br>";			
	 	if (signaloneL == "")
			htmlData += "";	
		 htmlData += "#1"+signaloneL + signaloneV +signaloneM ;			
	$(".inner").html(htmlData);
	//$(".inner").html("Issued Date: "+issued_date);
			
		
		
			}

	  });
	},  error: function (request, textStatus, errorThrown) {
			setTimeout(function(){$('#imgLoader').fadeOut(); }, 1000);	
       errMsg();
        console.log(textStatus);
        console.log(errorThrown);
    }
});

