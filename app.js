function changebgC (){
    var input = document.getElementById("color");
    bgcolor = prompt("Enter Your Color");
    input.style.backgroundColor = bgcolor;

}
function changetexcolor (){
    var input = document.getElementById("xyz");
    text = prompt("Enter Color Name");
    input.style.color = text;
}
function alha(){
    var input = document.getElementById("img");
    input.style.display = "none";
}
function beta(){
    var input = document.getElementById("img");
    input.style.display = "block";   
}
function small (){
    var input = document.getElementById("img");
    input.style.width = "150px";
    input.style.height = "150px";
}
function large (){
    var input = document.getElementById("img");
    input.style.width = "250px";
    input.style.height = "250px";
}

function setNewimg(){
    var input = document.getElementById("img1").src = "./img/pic_bulbon.gif";
}
function setoldimg(){
    var input = document.getElementById("img1").src = "./img/pic_bulboff.gif";

}
function changeparaC(){
    var input = document.getElementById("para1");
    var color = prompt("Enter Your Favourite Color");
    input.style.color = color;
}

function change(){
    var foo = document.getElementById("para2").childNodes[1];
    var color = prompt("Enter your Color ");
    // console.log(foo);
    foo.style.color = color;
}
function change(){
    var foo = document.getElementById("ffff");
    var color = prompt("Enter your Color ");
    // console.log(foo);
    foo.style.color = color;
}