/*

EasyJavaScript Library

This code is Copyright ©

*/

// Library Var
var library = {
	name: 'EasyJavaScript',
	description: 'This Library was made to make JavaScript easier to use',
	creator: 'GabrieleYT9768',
	repository: 'https://github.com/GabrieleYT9768/EasyJavaScript_Library/blob/main',
	source: 'https://raw.githack.com/GabrieleYT9768/EasyJavaScript_Library/main/EasyJavaScript.js',
	functionsArray: ['copy()', 'random()', 'clock()', 'docId()', 'docTag()', 'docClass()', 'blockById()', 'noneById()', 'blockByTag()', 'noneByTag()', 'blockByClass()', 'noneByClass()', 'randomColor()', 'time()', 'colorById()', 'colorByTag()', 'colorByClass()', 'bgColorById()', 'bgColorByTag()', 'bgColorByClass()'],
	resum: function() {
		alert('Library:\n\n\nname: ' + this.name + '\n\ndescription: ' + this.description + '\n\nrepository: ' + this.repository + '\n\nsource: ' + this.source + '\n\n\nFor the functions list use the library.functions() function.');
	},
	functions: function() {
		alert(this.functionsArray.join('\n'));
	}
}

// copy() Function
function copy(text) {
	let textArea = document.createElement('textarea');
	document.body.appendChild(textArea);
	textArea.value = String(text);
	textArea.select();
	document.execCommand('copy');
	document.body.removeChild(textArea);
}

// random() Function
function random(n) {
	return Math.round( Math.random() * parseInt(n) );
}

// clock() Function
function clock() {
	let date = new Date();
	let h = String(date.getHours());
	if (h.length == 1) {
		h = '0' + h;
	}
	let m = String(date.getMinutes());
	if (m.length == 1) {
		m = '0' + m;
	}
	let s = String(date.getSeconds());
	if (s.length == 1) {
		s = '0' + s;
	}
	return h + ':' + m + ':' + s;
}

// docId() Function
function docId(i) {
	return document.getElementById(String(i));
}

// docTag() Function
function docTag(t, n) {
	return document.getElementsByTagName(String(t))[parseInt(n)];
}

// docClass() Function
function docClass(c, n) {
	return document.getElementsByClassName(String(c))[parseInt(n)];
}

// blockById() Function
function blockById(i) {
	return docId(String(i)).style.display = 'block';
}

// noneById() Function
function noneById(i) {
	return docId(String(i)).style.display = 'none';
}

// blockByTag() Function
function blockByTag(i, n) {
	return docTag(String(i), parseInt(n)).style.display = 'block';
}

// noneByTag() Function
function noneByTag(i, n) {
	return docTag(String(i), parseInt(n)).style.display = 'none';
}

// blockByClass() Function
function blockByClass(i, n) {
	return docClass(String(i), parseInt(n)).style.display = 'block';
}

// noneByClass() Function
function noneByClass(i, n) {
	return docClass(String(i), parseInt(n)).style.display = 'none';
}

// randomColor() Function
function randomColor() {
	return 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
}

//  date() Function
function date() {
	let date = new Date();
	let d = String(date.getDate());
	if (d.length == 1) {
		d = '0' + d;
	}
	let m = String(date.getMonth());
	if (m.length == 1) {
		m = '0' + m;
	}
	let y = String(date.getFullYear());
	return d + '/' + m + '/' + y;
}

// colorById() Function
function colorById(i, color) {
	docId(i).style.color = String(color);
}

// colorByTag() Function
function colorByTag(t, n, color) {
	docTag(t, n).style.color = String(color);
}

// colorByClass() Function
function colorByClass(c, n, color) {
	docClass(c, n).style.color = String(color);
}

// bgColorById() Function
function bgColorById(i, color) {
	docId(i).style.backgroungColor = String(color);
}

// bgColorByTag() Function
function bgColorByTag(t, n, color) {
	docTag(t, n).style.backgroundColor = String(color);
}

// bgColorByClass() Function
function bgColorByClass(c, n, color) {
	docClass(c, n).style.backgroundColor = String(color);
}

// fontById() Function
function fontById(i, f) {
	docId(i).style.fontFamily = String(f);
}

// fontByClass() Function
function fontByClass(c, n, f) {
	docClass(c, n).style.fontFamily = String(f);
}

// fontByTag() Function
function fontByTag(t, n, f) {
	docTag(t, n).style.fontFamily = String(f);
}