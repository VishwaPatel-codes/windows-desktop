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
  ".My-computer-window, .Notepad-window, .paint-window"
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

    document.querySelector(".pics").style.display = "none";
    document.getElementById("cats-folder").style.display = "none";
    document.querySelector(".drawings").style.display = "none";

    document.getElementById("cats-content").style.display = "flex";
};

document.getElementById("yes2-button").onclick = function () {
    document.getElementById("yes-button").click();
};
document.getElementById("back-from-cats").onclick = function () {
    document.getElementById("cats-content").style.display = "none";

    document.querySelector(".pics").style.display = "block";
    document.getElementById("cats-folder").style.display = "flex";
    document.querySelector(".drawings").style.display = "block";
};