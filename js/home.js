(function(){
   if(localStorage.getItem("user")==null){
    swal.fire({title:"log in first", type: "error"})
    .then((value) => {
        window.location.href = "form.html";
    });
   }
   else{
       document.getElementById("user").innerHTML=localStorage.getItem("user")
   }
})()