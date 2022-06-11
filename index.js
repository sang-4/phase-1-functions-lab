// Code your solution in this file!
//distanceFromHq
function distanceFromHqInBlocks(street)
{
    return Math.abs(street-42);
}
//distance from t
function distanceFromHqInFeet(blocks)
{
    return distanceFromHqInBlocks(blocks)*264;
}
// distance travelled in feet
function distanceTravelledInFeet(start, destination)
{
    return Math.abs((destination-start) * 264);
}
// free sample
function calculatesFarePrice(start, destination)
{
    let distance = Math.abs((destination-start) * 264);
    
    if(distance <=400){
        return 0;
    }
    else if(distance>400 && distance <=2000){
        return 0.02 * (distance-400);
    }
    else if(distance>2000 && distance<=2500){
        return 25;
    }
    else {
        return "cannot travel that far";
      }

}