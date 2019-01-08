function doesNotPassAllValidations(name, msg) {
    if (!name) {
        alert('Please write your name!');
        return true;
    } else if (!msg) {
        alert('Please write your message!');
        return true;
    }
    if (msg.length > 280) {
        alert('Your message is too long');
        return true;
    } else {
        return false;
    }

}

function containBadWords(msg) {
    const badWords = ['asshole', 'fuck'];
    if (badWords.includes(msg)) {
        alert('Watch your words!');
        return true;
    }

}

function submitComment() {
    // gather data
    const inputField = document.getElementById('name').value;
    //const name = inputField.value;
    const inputField1 = inputField.charAt(0).toUpperCase() + inputField.slice(1);
    const textArea = document.getElementById('msg').value;
    //const msg = textArea.value;

    if (doesNotPassAllValidations(inputField, textArea)) {
        return null;
    }

    if (containBadWords(textArea)) {
        return null
    }

    // create the elements you need
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    // adjust the elements we created
    h3.innerHTML = `${inputField1} said:`;
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
/**
 *    if (inputField.charAt(0) !== inputField.charAt(0).toUpperCase()) {
        return inputField.charAt(0).toUpperCase() + inputField.slice(1);
    }

      function filterText(message) {
        let reBadWords = /ashole|fuck/gi;
        return message.replace(reBadWords, "****");
    }
 */