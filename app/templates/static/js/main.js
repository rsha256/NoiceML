function memSort(event) {
    $('#enterCheck').keydown(function (e) {
        if (e.keyCode === 13) {
            alert("Enter was pressed ");
        }
    });
}
$('#enterCheck').keydown(function (e) {
    if (e.keyCode === 13) {
        alert("Enter was pressed ");
    }
});

document.getElementById("startTime").innerHTML = new Date().toLocaleTimeString();
