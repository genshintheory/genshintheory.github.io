function add_number() {
   
    var first_number = parseInt(document.getElementById("atk").value);
    var second_number = parseInt(document.getElementById("dmgbonus").value);
    var result = first_number * (1 + second_number/100);

    document.getElementById("txtresult").value = result;
}