var haslo=prompt("Podaj Haslo do odgadniecia:");
haslo = haslo.toUpperCase();
var haslo1="";
var dlugosc=haslo.length;
var tab=new Array(45);
var blad=0;
var yes=new Audio("yes.wav");
var no = new Audio("no.wav");
var win= new Audio("win.wav");
var lose=new Audio("lose.wav");
tab[0]="A";
tab[1]="Ą";
tab[2]="B";
tab[3]="C";
tab[4]="Ć";
tab[5]="D";

tab[6]="E";
tab[7]="Ę";
tab[8]="F";
tab[9]="G";
tab[10]="H";
tab[11]="I";
tab[12]="J";
tab[13]="K";
tab[14]="L";
tab[15]="Ł";
tab[16]="M";
tab[17]="N";
tab[18]="Ń";
tab[19]="O";
tab[20]="Ó";
tab[21]="P";
tab[22]="Q";
tab[23]="R";
tab[24]="S";
tab[25]="Ś";
tab[26]="T";
tab[27]="U";
tab[28]="V";
tab[29]="W";
tab[30]="X";
tab[31]="Y";
tab[32]="Z";
tab[33]="Ź";
tab[34]="Ż";
tab[35]="0";
tab[36]="1";
tab[37]="2";
tab[38]="3";
tab[39]="4";
tab[40]="5";
tab[41]="6";
tab[42]="7";
tab[43]="8";
tab[44]="9";
for(i=0;i<dlugosc;i++){
    if(haslo.charAt(i)==" "){
        haslo1= haslo1 + " ";
    }
    else if(haslo.charAt(i)!=" "){
        haslo1=haslo1 +"-";
    }
}
function wypisz_haslo()
{
    document.getElementById("haslo").innerHTML=haslo1;
}
window.onload = start;
function start()
{
    var tresc_diva="";
    for(i=0;i<45;i++)
    {
        var element="lit"+i;
        tresc_diva= tresc_diva + '<div id = "'+element+'" onclick="test('+i+')" class="litera">'+tab[i]+'</div>';
        if((i+1)%7==0)
        {
            if(i!=43||i!=44){
                tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
            }
            
        }
    }
    document.getElementById("alfabet").innerHTML=tresc_diva;
    wypisz_haslo();
}
String.prototype.ustawznak= function(poz,znak)
{
    if(poz>this.length-1) return this.toString();
    else return this.substr(0,poz)+znak + this.substr(poz+1);
}
function test(nr)
{  
    var traf=false;
    for(i=0;i<dlugosc;i++)
    {
        if(haslo.charAt(i)==tab[nr])
        {
            haslo1=haslo1.ustawznak(i,tab[nr])
            traf=true;
        }
    }
    if(traf==true)
    {
        yes.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00c000";
        document.getElementById(element).style.border="3px solid #00c000";
        document.getElementById(element).style.cursor="default";
        wypisz_haslo();
    }
    else
    {
        no.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#c00000";
        document.getElementById(element).style.border="3px solid #c00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");


        blad++
        var obraz="img/s"+blad +".jpg"
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'"alt="" />';
        wypisz_haslo();
    }
    if(haslo==haslo1)
    {
        document.getElementById("alfabet").innerHTML="Gratulacje Odgadles Haslo :"+"</br>"+haslo+'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        win.play();
    }
    if(blad>=9)
    {
        document.getElementById("alfabet").innerHTML="Niestety nie tym razem Haslo to :"+"</br>"+haslo+'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        lose.play();
    }   
}