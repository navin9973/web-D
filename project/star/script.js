let num;

document.getElementById("star").addEventListener("change", function (e) {
    console.log("E", e.target.value);
    num = e.target.value;
});
