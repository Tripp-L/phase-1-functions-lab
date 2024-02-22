const homeStreet = 42
const distanceFromHqInBlocks = (passengerLocation) => {
    return Math.abs(passengerLocation - homeStreet)
}
const distanceFromHqInFeet = (passengerLocation) => {
    let distanceInBlocks = distanceFromHqInBlocks(passengerLocation)
    let distanceInFeet = distanceInBlocks * 264
    return distanceInFeet
}
const distanceTravelledInFeet = (startBlock, endBlock) => {
    let blocks = Math.abs(startBlock - endBlock)
    let blocksInFeet = blocks * 264
    return blocksInFeet
}
const calculatesFarePrice = (start, destination) => {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance < 400) {
        return 0

    } else if(distance >= 400 && 2000 >= distance) {
        return (distance - 400) * .02
    } else if (distance < 2500) {
        return 25
        } else {
            return 'cannot travel that far'
        }
}
