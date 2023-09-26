console.log("Another Project : Library Website");

//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}


//Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI.");
    tableBody = document.getElementById("tableBody");
    let uiString = `
                     <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>  `;

    tableBody.innerHTML += uiString;
}
//Impliment the clear function.
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//Impliment the validate function.
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2 )
     {
        return false;
    }
    else {
        return true;
    }
}


Display.prototype.show = function (type , displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show " role="alert">
        <strong>Message</strong> ${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>   `;

    setTimeout(function() 
    {
        message.innerHTML=""
    },2000);
}





//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted library form.");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("Author").value;


    let Magazine = document.getElementById("Magazine");
    let Novel = document.getElementById("Novel");
    let Fiction = document.getElementById("Fiction");
    let Cooking = document.getElementById("Cooking");

    let type;

    if (Magazine.checked) {
        type = Magazine.value;
    }
    else if (Novel.checked) {
        type = Novel.value;
    }
    else if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();


    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success"," Your book has been successfully added." );
    }
    else {
        display.show("danger"," Soory! You cannot add this book.");
    }


    e.preventDefault();

}

