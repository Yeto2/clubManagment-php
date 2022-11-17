// --------------login input---------
let login = document.getElementById('login')
let loginHelp = document.getElementById('loginHelp')

let cneLog = document.getElementById('cneLog')
let cneLogHelp = document.getElementById('cneLogHelp')

// ------------register input-----------------
let submitLog = document.getElementById('submitLog')
let nameHelp = document.getElementById('nameHelp')
let fullname = document.getElementById('fullname')

let classN = document.getElementById('classN')
let classHelp =document.getElementById('classHelp')

let emailRegister = document.getElementById('emailRegister')
let emailHelp = document.getElementById('emailHelp')

let cartNat = document.getElementById('cartNat')
let cneHelp = document.getElementById('cneHelp')

let selected = document.getElementById('select')
let clubHelp = document.getElementById('clubHelp')

//* ---------- fullname
fullname.addEventListener('keyup' , (e)=>{
    
let message ;
let namereg = /^[a-zA-Z ]{5,30}$/ ; 

    if (fullname.value === '' || fullname.value === null) {
        message = "This input should not be empty !"
        nameHelp.innerText= message
        fullname.setAttribute("style", "border-color:#dc3545;");
    }else if (namereg.test(fullname.value) === false) {
        message = "Write a Valid Name (between 5 to 30 letter)"
        nameHelp.innerText= message
        fullname.setAttribute("style", "border-color:#dc3545;");
    }else{
        nameHelp.innerText =''
        fullname.setAttribute("style", "border-color:#2c8a04;");
    }
})
// *--------------

//* ---------- class number
classN.addEventListener('keyup' , (e)=>{
    let message2 ;
    let classreg = /^[0-9]{1,2}$/ ; 
    
        if (classN.value === '' || classN.value === null) {
            message2 = "This input should not be empty !"
            classHelp.innerText= message2
            classN.setAttribute("style", "border-color:#dc3545;");
        }else if (classreg.test(classN.value) === false) {
            message2 = "Write a Valid class Number !"
            classHelp.innerText= message2
            classN.setAttribute("style", "border-color:#dc3545;");
        }else{
            classHelp.innerText =''
            classN.setAttribute("style", "border-color:#2c8a04;");
        }
    })
// *--------------
//* ---------- email
emailRegister.addEventListener('keyup' , (e)=>{
    let message3 ;
    let emailreg = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/ ; 
    
        if (emailRegister.value === '' || emailRegister.value === null) {
            message3 = "This input should not be empty !"
            emailHelp.innerText= message3
            emailRegister.setAttribute("style", "border-color:#dc3545;");
        }else if (emailreg.test(emailRegister.value) === false) {
            message3 = "Write a Valid email !"
            emailHelp.innerText= message3
            emailRegister.setAttribute("style", "border-color:#dc3545;");
        }else{
            emailHelp.innerText =''
            emailRegister.setAttribute("style", "border-color:#2c8a04;");
        }
    })
// *--------------
//* ---------- cne
cartNat.addEventListener('keyup' , (e)=>{
    let message4 ;
    let cnereg = /^[A-Z]{2}[0-9]{6}$/ ; 

    
        if (cartNat.value === '' || cartNat.value === null) {
            message4 = "This input should not be empty !"
            cneHelp.innerText= message4
            cartNat.setAttribute("style", "border-color:#dc3545;");
        }else if (cnereg.test(cartNat.value) === false) {
            message4 = "Write a Valid CNE ex:(HH123456) !"
            cneHelp.innerText= message4
            cartNat.setAttribute("style", "border-color:#dc3545;");
        }else{
            cneHelp.innerText =''
            cartNat.setAttribute("style", "border-color:#2c8a04;");
        }
    })
// *--------------

selected.addEventListener('click',(e)=>{
    let message5 ;
    if(submit && e.target.value === "nada"){
        message5 = "Choose a club !"
        clubHelp.innerText= message5
        selected.setAttribute("style", "border-color:#dc3545;");
    }else{
        clubHelp.innerText =''
        selected.setAttribute("style", "border-color:#2c8a04;");
    }

})

// -------------------------
// -------------------------

//* ---------- login
login.addEventListener('keyup' , (e)=>{
    let message6 ;
    let emailreg = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/ ; 
    
        if (login.value === '' || login.value === null) {
            message6 = "This input should not be empty !"
            loginHelp.innerText= message6
            login.setAttribute("style", "border-color:#dc3545;");
            // submitLog.className.add("disabled");
        }else if (emailreg.test(login.value) === false) {
            message6 = "Write a Valid email !"
            loginHelp.innerText= message6
            login.setAttribute("style", "border-color:#dc3545;");
            // submitLog.className.add("disabled");
        }else{
            loginHelp.innerText =''
            login.setAttribute("style", "border-color:#2c8a04;");
        }
    })
// *--------------
//* ---------- cne
cneLog.addEventListener('keyup' , (e)=>{
    let message7 ;
    let cnereg = /^[A-Z]{2}[0-9]{6}$/ ; 

    
        if (cneLog.value === '' || cneLog.value === null) {
            message7 = "This input should not be empty !"
            cneLogHelp.innerText= message7
            cneLog.setAttribute("style", "border-color:#dc3545;");
        }else if (cnereg.test(cneLog.value) === false) {
            message7 = "Write a Valid CNE ex:(HH123456) !"
            cneLogHelp.innerText= message7
            cneLog.setAttribute("style", "border-color:#dc3545;");
        }else{
            cneLogHelp.innerText =''
            cneLog.setAttribute("style", "border-color:#2c8a04;");
        }
    })
// *--------------