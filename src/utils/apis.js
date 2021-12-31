/**
 *
 * @param {String} endpoint API Endpoint for the Request
 * @returns
 */
const getApi = (endpoint) => {
	return `https://linkedin-redesigned-server.herokuapp.com/${endpoint}`;
};

export { getApi };
