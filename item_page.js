const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let items = document.getElementById("numitems").value;

let imgId = 1;

// 
imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

function add_cart() {
    if (items <= 0 || items > 100) {
        alert("Please enter a valid item quantity between 1 and 100.");
        return;
    }
}
