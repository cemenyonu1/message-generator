let rejectMessage = ["No, Thank you", "I'm ok but I apreciate it", "Ah shoot, I have something to do at that time. I'm so sorry", "Sorry, I have plans already, but next time!"]

let acceptMessage = ["Yes, please", "Of course I would!", "Sure thing", "Yup!"]

const reject = () => {
    let message = '';
    let pick = rejectMessage[Math.floor(Math.random() * rejectMessage.length)];
    message = pick;
    console.log(message)
};

const accept = () => {
    let message = '';
    let pick = acceptMessage[Math.floor(Math.random() * acceptMessage.length)];
    message = pick;
    console.log(message);
}

//Display
let main = document.querySelector('.main');

let title = document.createElement('h1');
title.innerText = 'Let Us Help You With A Message';

let question = document.createElement('h3');
question.innerText = 'What would you like to do?';

let acceptButton = document.createElement('button');
acceptButton.innerText = 'Accept A Request';
acceptButton.addEventListener('click', function() {
    accept()
});

let rejectButton = document.createElement('button');
rejectButton.innerText = 'Reject A Request';
rejectButton.addEventListener('click', function() {
    reject()
} );

let answer = document.createElement('h3');


//Append
main.appendChild(title);
main.appendChild(question);
main.appendChild(acceptButton);
main.appendChild(rejectButton)