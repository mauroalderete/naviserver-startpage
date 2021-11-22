function timeTick() {
	var time = new Date();
	var minutes = time.getMinutes(); 
	var hours = time.getHours(); 

	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(hours < 10) {
		hours = "0" + hours;
	}

	document.getElementById("idtime").innerHTML = (hours + ":" + minutes);

    setDate();

	setTimeout(timeTick, 10000);
}

function setDate() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
	
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    month = monthNames[month];
    document.getElementById("iddate").innerHTML = (day + ". " + month);
}
