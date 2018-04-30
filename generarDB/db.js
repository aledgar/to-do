const fs = require("fs");
let hw = [];

let generateDB = () => {

	let data = JSON.stringify(hw);

	fs.writeFile(__dirname+'/dbFile/fileDB.json',data,(err) => {
		if(err) throw new Error('No se pudo guardar',err);
	});

}

let getListado = () =>{
	try {
		hw = require(__dirname+'/dbFile/fileDB.json');
		return hw;
	} catch (error) {
		hw = [];
		return hw;
	}
}

let actualizarHw = (descripcion, estado) =>{

	getDataBD();

	let index = hw.findIndex(tarea=>tarea.desc === descripcion);

	if(index>=0){
		hw[index].completado = estado;
		generateDB();
		return true;
	}else{
		return false;
	}

}

let borrarHw = (descripcion) =>{
	getDataBD();
	let index = hw.filter(hw => { return hw.desc !== descripcion } );

	if(index.length !== hw.length){
		hw = index;
		generateDB();
		return true;
	}else{
		return false;
	}
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
	createHw,
	getListado,
	actualizarHw,
	borrarHw
}


