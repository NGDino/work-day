var today = moment().format('MMMM Do YYYY')
var currentDayEl = $('#currentDay')

currentDayEl.text(today)

//var buttonEl = $('.btn')

$('.btn').click(function(){
    console.log('button works')
})
