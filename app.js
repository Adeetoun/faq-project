const addAnswer = document.querySelectorAll('.hidden');
const plusIcon = document.querySelectorAll('.plus');
const minusIcon = document.querySelectorAll('.minus');


for (let i = 0; i < plusIcon.length; i++) {
    plusIcon[i].addEventListener('click', function () {
        plusIcon[i].classList.toggle("hidden")
        addAnswer[i].classList.toggle("hidden")
        minusIcon[i].classList.add('minus');
        minusIcon[i].style.display = 'block';
        plusIcon[i].style.display = 'none';
    });
}

for (let i = 0; i < minusIcon.length; i++) {
    minusIcon[i].addEventListener('click', function () {
        plusIcon[i].classList.toggle("hidden")
        minusIcon[i].classList.toggle("hidden")
        addAnswer[i].classList.toggle("hidden")
        minusIcon[i].style.display = 'none';
        plusIcon[i].classList.add('plus');
        plusIcon[i].style.display = 'block';
    });
}
/*btns.forEach((button) => {
        button.addEventListener('click', () => {
            minusIcon.style.display = 'block';
            plusIcon.style.display = 'none';
            addAnswer.classList.add('hidden');
            addAnswer.style.display = 'block';
        })
    })
        
        minusIcon.addEventListener('click', () => {
        minusIcon.style.display = 'none';
        plusIcon.classList.add('plus');
        plusIcon.style.display = 'block';
        addAnswer.style.display = 'none';
        })*/


/*btns.forEach((button) => {
    button.addEventListener('click', () => {
        const addAnswer = this.nextElementSibling;
        if (addAnswer.style.display === "none" || addAnswer.style.display === "") {
            //addAnswer.classList.add = "hidden";
            addAnswer.style.display = "block";
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        } else {
            //addAnswer.style.display = "none";
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
        };
        
    });
});*/
