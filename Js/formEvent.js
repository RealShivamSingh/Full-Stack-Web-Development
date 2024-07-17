let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    //by using preventdefault that after submitting form is gone on next page
    event.preventDefault();
    alert("Form submitted");

    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

});