const cards=document.querySelectorAll('.slide');
const track=document.getElementById('slide-cont');

const observerOptions={
    root:track,
    rootMargin:'0px -35% 0px -35%',
    threshold:0.5
};

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

cards.forEach(card => observer.observe(card));

function goTab(btn, id){
    document.querySelectorAll('.option1').forEach(t=>t.classList.remove('active-option'));
    btn.classList.add('active-option');

    const firstCard=document.getElementById(id);
    firstCard.scrollIntoView({behavior: 'smooth', inline:'center'});
}

function setActiveTab(catId){
    document.querySelectorAll('.option1').forEach(tab=>{
        if(tab.getAttribute('data-id')===catId){
            tab.classList.add('active-option');
        }else{
            tab.classList.remove('active-option');
        }
    });
}
const categoryStarts=document.querySelectorAll('.category-start');
const trackContainer=document.getElementById('slide-cont');
const catObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const activeCategory=entry.target.getAttribute('data-cat');
            setActiveTab(activeCategory);
        }
    });
}, {
    root:trackContainer,
    rootMargin:'0px -34% 0px -34%',
    threshold:0.5
});
categoryStarts.forEach(card=>catObserver.observe(card));

const searchInput=document.querySelector('.input');
const sliderContainer=document.querySelector('.slider');

searchInput.addEventListener('input', (e)=>{
    const searchTerm=e.target.value.toLowerCase().trim();
    const cards=document.querySelectorAll('.slide');
    let matchedCard=null;

    cards.forEach(card=>{
        const cardName=card.querySelector('.coffee-name').textContent.toLowerCase();

        if(searchTerm!=="" && cardName.includes(searchTerm)){
            matchedCard=card;
            card.style.border="1px solid black";
            
        }else{
            card.style.border="none";
        }
    });

    if(matchedCard){
        matchedCard.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        });
    }
});

const footerOpen=document.querySelector('.footer-open');
const footerClose=document.querySelector('.footer-close');
const footerPage=document.querySelector(".footer");

footerOpen.addEventListener("click", ()=>{
    footerPage.classList.toggle("yes-footer");
    
});
footerClose.addEventListener("click", ()=>{
    footerPage.classList.toggle("yes-footer");
    
});

const coffeeOpen=document.querySelector('.cf');
const coffeeClose=document.querySelector('.home');
const mainPage=document.querySelector('.main');

coffeeClose.addEventListener('click', ()=>{
    mainPage.classList.toggle('yes-main');
})
coffeeOpen.addEventListener('click', ()=>{
    mainPage.classList.toggle('yes-main');
})
 
const search=document.querySelector(".input");
search.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        event.preventDefault();
    }
});

