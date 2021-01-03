function displayImages() {
    var cartoona = ``;
    for (var i = 0; i < 6; i++) {
        cartoona += `<div class="col-lg-4 col-md-6 my-3">
                        <div class="item position-relative">
                            <img src="images/portfolio-`+ (i + 1) + `.jpg" class="img-fluid" alt="">
                            <div class="item-caption text-center position-absolute">
                                <h4>item title</h4>
                                <p>lputate at, tempus viverra turpis. Fusce condimentum nunc acs</p>
                            </div>
                        </div>
                     </div>`;
    }
    document.getElementById("myRow").innerHTML = cartoona;
}
displayImages();

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