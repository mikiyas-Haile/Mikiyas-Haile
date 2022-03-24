const faders = document.querySelectorAll(".fade-in");


function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}

function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}
const appearOptions = {
    threshold: 1,
};
const appearOnScroll = new IntersectionObserver
    (function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
        })
    }, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})