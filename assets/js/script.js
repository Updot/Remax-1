function reduce(){
    var ele = document.getElementById('header-btn');
    if(screen.width <=568){
        ele.className="btn btn-primary btn-lg text-uppercase js-scroll-trigger";
        console.log('reduced');
    }
}
