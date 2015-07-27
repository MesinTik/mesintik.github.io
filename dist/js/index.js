function onSuccess(googleUser) {
	alert('Logged in as: ' + googleUser.getBasicProfile().getName());
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
}