var nav_links = document.getElementsByClassName('nav-link');
var pages = document.getElementsByClassName('pages');
var pageData = document.getElementById('page-data').innerHTML;
var current_page = pageData != '' ? pageData : 'About';
document.getElementById('scrolldowna').href = '#'+current_page;

//make scroll offset 0 insteaf of 9 pixels up which is the default
zenscroll.setup(null, 0);

//set autoscroll to div when clicking from author page back to main page
var scroll = document.getElementById('scrollbool').innerHTML;
if(scroll == 'true'){
    console.log(document.getElementById(current_page).getBoundingClientRect().top);
    zenscroll.toY(document.documentElement.clientHeight);
}

//setup set bar under nav link and only show currently chosen div
for(var i = 0; i < nav_links.length; i++){
    if(nav_links[i].innerHTML == current_page){
        nav_links[i].classList.add('active');
    }
}

//make only current page visible
for(var i = 0; i < pages.length; i++){
    if(pages[i].id != current_page){
        pages[i].style.display = 'none';
    }
    else pages[i].style.display = '';
}

//functions for buttons
function social(){
    var dark = document.getElementById('darken');
    document.getElementById('twitter').style.display = 'block';
    dark.style.opacity = '0.4';
    dark.style.zIndex = '9';
    dark.addEventListener('click', function(e){
        document.getElementById('twitter').style.display = 'none';
        dark.style.opacity = '0';
        dark.style.zIndex = '-10';
    });
}

function changeImage(div){
    div.getElementsByClassName('author-name-box')[0].style.backgroundColor = 'rgba(200,200,200,0.66)';
    div.getElementsByClassName('author-name')[0].style.opacity = '1';
}
function changeImageBack(div){
    div.getElementsByClassName('author-name-box')[0].style.backgroundColor = 'rgba(200,200,200,0)';
    div.getElementsByClassName('author-name')[0].style.opacity = '0';
}

function choose_page(page_name){
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = 'none';
    }
    document.getElementById(page_name).style.display = ''; 
    document.getElementById('scrolldowna').href = '#'+page_name;
    current_page = page_name;
    zenscroll.to(document.getElementById(page_name));

    for(var i = 0; i < nav_links.length; i++){
        if(nav_links[i].innerHTML == page_name){
            nav_links[i].classList.add("active");
        }
        else nav_links[i].classList.remove("active");
    }
}

//twitter sidebar
//window.twttr = (function(d, s, id) {
//var js, fjs = d.getElementsByTagName(s)[0],
//    t = window.twttr || {};
//    if (d.getElementById(id)) return t;
//        js = d.createElement(s);
//        js.id = id;
//        js.src = "https://platform.twitter.com/widgets.js";
//        fjs.parentNode.insertBefore(js, fjs);
//
//        t._e = [];
//        t.ready = function(f) {
 //       t._e.push(f);
//    };
//
//    return t;
//}(document, "script", "twitter-wjs"));

//twttr.widgets.createTweet(
//    '100',
//    document.getElementById('container'),
//    {
//        theme: 'dark'
//    }
//);

//document.getElementsByClassName('timeline-Viewport')[0].style.height = '100%!important';