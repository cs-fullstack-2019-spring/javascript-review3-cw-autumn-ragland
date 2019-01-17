// problem01();
// problem02();
// problem03();
// problem04();

//Put the start of your program in a main function.
// Create a loop that takes user input and put it in an array.
// Once the user quits, print all items in the array.
// DO NOT print the array, print the items/elements in the array.
function problem01()
{
    let array = [];
    let userInput = "";
    while(userInput !== "q")
    {
        array.push(userInput);
        userInput = prompt("Type anything in! Enter q to quit.");
    }
    for (let i=0;i<array.length;i++)
    {
        console.log(array[i])
    }
}

//Put the start of your program in a main function.
// Create a function that can translate five English words into Spanish words.
// You should be able to call your function from your main function.
function problem02()
{
    translate();
   function translate()
   {
       let englishWord = prompt("Translate hello, goodbye, woman, man, or dog?");
       switch (englishWord)
       {
           case "hello":
               console.log("hola");
               break;
           case "goodbye":
               console.log("adios");
               break;
           case "woman":
               console.log("mujer");
               break;
           case "man":
               console.log("hombre");
               break;
           case "dog":
               console.log("perro");
               break;
           default:
               console.log("ERROR")
       }
   }

}

//Put the start of your program in a main function.
// Create a program that takes number inputs into an array until a quit word.
// Afterwards, display all numbers (not the array) and the sum.
function problem03()
{
    let array = [];
    let userInput = parseInt("");
    while(userInput !== 0)
    {
        userInput =parseInt(prompt("Enter a number, enter 0 to quit"));
        array.push(userInput);

    }
    for (let i=0;i<array.length-1;i++)
    {
        console.log(array[i])
    }
    function addIt (total,number)
    {
    return (total + number)
    }

    let sum = array.reduce(addIt);
    console.log("The sum of these numbers is " + sum);
}

//Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author.
// Create a class method that will call a function that will change the rating of the book.
// Create three objects of the class Book and put them in an array.
// Lastly, use the array to display only the names of the books.
function problem04()
{

 class Books
 {
     constructor (name,rating,genre,author)
     {
    this.name = name;
    this.rating = rating;
    this.genre = genre;
    this.author = author;
     }
     newRating(input)
    {
     return (this.rating = input)
    }

 }
    let book1 = new Books("Wow a Book",2,"fiction","Bob Dude");
    let book2 = new Books("Wow another Book",7,"non fiction","Bob MyGuy");
    let book3 = new Books("Wow yet another Book",9,"young adult","Bob Man");

    console.log(book1.newRating(10));

    let booksArray =[book1,book2,book3];


    for (let i=0;i<booksArray.length;i++)
    {
        console.log(booksArray[i].name)
    }

}