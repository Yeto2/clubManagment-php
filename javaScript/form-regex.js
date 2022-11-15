let nameHelp = document.getElementById('nameHelp')
let fullname = document.getElementById('fullname')

let classN = document.getElementById('classN')
let classHelp =document.getElementById('classHelp')

let email = document.getElementById('email')
let emailHelp =document.getElementById('emailHelp')


//* ---------- fullname
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
// *--------------

//* ---------- class number
classN.addEventListener('keyup' , (e)=>{
    console.log(e.target.value)
    let message2 ;
    let classreg = /^[0-9]{1,2}$/ ; 
    
        if (classN.value === '' || classN.value === null) {
            message2 = "This input should not be empty !"
            classHelp.innerText= message2
        }else if (classreg.test(classN.value) === false) {
            message2 = "Write a Valid class Number !"
            classHelp.innerText= message2
        }else{
            classHelp.innerText =''
        }
    })
// *--------------
// //* ---------- email
// email.addEventListener('keyup' , (e)=>{
//     console.log(e.target.value)
//     let message3 ;
//     let emailreg = /^[0-9]{1,2}$/ ; 
    
//         if (email.value === '' || email.value === null) {
//             message3 = "This input should not be empty !"
//             emailHelp.innerText= message3
//         }else if (emailreg.test(email.value) === false) {
//             message3 = "Write a Valid class Number !"
//             emailHelp.innerText= message3
//         }else{
//             emailHelp.innerText =''
//         }
//     })
// // *--------------