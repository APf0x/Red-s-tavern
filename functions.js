let TutorialClicked = false;

function toggleAboutMe() {
    const Aboutmecontent = document.getElementById('Aboutme');
    const allContent = document.getElementById('all');
    const TutorialContent = document.getElementById('TutorialContent');

    if (TutorialClicked) {
        Aboutmecontent.textContent = 'Tutorials';
        allContent.style.display = 'block';
        TutorialContent.style.display = 'none';
        TutorialClicked = false;
    } else {
        Aboutmecontent.textContent = 'About Me';    
        allContent.style.display = 'none';
        TutorialContent.style.display = 'block';
        TutorialClicked = true;
    }
}
function changeColor() {
    const contentDiv = document.querySelector('.content');
    let predestinedColor;
    if (contentDiv.style.backgroundColor === 'rgba(0, 0, 0, 0.8)') {
        predestinedColor = 'rgba(0, 0, 0, 0.6)';
    } else {
        predestinedColor = 'rgba(0, 0, 0, 0.8)';
    }
    contentDiv.style.backgroundColor = predestinedColor;
}
function goToIndex() {

    window.location.href = 'index.html?tutorialClicked=true';
}