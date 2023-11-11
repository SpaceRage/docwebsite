import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({ cloud: { cloudName: "dwkri0lj3" } });

var username = "889895757151459";
var password = "X3eUe1bHfAW5FJ67fPqWhR9Oqng";

var headers = new Headers({
  Authorization: `Basic ${btoa(username + ":" + password)}`,
});

document.onscroll = function () {
  //console.log(300 - document.documentElement.scrollTop);
  document.getElementById("splash").style.opacity = Math.max(
    1.0 - document.documentElement.scrollTop / 300.0,
    0
  );
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("splash").style.display = "none";
  } else {
    document.getElementById("splash").style.display = "flex";
  }
};

// document.getElementById('gallery').innerHTML = '';
// fetch('https://script.google.com/macros/s/AKfycbx40JV7AnD3iFMuDBohfg8tKbU_lL9wM2d5EZidaLFpj01PX7qliL6zmzAODoJhz5ID/exec')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);

//         data['data'].forEach(obj => {
//             document.getElementById('gallery').innerHTML += `
//             <li><img
//             src="https://drive.google.com/uc?export=view&id=${obj['img_id']}">
//         </li>
//             `;
//         })
//     });

function closeViewer() {
  document.getElementById("viewer").style.display = "none";
  document.getElementById("viewer-bg").style.display = "none";
  console.log("Hide viewer");
}

document.getElementById("viewer-bg").addEventListener("click", closeViewer);

document.getElementById("down").addEventListener("click", () => {
  document.documentElement.scrollTop = 300;
});

document.getElementById("top").addEventListener("click", () => {
  document.documentElement.scrollTop = 300;
});

// document.getElementById('gallery').innerHTML = '';

// fetch('images')
//     .then(response => {response.text();})
//     .then(data => {
//         // console.log(data);

//         var parser = new DOMParser();
//         var doc = parser.parseFromString(data, "text/html");
//         var images = Array.from(doc.querySelectorAll("a"))
//             .filter(a => /\.(jpe?g|png|gif)$/i.test(a.href))
//             .map(a => a.href);

//         // Display images on the webpage
//         images.forEach(image => {
//             // var imgElement = document.createElement("img");
//             // imgElement.src = image;
//             document.getElementById('gallery').innerHTML += `
//             <li><img class="gallery-img"
//             src="${image}">
//             </li>
//             `;
//         });

//         // data.forEach(obj => {
//         //     document.getElementById('gallery').innerHTML += `
//         //     <li><img class="gallery-img"
//         //     src="../images/${obj['name']}">
//         // </li>
//         //     `;
//         // })

//         var imgs = document.getElementsByClassName('gallery-img')
//         console.log(imgs);
//         Array.prototype.forEach.call(imgs, function (el) {
//             el.addEventListener('click', function () {
//                 document.getElementById('viewer').src = el.src;
//                 document.getElementById('viewer').style.display = 'block';
//                 document.getElementById('viewer-bg').style.display = 'block';
//                 console.log("Show viewer")
//             });
//         });
//     });

var imgs = document.getElementsByClassName("gallery-img");
console.log(imgs);
Array.prototype.forEach.call(imgs, function (el) {
  el.addEventListener("click", function () {
    document.getElementById("viewer").src = el.src;
    document.getElementById("viewer").style.display = "block";
    document.getElementById("viewer-bg").style.display = "block";
    console.log("Show viewer");
  });
});

// let scrollHeight = 0;
// document.addEventListener('scroll', () => {
//     if (document.documentElement.scrollTop > document.documentElement.scrollHeight - 2000) {
//         console.log("true");
//         document.getElementById('upload_widget').style.display = 'none';
//     } else {
//         console.log("false");
//         document.getElementById('upload_widget').style.display = 'block';
//     }
// }
// );

// get current scroll position
