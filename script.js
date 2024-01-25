document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("credit-form");
    const monthlyPayment = document.querySelector("#monthly-payment span");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

  
        const carModel = document.getElementById("car-model").value;
        const carPrice = parseFloat(document.getElementById("car-price").value);
        const downPayment = parseFloat(document.getElementById("down-payment").value);
        const loanTerms = parseFloat(document.getElementById("loan-terms").value);

     
        const carPriceAfterDownPayment = carPrice - downPayment;


        let interestRate;
        switch (carModel) {
            case "bmw3":
                interestRate = 0.05; 
                break;
            case "m5":
                interestRate = 0.06; 
                break;
            case "m3":
                interestRate = 0.07; 
                break;
            case "x6":
                interestRate = 0.08; 
                break;
            case "e36":
                interestRate = 0.09; 
                break;
            default:
                interestRate = 0.1; 
                break;
        }

        const monthlyInterestRate = interestRate / 12;
        const totalMonthlyPayments = (carPriceAfterDownPayment * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerms));
        const formattedMonthlyPayment = totalMonthlyPayments.toFixed(2);

       
        monthlyPayment.textContent = formattedMonthlyPayment + " PLN";
        monthlyPayment.parentElement.classList.add("show");
    });
});

