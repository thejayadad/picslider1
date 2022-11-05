
const slider_img = document.getElementById("slider-img");
let images = ["pic1.png", "pic2.png", "pic3.png"];
let i = 0;

function prev(){
	if(i <= 0)
    i = images.length;
	i--;
	return setImg();
}

function next(){
	if(i >= images.length-1)
    i = -1;
	i++;
	return setImg();
}

function setImg(){
	return slider_img.setAttribute('src', images[i]);

}