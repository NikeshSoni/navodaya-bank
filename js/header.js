


    //  const principleAmt = 
     
    //  document.querySelector('.Principle-amt').addEventListener('click', function (main) {

    //         console.log();
        
    //  })
    

    //  console.log( ' nikki' ,principleAmt);



    document.querySelector('.click-btn').addEventListener('click', function calculate() {

        // const principle_amt = 0;
        // const rate_amt = 0;
        // const year_amt = 0;
        // const interest_amt = 0;

        principle = document.querySelector('.Principle-amt').value;
        rate = document.querySelector('.rate-interest').value;
        year = document.querySelector('.rate-month').value;
        interest =  (principle*year*rate)/100;

        document.querySelector('.income').innerHTML = interest;


        console.log(principle);
     })
