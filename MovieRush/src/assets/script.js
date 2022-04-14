const btn=document.querySelector('#btn');
const menu=document.querySelectorAll('ul');
const btn1=menu[0].querySelector('#btn-1');
const btn1Li=menu[0].querySelector('.drop-down');
console.log(btn1Li);
btn.addEventListener('click',function(){
    if(btn.checked){
        menu[0].style.display="block";     
        
    }else{
        menu[0].style.display="none";
        menu[1].style.display="none";

    }
})

btn1Li.addEventListener('click',function(){
   menu[1].classList.toggle('reveal');
})


