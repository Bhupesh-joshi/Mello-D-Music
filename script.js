console.log("welcome to Mello_D-Album");

// sidebar JS code
var hamburger = document.querySelector(".hamburger");
        hamburger.addEventListener("click", function () {
            document.querySelector("body").classList.toggle("active");
        })

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/old_school.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songitem"));


let songs = [
    {songName: "old_school", filepath: "songs/old_school.mp3", coverPath: "covers/1.jpg"},
    {songName: "2_Number_De", filepath: "songs/2_Number_De.mp3", coverPath: "covers/2.jpg"},
    {songName: "12_Bande", filepath: "songs/12_Bande.mp3", coverPath: "covers/3.jpg"},
    {songName: "BELONG_SIDE", filepath: "songs/BELONG__STRAIGHT.mp3", coverPath: "covers/4.jpg"},
    {songName: "Don't_Look", filepath: "songs/Don't_Look.mp3", coverPath: "covers/5.jpg"},
    {songName: "Gair_kanooni", filepath: "songs/Gair_kanooni.mp3", coverPath: "covers/6.jpg"},
    {songName: "Jatt_Life", filepath: "songs/Jatt_Life.mp3", coverPath: "covers/7.jpg"},
    {songName: "Just_Listen", filepath: "songs/Just_Listen.mp3", coverPath: "covers/8.jpg"},
    {songName: "Kaad_6_Foot", filepath: "songs/Kaad_6_Foot.mp3", coverPath: "covers/9.jpg"},
    {songName: "UNDERESTIMATE", filepath: "songs/UNDERESTIMATE.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})


// let audioElement = new Audio("1.mp3");
// audioElement.play();

// handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// listen to Events


audioElement.addEventListener("timeupdate", ()=>{
    
    // update seekbar
    
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    console.log(progress);
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = "song/12_Bande.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
