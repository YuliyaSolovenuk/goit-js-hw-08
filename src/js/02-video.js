import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";


    player.on('timeupdate', throttle(saveCurrentTimeInLocStorage, 1000));

    let currentTime = localStorage.getItem(STORAGE_KEY) || 0;
   

function saveCurrentTimeInLocStorage(e) {

    currentTime = e.seconds
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime))
}



    player.setCurrentTime(currentTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
