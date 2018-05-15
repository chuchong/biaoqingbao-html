function resizeScroll(){
    //
    var k = window.innerHeight / 762;//以762为预定页面高度
    var height = (window.innerHeight-64*k);//64是头部高度
    //
    document.getElementById("scroll").style.height=height.toString()+"px";//使用时需要给id = “scroll”
    //
}
