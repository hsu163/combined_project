$(document).ready(function(){

// Start Student Counter Section

var getcountervalues = document.querySelectorAll('.countervalues');
// console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){

	getcountervalue.textContent = 0;

	const updatecounter = function(){

		// console.log(getcountervalue);
		const cttarget = +getcountervalue.getAttribute('data-target');
	// console.log(cttarget);
	// console.log(typeof cttarget);

	const ctcontent = +getcountervalue.textContent;
	// console.log(ctcontent);
	// console.log(typeof ctcontent);

	var incnumber = cttarget / 100;
	// console.log(incnumber);

	if(ctcontent < cttarget){
		getcountervalue.textContent = ctcontent+incnumber;

		setTimeout(updatecounter,50);
	}
		
	}

	updatecounter();
	

});

// End Student Counter Section



// Start Login & Sticknote

// start Login
	$("#openform").click(function(){
		document.getElementById('myform').style.display = "block";
	});

	$("#closeform").click(function(){
		document.getElementById('myform').style.display = "none";
	});
// end Login

// End Login & Sticknote

});


// Start Student Gratuate Section

  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',8],
          ['Thailand',2],
          ['Singapore',4],
          ['Indonesia',2],
          ['Srilanka',8]
        ]);

        var options = {
          title: 'International Students',
          width: 550,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

// End Student Gratuate Section

// Start Footer Section

const getyear = document.getElementById('getyear');
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;

// End Footer Section