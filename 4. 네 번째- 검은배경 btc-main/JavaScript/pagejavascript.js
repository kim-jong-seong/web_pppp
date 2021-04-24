// Logo

var logo={
    "set":function(){
        document.write("<a id='Logo' href='index.html'>BuyTheChicken</a>");
    }
}

// NavBar

var nav ={
    "list":["Home","Study"], // Page Menu
    "set":function(){         // Page Menu setting
        for(var key in this.list){
            if(this.list[key]==="Home") // for index.html only.
                document.write("<a class='nav_index' href='index.html'>"+this.list[key]+"</a>");
            else{
                document.write("<a class='nav_index' href='"+this.list[key]+".html'>"+this.list[key]+"</a>");
            }
        }
        this.tag();
    },
    "tag":function(){
        document.write("<a id='nav_tag'> Portfolio collection </a>");
    }
}

// [LayOut1]

// LayOut1_Home


var index_contents={
    "list":["Introduction", "Thanks","Made"], // contents list
    "nowpage":function(page){
        document.querySelector('#'+page).style.color='white';
        document.querySelector('#'+page).style.backgroundColor='rgb(182, 182, 182)';
                
    },
    "set":function(){
        for(var key in this.list){
            if(this.list[key]==="Introduction")
                document.write("<a href='index.html' class='contents_list' id='"+this.list[key]+"'><li class='contents_li'>"+this.list[key]+"</li></a>");
            else
                document.write("<a href='"+this.list[key]+".html' class='contents_list' id='"+this.list[key]+"'><li class='contents_li'>"+this.list[key]+"</li></a>");
        }
    }
}

// LayOut1_Study

var Study_contents={
    "list":["HTML","CSS","JavaScript"],
    "nowpage":function(page){
        document.querySelector('#'+page).style.color='white';
        document.querySelector('#'+page).style.backgroundColor='rgb(182, 182, 182)';
                
    },
    "set":function(){
        for(var key in this.list)
            document.write("<a href='"+this.list[key]+".html' class='contents_list' id='"+this.list[key]+"'><li class='contents_li'>"+this.list[key]+"</li></a>");
    }
}

// [LayOut2]


// LayOut2_Home

var content_title={
    "set_main":function(title_name){
        document.write("<div class='main_content_title'><p>"+title_name+"</p></div>");
    },
    "set":function(title_name){
        document.write("<div class='content_title'><p>"+title_name+"</p></div>");
    }
}

var contents_text={
    "dream":function(){
        document.write("<div id='dream'><p style='font-weight: bold;'>BuyTheChicken</p><p><br>웹 개발자의 꿈을 이루고</p><p>첫 수입이 생긴다면 제일 좋아하는 음식인 치킨을 사먹을 것</p></div>");
    }
}




// other things


var circle_chart={
    "persent":nav.list.length*10,   // Persentage
    "color":"blue",  // color set

    "set":function(){ // chart setting
        if(this.persent<30){
            this.color="orange";
        }
        else if(this.persent<60){
            this.color="green";
        }
        else{
            this.color="blue";
        }
        document.write("<div class='flex-wrapper'> <div class='single-chart'> <svg viewBox='0 0 36 36' class='circular-chart "+this.color+"'> <path class='circle-bg' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' /> <path class='circle' stroke-dasharray='"+this.persent+", 100' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' /> <text x='18' y='20.35' class='percentage'>"+this.persent+"%</text> </svg> </div>");
    }
}

var ex_circle_chart={
    "persent":["24","56","92"],   // Persentage
    "color":"blue",  // color set

    "set":function(){ // chart setting
        for(var key in this.persent){
            if(this.persent[key]<30){
                this.color="orange";
            }
            else if(this.persent[key]<60){
                this.color="green";
            }
            else{
                this.color="blue";
            }
            document.write("<span class='flex-wrapper'> <span class='single-chart'> <svg viewBox='0 0 36 36' class='circular-chart "+this.color+"'> <path class='circle-bg' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' /> <path class='circle' stroke-dasharray='"+this.persent[key]+", 100' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' /> <text x='18' y='20.35' class='percentage'>"+this.persent[key]+"%</text> </svg> </span>");
        }
    }
}


var Thanks={
    "To":function(){
        document.write('<a href="https://opentutorials.org/course/1"> <img src="img/생활코딩.jpg" class="thanks_img"></a>');
        document.write('<p><a href="https://opentutorials.org/course/1" class="thanks" title="&quot생활코딩&quot님의 사이트로 이동합니다.">생활코딩</a></p>');
        document.write('<a href="https://www.youtube.com/user/cmiscm"> <img src="img/InteractiveDeveloper.jpg" class="thanks_img"></a>');
        document.write('<p><a href="https://www.youtube.com/user/cmiscm" class="thanks" title="&quotInteractive Developer&quot님의 사이트로 이동합니다.">Interactive Developer</a></p>'); 
        document.write('<a href="https://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg"> <img src="img/조코딩.jpg" class="thanks_img"></a>');
        document.write('<p><a href="https://www.youtube.com/channel/UCQNE2JmbasNYbjGAcuBiRRg" class="thanks" title="&quot조코딩&quot님의 사이트로 이동합니다.">조코딩</a></p>');      
    }
}

var skill={
    "enter":function(){
        document.write("<p>&nbsp</p>");
    },
    "jump":function(){
        document.write("<p>&nbsp</p><p>&nbsp</p><p>&nbsp</p>");
    }
}