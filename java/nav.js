


let navelements =['cinema.ge'];
let navpages = [ 'index.html'];

let navtext = '<ul>';
for (i=0; i<navelements.length; i++){
    navtext +='<li><a href="' + navpages[0] + '">' +navelements[i] + "</a></li>"
}
navtext+="</ul>"
document.getElementById("nav").innerHTML =navtext;

