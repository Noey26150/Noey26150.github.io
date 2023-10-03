document.getElementById("myButton").addEventListener("mouseover", function() {
    var buttonHeight = this.offsetHeight,
        buttonWidth = this.offsetWidth,
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth;

        this.style.top = Math.random() * (windowHeight - buttonHeight) + 'px';
        this.style.left = Math.random() * (windowWidth - buttonWidth) + 'px';
});
