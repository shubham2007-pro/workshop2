document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = window.scrollY;

        // FIX: Larger offset so Contact becomes active
        if (top >= sec.offsetTop - 300) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

document.getElementById("btn").addEventListener("click", function () {

    const name = document.getElementById("na").value.trim();
    const email = document.getElementById("em").value.trim();
    const msg = document.getElementById("mes").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("Please fill all the fields before sending.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message Sent Successfully!");
});


// ================================
// Resume Button Click
// ================================
document.querySelector(".download").addEventListener("click", () => {
    alert("Your resume download will start soon!");
    // Add actual download link if available
});

document.querySelector(".git").addEventListener("click", () => {
    window.open("https://github.com/", "_blank");
});

document.querySelectorAll(".project img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});