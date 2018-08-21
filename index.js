function produceDrivingRange(blockRange) {
  return function(beginingBlock, endingBlock){
    let distance = Math.abs(parseInt(beginingBlock) - parseInt(endingBlock))
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(bill){
    return bill * tipPercent
  }
}

function createDriver(){
  let driverId = 0
  // return the class
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}
