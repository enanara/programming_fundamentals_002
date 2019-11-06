// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;

}

function checkBook(book) {
  for (let i=0; i<catalogue.length; i++){

    var isInStock = false;

    if (book === catalogue[i]) {
      isInStock = true;
      return isInStock;
    } 
    
  }

  return isInStock;
}

function countBooksByFirstLetter(letter) {
  var numberOfBooks=0;
  var bookName;
  for (let i=0; i<catalogue.length; i++){
    bookName = catalogue[i];
    if (bookName[0]===letter){
      numberOfBooks = numberOfBooks+ 1;
      
    }
  }
  return numberOfBooks;
}

function countBooksByKeyword(keyword) {


  var numberThatContain = 0;

  if (((typeof keyword)==="number")||((typeof keyword)==="boolean")){
     keyword = keyword.toString();
  }

  //loop thru catalogue
  for (let i =0; i< catalogue.length; i++)
  {
       //var splitArray =  catalogue[i].split(keyword);
       if ((catalogue[i].toLowerCase()).includes(keyword.toLowerCase()))
       {
           numberThatContain++;
       }
  }

  return numberThatContain;

}

function getBooksByAuthor(author) {
  // Your code here
  const list =[];
  for (let i =0; i< catalogue.length; i++){
    var splitArray = catalogue[i].split("by");
    if ((splitArray[1].toLowerCase()).includes(author.toLowerCase())){
      list.push(catalogue[i]);
    }
  }
  return list;
  // check author name maybe use Inscludes method
  // push index of catalogue in new array 



}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};