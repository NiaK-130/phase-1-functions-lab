// Code your solution in this file!

const headquaters = 42;

function distanceFromHqInBlocks(dist){
    
    var distance = Math.abs(headquaters - dist);

    return distance
  
}

//--------------------------------------------------------//

function distanceFromHqInFeet(feet){

    var block = 264;
    var distanceinfeet = distanceFromHqInBlocks(feet)*block;

    return distanceinfeet

}

//--------------------------------------------------------//


function  distanceTravelledInFeet(start,end){

    var block = 264

    var total = Math.abs(end - start)*block

    return total 

}


//--------------------------------------------------------//


function calculatesFarePrice(start, destination){

    var output = distanceTravelledInFeet(start,destination);
    var output1 = output - 400;
    var cost = 0.02;

    if (output <= 400){
        return 0;
    } else if (output > 400 && output <= 2000){
        return output1*cost;
    } else if (output > 2000 && output < 2500){
        return 25
    } else if (output >= 2500){
        return 'cannot travel that far';
    }

}