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


submitBtn.addEventListener('click',(e)=>{
    console.log('clicked')
    e.preventDefault()
    const user =new formInfo(firstName.value,email.value,password.value,lastName.value,phoneNumber.value,confrimPassword.value)
    addToStorement(user)
    console.log(storementArea)
    clearForm()
})






