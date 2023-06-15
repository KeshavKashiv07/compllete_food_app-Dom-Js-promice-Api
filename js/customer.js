let customerUrl = "http://localhost:3001/customers"

//Write  password validation code here 
function setPasswordConfirmValidity() {
  const passwordConfrimInput = document.getElementById("custConfirmPassword").value;
  const passwordInput = document.getElementById("custPasword").value;
  const msg = document.getElementById("msg");
  console.log(passwordInput , passwordConfrimInput)

  if(passwordInput.length >= 8){
    if(passwordInput == passwordConfrimInput){
      msg.textContent="Password matched"
      msg.style.backgroundColor="green"
    }else{
      msg.textContent="password not matched"
      msg.style.backgroundColor="red"
    }
  }else {
    msg.textContent="password length should be min 8 or more"
    msg.style.width="60%"
    msg.style.backgroundColor="red"
  }
}
document.getElementById("email").addEventListener("input" , setPasswordConfirmValidity);



//Using axios POST to save the customer details 
// Note:As per test requirement, Customer API should be running on port 3001

function submitCustomerDetail(event) {
  const customerData = new FormData(event.target);
    const customerProps = Object.fromEntries(customerData);
    const postPromise = axios.post(customerUrl,customerProps);
    postPromise.then(response=>{
        event.preventDefault();
        console.log(response);
    });
    document.getElementById("submit").addEventListener("click", alert(`You have successfully registered`))
  }
 /*
   Post successful submission to server, 
   the function should display the text `You have successfully registered !` on the page
   */
   
   

// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    setPasswordConfirmValidity,
    submitCustomerDetail
}



