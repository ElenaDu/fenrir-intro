let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector('footer');
let copyright = document.createElement('p');

copyright.innerHTML = `Alena Dudko &copy${thisYear}`;
footer.appendChild(copyright);

let skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Quality Assurance',
    'Defect Management',
    'Python (Pandas, NumPy)',
    'Git/GitHub',
    'SQL',
    'Data Analysis',
    'Data Visualization'
];

let skillsSection = document.getElementById('skills');
skillsList = skillsSection.querySelector('ul');
console.log(skillsList);

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.className="skills_item";

    skill.innerText = skills[i];
    skillsList.appendChild(skill);

}

let messageSection = document.getElementById('messages');
messageSection.hidden = true;

let messageForm = document.getElementsByName("leave_message");
messageForm.item(0).addEventListener('submit', (event) => {
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    console.log(name);
    console.log(email);
    console.log(message);

    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto: ${email}">${name}</a> wrote: <span>${message}</span>&nbsp&nbsp`;
    


    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = "removeButton";
    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentNode;
        entry.remove();

    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);


    messageSection.hidden = false;

    messageForm.item(0).reset();
});

