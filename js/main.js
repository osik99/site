$(function(){
    $(".mtb").click(function(){
        $(".gnb").slideToggle();
    }/* ,function(){} */)


$(".s_slect span , .s_box").hover(function(){
    $(".s_box").stop().slideDown();
},function(){
    $(".s_box").stop().slideUp();
})


})