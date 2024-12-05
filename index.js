const hq = 42;
let pickUpLocation;

function distanceFromHqInBlocks ( pickUpLocation ) {
    return Math.abs(pickUpLocation - hq);
}

console.log(distanceFromHqInBlocks(43));

const feet = 264;
let result;

function distanceFromHqInFeet (pickUpLocation) {

    result = distanceFromHqInBlocks ( pickUpLocation );
    return (feet *  result );

}

console.log(distanceFromHqInFeet(43));

let start;
let destination;

function distanceTravelledInFeet ( start, destination) {
    return Math.abs((start - destination)*feet);
}

console.log(distanceTravelledInFeet(43, 48));


let distance;
function calculatesFarePrice(start, destination) {
    distance = (distanceTravelledInFeet ( start, destination));
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400)*0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return ('cannot travel that far');
    }

}

console.log(calculatesFarePrice(43, 44 ))
