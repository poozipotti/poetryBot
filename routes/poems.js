const express = require('express');
const router = express.Router();
const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
router.get("/", async (req, res) => {
	console.log('opening file')
	let allPoems = null;
	try{
		allPoems = await readFile(path.basename('../poems.txt'), 'utf8');
		console.log('opened file');
	}catch(e){
		console.log(e)
		allPoems = 'error';
	}
	let test = allPoems.split('%---------------------------------%');
	//let allPoemsArray = allPoems.split('%');
	console.log('split file it contains ' + test.length + ' poems');
	res.json({"poem":test[Math.floor(Math.random()*test.length)]});
});
module.exports = router;
