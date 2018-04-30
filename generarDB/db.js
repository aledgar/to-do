const fs = require("fs");
let hw = [];

let generateDB = () => {

	let data = JSON.stringify(hw);

	fs.writeFile(__dirname+'/dbFile/fileDB.json',data,(err) => {
		if(err) throw new Error('No se pudo guardar',err);
	});

}

let getDataBD = () =>{
	try {
		hw = require(__dirname+'/dbFile/fileDB.json');
	} catch(e) {
		hw = [];
	}
}

let createHw = (desc) => {
	getDataBD();
	let hw_create = {
		desc,
		completado:false
	}

	hw.push(hw_create);
	generateDB();
	return hw_create;
}

module.exports = {
	createHw
}


