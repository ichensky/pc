//document.ondragstart = keyboard;
//document.onselectstart = keyboard;
//document.oncontextmenu = keyboard;
//document.onmouseout = function() {alert('hello')};

function keyboard() {
    return false;
}	

var n = function(h) { return parseInt(h,0x00000023) };
var s = n("1t");
var ss = n("1t") / 1.28;	

/* --------- */

document.getElementById("year").innerHTML = new Date().getFullYear()

/* --------- */

var max=0;
function textlist()
{
    max=textlist.arguments.length;
    for (i=0; i<max; i++)
	this[i]=textlist.arguments[i];
}

tl=new textlist
(
    " sh-3.2# pocolab -lab ",
    " POCOLab ",
    " sh-3.2# pocolab -username ",
    " #John ",
    " sh-3.2# pocolab -about_lab ",
    " Laboratory of web and application development ",
    " sh-3.2# pocolab -moto ",
    " Create code that never die "
);

var text_x=0; pos=0;
var l=tl[0].length;

(function tt()
 {
     document.f.ft.value=tl[text_x].substring(0,pos)+"_";

     if(pos++==l)
     {
	 pos=0;
	 setTimeout(tt,s << 5);
	 text_x++;
	 if(text_x==max)
	     text_x=0;
	 l=tl[text_x].length;
     } else
	 setTimeout(tt,ss);
 })()

/* --------- */

var t = " POCOLab.com © #John | ";
(function pageTitle() {
    t = t.substring(1, t.length) + t.substring(0, 1);
    document.title = t;
    setTimeout(pageTitle, s << 1);
})()
