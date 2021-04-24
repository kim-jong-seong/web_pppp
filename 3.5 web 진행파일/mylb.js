var projectlist=["HTML", "CSS", "JavaScript", "Nodejs","Python", "PHP", "HomeServer", "DNS","HTTP","OAuth", "Application"];

function projectlistprint(){
        var i=0;
        while(i<projectlist.length){
            document.write('<a class="namecolor" id="'+projectlist[i]+'" href="'+projectlist[i]+'.html"><li>'+projectlist[i]+'</li></a>');
            i = i + 1;
        }
}

function titlelogo(){
    document.write('<p id="Logolocation"><span id="Logo"><a href="index.html">BuyTheChicken</a><p></span><p id="Logospace">  Portfolio collection</p>');
}

function choose(name){
    document.querySelector('#'+name).style.color='white'
    document.querySelector('#'+name).style.backgroundColor='rgb(182, 182, 182)'
}

function Thanks(){
    document.write('<span style="text-align: right;padding-left: 179px;">Thanks To <a class="site" href="https://opentutorials.org/course/3084" title="생활코딩 사이트로 이동합니다.">생활코딩</a></span>');
}

function coment_top(){
    document.write('<div style="margin-top:40px; margin-bottom:40px;"></div>');
}