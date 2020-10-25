$('body').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 55);
    var amountMovedY = (e.pageY * -1 / 55);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});