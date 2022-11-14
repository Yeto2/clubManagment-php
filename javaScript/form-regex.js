let nameHelp = document.getElementById('nameHelp')
let fullname = document.getElementById('fullname')

let classN = document.getElementById('classN')
let classHelp =document.getElementById('classHelp')

let email = document.getElementById('email')
let emailHelp =document.getElementById('emailHelp')


fullname.addEventListener('keyup' , (e)=>{
    
let message ;
let namereg = /^[a-zA-Z ]{5,30}$/ ; 

    if (fullname.value === '' || fullname.value === null) {
        message = "This input should not be empty !"
        nameHelp.innerText= message
    }else if (namereg.test(fullname.value) === false) {
        message = "Write a Valid Name (between 5 to 30 letter)"
        nameHelp.innerText= message
    }else{
        nameHelp.innerText =''
    }

})
