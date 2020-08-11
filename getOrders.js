function getOrders() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var orders = JSON.parse(this.responseText);
	        displayOrders(orders)
	    }
	};
	xmlhttp.open("GET", "http://localhost:8080/orders", true);
	xmlhttp.send();
}
getOrders()



function displayOrders(orders) {
	var t = "";
	for (var i = 0; i < orders.length; i++){
	      var tr = "<tr>";
	      tr += "<td>"+(i+1)+"</td>";
	      tr += "<td>"+orders[i]["number"]+"</td>";
	      tr += "<td>"+orders[i]["typeProblem"]+"</td>";
	      tr += "<td>"+orders[i]["timeProblem"]+"</td>";
	      tr += "</tr>";
	      t += tr;
	}
	document.getElementById("table").innerHTML += t;
}