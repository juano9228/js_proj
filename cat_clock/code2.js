function myFunc(){
	var now = new Date();
	var time = now.getHours() + " " + now.getMinutes() + " " + now.getSeconds();
	document.getElementById('clock').innerHTML= time;
}
myFunc();
setInterval(myFunc, 1000);