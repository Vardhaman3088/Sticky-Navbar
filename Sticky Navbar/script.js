window.addEventListener('scroll',function(){
    let ele=document.getElementById("nav");

     if(window.pageYOffset>=275){
        ele.classList.add('sticky');
     }
     else{
        ele.classList.remove('sticky');
     }
})