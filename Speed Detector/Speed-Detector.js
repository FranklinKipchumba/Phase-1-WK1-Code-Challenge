//Speed Detector
let speed = 70;
function SpeedCovered(speed){
    if(speed <=70){
        return "Ok";
    }else if(speed >70 && 80){
        return "2 points";
    }else if(speed >80 && 90){
        return "4 points";
    }else if(speed >90 && 100){
        return "6 points";
    }else if(speed >100 && 110){
        return "8 points";
    }else if(speed >110 && 120){
        return "10 points";
    }else if(speed >120 && 130){
        return "12 points";
    }else{
        return "License Suspended"
    }
}