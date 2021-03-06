var numer=Math.floor(Math.random()*5)+1;
function schowaj()
{
    $("#lp").fadeOut(500);
}
function slider()
    {
        numer++;if(numer>5)numer=1;

    var plik="<img height=600px width=860px src=\"slajdy/z" + numer + ".jpg\"/>";

    document.getElementById("lp").innerHTML=plik;
    $("#lp").fadeIn(500);
    setTimeout("slider()",5000);
    setTimeout("schowaj()",4500);
}
