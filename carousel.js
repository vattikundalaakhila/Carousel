const left_btn = document.getElementById("left_btn")
const right_btn = document.getElementById("right_btn")

const carousel = document.querySelector(".carousel_cards");
//this is the container that has all the carousel cards

const totalCards = document.querySelectorAll(".carousel").length;
//we are getting total number of cards we have 

const visibleCards = 3;
//the visibleCards might vary this will be depend on the width of the cards and 
//width of the container.

let currentIndex = 0;
//the initial index will be given 0 so that, for right click index increases,
//and for left click the index decreases. 


const width = 180; //the widht of the card and this will include width+gap.



//when right arrow button is clicked
right_btn.addEventListener("click", ()=>{
    //to allow it to not keep moving after every right click after no cards
  //totalcards(10)- visiblecards(3) so only to show remaining 7 cards the 
// rightclick works after that since there will be no cards remaining the 
// click will not keep moving the x axis

    if(currentIndex <totalCards-visibleCards){
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex*width}px)`;
    
}

}
)

//when left arrow button is clicked 
left_btn.addEventListener("click", ()=>{
    if(currentIndex>0){
    currentIndex--;;
    carousel.style.transform = `translateX(-${currentIndex*width}px)`;

    }
});