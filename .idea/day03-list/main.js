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
      <button class="del_btn">删除</button>
    `;
    const del_btn = li.querySelector('.del_btn');
    del_btn.addEventListener('click', function() {
      books.splice(i, 1);
      render();
    });
    list.appendChild(li);
  }
}
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