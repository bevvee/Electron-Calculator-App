console.log(' Calculator is work (:')
var nbr = ''
result = document.getElementById('result')
//button number
function zero(){
    if(result.value == 0){
        result.value = "0";
    }
    else{
        result.value += "0";
    }
}
function coma(){
    found = false
    for(i=0;i<result.value.length;i++){
        if('.' == result.value[i]){
            found = true
        }
    }
    if(found == false){
        result.value += ".";
    }
}
function one(){
    if(result.value == 0){
        result.value = "1";
    }
    else{
        result.value += "1";
    }
}
function two(){
    if(result.value == 0){
        result.value = "2";
    }
    else{
        result.value += "2";
    }
}
function three(){
    if(result.value == 0){
        result.value = "3";
    }
    else{
        result.value += "3";
    }
}
function four(){
    if(result.value == 0){
        result.value = "4";
    }
    else{
        result.value += "4";
    }
}
function five(){
    if(result.value == 0){
        result.value = "5";
    }
    else{
        result.value += "5";
    }
}
function six(){
    if(result.value == 0){
        result.value = "6";
    }
    else{
        result.value += "6";
    }
}
function seven(){
    if(result.value == 0){
        result.value = "7";
    }
    else{
        result.value += "7";
    }
}
function eight(){
    if(result.value == 0){
        result.value = "8";
    }
    else{
        result.value += "8";
    }
}
function nine(){
    if(result.value == 0){
        result.value = "9";
    }
    else{
        result.value += "9";
    }
}
//button opertation
function plus(){
    nbr +=  result.value + '+' 
    result.value = 0
}
function moins(){
    nbr += result.value + '-' 
    result.value = 0
}
function multipl(){
    nbr += result.value + '*' 
    result.value = 0
}
function division(){
    nbr += result.value + '/' 
    result.value = 0
}
function cleaq(){
    result.value = "";
    nbr= 0
}
function pourcentage() {
    var  pourcentage = result.value * 1;
    resultat = pourcentage / 100 
    result.value = resultat
}
 a = 0
function plusoumoins(){
    if(a % 2 == 0){
         a++
         plus()
    }
    else{
    a++
    moins()
    }
}

function equal(){
    nbr +=result.value
    result.value=eval(nbr)
}
