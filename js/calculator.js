function dmg() {
   
    var atk = parseFloat(document.getElementById("atk").value) || 2000;
    var scal = parseFloat(document.getElementById("scal").value) || 100;
    var dmgincrease = parseFloat(document.getElementById("dmgincrease").value) || 0;
    var dmgbonus = parseFloat(document.getElementById("dmgbonus").value) || 0;
    var cd = parseFloat(document.getElementById("cd").value) || 50;

    var outdmg = (atk * (scal/100) + dmgincrease) * (1 + dmgbonus/100);
    var indmg = outdmg*.5*.9;
    var indmg_crit = indmg * (1 + cd/100);
    var mv = ((scal/100) + dmgincrease/2000) * (1 + dmgbonus/100) * 100

    document.getElementById("txtresult").value = outdmg;
    document.getElementById("indmg").value = indmg;
    document.getElementById("indmg_crit").value = indmg_crit;
    document.getElementById("mv").value = mv;
}