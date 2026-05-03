const form = document.querySelector('#form');
const name_input = document.querySelector('#name');
const phone_input = document.querySelector('#phone');
const email_input = document.querySelector('#email');
const name_error = document.querySelector('#name_error');
const phone_error = document.querySelector('#phone_error');
const email_error = document.querySelector('#email_error');
const result = document.querySelector('#result');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    clear_errors();
    let is_valid = true;
    if (name_input.value === '') {
        name_error.textContent = '姓名不能为空';
        is_valid = false;
    }
    if (phone_input.value === '') {
        phone_error.textContent = '手机号不能为空';
        is_valid = false;
    } else if (!/^1[3-9]\d{9}$/.test(phone_input.value)) {
        phone_error.textContent = '手机号格式不正确';
        is_valid = false;
    }
    if (email_input.value === '') {
        email_error.textContent = '邮箱不能为空';
        is_valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_input.value)) {
        email_error.textContent = '邮箱格式不正确';
        is_valid = false;
    }
    if (is_valid) {
        result.innerHTML = `
            <h3>提交成功！</h3>
            <p>姓名：${name_input.value}</p>
            <p>手机号：${phone_input.value}</p>
            <p>邮箱：${email_input.value}</p>
        `;
        form.reset();
    }
});
function clear_errors() {
    name_error.textContent = '';
    phone_error.textContent = '';
    email_error.textContent = '';
    result.innerHTML = '';
}
