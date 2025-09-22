let loginForm = document.querySelector(".my-form");

loginForm.addEventlistener("submit", (e) => {
    e.preventdefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log('Email', email.value);
    console.log('Password', password.value);

    let resetForm = document.querySelector(".my-form");

    resetForm.addEventListener("submit", (e)  => {
        e.preventDefault();
        let email = document.getElementById("email")

        console.log('Email', email.value);
    })
    //process and send to API
});

document.querySelector('.menu-btn').addEventListener('click',() => document.querySelector('.main-menu').classList.toggle('show'));

function calculateMortgage() {
    const homePrice = parseFloat(document.getElementById("homePrice").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
  
    if (isNaN(homePrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const loanAmount = homePrice - downPayment;
    const monthlyInterest = (interestRate / 100) / 12;
    const totalPayments = loanTerm * 12;
    
    const monthlyPayment = 
      (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
  
    document.getElementById("monthlyPayment").innerText = `$${monthlyPayment.toFixed(2)}`;
  }