const card1Open=document.getElementById("cd1o");
const card1Content=document.querySelector(".macchiato-cortado");
const card1Close=document.getElementById("cd1c");
card1Open.addEventListener("click", ()=>{
    card1Content.classList.toggle('yes-card-show');
});
card1Close.addEventListener('click', ()=>{
    card1Content.classList.toggle('yes-card-show');
});
const card2Open=document.getElementById("cd2o");
const card2Content=document.querySelector(".affogato");
const card2Close=document.getElementById("cd2c");
card2Open.addEventListener("click", ()=>{
    card2Content.classList.toggle('yes-card-show');
});
card2Close.addEventListener('click', ()=>{
    card2Content.classList.toggle('yes-card-show');
});
const card3Open=document.getElementById("cd3o");
const card3Content=document.querySelector(".ristretto");
const card3Close=document.getElementById("cd3c");
card3Open.addEventListener("click", ()=>{
    card3Content.classList.toggle('yes-card-show');
});
card3Close.addEventListener('click', ()=>{
    card3Content.classList.toggle('yes-card-show');
});
const card4Open=document.getElementById("cd4o");
const card4Content=document.querySelector(".flat-white");
const card4Close=document.getElementById("cd4c");
card4Open.addEventListener("click", ()=>{
    card4Content.classList.toggle('yes-card-show');
});
card4Close.addEventListener('click', ()=>{
    card4Content.classList.toggle('yes-card-show');
});
const card5Open=document.getElementById("cd5o");
const card5Content=document.querySelector(".nitro-cold-brew");
const card5Close=document.getElementById("cd5c");
card5Open.addEventListener("click", ()=>{
    card5Content.classList.toggle('yes-card-show');
});
card5Close.addEventListener('click', ()=>{
    card5Content.classList.toggle('yes-card-show');
});
const card6Open=document.getElementById("cd6o");
const card6Content=document.querySelector(".frappe");
const card6Close=document.getElementById("cd6c");
card6Open.addEventListener("click", ()=>{
    card6Content.classList.toggle('yes-card-show');
});
card6Close.addEventListener('click', ()=>{
    card6Content.classList.toggle('yes-card-show');
});
const card7Open=document.getElementById("cd7o");
const card7Content=document.querySelector(".americano");
const card7Close=document.getElementById("cd7c");
card7Open.addEventListener("click", ()=>{
    card7Content.classList.toggle('yes-card-show');
});
card7Close.addEventListener('click', ()=>{
    card7Content.classList.toggle('yes-card-show');
});
const card8Open=document.getElementById("cd8o");
const card8Content=document.querySelector(".latte");
const card8Close=document.getElementById("cd8c");
card8Open.addEventListener("click", ()=>{
    card8Content.classList.toggle('yes-card-show');
});
card8Close.addEventListener('click', ()=>{
    card8Content.classList.toggle('yes-card-show');
});
const card9Open=document.getElementById("cd9o");
const card9Content=document.querySelector(".ice-americano");
const card9Close=document.getElementById("cd9c");
card9Open.addEventListener("click", ()=>{
    card9Content.classList.toggle('yes-card-show');
});
card9Close.addEventListener('click', ()=>{
    card9Content.classList.toggle('yes-card-show');
});
const card10Open=document.getElementById("cd10o");
const card10Content=document.querySelector(".ice-mocha");
const card10Close=document.getElementById("cd10c");
card10Open.addEventListener("click", ()=>{
    card10Content.classList.toggle('yes-card-show');
});
card10Close.addEventListener('click', ()=>{
    card10Content.classList.toggle('yes-card-show');
});
const card11Open=document.getElementById("cd11o");
const card11Content=document.querySelector(".espresso");
const card11Close=document.getElementById("cd11c");
card11Open.addEventListener("click", ()=>{
    card11Content.classList.toggle('yes-card-show');
});
card11Close.addEventListener('click', ()=>{
    card11Content.classList.toggle('yes-card-show');
});
const card12Open=document.getElementById("cd12o");
const card12Content=document.querySelector(".cappuccino");
const card12Close=document.getElementById("cd12c");
card12Open.addEventListener("click", ()=>{
    card12Content.classList.toggle('yes-card-show');
});
card12Close.addEventListener('click', ()=>{
    card12Content.classList.toggle('yes-card-show');
});
const card13Open=document.getElementById("cd13o");
const card13Content=document.querySelector(".cold-brew");
const card13Close=document.getElementById("cd13c");
card13Open.addEventListener("click", ()=>{
    card13Content.classList.toggle('yes-card-show');
});
card13Close.addEventListener('click', ()=>{
    card13Content.classList.toggle('yes-card-show');
});
const card14Open=document.getElementById("cd14o");
const card14Content=document.querySelector(".iced-latte");
const card14Close=document.getElementById("cd14c");
card14Open.addEventListener("click", ()=>{
    card14Content.classList.toggle('yes-card-show');
});
card14Close.addEventListener('click', ()=>{
    card14Content.classList.toggle('yes-card-show');
});


const likeButton1=document.getElementById('like1');
likeButton1.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton2=document.getElementById('like2');
likeButton2.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton3=document.getElementById('like3');
likeButton3.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton4=document.getElementById('like4');
likeButton4.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton5=document.getElementById('like5');
likeButton5.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton6=document.getElementById('like6');
likeButton6.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton7=document.getElementById('like7');
likeButton7.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton8=document.getElementById('like8');
likeButton8.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton9=document.getElementById('like9');
likeButton9.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton10=document.getElementById('like10');
likeButton10.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton11=document.getElementById('like11');
likeButton11.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton12=document.getElementById('like12');
likeButton12.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton13=document.getElementById('like13');
likeButton13.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton14=document.getElementById('like14');
likeButton14.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton15=document.getElementById('like15');
likeButton15.addEventListener('click', function(){
    this.classList.toggle('like-y');
});
const likeButton16=document.getElementById('like16');
likeButton16.addEventListener('click', function(){
    this.classList.toggle('like-y');
});


const sbtn=document.querySelector(".search-button");
sbtn.addEventListener("click", function(event){
     event.preventDefault();
});





