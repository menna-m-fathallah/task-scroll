(function(){
    document.forms.login.addEventListener("submit",function(evt){
        evt.preventDefault();
        if(event.target.username.value&&event.target.username.value){
            localStorage.setItem("user",event.target.username.value);
            window.location.href = "index.html";
        }
        else{
            swal.fire({title:"Enter username and password first ", type: "error"})
        }
        
    })
    document.getElementById("show").addEventListener("click",function () {
        var classes=this.classList[1]

        if(classes=="fa-eye"){
            console.log(classes)
            this.classList.remove( "fa-eye" )
            this.classList.add( "fa-eye-slash" );
            document.getElementsByTagName("input")[1].type="text";
        }
        else{
            this.classList.add( "fa-eye" )
            this.classList.remove( "fa-eye-slash" );
            document.getElementsByTagName("input")[1].type="password";
        }
    })
})()