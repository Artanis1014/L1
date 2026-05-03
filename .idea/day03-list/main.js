const books = [
  { title: "", author: "", year: "" },
];
const list = document.querySelector('#list');
const btn = document.querySelector('#btn');
const title_input = document.querySelector('#title');
const author_input = document.querySelector('#author');
const year_input = document.querySelector('#year');
function render() {
  list.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${books[i].title}</span>
      <span>${books[i].author}</span>
      <span>${books[i].year}</span>
      <button class="del_btn" data-index="${i}">删除</button>
    `;
    list.appendChild(li);
  }
}
list.addEventListener('click', function(e) {
  const index = e.target.dataset.index;
  books.splice(index, 1);
  render()
});
btn.addEventListener('click', function() {
  const title = title_input.value;
  const author = author_input.value;
  const year = year_input.value;
  if (title && author && year) {
    books.push({ title, author, year });
    render();
    title_input.value = '';
    author_input.value = '';
    year_input.value = '';
  }
});
render();