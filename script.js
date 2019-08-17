function changeImage() {

    var images = new Array("images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg");
    var countimages = 0;

    function startTime() {
        if (countimages == images.length) {
            countimages = 0;
        }
        document.getElementById("img1").src = images[countimages];
        countimages++;

    }
    window.setInterval(startTime, 2000);
}