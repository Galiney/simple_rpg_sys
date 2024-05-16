console.log('Component 1 script loaded.');
const button = document.getElementById('button');
const paragraph = document.querySelector('#component1 p');

if (button && paragraph) {
    button.addEventListener('click', () => {
        paragraph.textContent = 'The text has been changed!';
        console.log('Button clicked, text changed.');
    });
    console.log('Component 1 elements found.');
} else {
    console.error('Component 1 elements not found.');
}