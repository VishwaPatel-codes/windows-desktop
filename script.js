document.getElementById("computer-icon").onclick = function() {
        document.getElementById("computer-window").style.display = "block";
    };
    document.getElementById("notepad-icon").onclick = function() {
        document.getElementById("notepad-window").style.display = "block";
    };
    document.getElementById("paint-icon").onclick = function() {
        document.getElementById("paint-window").style.display = "block";
    };
    document.getElementById("close-computer").onclick = function() {
        document.getElementById("computer-window").style.display = "none";
    };
    document.getElementById("close-notepad").onclick = function() {
        document.getElementById("notepad-window").style.display = "none";
    };
    document.getElementById("close-paint").onclick = function() {
        document.getElementById("paint-window").style.display = "none";
    };
    function updateClock() {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();

        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;
        if (hours === 0) hours = 12;

        minutes = minutes.toString().padStart(2, "0");

        document.getElementById("clock").textContent =
            `${hours}:${minutes} ${ampm}`;
    }

    updateClock();
    setInterval(updateClock, 1000);


const windows = document.querySelectorAll(
  ".My-computer-window, .Notepad-window, .paint-window, .about-window,.cmd-window"
);
windows.forEach(windowEl => {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  windowEl.addEventListener("mousedown", e => {
    if (windowEl.id === "paint-window") {
        const insideCanvas = e.target.closest("#paint-canvas");

        if (insideCanvas) {
            return;
        }
    }
    isDragging = true;
    offsetX = e.clientX - windowEl.offsetLeft;
    offsetY = e.clientY - windowEl.offsetTop;
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;

    windowEl.style.left = e.clientX - offsetX + "px";
    windowEl.style.top = e.clientY - offsetY + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});
const canvas = document.getElementById("paint-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 350;
canvas.height = 350;

let draw = false;
let color = "#ff5c5c";
let tool = "brush";

document.querySelectorAll(".color")[0].onclick = function () {
    color = "#ff5c5c";
};

document.querySelectorAll(".color")[1].onclick = function () {
    color = "#222222";
};

document.querySelectorAll(".color")[2].onclick = function () {
    color = "#fcff62";
};

document.querySelectorAll(".color")[3].onclick = function () {
    color = "#ffffff";
};

document.querySelectorAll(".color")[4].onclick = function () {
    color = "#94fd74";
};

document.querySelectorAll(".color")[5].onclick = function () {
    color = "#5a4eff";
};

document.querySelectorAll(".color")[6].onclick = function () {
    color = "#ff4e98";
};

document.querySelectorAll(".color")[7].onclick = function () {
    color = "#fb7bff";
};

document.querySelectorAll(".color")[8].onclick = function () {
    color = "#df9151";
};

document.querySelectorAll(".color")[9].onclick = function () {
    color = "#ffbc57";
};

document.querySelectorAll(".color")[10].onclick = function () {
    color = "#ff33d3";
};

document.querySelectorAll(".color")[11].onclick = function () {
    color = "#53ebff";
};

document.getElementById("brush-tool").onclick = function () {
    tool = "brush";
};

document.getElementById("eraser-tool").onclick = function () {
    tool = "eraser";
};

document.getElementById("clear-canvas").onclick = function () {
    ctx.clearRect(0, 0, 350, 350);
};

canvas.onmousedown = function () {
    draw = true;
};

canvas.onmouseup = function () {
    draw = false;
};

canvas.onmouseleave = function () {
    draw = false;
};

canvas.onmousemove = function (e) {
    if (!draw) return;

    let x = e.offsetX;
    let y = e.offsetY;

    x = Math.floor(x / 10) * 10;
    y = Math.floor(y / 10) * 10;

    if (tool == "brush") {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 10, 10);
    }

    if (tool == "eraser") {
        ctx.clearRect(x, y, 10, 10);
    }
};
document.getElementById("cats-folder").onclick = function () {
    document.getElementById("cat-popup").style.display = "block";
};

document.getElementById("yes-button").onclick = function () {
    document.getElementById("cat-popup").style.display = "none";

    document.querySelector(".about-me").style.display = "none";
    document.getElementById("cats-folder").style.display = "none";

    document.getElementById("cats-content").style.display = "flex";
};

document.getElementById("yes2-button").onclick = function () {
    document.getElementById("yes-button").click();
};
document.getElementById("back-from-cats").onclick = function () {
    document.getElementById("cats-content").style.display = "none";

    document.querySelector(".about-me").style.display = "block";
    document.getElementById("cats-folder").style.display = "flex";
};
document.getElementById("about-folder").onclick = function () {
    document.getElementById("about-window").style.display = "block";
};

document.getElementById("close-about").onclick = function () {
    document.getElementById("about-window").style.display = "none";
};
let aboutTab = document.getElementById("about-tab");
let likesTab = document.getElementById("likes-tab");

let aboutPage = document.getElementById("about-page");
let likesPage = document.getElementById("likes-page");

aboutTab.onclick = function () {
    aboutPage.style.display = "flex";
    likesPage.style.display = "none";

    aboutTab.classList.add("active-tab");
    likesTab.classList.remove("active-tab");
};

likesTab.onclick = function () {
    aboutPage.style.display = "none";
    likesPage.style.display = "flex";

    aboutTab.classList.remove("active-tab");
    likesTab.classList.add("active-tab");
};
document.getElementById("cmd-icon").onclick = function () {
    document.getElementById("cmd-window").style.display = "block";
};

document.getElementById("close-cmd").onclick = function () {
    document.getElementById("cmd-window").style.display = "none";
};

document.getElementById("cmd-input").addEventListener("keydown", function (e) {

    if (e.key !== "Enter") {
        return;
    }

    let input = this.value.toLowerCase().trim();
    let output = document.getElementById("cmd-output");

    output.innerHTML += "<p>C:\\Users\\Vishwa> " + input + "</p>";

    if (input === "help") {
        output.innerHTML += "<p>commands: help, whoami, about, cats, music, mood, secret, clear, date, tea, sleep, portfolio, jungkook, army, blink, cry, hi, bye, favcolor, food, dream, website, code, homework, tired, random</p>";
    }

    else if (input === "whoami") {
        output.innerHTML += "<p>just a girl trying to make a website look cool</p>";
    }

    else if (input === "about") {
        output.innerHTML += "<p>vishwa, likes pink, cats, kpop and making unnecessary things in html</p>";
    }

    else if (input === "cats") {
        output.innerHTML += "<p>warning: there are too many cat pictures in this computer</p>";
    }

    else if (input === "music") {
        output.innerHTML += "<p>currently playing: probably some kpop or sad playlist at 2am</p>";
    }

    else if (input === "mood") {
        output.innerHTML += "<p>probably tired but pretending everything is under control</p>";
    }

    else if (input === "tea") {
        output.innerHTML += "<p>approved. tea makes everything slightly less terrible.</p>";
    }

    else if (input === "sleep") {
        output.innerHTML += "<p>sleep.exe has stopped working</p>";
    }

    else if (input === "portfolio") {
        output.innerHTML += "<p>this project is not going in the portfolio and we both know it</p>";
    }

    else if (input === "date") {
        output.innerHTML += "<p>today feels fake but okay</p>";
    }

    else if (input === "secret") {
        output.innerHTML += "<p>congrats you found the hidden command</p>";
        output.innerHTML += "<p>૮ ˶ᵔ ᵕ ᵔ˶ ა</p>";
    }

    else if (input === "jungkook") {
        output.innerHTML += "<p>valid answer honestly</p>";
    }

    else if (input === "army") {
        output.innerHTML += "<p>bts will never know but the dedication is real</p>";
    }

    else if (input === "blink") {
        output.innerHTML += "<p>blackpink in your area</p>";
    }

    else if (input === "cry") {
        output.innerHTML += "<p>already doing that internally</p>";
    }

    else if (input === "hi") {
        output.innerHTML += "<p>hello mysterious computer user</p>";
    }

    else if (input === "bye") {
        output.innerHTML += "<p>you can leave but the bugs will stay</p>";
    }

    else if (input === "favcolor") {
        output.innerHTML += "<p>pink + purple. obviously.</p>";
    }

    else if (input === "food") {
        output.innerHTML += "<p>probably surviving on tea and random snacks</p>";
    }

    else if (input === "dream") {
        output.innerHTML += "<p>to make something cool without wanting to delete it after 5 minutes</p>";
    }

    else if (input === "website") {
        output.innerHTML += "<p>this website took emotional damage to make</p>";
    }

    else if (input === "code") {
        output.innerHTML += "<p>99% confusion, 1% accidentally works</p>";
    }

    else if (input === "homework") {
        output.innerHTML += "<p>homework.exe was permanently deleted</p>";
    }

    else if (input === "tired") {
        output.innerHTML += "<p>same</p>";
    }

    else if (input === "random") {
        let randomReplies = [
            "maybe listening to music right now",
            "cats are better than most people",
            "this command line knows too much",
            "there is definitely no bug hiding somewhere",
            "why does everything break after changing one thing",
            "you should probably sleep",
            "or maybe make another useless website"
        ];

        let randomText = randomReplies[Math.floor(Math.random() * randomReplies.length)];
        output.innerHTML += "<p>" + randomText + "</p>";
    }

    else if (input === "clear") {
        output.innerHTML = "";
    }

    else {
        output.innerHTML += "<p>'" + input + "' is not recognized as a command</p>";
    }

    this.value = "";
});