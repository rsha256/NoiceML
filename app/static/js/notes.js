// document.getElementById('note-text').onkeydown = function (e) {
//     console.log("hello");
//     if (e.keyCode == 13) {
//         if (document.getElementById('note-text').innerText == "") {
//             var temp = new Date().toLocaleTimeString();
//             document.getElementsByClassName('notes-list') += "   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>" + temp + "</span><p class='ml-3 right-align ' style='text-align: justify'>" + document.getElementById('note-text').innerText + "</p></div></div>"
//         }
//     }
// };

// function runn(){
//     var temp = new Date().toLocaleTimeString();
//     document.getElementsByClassName('notes-list') += "   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>" + temp + "</span><p class='ml-3 right-align ' style='text-align: justify'>" + document.getElementById('note-text').innerText + "</p></div></div>"
//     console.log("asdfasd")

// }

// $('.dropdown-trigger').dropdown();

var socket = io.connect('http://noiceml.com/ws:8888');
socket.on('transcript-update', onmessage);

function onmessage(data) {

    var text = data;
    console.log(text)
    document.getElementById('transcript').innerHTML += "   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>" + timestamp + "</span><p class='ml-3 right-align ' style='text-align: justify; word-wrap: break-word'>" + text + "</p></div></div>"

}


var input = document.getElementsByClassName("note-text")[0];

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 && document.getElementsByClassName("note-text")[0].value != "") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        var temp = new Date().toLocaleTimeString();
        document.getElementById('notes-list').innerHTML += "   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>" + temp + "</span><p class='ml-3 right-align ' style='text-align: justify; word-wrap: break-word'>" + document.getElementsByClassName('note-text')[0].value + "</p></div></div>"
        socket.emit(document.getElementsByClassName("note-text")[0].value)
        document.getElementsByClassName("note-text")[0].value = "";
    }
});