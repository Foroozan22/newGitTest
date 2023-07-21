function toggleList() {
  const arrow = document.getElementById("arrow");
  const workList = document.getElementById("work-list");

  if (arrow.classList.contains("rotate")) {
      arrow.classList.remove("rotate");
      workList.classList.add("hidden");
  } else {
      arrow.classList.add("rotate");
      workList.classList.remove("hidden");
  }
}
  function toggleImages() {
    var imageFigures = document.querySelectorAll('.image-figure');
    var pTag = document.querySelector('p');
  
    for (var i = 0; i < imageFigures.length; i++) {
      if (imageFigures[i].classList.contains('hidden')) {
        imageFigures[i].classList.remove('hidden');
        pTag.classList.add('underline');
      } else {
        imageFigures[i].classList.add('hidden');
        pTag.classList.remove('underline');
      }
    }
  }
  function searchFigure() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const figures = document.querySelectorAll(".image-figure");

    figures.forEach((figure) => {
        const figCaption = figure.querySelector("figcaption");
        const code = figCaption.innerText.split("code: ")[1];

        if (searchInput === "") {
            figure.style.display = "block";
        } else {
            if (code.toLowerCase().includes(searchInput)) {
                figure.style.display = "block";
            } else {
                figure.style.display = "none";
            }
        }
    });
}

let isPriceVisible = false;

function showPrice(code) {
    const priceDisplay = document.getElementById("price-display");
    const price = getPriceByCode(code);

    if (price && !isPriceVisible) {
        priceDisplay.textContent = "Price: " + price;
        priceDisplay.classList.remove("hidden");
        isPriceVisible = true;
    } else {
        priceDisplay.classList.add("hidden");
        isPriceVisible = false;
    }
}

function getPriceByCode(code) {
    // Replace with your logic to retrieve the price based on the code
    if (code === "22") {
        return "$100";
    } else if (code === "24") {
        return "$150";
    } else if (code === "25") {
        return "$200";
    } else if (code === "26") {
        return "$180";
    } else if (code === "27") {
        return "$250";
    }

    return null;
}

// for the gallery-image

const imageGallery = [
    "images/IMG_0068.JPG",
    "images/IMG_0063.JPG",
    "images/IMG_0020.JPG",
    "images/decoration.JPG",
    "images/a365419e-84a1-4e73-8279-440064a600f2.JPG"
  ];
  
  let currentImageIndex = 0;
  
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + imageGallery.length) % imageGallery.length;
    showGalleryImage();
  }
  
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    showGalleryImage();
  }
  
  function showGalleryImage() {
    const galleryImage = document.getElementById("gallery-image");
    const codeDisplay = document.getElementById("image-code-display");
    galleryImage.src = imageGallery[currentImageIndex];
    codeDisplay.textContent = "Code: " + getCodeByIndex(currentImageIndex);
  }
  
  function getCodeByIndex(index) {
    // Replace with your logic to retrieve the code based on the image index
    const codes = ["22", "24", "25", "26", "27"];
    return codes[index];
  }
  
  showGalleryImage();
  
  // for the greeting
  document.addEventListener('DOMContentLoaded', function() {
    const greetingMessage = 'Hi, welcome to my page!';
    alert(greetingMessage);
});
  
  
  
  
  


