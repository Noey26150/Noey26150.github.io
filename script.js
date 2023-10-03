var timeoutId;

document.getElementById("myButton").addEventListener("mouseover", function() {
    var button = this;
    timeoutId = setTimeout(function() {
        var buttonHeight = button.offsetHeight,
            buttonWidth = button.offsetWidth,
            windowHeight = window.innerHeight,
            windowWidth = window.innerWidth;

        button.style.top = Math.random() * (windowHeight - buttonHeight) + 'px';
        button.style.left = Math.random() * (windowWidth - buttonWidth) + 'px';
    }, 200); // 200ms delay
});

document.getElementById("myButton").addEventListener("mouseout", function() {
    clearTimeout(timeoutId);
});

document.getElementById("myButton").addEventListener("click", function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});

document.getElementById("myButton").addEventListener("focus", function(event) {
    event.preventDefault();
});
