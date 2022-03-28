const { protocol, ip, port, resource } = require("./config/config.json");
const Wrapper = require('./route/wrapper');

const Api = new Wrapper(protocol, ip, port, resource);

let test = async () => {

	const res = await Api.get('/hi?to=grandmom');
	console.log(res);

}

test();