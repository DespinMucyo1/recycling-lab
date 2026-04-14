function showMessage() {
    alert("🌍 The Earth is our only home. Your actions matter!");
}

function newFact() {
    const facts = [
        "Recycling one plastic bottle can save enough energy to power a bulb for hours.",
        "Over 8 million tons of plastic enter oceans every year.",
        "Glass can be recycled infinitely without losing quality.",
        "Recycling reduces pollution and greenhouse gases."
    ];

    let random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[random];
}