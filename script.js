$(document).ready(function() {
	var clientId = "f8a4b95805c9804c9eb7";
	var clientSecret = "4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d";
	$.ajax ({
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		url: 'https://api.github.com/users/jrkeck',
		data: {client_id: clientId, client_secret: clientSecret},
		complete: function() {
			console.log('ajax complete');
		},
		success: function(data) {
			console.log(data);
		}
	});
	
});