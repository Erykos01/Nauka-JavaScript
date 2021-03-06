function licz()
        {
            var dzis=new Date();

            var dzien=dzis.getDate();
            if(dzien<10)dzien="0"+dzien;
            var miesiac=dzis.getMonth()+1;
            if(miesiac<10)miesiac="0"+miesiac;
            var rok=dzis.getFullYear();

            var godzina=dzis.getHours();
            if(godzina<10)godzina="0"+godzina;
            var minuta=dzis.getMinutes();
            if(minuta<10)minuta="0"+minuta;
            var sekunda=dzis.getSeconds();
            if(sekunda<10)sekunda="0"+sekunda;

            document.getElementById("zegar").innerHTML = dzien+"."+miesiac+":"+rok+"    "+godzina+":"+minuta+":"+sekunda;
            setTimeout("licz()",1000)
        }
function Sprawdz()
{
    var x = document.getElementById("liczba").value;
    var test;
    var dzielnik =0;
    for (test=0;test<=x;test++){
        if (x%test==0)
        {
            dzielnik++;
        }
    }
    if(x == 0 )
    {
        document.getElementById("wynik").innerHTML="Czy liczba jest wieksza od 0 ?";
    }
    if(x>0)
    {
        
        document.getElementById("wynik").innerHTML="Podana liczba Jest wieksza od zera";
        if (x>1 && dzielnik==2)
        {
        document.getElementById("wynik").innerHTML+="</br>"+"Podana liczba jest tez liczba pierwsza"
        }
    }
    else if(x<0)
    {
        document.getElementById("wynik").innerHTML="Podana liczba Jest mniejsza od zera";
    }
    
}
function wyswietl()
{
    var lm= document.getElementById("lm").value;
    var lw=document.getElementById("lw").value;
    if(lm==0 && lw==0)
    {
        document.getElementById("liczby").innerHTML="za malo danych";
    }
    if(lm<lw)
    {
        document.getElementById("liczby").innerHTML=" ";
        for(lm;lm<=lw;lm++){
            document.getElementById("liczby").innerHTML+=" "+lm;
        }
    }
    else if(lw>lm)
    {
        document.getElementById("liczby").innerHTML="nieprawidlowy przedzial";
    }
}