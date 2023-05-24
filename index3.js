const textarea = document.querySelector('textarea');
const counter = document.querySelector('#counter');

function update_counter(){
    const max_length = textarea.getAttribute('maxlength');
    const remaining = max_length - textarea.value.length;
    counter.textContent = remaining;

}