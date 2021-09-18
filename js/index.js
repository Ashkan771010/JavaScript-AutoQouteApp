var qoute = document.querySelector(".showQoute");
var author = document.querySelector(".author");
var nextBtn = document.querySelector(".nextBtn");

function loadQoute() {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        var txt =
          data[Math.floor(Math.random() * data.length)]["text"];
        console.log(txt)
        var aut = data[Math.floor(Math.random() * data.length)]["author"];

        qoute.innerHTML = txt;
        author.innerHTML = `~  ${aut}`;
    })
    .catch(err => alert('Something Is Wrong'))
}
