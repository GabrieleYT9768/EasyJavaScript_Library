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
function random(number) {
    return Math.round( Math.random() * number );
}

// clock() Function
function clock() {
    let date = new Date();
    let hours = String(date.getHours());
    if (hours.length == 1) {
        hours = '0' + hours;
    }
    let minutes = String(date.getMinutes());
    if (minutes.length == 1) {
        minutes = '0' + minutes;
    }
    let seconds = String(date.getSeconds());
    if (seconds.length == 1) {
        seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
}

// id() Function
function id(i) {
    return document.getElementById(String(i));
}

// tag() Function
function tag(t, n) {
    return document.getElementsByTag(String(t))[parseInt(n)];
}

// class() Function
function class(c, n) {
    return document.getElementsByClass(String(c))[parseInt(n)];
}
