var size = 0;

$('.next').click(function(){
    if(size === -1000){
        size = 0
    }else{
        size -=200
    }
    $('.s1').css('margin-left', size + 'px')
})

$('.prev').click(function(){
    if(size === 0){
        size = -1000
    }else{
        size +=200
    }
    $('.s1').css('margin-left', size + 'px')
})

setInterval(function(){
    $('.next').click()
},2000)