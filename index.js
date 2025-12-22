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



function firstValidate(){
    if(firstName.value==""){
        alert('your first name input is empty')
    }
    else{
        return console.log('passed')
    }
}
function lastValidate(){
    if(lastName.value==""){
        alert('your last name input is empty')
    }
    else{
        return console.log('passed')
    }
}
function phoneValidate(){
    if(phoneNumber.value==""){
        alert('your phone number input is empty')
    }
    else{
        return console.log('passed')
    }
}
function emailValidate(){
    if(!email.value.endsWith('@gmail.com') ){
        alert('incorrect email')
    }
    else{
        return console.log('passed')
    }
}
function passwordValidate(){
    if(password.value !== confrimPassword.value){
        alert('the passwords do not much')
    }
}

submitBtn.addEventListener('click',(e)=>{
    console.log('clicked')
    e.preventDefault()
    const user =new formInfo(firstName.value,email.value,password.value,lastName.value,phoneNumber.value,confrimPassword.value)
    addToStorement(user)

    console.log(storementArea)

    // input validation
    firstValidate()
    lastValidate()
    phoneValidate()
    emailValidate()
    passwordValidate()
    
    // clear form 
    clearForm()

    

})





