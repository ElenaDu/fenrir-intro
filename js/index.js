// Get the current year
let today = new Date();
let thisYear = today.getFullYear();

// Get the footer element and create a new paragraph element
let footer = document.querySelector('footer .copyright');
let copyright = document.createElement('p');

// Add a copyright notice to the footer
copyright.innerHTML = `Alena Dudko &copy${thisYear}`;
footer.appendChild(copyright);

// List of skills
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

// Get the skills section and the skills list
let skillsSection = document.getElementById('skills');
skillsList = skillsSection.querySelector('ul');
console.log(skillsList);

// Loop through the skills array and create list items for each skill
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.className = "skills_item";

    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// Get the message section and hide it initially
let messageSection = document.getElementById('messages');
messageSection.style.display = 'none';

// Function to show or hide the "Messages" section based on messages count
function messagesVisibility() {
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');

    if (messageList.children.length > 0) {
        messageSection.style.display = 'block'; // Show the "Messages" section
    } else {
        messageSection.style.display = 'none'; // Hide the "Messages" section
    }
}

// Get the message form and add a submit event listener
let messageForm = document.getElementsByName("leave_message");
messageForm.item(0).addEventListener('submit', (event) => {
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    console.log(name);
    console.log(email);
    console.log(message);

    // Create a new message entry
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto: ${email}"><span id="sender">${name}<span></a> wrote: <p>${message}</p>`;


    // Add a remove button for each message entry
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = "removeButton";
    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentNode;
        entry.remove();
        messagesVisibility();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // Show the message section and reset the form
    messagesVisibility();
    messageForm.item(0).reset();
});


// Using the Fetch API, create a "GET" request to the GitHub API url 
fetch('https://api.github.com/users/ElenaDu/repos')
    .then(response => response.json()) // Chain then method to parse the response as JSON data
    .then(repositories => {
        // Display Repositories in List
        let projectSection = document.getElementById('projects');

        let projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement('li');
            let link = document.createElement("a");
            project.className = "project_item";

            // Add project name and link
            link.href = repositories[i].html_url;
            link.innerText = repositories[i].name;
            project.appendChild(link);
            projectList.appendChild(project);
        }

    })
    // Chain a catch() function to the fetch call to handle errors from the server
    .catch(error => {
        console.log('There was an error', error);
    });