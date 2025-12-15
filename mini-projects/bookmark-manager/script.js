function getBookmarks() {
  const data = localStorage.getItem("bookmarks");
  if (!data) return [];
  try {
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];

    const isValid = parsed.every(b =>
      b &&
      typeof b === "object" &&
      typeof b.name === "string" &&
      typeof b.category === "string" &&
      typeof b.url === "string"
    );
    return isValid ? parsed : [];

  } catch {
    return [];
  }
}

function displayOrCloseForm() {
  document.getElementById("main-section").classList.toggle("hidden");
  document.getElementById("form-section").classList.toggle("hidden");
}

function getSelectedCategory() {
  return document.getElementById("category-dropdown").value;
}

document.getElementById("add-bookmark-button").addEventListener("click", () => {
  document.querySelector(".category-name").innerText = getSelectedCategory();
  displayOrCloseForm();
});

document.getElementById("close-form-button").addEventListener("click", () => {
  displayOrCloseForm();
});

document.getElementById("add-bookmark-button-form").addEventListener("click", updateBookMarks );

function updateBookMarks(){

    const nameInput = document.getElementById("name");
    const urlInput = document.getElementById("url");

    const newBookmark = {
        name: nameInput.value,
        category: getSelectedCategory(),
        url: urlInput.value
    };

    const bookmarks = getBookmarks();
    bookmarks.push(newBookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    nameInput.value="";
    urlInput.value="";

    displayOrCloseForm();
  
}

function displayOrHideCategory(){
    document.getElementById("main-section").classList.toggle("hidden");
    document.getElementById("bookmark-list-section").classList.toggle("hidden");
}

document.getElementById("view-category-button").addEventListener("click", ()=> {
    updateCategoryList();
    displayOrHideCategory();
})

function updateCategoryList() {
    const category = getSelectedCategory();
    document.querySelector(".category-name").innerText = category;

    const categoryList = document.getElementById("category-list");
    categoryList.innerHTML = "";

    const bookmarks = getBookmarks();
    const filtered = bookmarks.filter(b => b.category === category);

    if (filtered.length === 0) {
        categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
        return;
    }
    categoryList.innerHTML = filtered
    .map(book => `
        <input
        type="radio"
        id="${book.name}"
        name="bookmark"
        value="${book.name}"
        />
        <label for="${book.name}">
        <a href="${book.url}" target="_blank">${book.name}</a>
        </label>
    `)
    .join("");
}

document.getElementById("close-list-button").addEventListener("click", displayOrHideCategory);
document.getElementById("delete-bookmark-button").addEventListener("click", deleteBookMark);

function deleteBookMark() {
    const selectedRadio = document.querySelector('input[name="bookmark"]:checked');
    if (!selectedRadio) return;

    const name = selectedRadio.value;
    const category = getSelectedCategory();

    let bookmarks = getBookmarks();

    bookmarks = bookmarks.filter(b => !(b.name === name && b.category === category))
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    updateCategoryList();
}
