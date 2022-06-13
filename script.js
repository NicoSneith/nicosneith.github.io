/* calc per se*/

var costs = [
    7.05, 7.05, 7.05, 7.05,
    7.05, 7.05, 7.05, 7.05,
    8.8, 8.8, 8.8, 8.8,
    10.3, 10.3, 10.3, 10.3,
    12.35, 12.35, 12.35, 12.35,
    14.7, 18.8, 26, 36.76,
];

function calc() {

    var clp = 850;
    var ars = 150;
    var pen = 3.79;
    var uyu = 40;

    var fromValue = document.getElementById("from").selectedIndex;

    var toValue = document.getElementById("to").selectedIndex;

    if (fromValue < toValue) {
        var price = 0;

        for (i = fromValue; i < toValue; i++) {
            price += costs[i];
        }

        document.getElementById("clp").innerHTML = '$' + Math.round(((price - (price * 0.2)) * clp) / 100) * 100 + '<span> CLP';
        document.getElementById("clpd").innerHTML = '<span class="before">$' + Math.round((price * clp) / 100) * 100 + ' CLP </span>';
        document.getElementById("ars").innerHTML = '$' + Math.round(((price - (price * 0.2)) * ars) / 100) * 100 + '<span> ARS';
        document.getElementById("arsd").innerHTML = '<span class="before">$' + Math.round((price * ars) / 100) * 100 + ' ARS </span> ';
        document.getElementById("sol").innerHTML = '$' + Math.round(((price - (price * 0.2)) * pen) / 10) * 10 + '<span> SOL';
        document.getElementById("sold").innerHTML = '<span class="before">$' + Math.round((price * pen) / 10) * 10 + ' SOL </span>';
        document.getElementById("uyu").innerHTML = '$' + Math.round(((price - (price * 0.2)) * uyu) / 100) * 100 + '<span> UYU';
        document.getElementById("uyud").innerHTML = '<span class="before">$' + Math.round((price * uyu) / 100) * 100 + ' UYU </span>';
        document.getElementById("usd").innerHTML = '$' + Math.round((price - (price * 0.2)) / 10) * 10 + '<span> USD';
        document.getElementById("usdd").innerHTML = '<span class="before">$' + Math.round(price / 10) * 10 + ' USD </span>';
    } else {
        document.getElementById("usd").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("clp").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("ars").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("sol").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
        document.getElementById("uyu").innerHTML = 'El Elo de origen tiene que ser inferior al deseado';
    }
}



/* list script */

window.elo = 1;
window.elo2 = 0;
window.elo3 = 1;
window.elo4 = 0;

function cleanOptions() {
    document.getElementById('drop1cont').classList.remove("visible");
    document.getElementById('drop2cont').classList.remove("visible");
    document.getElementById('drop3cont').classList.remove("visible");
    document.getElementById('drop4cont').classList.remove("visible");
    document.getElementById('drop5cont').classList.remove("visible");
}

function reply_click(clicked_id) {
    window.elo = parseInt(clicked_id);
    var elocomp = elo2 + parseInt(clicked_id);
    document.getElementById('from').value = elocomp;
    cleanOptions();
}

function reply_click2(clicked_id) {
    window.elo2 = parseInt(clicked_id);
    window.elo2comp = elo + parseInt(clicked_id);
    document.getElementById('from').value = elo2comp;
    cleanOptions();
}

function reply_click3(clicked_id) {
    window.elo3 = parseInt(clicked_id);
    if (elo3 < 25) {
        var elo3comp = elo4 + parseInt(clicked_id);
        console.log('not master')
        document.getElementById('drop4cont').style = "";
        document.getElementById('dropdown4').innerHTML = "IV";
    } else {
        var elo3comp = parseInt(clicked_id);
        console.log('master')
        document.getElementById('drop4cont').style = "display:none!important";
        document.getElementById('dropdown4').innerHTML = "*"
    }

    document.getElementById('to').value = elo3comp;
    cleanOptions();
}

function reply_click4(clicked_id) {
    window.elo4 = parseInt(clicked_id);
    window.elo4comp = elo3 + parseInt(clicked_id);
    document.getElementById('to').value = elo4comp;
    cleanOptions();
}

function reply_click5(clicked) {
    window.moneda = clicked;
    console.log(moneda)
    document.getElementsByClassName('priceext')[0].id = moneda;
    document.getElementsByName('priceog')[0].id = moneda + 'd';
    cleanOptions();
}



