function getData() {
	var location = window.location.href;
	var parameter = location.split("=");
	parameter = parameter[1].split(",");
	parameter[1] = parameter[1].replace("%20", " ");
	return parameter;
}

function redirectPage(email) {
	
}

function getUserIndex(info) {
	var url = "https://script.google.com/macros/s/AKfycbzxy3XeQqp2bKagLXZbVw95LJK1wEPDDidORaQQR9_Z74ga1A/exec?request=getUserIndex&info="+info;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			clearTimeout(xmlhttpTimeout); 
			var response = parseInt(xmlhttp.responseText);
			if (response > -1) {
				alert("diakui!!")
			} else {
				window.location.href = "../pages/401.html";
			}
		}
	}
	var xmlhttpTimeout = setTimeout(ajaxTimeout, 60000);
	function ajaxTimeout(){
		xmlhttp.abort();
		alert("Request timed out");
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

$(function() {
	var source = document.referrer;
	if (source.indexOf('mesintik.github.io') < 0) {
		window.location.href = "../index.html";
	} else {
		var info = getData();
		getUserIndex(info);
	}
});
