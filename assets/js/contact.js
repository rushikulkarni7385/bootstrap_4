let cl = console.log;
//  alert("hello")
const form = document.getElementById("form");
 cl(form)
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const para = document.getElementById("para");
const para2 = document.getElementById("para2");
const para1 = document.getElementById("para1");


lname.setAttribute("required"," ")
cl(lname)
para.style.color = "red"
para1.style.color = "red"
para2.style.color = "red"
email.addEventListener("blur",function(e){
   if(this.value.slice(-4) !== ".com" || this.value !== "@"){
      cl("something is wrong");
      para.innerHTML = "Enter valid a Email"
   }   
})

lname.addEventListener("blur", function(e){
      cl(e)
      if(this.value < 8){
            cl("somethig is wrong")
            para1.innerHTML = "invalid userName"
      }
})

fname.addEventListener("blur", function(e){
     cl(e)
     if(this.value < 8){
           cl("somethig is wrong")
           para2.innerHTML = "invalid userName"
     }
})

form.addEventListener("submit", function(e){
      e.preventDefault();
       
      e.target.reset()
})



