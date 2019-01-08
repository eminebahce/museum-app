function submitComment() {
    // gather data
    const inputField = document.getElementById('name').value;
    //const name = inputField.value;
    const textArea = document.getElementById('msg').value;
    //const msg = textArea.value;

    // create the elements you need
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    // adjust the elements we created
    h3.innerHTML = `${inputField} said:`;
    p.innerHTML = textArea;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    // display the elements on the page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    // reset form values
    inputField.value = null;
    textArea.value = null;
}