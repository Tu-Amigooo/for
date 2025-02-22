
let sendThis = `Thanks Anku, for everything... Pata nahi kitne baar kitne tarike se tumhe thanks khe sakta hu, par honestly thanks mere life me aane ke liye, mujhe apna bana ne ke liye. Tumhare sath bitaya harr ek pal mere liye ANMOL rha hai, thanks mere chere ki muskan ban ne ke liye, thanks mere harr gumho ko samjhne ke liye. Log to pyaar me Taj Mahal bana dete... But me itna hi bana sakta hu (hehe), so here is the my first ever created webpage, dedicated only to you....My Nezu.` 

let sendThat = `I Love You Alwways`

function send(){
    alert(`${sendThis}`);
}

function doMes(){
    let date = new Date();
    let hours = date.getHours();
    // let hours = 22;
    console.log(hours);
    if (hours > 5 && hours < 12){
        alert(`${sendThis}`);
    }
    else if (hours > 12 && hours < 18){
        alert(`Good Afternoon My Love`);
    }
    else if (hours > 18 && hours < 20){
        alert(`Good Evening Nezu`);
    }
    else{
        alert(`${sendThat}`)
    }
}

let src1 = `"player 1.jpeg"`
let src2 = `"player 2.jpeg"`
let src3 = `"player 3.jpeg"`
let src4 = `"palyer 4.jpeg"`
let src5 = `"player 5.jpeg"`
let src6 = `"player 6.jpeg"`

let mus1 = `"Hothon Se Chhulo Tum _ Prem Geet Songs _ Raj Babbar _ Anita Raj _ Jagjit Singh _ Popular Ghazal.mp3"`
let mus3 = `"Apna Bana Le - Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya.mp3"`
let mus2 = `"'AGAR TUM SAATH HO' Full VIDEO song _ Tamasha _ Ranbir Kapoor, Deepika Padukone _ T-Series.mp3"`
let mus4 = `"Aankhon Mein Teri Ajab Si (Lyrical) Om Shanti Om _ K.K. _ Shahrukh Khan _ Deepika Padukone.mp3"`
let mus5 = `"Love is a waste of time pk Sonu nigam song covered by TejAs.mp3"`
let mus6 = `"LYRICAL_ Main Agar Kahoon _ Om Shanti Om _ Shahrukh Khan,Deepika Padukone _ Sonu Nigam,Shreya Ghosal.mp3"`

let date = new Date();
let hours = date.getHours();
//let hours = 22;
if (hours > 0 && hours < 7){
    document.querySelector(".imp").innerHTML = `
    <img class="pl" src=${src1} alt="">
    <audio id="aud" controls autoplay><source src=${mus1} type="audio/mp3"></audio>            
 `
}
else if (hours > 7 && hours < 11){
    document.querySelector(".imp").innerHTML = `
    <img class="pl" src=${src2} alt="">
    <audio id="aud" controls autoplay><source src=${mus2} type="audio/mp3"></audio>            
`
}else if (hours > 11 && hours < 15){
    document.querySelector(".imp").innerHTML = `
    <img class="pl" src=${src3} alt="">
    <audio id="aud" controls autoplay><source src=${mus3} type="audio/mp3"></audio>            
`
}
else if (hours > 15 && hours < 18){
    document.querySelector(".imp").innerHTML = `
    <img class="pl" src=${src4} alt="">
    <audio id="aud" controls autoplay><source src=${mus4} type="audio/mp3"></audio>            
`
}
else if (hours > 18 && hours < 21){
    document.querySelector(".imp").innerHTML = `
    <img class="pl" src=${src5} alt="">
    <audio id="aud" controls autoplay><source src=${mus5} type="audio/mp3"></audio>            
`
}
else{
    document.querySelector(".imp").innerHTML = `
    <img class="pl" src=${src6} alt="">
    <audio id="aud" controls autoplay><source src=${mus6} type="audio/mp3"></audio>            
`

}
