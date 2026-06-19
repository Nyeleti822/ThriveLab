const quotes = [
    "Success begins with consistency.",
    "Education is the passport to the future.",
    "Dream big, work hard.",
    "Your future is created by what you do today.",
    "Every expert was once a beginner."
];

function generateQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);

    document.getElementById("quoteDisplay").innerHTML =
        quotes[randomNumber];
}

function submitApplication(event) {
    event.preventDefault();

    alert("🎉 Thank you for applying to ThriveLab! We will contact you soon.");
}

function submitDonation(event) {
    event.preventDefault();

    alert("💜 Thank you for supporting ThriveLab and helping students succeed!");
}

function signIn() {
    alert("Welcome back to ThriveLab! Please enter your details to continue.");
}

function showHelp() {
    alert("Need help? Contact ThriveLab and our team will assist you.");
}