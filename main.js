let numberContainer = document.querySelector('.rating-state__number-container');
let rateNumber = document.querySelector('#thankyou-state__result--number');
let submitButton = document.querySelector('.btn-submit');
let card1 = document.querySelector('.container');
let card2 = document.querySelector('.container2'); 


/* Contenedores */
let main = document.querySelector('.main'); 
let btnContainer = document.querySelector('.btn-submit-container');
let numContainer = document.querySelector('.numbers-container'); 
 
let numbersFatherContainer = document.querySelector('#numbers-container');
numbersFatherContainer.childNodes.forEach((element)=> {
    element.addEventListener('click', (e)=>{
        let numberSelected = e.target.innerText;
        rateNumber.innerText = numberSelected;
        console.log(numberSelected);
        
        //Cuando el numero pierde el foco
        element.addEventListener('blur', ()=>{ 
            numberSelected = '';
            console.log(numberSelected);
      
        });



        if (numberSelected > 0 || numberSelected <= 5){
            submitButton.addEventListener('click', () => {
                card1.style.display = 'none';
                card2.style.display = 'flex';    
            });
        }

        
 
       
    });   
    
   

});


/* 
numberContainer.addEventListener('click', (e) => {


    let numberSelected = e.target.innerText; 
    rateNumber.innerText = numberSelected;
    console.log(numberSelected);
   


    if (numberSelected > 0 || numberSelected <= 5){

        submitButton.addEventListener('click', () => {
            card1.style.display = 'none';
            card2.style.display = 'flex';

        });
    }
}); */





/*    validate()
        
    const validate = () => {
        
            main.addEventListener('click', (e) => { 
                numberSelected = "Null";
                console.log(numberSelected);
            });
      

        
            btnContainer.addEventListener('click', (e) => {
                numberSelected = "Null";
                console.log(numberSelected);               
            });
      

        
            numContainer.addEventListener('click', (e) => {
                numberSelected = "Null";
                console.log(numberSelected);      
            });
      
    } */