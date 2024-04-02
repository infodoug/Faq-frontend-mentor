var expanded = [false, false, false, false];

var answerList = [
    '-',
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
]

function toggle(numfaq, numanswer, numimg) {
    var faq = document.getElementById(numfaq);
    var symbol = document.getElementById(numimg);
    expanded[numanswer] = !expanded[numanswer];
    if (expanded[numanswer]) {
        var answer = document.createElement('p');
        answer.id = 'answerid'+numanswer;
        answer.textContent = answerList[numanswer];
        faq.appendChild(answer);
        symbol.src = "../assets/images/icon-minus.svg";
    } else {
        var element = document.getElementById('answerid'+numanswer);
        element.remove();
        symbol.src = "../assets/images/icon-plus.svg";
    }
}