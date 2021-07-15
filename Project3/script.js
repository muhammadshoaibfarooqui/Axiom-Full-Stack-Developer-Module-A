//Get DOM Elements for JS code
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Create function for clicking on video
function toggleVideoStatus()
{
    if(video.paused)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
    //return true;
}

//Create function for updating the play / pause icons
function updatePlayIcon()
{
    if(video.paused)
    {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }
    else
    {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
    //return true;
}

//Create function to update the progress
function updateProgress()
{
    progress.value = (video.currentTime/video.duration)*100;

    //Set the time for timestamp
    let mins = Math.floor(video.currentTime/60);
    if(mins<10)
    {
        mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime%60);
    if(secs<10)
    {
        secs = '0' + String(secs);
    }

    //using template literal 
    timestamp.innerHTML = `${mins}:${secs}`
    //mins+':'+secs

    //console.log(video.duration);
    //console.log(video.currentTime);
    //return true;
}

//Create function to stop the video
function stopVideo()
{
    video.currentTime = 0;
    video.pause();
    //return true;
}

//Create function to update the video progress using the slider
function setVideoProgress()
{
    video.currentTime = (+progress.value*video.duration)/100;
    //return true;
}

//Event Listeners
//1. Event listeners for clicking on the video
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

//2. Event listener for play button
play.addEventListener('click',toggleVideoStatus);

//3. Event listener for stop button
stop.addEventListener('click',stopVideo);

//4. Evnet listener for progress bar
progress.addEventListener('change',setVideoProgress);