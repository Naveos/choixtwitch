var result
var max = 14
var min = 1
var result2
var min2 = 1
var max2 = 3

function civilisation(){
    result = Math.floor(Math.random() * (max - min)) + min;
    if(result == 1){
        result = "Empire romain"
    }
    if(result == 2){
        result = "Empire egyptien"
    }
    if(result == 3){
        result = "Empire francais"
    }
    if(result == 4){
        result = "Empire anglais"
    }
    if(result == 5){
        result = "Empire allemand"
    }
    if(result == 6){
        result = "Empire espagnol"
    }
    if(result == 7){
        result = "Empire chinois"
    }
    if(result == 8){
        result = "Empire coreen"
    }
    if(result == 9){
        result = "Empire japonais"
    }
    if(result == 10){
        result = "Empire arabe"
    }
    if(result == 11){
        result = "Empire ottoman"
    }
    if(result == 12){
        result = "Empire byzantin"
    }
    if(result == 13){
        result = "Empire viking"
    }
    document.getElementById("civilisationrep").style.margin = "1%"
    document.getElementById("civilisationrep").style.padding = "1%"
    document.getElementById("civilisationrep").innerHTML = (result);
    console.log(result)
}

function chef(){
    result2 = Math.floor(Math.random() * (max2 - min2)) + min2;
    if(result2 == 1){
        result2 = "Le chef sera Naveo"
    }
    if(result2 == 2){
        result2 = "Le chef sera Apolius"
    }
    if(result2 == 3){
        result2 = "Le chef sera Naveo"
    }
    document.getElementById("chefrep").style.margin = "1%"
    document.getElementById("chefrep").style.padding = "1%"
    document.getElementById("chefrep").innerHTML = (result2);
    console.log(result2)
}