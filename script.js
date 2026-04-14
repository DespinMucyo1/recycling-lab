function showMessage() {
    alert("🌍 The Earth is our only home. Your actions matter more than you think!");
}

function newFact() {
    const facts = [
        "♻️ Recycling one bottle saves enough energy to power a bulb for hours.",
        "🌊 Over 8 million tons of plastic enter oceans every year.",
        "🔁 Glass can be recycled endlessly without losing quality.",
        "🌍 Recycling reduces pollution and greenhouse gases.",
        "🐢 Thousands of marine animals die from plastic every year."
    ];

    let random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[random];
}

/* ✨ SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");

function showCards() {
    const trigger = window.innerHeight - 100;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.classList.add("show");
        }
    });
}

/* run on scroll */
window.addEventListener("scroll", showCards);

/* run on load */
window.addEventListener("load", showCards);
