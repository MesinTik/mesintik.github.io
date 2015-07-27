function onSuccess(googleUser) {
	var profile = googleUser.getBasicProfile();
	var email = profile.getEmail();
	window.location.href = "pages/redirect.html?user=" + email;
}	
	
function onFailure(error) {
	alert('Error! Try again or check your internet connection.');
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
}