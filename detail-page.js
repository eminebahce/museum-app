function submitComment() {
    //console.log('Hello');
    const inputField = document.getElementById('name').value;
    console.log(inputField);

    const inputTextarea = document.getElementById('msg').value;
    console.log(inputTextarea);

    const comment = document.createElement('section');

    const h3 = document.createElement('h3');
    h3.innerHTML = `${inputField} said`;

    const p = document.createElement('p');
    p.innerHTML = `${inputTextarea}`;

    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
}