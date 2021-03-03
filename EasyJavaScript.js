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