/* drop down*/
function drop1(_contenido) {
    document.getElementById('dropdown1').innerHTML = _contenido;
}

function drop2(_contenido) {
    document.getElementById('dropdown2').innerHTML = _contenido;

}

function drop3(_contenido) {
    document.getElementById('dropdown3').innerHTML = _contenido;
}

function drop4(_contenido) {
    document.getElementById('dropdown4').innerHTML = _contenido;
}

function drop5(_contenido) {
    document.getElementById('dropdown5').innerHTML = _contenido;
}

function reset() {
    document.getElementById('ans1').classList.add("nodisp");
    document.getElementById('ans2').classList.add("nodisp");
    document.getElementById('ans3').classList.add("nodisp");
    document.getElementById('ans4').classList.add("nodisp");
    document.getElementById('ans5').classList.add("nodisp");
}

function setanswer(ans) {
    document.getElementById(ans).classList.remove("nodisp");
}

function active() {
    document.getElementById('quest1').classList.remove("clicked");
    document.getElementById('quest2').classList.remove("clicked");
    document.getElementById('quest3').classList.remove("clicked");
    document.getElementById('quest4').classList.remove("clicked");
    document.getElementById('quest5').classList.remove("clicked");
}

function activate(questid) {
    document.getElementById(questid).classList.add("clicked");
}

function openOptions(optionsid) {
    var visexists = document.getElementsByClassName("visible");
    if (visexists.length > 0) {
        document.getElementById('drop1cont').classList.remove("visible");
        document.getElementById('drop2cont').classList.remove("visible");
        document.getElementById('drop3cont').classList.remove("visible");
        document.getElementById('drop4cont').classList.remove("visible");
        document.getElementById('drop5cont').classList.remove("visible");

    } else {
        document.getElementById('drop1cont').classList.remove("visible");
        document.getElementById('drop2cont').classList.remove("visible");
        document.getElementById('drop3cont').classList.remove("visible");
        document.getElementById('drop4cont').classList.remove("visible");
        document.getElementById('drop5cont').classList.remove("visible");
        document.getElementById(optionsid).classList.add("visible");
    }
}


document.getElementsByTagName('video')[0].onended = function() {
    this.load();
    this.play();
};

function replay() {
    mivideo = getElementById('videol');
    mivideo.currentTime = 0;
    v = mivideo.currentSrc;
    mivideo.src = '';
    mivideo.src = v;
    mivideo.play();
}

function nodisp() {
    document.getElementById('message').classList.add("nodisp");
    document.getElementById('message2').classList.remove("nodisp");
}
var drop1cont = 'Hierro';
var drop2cont = 'IV';
var drop3cont = 'Hierro';
var drop4cont = 'IV';

// when user clicks on any li element console logs the value of the li element 
document.querySelectorAll('li').forEach(function(li) {
    li.addEventListener('click', function() {
        // checks the parent element of the li element id and logs it to the console 
        var parent = (this.parentElement.id);
        var parentstr = parent.toString();
        // if parentstr is drop1cont or drop2cont or drop3cont or drop4cont then it changes the variable to the value of the li element 
        if (parentstr == 'drop1cont') {
            drop1cont = this.innerHTML;
        }
        if (parentstr == 'drop2cont') {
            drop2cont = this.innerHTML;
        }
        if (parentstr == 'drop3cont') {
            drop3cont = this.innerHTML;
        }
        if (parentstr == 'drop4cont') {
            drop4cont = this.innerHTML;
        }
    });
})

// onclick url is https://api.whatsapp.com/send?phone=542262486758&text= 

// creates a function named changemsg that takes the value of the variable drop1cont and drop2cont and drop3cont and drop4cont and concatenates adding them to the end of the url with %20 in between and logs it to the console 
function changemsg() {
    var url = 'https://api.whatsapp.com/send?phone=542262486758&text=' + 'Hola!%20Quiero%20contratar%20desde' + '%20' + drop1cont + '%20' + drop2cont + '%20' + 'a' + '%20' + drop3cont + '%20' + drop4cont + '%20' + 'por%20' + document.querySelector('.priceext').innerHTML.replace(/<span>/g, '').replace(/<\/span>/g, '');


    // changes the href of id="urlcontratar" to the url 
    document.getElementById('urlcontratar').href = url;
}