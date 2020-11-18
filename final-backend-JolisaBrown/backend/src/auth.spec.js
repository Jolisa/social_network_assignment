


const fetch = require('isomorphic-fetch');

const url = path => `http://localhost:3000${path}`

describe('Validate Registration', () => {

	it('should return success message if username and password provided', (done) => {
		// IMPLEMENT ME
		//expect( registration)
		done(new Error('Not implemented'))
 	})

 	it('should return nothing if username or password not provided', (done) => {
		// IMPLEMENT ME
		done(new Error('Not implemented'))
 	})

	/*it('should add two articles with successive article ids, and return the article each time', (done) => {
		// add a new article
		// verify you get the article back with an id
		// verify the content of the article
		// add a second article
		// verify the article id increases by one
		// verify the second artice has the correct content
		done(new Error('Not implemented'))
 	})

	it('should return an article with a specified id', (done) => {
		// call GET /articles first to find an id, perhaps one at random
		// then call GET /articles/id with the chosen id
		// validate that only one article is returned
		done(new Error('Not implemented'))
	})

	it('should return nothing for an invalid id', (done) => {
		// call GET /articles/id where id is not a valid article id
		// confirm that you get no results
		done(new Error('Not implemented'))
	})*/

});