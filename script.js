document.getElementById("myButton").addEventListener("mouseover", function() {
    var buttonHeight = this.offsetHeight,
        buttonWidth = this.offsetWidth,
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth;

    this.style.top = Math.random() * (windowHeight - buttonHeight) + 'px';
    this.style.left = Math.random() * (windowWidth - buttonWidth) + 'px';
});

document.getElementById("myButton").addEventListener("click", function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});
