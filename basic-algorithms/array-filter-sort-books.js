/**
 * Exercise: Filter and sort book objects.
 *
 * This algorithm filters books released after a given year
 * and sorts them by release date in ascending order.
 *
 * Concepts practiced:
 * - array.filter()
 * - custom sort comparator
 * - object manipulation
 */

let books = [
  {title: "123", authorName: "beatriz", releaseYear: 2001},
  {title: "magoito", authorName: "elsa", releaseYear: 1995},
  {title: "avioes", authorName: "susy paula", releaseYear: 1940}
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear > book2.releaseYear) return 1;
  return 0;
}

const filteredBooks = books.filter(book => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
