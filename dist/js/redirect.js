function getEmail() {
	var location = window.location.href;
	var parameter = location.split("=");
	parameter = parameter[1];
	return parameter;
}

function redirectPage(email) {
	
}

function getUserIndex(email) {
	var url = "https://script.google.com/macros/s/AKfycbzxy3XeQqp2bKagLXZbVw95LJK1wEPDDidORaQQR9_Z74ga1A/exec?request=getUserIndex&email="+email;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			clearTimeout(xmlhttpTimeout); 
			alert(xmlhttp.responseText);
			var response = parseInt(xmlhttp.responseText);
			alert(response);
			if (response > -1) {
				alert("diakui!!")
			} else {
				window.location.href = "../pages/401.html";
			}
		}
	}
	var xmlhttpTimeout = setTimeout(ajaxTimeout, 5000);
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
		var email = getEmail();
		getUserIndex(email);
	}
});
	
	/*var source = document.referrer;
	if (source.indexOf('mesintik.github.io') < 0) {
		window.location.href = "../index.html";
	} else {
		alert(getEmail());
		var response = getUserIndex(email);
		alert(response);
	}*/


/*function onSuccess(googleUser) {
	var email = googleUser.getBasicProfile().getEmail();
	var url = "https://script.google.com/macros/s/AKfycbzxy3XeQqp2bKagLXZbVw95LJK1wEPDDidORaQQR9_Z74ga1A/exec?request=getUserInfo&email="+email;
	//alert(url);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			clearTimeout(xmlhttpTimeout); 
			alert(xmlhttp.responseText);
		}
	}
	var xmlhttpTimeout = setTimeout(ajaxTimeout, 5000);
	function ajaxTimeout(){
		xmlhttp.abort();
		alert("Request timed out");
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
function onFailure(error) {
	alert('error');
} 
function renderButton() {
	gapi.signin2.render('my-signin2', {
		'scope': 'https://www.googleapis.com/auth/plus.login',
		'width': 320,
		'height': 50,
		'longtitle': true,
		'theme': 'dark',
		'onsuccess': onSuccess,
		'onfailure': onFailure
	});
}*/