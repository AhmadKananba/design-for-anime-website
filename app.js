const carouselSlide = document.querySelector('.carousel1-slide');
const carouselImages = document.querySelectorAll('.carousel1-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listners

nextBtn.addEventListener('click',()=>{
if(counter >= carouselImages.length -1)return;    
carouselSlide.style.transition = "transform 0.6s ease-in-out";
counter++;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
                         
                         });


prevBtn.addEventListener('click',()=>{
if(counter <=0)return;    
carouselSlide.style.transition = "transform 0.8s ease-in-out";
counter--;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
                         
                         });


carouselSlide.addEventListener('transitionend', ()=>{
if(carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition ="none";
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';      
}
    
    
if(carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition ="none";
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
}
});

//-----------ANOTHER SECTION --------------------

const workPls = document.querySelector('.workpls');
const workplsImages = document.querySelectorAll('.workpls img');

//buttons
const provBtn = document.querySelector('#previousBtn');
const noxtBtn = document.querySelector('#nextButton');

//Counter
let counterer = 6;
const sizer = workplsImages[0].clientWidth;

workPls.style.transform = 'translateX(' + (-sizer * counterer) + 'px)';

//Button Listners
noxtBtn.addEventListener('click',()=>{
if(counterer >= workplsImages.length -1)return;    
workPls.style.transition = "transform 0.4s ease-in-out";
counterer++;
workPls.style.transform = 'translateX(' + (-sizer * counterer) + 'px)';    
                         
                         });


provBtn.addEventListener('click',()=>{
if(counterer <=0)return;    
workPls.style.transition = "transform 0.4s ease-in-out";
counterer--;
workPls.style.transform = 'translateX(' + (-sizer * counterer) + 'px)';    
                         
                         });


workPls.addEventListener('transitionend', ()=>{
if(workplsImages[counterer].id === 'lastPico') {
    workPls.style.transition ="none";
    counterer = workplsImages.length -2;
    workPls.style.transform = 'translateX(' + (-sizer * counterer) + 'px)';      
}
    
    if(workplsImages[counterer].id === 'firstPico') {
      workPls.style.transition ="none";
    counterer = workplsImages.length -counterer;
    workPls.style.transform = 'translateX(' + (-sizer * counterer) + 'px)'; 
}
});



//-----------Images pagenation --------------------
const contaiNerer=document.querySelector(".containerer").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const maxItem=8;
let index=4;
const page=document.querySelector(".page");

const pagination=Math.ceil(contaiNerer.length/maxItem);


prev.addEventListener("click",function(){
    index--;
    showItems();
    check();
    })
    
   next.addEventListener("click", function(){
    index++
    showItems();
    check();   
    })

function check(){
    if(index==pagination){
        next.classList.add("disabled");
    }
    else{
        next.classList.remove("disabled");
    }
    
    if(index==1){
        prev.classList.add("disabled");
    }
    else{
        prev.classList.remove("disabled");
    }
}



function showItems() {
    for(let i=0; i<contaiNerer.length; i++){
       
        contaiNerer[i].classList.remove("show");
        contaiNerer[i].classList.add("hide");
        
        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            
            contaiNerer[i].classList.remove("hide");
            contaiNerer[i].classList.add("show");
        }
        page.innerHTML = index;
    }
}

window.onload=showItems();




