import { instance } from "./instance";

instance.interceptors.response.use((response) => {
	// Optional: Do something with response data
	return response;
}, function (error) {
	console.log(error);

	// Do whatever you want with the response error here:
	
	// But, be SURE to return the rejected promise, so the caller still has 
	// the option of additional specialized handling at the call-site:
	return Promise.reject(error);
});