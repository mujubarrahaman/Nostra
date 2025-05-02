// Side Nav bar , Menu Icon

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})


// Like Heart

// var likeButtons = document.querySelectorAll(".likebutton");

// likeButtons.forEach(function (button) {
//   var emptyHeart = button.querySelector(".heartempty");
//   var fillHeart = button.querySelector(".fillempty");

//   emptyHeart.addEventListener("click", function () {
//     emptyHeart.style.display = "none";
//     fillHeart.style.display = "block";
//   });

//   fillHeart.addEventListener("click", function () {
//     fillHeart.style.display = "none";
//     emptyHeart.style.display = "block";
//   });
// });

var likebutton = document.querySelectorAll(".likebutton");

likebutton.forEach(function (button) {

    var heartempty = button.querySelector(".heartempty");
    var fillheart = button.querySelector(".fillempty");

    heartempty.addEventListener("click", function () {
        heartempty.style.display = "none";
        fillheart.style.display = "block";
    });
    fillheart.addEventListener("click", function () {
        fillheart.style.display = "none";
        heartempty.style.display = "block";
    });



});



