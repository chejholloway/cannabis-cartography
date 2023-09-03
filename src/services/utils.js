export const delay = (ms) => (val) => new Promise((resolve) => setTimeout(() => resolve(val), ms));

export const promiseGet = (request, API) =>
	API.get(request.url, { headers: request.headers }).then((response) => response.data).catch((err) => {
		console.error(`API ERROR: ${err.message}\n\n${err.stack}`);
		return Promise.reject(err);
	});
