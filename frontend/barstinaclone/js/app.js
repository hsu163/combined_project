$(document).ready(function(){
    // console.log("hey");


    // Start Rooms Section 
    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
      });
    // End Rooms Section 

    // Start Footer Section

    $("#getyear").text(new Date().getFullYear());

    // End Footer Section

    
});

// Start Testimonial 

const testimonial = document.querySelector(".testimonial");
const companyname = document.querySelector(".companyname");
const role = document.querySelector(".role");

const testimonials = [
  {
    name:"Rich Start Restaurant",
    position:"Our Outlet",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    name:"42 Sky Bar",
    position:"Our Partner",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    name:"Cool Land Swimming Pool",
    position:"Our Client",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    name:"58 Beach Hotel",
    position:"Our Branch",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    name:"Chaung Thar Spa",
    position:"Our Bussiness",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  }
];



let idx = 0;

function updatetestimonial(){
  const {name,position,text} = testimonials[idx];
  // console.log(name,position,text);

  companyname.textContent = name;
  role.textContent = position;
  testimonial.textContent = text;

  idx++;

  if(idx > testimonials.length-1){
    idx = 0;
  }
}

setInterval(updatetestimonial,10000);
    
// End Testimonial


// Start Contact Section
function tabbox(name,ele,color){
  var tabcontent = document.getElementsByClassName("tabcontents");
  for(i = 0; i < tabcontent; i++){
    tabcontents[i].style.display = "none";
  }

  document.getElementById(name).style.display = "block";
  tablinks = document.getElementsByClassName("tablink");

  for(i = 0; i < tablinks.length; i++){
    tablinks[i].style.backgroundColor = "";
  }

  ele.style.backgroundColor = color;

}
// End Contact Section


// Start Banner

function* genfun(){
	var idx = 10;

	while(true){
		yield idx++;

		if (idx > 13) {
			idx = 10;
		}
	}
}

var getgen = genfun();
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);
// console.log(genfun.next().value);

var getheader = document.querySelector('header');
getheader.style.background = `url(./assets/img/banner/banner${getgen.next().value}.jpg)`;

function autobg(){
	getheader.style.background = `url(./assets/img/banner/banner${getgen.next().value}.jpg)`;
}

setInterval(autobg,2500);

// End Banner

// Start Chatbox
function openform(){
    document.getElementById("mychat").style.display = "block";
}

function closeform(){
    document.getElementById("mychat").style.display = "none";
}
// End Chatbox

// 8CB