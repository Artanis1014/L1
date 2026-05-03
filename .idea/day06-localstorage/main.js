const STORAGE_KEY = 'books';
let books = load();
const list = document.querySelector('#list');
const btn = document.querySelector('#btn');
const title_input = document.querySelector('#title');
const author_input = document.querySelector('#author');
const year_input = document.querySelector('#year');
function load() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}
function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}
function render() {
    list.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        const li = document.createElement('li');
        if (books[i].completed) {
            li.classList.add('completed');
        }
        li.innerHTML = `
            <span>${books[i].title}</span>
            <span>${books[i].author}</span>
            <span>${books[i].year}</span>
            <button class="del_btn">删除</button>
        `;
        const del_btn = li.querySelector('.del_btn');
        del_btn.addEventListener('click', function(e) {
            e.stopPropagation();
            books.splice(i, 1);
            save();
            render();
        });
        li.addEventListener('click', function(e) {
            if (e.target.classList.contains('del_btn')) return;
            books[i].completed = !books[i].completed;
            save();
            li.classList.toggle('completed');
        });
        list.appendChild(li);
    }
}
btn.addEventListener('click', function() {
    const title = title_input.value;
    const author = author_input.value;
    const year = year_input.value;
    if (title && author && year) {
        books.push({ title, author, year, completed: false });
        save();
        render();
        title_input.value = '';
        author_input.value = '';
        year_input.value = '';
    }
});
render();
