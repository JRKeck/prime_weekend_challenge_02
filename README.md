# prime_peer_ajax_02
Oh hi! I didn't see you there.

In this challenge you will be reading through and interacting with Github's developer API.

## Useful links

jQuery Ajax documentation is [here](http://api.jquery.com/jquery.ajax/).

The API Docs are located [here](https://developer.github.com/v3/).

Postman for Chrome is located [here](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en).

Postman for Chrome as a packaged app is located [here](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

## Github!

Github, being as awesome as they are, fully support CORS requests! No hacks required.


## Assignment!!!

Read through the Github API Developer documentation. Using this documentation you need to construct an Ajax application page that will display one of your Github user's names (and a link to the user's Github page), profile images and some public information you've shared on Github.

**Hint:** The API endpoint you're looking for is **users**.

Once you've got that working, modify the application to be a search page that will search all users and display the information detailed above for the searched user (or display a message when the user is not found). 

**Hint:** Be sure to leverage `encodeURI` just in case the user types something weird! 

**For this assignment, you are required to authenticate using OAuth. Add the following to your url:**

`?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d`

### Hard Mode

In addition to showing the user's information, also list of all of that user's public repository names (with links to them) and their descriptions.

**Hint:** This API endpoint is **repos**.

### Pro Mode

Style your application page with Bootstrap, and be sure to optimize for mobile devices (shrink your browser and expand it back and forth to test this).
