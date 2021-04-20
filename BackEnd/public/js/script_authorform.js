var name1 = document.getElementById("name");
var book = document.getElementById("book");
var genre = document.getElementById("genre");

function validate(){
    let regexp = /^([a-z A-Z])+$/;
    
    if(name1.value.trim() == "" || book.value.trim() == "" || genre.value.trim() == ""){
        alert("Fields cannot be empty!");
        return false;
    }
    else if(regexp.test(name1.value) && regexp.test(book.value) && regexp.test(genre.value)){
        return true;
    }
    else{
        alert("Details filled not proper!");
        return false;
    }
}
function valid_name(){
    let regexp = /^([a-z A-Z])+$/;
    if(regexp.test(name1.value)){
        name1.style.border= "3px solid green";
        p1.innerHTML = "Valid!";
        p1.style.color = "green";
    }
    else{
        name1.style.border= "3px solid red";
        p1.innerHTML = "Invalid!";
        p1.style.color = "red";
    }
}
function valid_book(){
    let regexp = /^([a-z A-Z])+$/;
    if(regexp.test(book.value)){
        book.style.border= "3px solid green";
        p2.innerHTML = "Valid!";
        p2.style.color = "green";
    }
    else{
        book.style.border= "3px solid red";
        p2.innerHTML = "Invalid!";
        p2.style.color = "red";
    }
}
function valid_genre(){
    let regexp = /^([a-z A-Z])+$/;
    if(regexp.test(genre.value)){
        genre.style.border= "3px solid green";
        p3.innerHTML = "Valid!";
        p3.style.color = "green";
    }
    else{
        genre.style.border= "3px solid red";
        p3.innerHTML = "Invalid!";
        p3.style.color = "red";
    }
}