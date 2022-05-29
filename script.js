let feedback, buttons, submit;

//* Active Rating
feedback = document.getElementById('current-rating');


//* Sections
let firstPage, secondPage;
firstPage = document.querySelector('.first-page')
secondPage = document.querySelector('.second-page');
secondPage.style.display = 'none';


// * Rating buttons
buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map(button => {
    button.addEventListener('click', () => {
        feedback.textContent = button.textContent;
    });
});


//* Submit button OnClick
submit = document.getElementById('btn')
submit.addEventListener('click', toggle);


// * Page Change function
function toggle() {
    if (secondPage.style.display === '') {
        secondPage.style.display = 'block'
    } else {
        firstPage.style.display = 'none';
        secondPage.style.display = 'block'
    };
};