import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({ cloud: { cloudName: 'dwkri0lj3' } });

var username = '889895757151459';
var password = 'X3eUe1bHfAW5FJ67fPqWhR9Oqng';

var headers = new Headers({
    'Authorization': `Basic ${btoa(username + ':' + password)}`
});


fetch('https://api.cloudinary.com/v1_1/dwkri0lj3/resources/image', { headers: headers })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

for (let i = 0; i < 10; i++) {
    document.getElementById('gallery').innerHTML += `
        <li><img
        src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg">
    </li>
    `;
}

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


