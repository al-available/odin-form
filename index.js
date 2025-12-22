const firstName =document.getElementById('firstName')
const email =document.getElementById('email')
const password =document.getElementById('password')

const lastName=document.getElementById('lastName')
const phoneNumber =document.getElementById('phoneNumber')
const confrimPassword =document.getElementById("confrimPassword")

const submitBtn=document.getElementById('submitBtn')

const storementArea=[]

class formInfo {
    constructor(firstName,email,password,lastName,phoneNumber,confrimPassword){
        this.firstName=firstName,
        this.email=email,
        this.password=password,
        this.lastName=lastName,
        this.phoneNumber=phoneNumber,
        this.confrimPassword=confrimPassword
        this.display=function(){
            console.log(`${this.firstName},${this.email},${this.password},${this.lastName},${this.phoneNumber},${this.confrimPassword}`)
        }
    }


}

function addToStorement(user){
storementArea.push(user)
}

function clearForm(){
    firstName.value=""
    email.value=""
    password.value=""
    lastName.value=""
    phoneNumber.value=""
    confrimPassword.value=""
}

// ... keep your variable declarations and class as they are ...

function validationCheck() {
    // 1. Check for empty fields
    if (firstName.value === "" || lastName.value === "" || phoneNumber.value === "") {
        alert('Please fill in all name and phone fields');
        return false;
    }

    // 2. Email validation
    if (!email.value.endsWith('@gmail.com') || email.value === "") {
        alert('Please enter a valid @gmail.com address');
        return false;
    }

    // 3. Password validation
    if (password.value === "" || password.value !== confrimPassword.value ) {
        alert('Passwords do not match or are empty');
        return false;
    }

    if(password.value.length < 6){
        alert('lenght')
        return false
    }

    // If all checks pass, return true
    return true;
}

function approve() {
    const user = new formInfo(
        firstName.value, 
        email.value, 
        password.value, 
        lastName.value, 
        phoneNumber.value, 
        confrimPassword.value
    );
    addToStorement(user);
    console.log("Storage:", storementArea);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents page reload
    
    if (validationCheck()) {
        approve();
        alert('Registration successful!');
        clearForm();
    } else {
        console.log('Validation failed');
    }
});





