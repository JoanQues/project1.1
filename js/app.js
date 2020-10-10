import {validateDNI,validatePhone,validateDate,validateEmail} from './validation.js'

let players = [
    ["43127678F", "Juan", "Pérez Gómez", "692403829", "jperez@gmail.com", "12/12/1980", "ES6621000418401234567891", "PRO"],
    ["43125043G", "Adolfo", "Gutiérrez Lorma", "692403829", "agutierrez@gmail.com", "12/12/1985", "ES6000491500051234567892", "PRO"],
    ["43125430I", "Carles", "Vich Lorem", "692403829", "cvich@gmail.com", "12/12/1981", "ES9420805801101234567891", "PRO"],
    ["43124345J", "Gustavo", "Cander More", "692403829", "gmore@gmail.com", "12/12/1995", "ES9000246912501234567891", "PRO"],
    ["43127678F", "Alicia", "Pérez Gómez", "692403829", "jperez@gmail.com", "12/12/1980", "ES6621000418401234567891", "BEG"],
    ["43125043G", "David", "Gutiérrez Lorma", "692403829", "agutierrez@gmail.com", "12/12/1985", "ES6000491500051234567892", "BEG"],
    ["43125430I", "Patricia", "Vich Lorem", "692403829", "cvich@gmail.com", "12/12/1981", "ES9420805801101234567891", "BEG"],
    ["43124345J", "Pepa", "Vivancos Leia", "692403829", "pleia@gmail.com", "12/12/1995", "ES9000246912501234567891", "BEG"]
];

export default function addPlayer(){
    let btn = document.querySelector("#add");
    btn.addEventListener("click",function(){
        let dni = document.querySelector("#dni").value;
        let name = document.querySelector("#name").value;
        let surname = document.querySelector("#surname").value;
        let phone = document.querySelector("#phone").value;
        let mail = document.querySelector("#mail").value;
        let date = document.querySelector("#date").value;
        let dateSplited = date.split("-");
        let finalDate = dateSplited[2] + "-" + dateSplited[1] + "-" + dateSplited[0];
        let iban = document.querySelector("#iban").value;
        let cat = document.querySelector("#cat").value;
        let validate = true;
        if(!document.querySelector("#surname")){
            document.querySelector("#esurname").innerHTML = "Error surname"
            validate = false;
        }
        if(!document.querySelector("#name")){
            document.querySelector("#ename").innerHTML = "Error name"
            validate = false;
        }
        if(!document.querySelector("#iban")){
            document.querySelector("#eiban").innerHTML = "Error iban"
            validate = false;
        }
        if(!validateDNI(dni)){
            document.querySelector("#edni").innerHTML = "Error DNI";
            validate = false;
            console.log("dni");
        } if(!validateDate(finalDate) || moment(date) > moment().subtract(16, 'years')){
            document.querySelector("#edate").innerHTML = "Error date";
            validate = false;
            console.log("date");
            console.log(date);
        } if(!validateEmail(mail)){
            document.querySelector("#eemail").innerHTML = "Error email";
            validate = false;
            console.log("mail");
        } if(!validatePhone(phone)){
            document.querySelector("#ephone").innerHTML = "Error phone";
            validate = false;
            console.log("phone");
        }
        console.log(moment(date));
        console.log((moment().subtract(18, 'years')).toString())
        if(moment(date) > moment().subtract(18, 'years') && cat == "PRO"){
            document.querySelector("#ecat").innerHTML = "Menores de edad solo pueden ser Beguinner";
            validate = false;
        }
        console.log(validate);
        if(validate){
            players.push([dni,name,surname,phone,mail,date,iban,cat])
            showList();
            document.querySelector("#edni").innerHTML = "";
            document.querySelector("#edate").innerHTML = "";
            document.querySelector("#eemail").innerHTML = "";
            document.querySelector("#ephone").innerHTML = "";
            document.querySelector("#success").innerHTML = "Player added successfully";
        }
        console.log(players);
    });
}

function showList() {
    let begList = document.querySelector("#beglist");
    let proList = document.querySelector("#prolist");
    if(document.querySelector("#containerbeg") && document.querySelector("#containerpro")){
        document.querySelector("#containerbeg").remove();
        document.querySelector("#containerpro").remove();
    }
    let containerbeg = document.createElement("div");
    containerbeg.id = "containerbeg";
    let containerpro = document.createElement("div");
    containerpro.id = "containerpro";

    for(let i = 0; i < players.length; i++){
        let category = players[i][7];
        let div = document.createElement("div");
        let pname = document.createElement("p");
        let pemail = document.createElement("p");
        let pcat = document.createElement("p");

        pname.innerHTML = players[i][1] + " " + players[i][2];
        pemail.innerHTML = players[i][4];
        pcat.innerHTML = category;

        div.appendChild(pname);
        div.appendChild(pemail);
        div.appendChild(pcat);

        if(category == "BEG"){
            containerbeg.appendChild(div);
        }else{
            containerpro.appendChild(div);
        }
       
    }
    begList.appendChild(containerbeg);
    proList.appendChild(containerpro);
}
showList();