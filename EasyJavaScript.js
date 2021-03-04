/*

EasyJavaScript Library

This code is Copyright ©

*/

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
