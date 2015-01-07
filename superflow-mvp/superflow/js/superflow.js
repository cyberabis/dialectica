//jsPlumb for drawing lines

jsPlumb.ready(function() {

	var jspInstance = jsPlumb.getInstance({
		Container:"jsplumb-grid",
		Anchors:[ ["Continuous", {faces:["right"]}], ["Continuous", {faces:["left"]}] ],
		PaintStyle: { lineWidth : 1, strokeStyle : "DarkGray" },
		Endpoint: "Blank",
		//Endpoint : ["Dot", {radius:2}],
		//EndpointStyle : { fillStyle : "DarkGray" },
		Connector:["Flowchart", {stub:10}],
		Overlays:[ ["Arrow", {location:1, width:5, length:5}] ]
	});

	jspInstance.connect({
		source:"di-iss-1",
		target:"di-arg-2-1"
	});

	jspInstance.connect({
		source:"di-arg-1-2",
		target:"di-arg-2-2"
	});

	jspInstance.connect({
		source:"di-arg-2-1",
		target:"di-arg-3-1"
	});

	jspInstance.connect({
		source:"di-arg-2-2",
		target:"di-arg-3-1"
	});

	jspInstance.connect({
		source:"di-arg-2-3",
		target:"di-arg-3-2"
	});

	jspInstance.connect({
		source:"di-arg-2-3",
		target:"di-arg-3-3"
	});

});

//Jquery for mock UI

$(document).ready(function(){
    $('.di-arg').click(function(e){
    	if($(this).hasClass("di-selected"))
    		$(this).removeClass("di-selected");
    	else 
    		$(this).addClass("di-selected");
    });
    $('.panel-heading').click(function(e){
    	if($(this).hasClass("di-iss-unselected"))
    		$(this).removeClass("di-iss-unselected");
    	else
    		$(this).addClass("di-iss-unselected");
    });
});