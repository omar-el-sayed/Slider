var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex;

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (eventInfo) {
        currentIndex = imgs.indexOf(eventInfo.target); // index of ( eventInfo.target => img that user clicked )
        var imgSrc = eventInfo.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace("d-none", "d-flex");
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function closeSlide() {
    lightBoxContainer.classList.replace("d-flex", "d-none");
}

// Mouse Events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlide);
lightBoxContainer.addEventListener("click", function (eventInfo) {
    if (eventInfo.target.getAttribute("id") == "lightBoxContainer") {
        closeSlide();
    }
});

// Keyboard Events
document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowRight") {
        nextSlide();
    }
    else if (e.code == "ArrowLeft") {
        prevSlide();
    }
    else if (e.code == "Escape") {
        closeSlide();
    }
})