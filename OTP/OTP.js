function generateOTP(){
    const Digits = "0123456789";
    let OTP ='';

    for(let i = 0; i< 6; i++){
      OTP += Digits[Math.floor(Math.random()* 10)];

    }

    let span =document.querySelector('.box span');
    span.innerHTML = OTP;
}
 

// // Otp 
// const Number1 =1090;
// let  AddNumber =  Number1;
// console.log(  Math.floor( Number1 + Math.random()*1256 ));
// console.log(Number1);