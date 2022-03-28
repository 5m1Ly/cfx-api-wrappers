const axios = require('axios');

module.exports = class Wrapper {

	constructor(protocol, ip, port, resource, token) {
		this.uri = `${protocol}://${ip}:${port}/${resource}`;
		this.token = token;
	}

	get = async path => {

		try {

			const retval = await axios.get(`${this.uri}${path}`).then(res => { return res.data })

			return retval

		} catch (err) {

			console.error(err)

		}
	
	}

	post = async path => {

		try {

			const retval = await axios.post(`${this.uri}${path}`)

			return retval

		} catch (err) {

			console.error(err)

		}
	
	}

}