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
    'Troubleshooting and Problem Solving',
    'SQL',
    'Python (Pandas, NumPy, Matplotlib)',
    'Git/GitHub',
    'Data Analysis',
    'Data Visualization'
];

let skillsSection = document.getElementById('skills');
skillsList = skillsSection.querySelector('ul');
console.log(skillsList);

for (let i=0; i<skills.length; i++) {
    let skill = document.createElement('li');
    
    skill.innerText = skills[i];
    skillsList.appendChild(skill);

}