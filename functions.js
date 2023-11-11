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