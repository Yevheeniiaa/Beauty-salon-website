const openPopUp = document.querySelectorAll(".open_pop_up");
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');
const sal_adress_var = document.querySelector('.salon_adress');
const mast = document.querySelector('.master');
const date_var = document.querySelector('.date');
const time_var = document.querySelector('.time');
let fl_check_sal_adr = false;
let fl_check_mast = false;
let fl_check_date = false;
let fl_check_time = false;
let fl_check_enter_time = false;
const subm = document.querySelector(".sub_form")
const mess = document.querySelector(".message");
const pattern_name = /^[А-ЯЇІҐЄ][а-яїіґє]{1,23}$/;
const pattern_email = /^[a-z0-9._%+-]{1,}@gmail.com$/;
const pattern_tel = /\+380[0-9]{9}/;




for(let i = 0; i < openPopUp.length; i++){
    openPopUp[i].addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});
}

closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
});

function checkInp(name_ID, nam_pat){
    let variable = document.getElementById(name_ID).value;
    let match = variable.match(nam_pat);
    if(!match){
        return false;
    }
    return true;

}

function serveFunc() {
    sal_adress_var.classList.add('visb');
    fl_check_sal_adr = true;
}

function adressSalFunc(){
    mast.classList.add('visb');
    fl_check_mast = true;
}

function masterFunc() {
    date_var.classList.add('visb');
    fl_check_date = true;
}
function dateFunc(){
    time_var.classList.add('visb');
    fl_check_time = true;
}
function timeFunc(){
    fl_check_enter_time = true;
}

function resetFunc(){
    if (fl_check_sal_adr){
        sal_adress_var.classList.remove('visb');
    }
    if(fl_check_mast){
        mast.classList.remove('visb');
    }
    if(fl_check_date){
        date_var.classList.remove('visb');
    } 
    if(fl_check_time){
        time_var.classList.remove('visb');
    }
}

function checkingSelect(){
    if (fl_check_sal_adr && fl_check_mast && fl_check_date && fl_check_time && fl_check_enter_time){
        return true;
    }
    return false;
    }

subm.addEventListener('click', function(){
    if(checkInp('userName', pattern_name) && checkInp('userEmail', pattern_email) && checkInp('userTel', pattern_tel) && checkingSelect() ){
        subm.setAttribute('type', 'button');
        popUp.classList.remove('active');
        submFunc();
    }
});
function submFunc(){
    mess.classList.add('active');
}

/*window.addEventListener('load', (event) =>{
    const timeSlid = setTimeout(actSlidFunc(), 5000);
    
});
    

function actSlidFunc(){
    let slid = document.querySelector(".middle")
    slid.classList.add("active")
}*/