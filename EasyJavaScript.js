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
	functionsArray: ['copy()', 'random()', 'clock()', 'docId()', 'docTag()', 'docClass()', 'blockById()', 'noneById()', 'blockByTag()', 'noneByTag()', 'blockByClass()', 'noneByClass()', 'randomColor()', 'date()', 'colorById()', 'colorByTag()', 'colorByClass()', 'bgColorById()', 'bgColorByTag()', 'bgColorByClass()', 'fontById()', 'fontByClass()', 'fontByTag'],
	resum: function() {
		alert('Library:\n\n\nname: ' + this.name + '\n\ndescription: ' + this.description + '\n\nrepository: ' + this.repository + '\n\nsource: ' + this.source + '\n\n\nFor the functions list use the library.functions() function.');
	},
	functions: function() {
		return this.functionsArray.join('\n');
	}
}

// var easyJavaScriptLibrary_songs = [];

const easyjs = {

	// copy() Function
	copy: function(text) {
		let textArea = document.createElement('textarea');
		document.body.appendChild(textArea);
		textArea.value = String(text);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
	},

	// random() Function
	random: function(n) {
		return Math.round( Math.random() * parseInt(n) );
	},

	// clock() Function
	clock: function() {
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
	},

	doc: {

		id: function(i) {
			return document.getElementById(String(i));
		},

		tag: function(t) {
			return document.getElementsByTagName(String(t))[parseInt(n)];
		},
		
		class: function(c) {
			return document.getElementsByClassName(String(c))[parseInt(n)];
		}

	},

	s: {

		block: {

			id: function(i) {
				document.getElementById(String(i)).style.display = 'block';
			},

			tag: function(t) {
				document.getElementByTag(String(t)).style.display = 'block';
			},

			class: function(c) {
				document.getElementsByClassName(String(c)).style.display = 'block'
			}

		},

		color: {

			id: function(i, color) {
				document.getElementById(i).style.color = String(color);
			},

			tag: function(t, color) {
				document.getElementsByTagName(t).style.color = String(color);
			},

			class: function(c, color) {
				document.getElementsByClassName(c).style.color = String(color);
			}

		},

		bgColor: {

			id: function(i, color) {
				document.getElementById(i).style.backgroundColor = String(color);
			},

			tag: function(t, color) {
				document.getElementsByTagName(t).style.backgroundColor = String(color);
			},

			class: function(c, color) {
				document.getElementsByClassName(c).style.backgroundColor = String(color);
			}

		},

		font: {

			id: function(i, font) {
				document.getElementById(i).style.fontFamily = String(font);
			},

			tag: function(t, font) {
				document.getElementsByTagName(t).style.fontFamily = String(font);
			},

			class: function(c, font) {
				document.getElementsByClassName(c).style.fontFamily = String(font);
			}

		},

		none: {

			id: function(i) {
				document.getElementById(String(i)).style.display = 'none';
			},

			tag: function(t) {
				document.getElementByTag(String(t)).style.display = 'none';
			},

			class: function(c) {
				document.getElementsByClassName(String(c)).style.display = 'none'
			}

		},
	
	},

	// randomColor() Function
	randomColor: function() {
		return 'rgb(' + random(255) + ', ' + random(255) + ', ' + random(255) + ')';
	},

	// date() Function
	date: function() {
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

}