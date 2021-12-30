/**
 *
 * @param {String} endpoint API Endpoint for the Request
 * @returns
 */
const getApi = (endpoint) => {
	return `https://linkedin-redesigned-server.herokuapp.com/${endpoint}`;
	// return `http://localhost:3001/${endpoint}`;
};

export default getApi;
