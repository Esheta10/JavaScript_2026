// class Car{
//     constructor(brand, color){
//         this.brand = brand;
//         this.color = color;
//     }

//     start(){
//         console.log(`Car is starting...`)
//     }

//     stop(){
//         console.log(`Car is stopping...`)
//     }
// }

// class ElectricVehicle extends Car{
//     constructor(brand, color, battery){
//         super(brand, color);
//         this.battery = battery;
//     }
//     charging(){
//         console.log(`Car is charging...`)
//     }
// }

// let c1 = new ElectricVehicle("Audi", "Red","100kWh");
// c1.start();
// c1.stop();
// c1.charging();

// console.log(c1);



class MediaPlayer{
    play(){
        console.log("Playing the media...")
    }
}

class Video extends MediaPlayer{
    play(){
        console.log("Playing the video...")
    }
}

class Music extends MediaPlayer{
    play(){
        super.play(); // parent ka play() method bhi chalega
        console.log("Playing the music...")
    }
}


let mus = new Music();
mus.play();

let vid = new Video();
vid.play();

