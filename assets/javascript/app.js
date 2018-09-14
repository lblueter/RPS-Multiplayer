var wins = 0
var losses = 0
var youPicked
var theyPicked

// var rock = $("#rock").attr("data-type")
// console.log(rock)

$(document).on("click", "#choice", function () {
    youPicked = $(this).attr("data-type")
    console.log(youPicked)
})