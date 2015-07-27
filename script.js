$(document).ready(function() {
	var clientId = "f8a4b95805c9804c9eb7";
	var clientSecret = "4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d";
	$('.user-search').on('click', function(event) {
		event.preventDefault();
		var userQuery = encodeURI($('.search-field').val());
		$('.search-field').val('');
		getUser(userQuery);
		getRepos(userQuery);
		console.log("button clicked");
	});
	function getUser(userName) {
		$.ajax ({
			type: 'GET',
			dataType: 'json',
			crossDomain: true,
			url: 'https://api.github.com/users/'+userName,
			data: {client_id: clientId, client_secret: clientSecret},
			success: function(response) {
				showUser(response);
			}
		});	
	}
	function getRepos(userName) {
		$.ajax ({
			type: 'GET',
			dataType: 'json',
			crossDomain: true,
			url: 'https://api.github.com/users/'+userName +'/repos',
			data: {client_id: clientId, client_secret: clientSecret},
			success: function(response) {
				showRepos(response);
			}
		});	
	}
	function showUser(data) {
		$('.user').children().remove();
		$('.user').append('<h2>'+data.name+'</h2>');
		$('.user').append('<img class="img-responsive thumbnail" src= '+ data.avatar_url + '>');
		if (data.company){$('.user').append('<div><i class="fa fa-building-o"></i> '+data.company+'</div>');}
		if (data.location){$('.user').append('<div><i class="fa fa-map-marker"></i> '+data.location+'</div>');}
		

		console.log(data);
		
	}
	function showRepos(data) {
		$('.user-repos').children().remove();
		$('.user-repos').append('<h3 class="repo-header">Repositories</h3>');
		$.each(data, function(index, object) {
			var push_date = moment(object.pushed_at).format('MMM Mo YYYY');
			console.log(push_date);
			$('.user-repos').append('<div class="repo"><div class="stats"><i class="fa fa-clock-o"></i> '+push_date+' <i class="fa fa-code-fork"></i> forks: '+object.forks_count+'</div><a href='+object.html_url+'><h4>'+object.name+'</h4></a><div class="desc">'+object.description+'</div></div>');
		});
		console.log(data);
	}
	
});