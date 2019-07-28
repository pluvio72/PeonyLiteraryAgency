var nav_links = document.getElementsByClassName('nav-link');
var pages = document.getElementsByClassName('pages');
var pageData = document.getElementById('page-data').innerHTML;
var current_page = pageData != '' ? pageData : 'About';
document.getElementById('scrolldowna').href = '#'+current_page;

var scroll = document.getElementById('scrollbool').innerHTML;
if(scroll == 'true'){
    $('html, body').animate({
        scrollTop: $("#"+current_page).offset().top
    }, 50);
}

// make the tabs under navbar work properly

for(var i = 0; i < pages.length; i++){
    if(pages[i].id != current_page){
        pages[i].style.display = 'none';
    }
    else pages[i].style.display = '';
}

function social(){
    document.getElementById('twitter').style.display = 'block';
    document.getElementById('darken').style.opacity = '0.25';
    document.getElementsByClassName('content')[0].addEventListener('click', function(e){
        document.getElementById('twitter').style.display = 'none';
        document.getElementById('darken').style.opacity = '0';
    });
}

function scrollup(){
    $('html, body').animate({
        scrollTop: $('#navbar').offset().top
    }, 50);
}

function scrolldown(){
    $('html, body').animat({
        scrollTop: $('#'+current_page).offset().top
    }, 50);
}

function choose_page(page_name){
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = 'none';
    }
    document.getElementById(page_name).style.display = ''; 
    document.getElementById('scrolldowna').href = '#'+page_name;
    current_page = page_name;
    $('html, body').animate({
        scrollTop: $("#"+page_name).offset().top
    }, 50);
    return true;
}

for(var i = 0; i < nav_links.length; i++){
    if(nav_links[i].innerHTML == "About"){
        nav_links[i].focus();
    }
}

window.twttr = (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

twttr.widgets.createTweet(
    '100',
    document.getElementById('container'),
    {
        theme: 'dark'
    }
);

document.getElementsByClassName('timeline-Viewport')[0].style.height = '100%';