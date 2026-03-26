document.addEventListener("DOMContentLoaded", () => {
    // Generate Hearts
    const heartsContainer = document.getElementById("hearts-container");
    const createHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 5 + 6 + "s";
        heart.style.transform = `scale(${Math.random() * 0.6 + 0.4}) rotate(-45deg)`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 12000);
    };
    setInterval(createHeart, 400);

    // Elements
    const envelope = document.getElementById("envelope");
    const envelopeWrapper = document.getElementById("envelopeWrapper");
    const letterOverlay = document.getElementById("letterOverlay");
    const closeLetter = document.getElementById("closeLetter");
    const letterMovement = document.getElementById("letterMovement");
    const letterFold = document.getElementById("letterFold");
    const textContent = document.querySelector(".text-content");

    const bellIcon = document.getElementById("bellIcon");
    const bellAnim = document.querySelector(".bell-animation");
    const notificationBadge = document.getElementById("notificationBadge");
    const notificationDropdown = document.getElementById("notificationDropdown");
    const closeNotification = document.getElementById("closeNotification");
    const randomTextList = document.getElementById("randomTextList");

    const randomTexts = [
        "I love you more than words can say! 💕🎊",
        "You are my whole world! 🌍✨",
        "Every moment with you is a blessing! ✨🎁",
        "Can't wait to see your smile! 😊💖",
        "You are my favorite notification! 💌🥰",
        "You make every single day better! ❤️🎈",
        "I am so lucky to have you! 🍀😘",
        "Growing old with you is my favorite dream! 🌟💕"
    ];



    // Confetti Surprise Effect
    const createConfetti = () => {
        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 65%)`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    };

    // Envelope Click -> Open
    envelopeWrapper.addEventListener("click", () => {
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
            envelopeWrapper.style.animation = "none";

            createConfetti(); // Throw sparkles!

            setTimeout(() => {
                letterOverlay.classList.add("show");
                letterFold.style.animation = "foldOut 1.5s forwards ease-in-out";
                letterMovement.style.animation = "moveUp 1.5s forwards ease-in-out";
                textContent.style.animation = "textReveal 1.5s forwards ease-in-out";
            }, 600);
        }
    });

    // Close Letter
    closeLetter.addEventListener("click", () => {
        textContent.style.animation = "textHide 1.5s forwards ease-in-out";
        letterFold.style.animation = "foldIn 1.5s forwards ease-in-out";
        letterMovement.style.animation = "moveDown 1.5s forwards ease-in-out";

        setTimeout(() => {
            letterOverlay.classList.remove("show");
            envelope.classList.remove("open");

            setTimeout(() => {
                envelopeWrapper.style.animation = "bounce 2s infinite ease-in-out";
            }, 600);
        }, 1500);
    });

    // Bell Notification
    bellIcon.addEventListener("click", () => {
        notificationDropdown.classList.add("show");
        bellAnim.style.animation = "none";

        // Populate random text list one after another
        randomTextList.innerHTML = ""; // clear

        // Let's pick 4 random texts
        const shuffled = [...randomTexts].sort(() => 0.5 - Math.random());
        const selectedTexts = shuffled.slice(0, 4);

        selectedTexts.forEach((text, index) => {
            setTimeout(() => {
                const item = document.createElement("div");
                item.classList.add("dropdown-item");
                item.textContent = text;
                randomTextList.appendChild(item);
            }, index * 800); // Appear one after another
        });

        createConfetti(); // Throw sparkles!
    });

    // Close Notification
    closeNotification.addEventListener("click", () => {
        notificationDropdown.classList.remove("show");
        notificationBadge.style.display = "none";
    });

    // Home Screen
    const homeScreen = document.getElementById("homeScreen");
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", () => {
        homeScreen.classList.add("hidden")
    });
});
