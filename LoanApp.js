
let calcbtn = document.querySelector('form');

calcbtn.addEventListener('submit', calculateTip);

function calculateTip(e){
  
    processing();

    let tipAmt = document.getElementById('amount'),
        tipRate = document.getElementById('rate'),
        yearsRepay = document.getElementById('repayment'),
        monthlyPayment = document.getElementById('monthlyPayment'),
        totalInterest = document.getElementById('totalInterest'),
        totalPayment = document.getElementById('totalPayment');

    const principal = parseFloat(tipAmt.value);
    const calculatedInt = parseFloat(tipRate.value) / 100 / 12;
    calculatedPmt = parseFloat(yearsRepay.value) * 12;

    // compute monthly payment
    const x = Math.pow((1 + calculatedInt), calculatedPmt);
    const monthly = (principal*x*calculatedInt)/(x-1);
    
    // to validate if monthly payment is finite

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = ((monthly*calculatedPmt)+principal).toFixed(2);
        totalInterest.value = (monthly*calculatedPmt).toFixed(2);
          
    }else{
       if(!principal || !calculatedInt || !calculatedPmt){
        showErrow();
       }
    }
    e.preventDefault();
}


function showErrow(){
    document.querySelector('#small').textContent = 'Please check your inputs!';
    document.querySelector('#small').style.color = 'red';
    setTimeout(clearError, 3000);
    
}

function clearError(){
    document.querySelector('#small').remove();
}

function processing(){
   let processingGif = document.querySelector('.processing');

    processingGif.style.visibility = 'visible';
    setTimeout(() =>{
        processingGif.remove();
    },1000)
    
}