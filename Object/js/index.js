let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let step1 = document.querySelector('#step1');
let step2 = document.querySelector('#step2');
let step3 = document.querySelector('#step3');
let stepper = document.querySelector('#step');
let reload = document.querySelector('#reload')

let createResume = document.querySelector('#createResume');
let resume = document.querySelector('#resume');
let uName = document.querySelector('#uName');
let jobTitle = document.querySelector('#jobTitle');

let backBtn = Array.from(document.querySelectorAll('.back'));

let accInfo = null;
let personalInfo = null;
let careerInfo = null;

let userInfo = [];

// console.log(form1);

form1.addEventListener('submit', () => {
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    accInfo = acc(fname, lname,email);
    console.log(accInfo)
    page1.classList.add('hide');
    page2.classList.remove('hide');
    page2.classList.add('show');
    step2.classList.add('completed');
    console.log(page2);
    
    return false
})

form2.addEventListener('submit', () => {
    let nearestOfc = document.getElementById("nearOfc").value
    let add = document.getElementById("add").value
    let add2 = document.getElementById("add2").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let country = document.getElementById("country").value
    let code = document.getElementById("code").value
    let phone = document.getElementById("phone").value
    let mobile = document.getElementById("mobile").value

    personalInfo = personal(nearestOfc, add, add2, city, state, country, code, phone, mobile);
    console.log(personalInfo)
    page2.classList.remove('show');
    page2.classList.add('hide');
    page3.classList.remove('hide');
    page3.classList.add('show');
    step3.classList.add('completed');
})

form3.addEventListener('submit', () => {
    let categories = document.getElementById("categories").value
    let title = document.getElementById("title").value
    let location = document.getElementById("location").value
    let experience = document.getElementById("experience").value
    let authorizeCountry = document.getElementById("authorizeCountry").value
    let website = document.getElementById("website").value
    let age = document.getElementById("age").value
    let other = document.getElementById("other").value
    let file = document.getElementById("file").value

    careerInfo = career(categories, title, location, experience, authorizeCountry, website, age, other, file);
    console.log(careerInfo)
    console.log(personalInfo)

})

form3.addEventListener('submit', () => {
    userInfo.push(accInfo);
    userInfo.push(personalInfo);
    userInfo.push(careerInfo);
    createResume.disabled = false;
    console.log(userInfo);
})  

backBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.id === 'p2Bbtn'){
            page2.classList.remove('show');
            page2.classList.add('hide');
            page1.classList.remove('hide');
            page1.classList.add('show');
            step2.classList.remove('completed');
        }else if(e.target.id === 'p3Bbtn'){
            page3.classList.remove('show');
            page3.classList.add('hide');
            page2.classList.remove('hide');
            page2.classList.add('show');
            step3.classList.remove('completed');
        }
    })
})


function acc(fname,lname, email){
    let accInfo = {fname, lname, email}
    return accInfo;
}

function personal(nearestOfc, add, add2, city, state, country, postCode, phone, mobile){
    let personalInfo = {nearestOfc, add, add2, city, state, country, postCode, phone, mobile};
    return personalInfo;
}

function career(categories, title, location, experience, authorizeCountry, website, age, other, file){
    let careerInfo = {categories, title, location, experience, authorizeCountry, website, age, other, file};
    return careerInfo;
}

createResume.addEventListener('click', (e) => {
    uName.innerHTML = `${userInfo[0].fname} ${userInfo[0].lname}`;
    jobTitle.innerHTML = `${userInfo[2].title}`;
    page3.classList.remove('show');
    page3.classList.add('hide');
    resume.classList.remove('hide');
    resume.classList.add('show');
    stepper.classList.add('hide');
})

reload.addEventListener('click', () => {
    window.location.reload(true);
})
