import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({ cloud: { cloudName: 'dwkri0lj3' } });

var username = '889895757151459';
var password = 'X3eUe1bHfAW5FJ67fPqWhR9Oqng';

var headers = new Headers({
    'Authorization': `Basic ${btoa(username + ':' + password)}`
});

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

function viewImage(el) {
    console.log("Viewing image.");
}

document.getElementById('gallery').innerHTML = '';
fetch('https://docimageapi.airman416.repl.co/images')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.forEach(obj => {
            document.getElementById('gallery').innerHTML += `
            <li><img
            src="https://docimageapi.airman416.repl.co/images/${obj['name']}" onclick="viewImage(el)">
        </li>
            `;
        })
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


