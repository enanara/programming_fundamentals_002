const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });



describe("catalogueService.checkBook", () => {
  test("returns true if the book exists in the list", () => {
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
  });
  test("returns false if the book exists in the list", () => {
    expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
  });
});


describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns the number of books beginning with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });
  test("returns 0 if no books begin with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
  });
});


describe("catalogueService.countBooksByKeyword", () => {
  test("returns the number of books that has assassin in the title", () => {
    expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
  });
  test("returns the number of books that has normal in the title", () => {
    expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
  });

  test("returns the number of books that has pineapple in the title", () => {
    expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
  });

  test("returns the number of books that has the number 2666 in the title", () => {
    expect(catalogueService.countBooksByKeyword(2666)).toBe(1);
  });

  test("returns the number of books that has pineapple in the title", () => {
    expect(catalogueService.countBooksByKeyword(true)).toBe(0);
  });

});
describe("catalogueService.getBooksByAuthor", () => {
  test("returns aray of books by Charles Dickens", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"
    ]);
  });
  test("returns array of books by Sal", () => {
    expect(catalogueService.getBooksByAuthor("Sal")).toEqual([
      "The Catcher in the Rye by J.D. Salinger",
      "Conversations With Friends by Sally Rooney",
      "Normal People by Sally Rooney"
    ]);
  });
  test("returns empty array", () => {
    expect(catalogueService.getBooksByAuthor("Carly Ena")).toEqual([
    ]);
  });
  test("returns Whole catalgue array", () => {
    expect(catalogueService.getBooksByAuthor(" ")).toEqual([
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
    ]);
  });
});

});