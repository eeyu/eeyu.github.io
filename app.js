'use strict'
var player;


const switcher = document.querySelector('.btn');
const listText = document.getElementById("textedit");
// const video = document.getElementById("player");

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

var state = 0;
document.addEventListener('keydown', (event) => {
    var name = event.key;

    var t = "textContent" in listText.childNodes[0] ? "textContent" : "innerText";
    listText.childNodes[0][t] += name;

    if (name == 'p') {
        if (state == 0) {
            state = 1;
            player.playVideo();
        } else {
            state = 0;
            player.pauseVideo();
        }
        
    }
    

}, false);

var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('existing-iframe-example', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  });
}
function onPlayerReady(event) {
  //player.playVideo();
}

function onPlayerStateChange(event) {
//   changeBorderColor(event.data);
}




