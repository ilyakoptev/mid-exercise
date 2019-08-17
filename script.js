 function changeImage() {
     var timerid = 0;
     var images = new Array("images/image1.jpg",
         "images/image2.jpg",
         "images/image3.jpg",
         "images/image4.jpg");
     var countimages = 0;

     function startTime() {
         if (timerid) {
             timerid = 0;
         }
         var tDate = new Date();

         if (countimages == images.length) {
             countimages = 0;
         }
         if (tDate.getSeconds() % 2 == 0) {
             document.getElementById("img1").src = images[countimages];
         }
         countimages++;

         timerid = setTimeout("startTime()", 1000);
     }
     window.setInterval(startTime, 2000);
 }