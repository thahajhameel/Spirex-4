
const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");

const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");

monthlyBtn.addEventListener("click", function() {
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    prices.forEach(function(price) {
        price.textContent = "₹" + price.dataset.month;
    });

    periods.forEach(function(period) {
        period.textContent = "/ month";
    });
});

yearlyBtn.addEventListener("click", function() {
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    prices.forEach(function(price) {
        price.textContent = "₹" + price.dataset.year;
    });

    periods.forEach(function(period) {
        period.textContent = "/ month";
    });
});

const planButtons = document.querySelectorAll(".plan-btn");

planButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const plan = button.parentElement.querySelector("h2").textContent;

        alert("You selected the " + plan + " plan!");
    });
});
