//remove()

// let x = document.querySelector(".items")
// x.remove();

//cjhange

// document.querySelector(".item").innerHTML="<b>The Web Dev<b>";

// x.firstElementChild.textContent="The TWD";
// x.children[1].innerText="Youtube";
// x.lastElementChild.innerText="Youtube";

console.log(window)

//grab
// const x= document.getElementById("email");

// console.log(x);

// const x = document.querySelector(".h1")
// console.log(x);


// const x = document.querySelectorAll("h1")
// console.log(x);

// const y =document.getElementsByTagName("h1")
// console.log(y)

// y.forEach(item)

// function item(item){
//     console.log(item);
// }

// const x= document.querySelector(".container")

// x.remove()

//CHANGE

// const x= document.querySelector(".items")



// const btn = document.querySelector(".btn");

// btn.addEventListener("click",function(e){
//     e.preventDefault();
//     x.firstElementChild.textContent="The TWD";
//    x.children[1].innerText="Bootcamp"
//     x.lastElementChild.innerHTML="<b>Youtube</b>"
// })


let form = document.getElementById("my-form")
let name=document.getElementById("name");
let email=document.getElementById("email");

form.style.background="yellow"
form.style.boxShadow="0px 0px 10px blue"
// console.log(form)
form.addEventListener("submit",function(e){
     e.preventDefault()
if(name.value== "" || email.value== ""){
    let msg = document.querySelector(".msg");
    msg.innerHTML="Enter all the values";
     msg.classList.add("error");

     setTimeout(function(){
        msg.remove()
     },5000)
}else{
   let nameVal=name.value;
  let emailVal=email.value;
    const li =document.createElement("li");
    li.appendChild(document.createTextNode(`Your name is ${nameVal} -  Your Email is ${emailVal}`));

    let user = document.getElementById("users")
user.appendChild(li);

name.value="";
email.value="";

}




   console.log(name.value,email.value)
})