
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
