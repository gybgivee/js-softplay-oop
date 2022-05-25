class SoftPlay {
  constructor(children = 0, adults = 0) {
    this.children = children;
    this.adults = adults;
  }

  reset() {
    this.adults = 0;
    this.children = 0;
  }

  occupancy() {
    return {
      children: this.children,
      adults: this.adults,
    };
  }

  maxOccupancy(total = 0) {
    this.total = total;
    console.log("this.total :" + this.total);
  }
  getTotal() {
    return this.total;
  }
  resetTotal() {
    this.total = 0;
  }
  childrenPerAnAdult(maxChildren) {
    this.maxChildren = maxChildren;
    console.log("this.maxChildren :" + this.maxChildren);
  }
  getMaxChildren() {
    return this.maxChildren;
  }
  resetChildrenPerAnAdult() {
    this.maxChildren = 0;
  }

  enter(numAdults, numChilds) {
    const totalEnter = numAdults + numChilds;
    const total = this.getTotal();
    this.resetTotal();
    console.log("totalEnter:" + totalEnter + "total:" + total);
    const maxChildren = this.getMaxChildren();
    const maxChildrenEnter = maxChildren * numAdults;

    if (total === undefined && maxChildren === undefined) {
      if (numAdults >= numChilds) {
        this.adults = this.adults + numAdults;
        this.children = this.children + numChilds;

        return true;
      } else {
        return false;
      }
    } else if (
      totalEnter <= total ||
      (maxChildrenEnter >= numChilds && numAdults < numChilds && numAdults != 0)
    ) {
      this.adults = this.adults + numAdults;
      this.children = this.children + numChilds;

      return true;
    } else {
      return false;
    }
  }
  leave(numAdults, numChilds) {
    const childrenRemain = this.children - numChilds;
    const adultsRemain = this.adults - numAdults;

    const maxChildren = this.getMaxChildren();
    const maxChildrenLeave = maxChildren * numAdults;
    //console.log("numAdults  :" +numAdults +" numChilds :" +numChilds +" maxChildren :" +maxChildren +" maxChildrenLeave :" +maxChildrenLeave);
    if (maxChildren === undefined) {
          if (
            numAdults >= numChilds &&
            numChilds <= this.children &&
            numAdults <= this.adults &&
            adultsRemain >= childrenRemain
          ) {
            this.adults = adultsRemain;
            this.children = childrenRemain;
            return true;
          }
          else{
            return false;;
          }
    } else if (
      maxChildrenLeave >= numChilds &&
      numAdults < numChilds &&
      numAdults != 0
    ){
      this.adults = adultsRemain;
      this.children = childrenRemain;
      return true;
    } else {
      return false;
    }
  }
}

const smallSoftPaly = new SoftPlay();
smallSoftPaly.maxOccupancy(1);
console.log(
  "\nEnter After Checked Max Occupancy -> " + smallSoftPaly.enter(2, 1)
);

smallSoftPaly.childrenPerAnAdult(2);
console.log(
  "\nEnter After Checked childrenPerAnAdult-> " + smallSoftPaly.enter(1, 2)
);
smallSoftPaly.childrenPerAnAdult(1);
console.log(
  "\nEnter After Checked childrenPerAnAdult-> " + smallSoftPaly.enter(1, 2)
);

smallSoftPaly.childrenPerAnAdult(2);
console.log(
  "\nLeave After Checked childrenPerAnAdult-> " + smallSoftPaly.leave(1, 2)
);
smallSoftPaly.childrenPerAnAdult(1);
console.log(
  "\nLeave After Checked childrenPerAnAdult-> " + smallSoftPaly.leave(1, 2)
);

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
