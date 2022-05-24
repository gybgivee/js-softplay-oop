// TODO: Write your class in this file
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
  maxOccupancy(total) {
    this.total = total;
    console.log("this.total :" + this.total);
  }
  getTotal() {
    return this.total;
  }
  childrenPerAnAdult(maxChildren) {
    this.maxChildren = maxChildren;

    console.log("this.maxChildren :" + this.maxChildren);
  }
  getMaxChildren() {
    return this.maxChildren;
  }
  enter(numAdults, numChilds) {
    const totalEnter = numAdults + numChilds;
    const total = this.getTotal();

    const maxChildren = this.getMaxChildren();
    const maxChildrenEnter = maxChildren * numAdults;
    //console.log('maxChildren :'+maxChildren+' maxChildrenEnter :'+maxChildrenEnter+' numChilds :'+numChilds);

    if (
      totalEnter <= total ||
      total === undefined ||
      maxChildrenEnter >= numChilds ||
      maxChildren === undefined
    ) {
      if (
        (numAdults < numChilds && maxChildrenEnter < numChilds) ||
        numAdults === 0
      ) {
        //console.log('numAdults < numChilds');
        return false;
      } else {
        this.adults = this.adults + numAdults;
        this.children = this.children + numChilds;

        return true;
      }
    } else {
      return false;
    }
  }
  leave(numAdults, numChilds) {

    const childrenRemain = this.children - numChilds;
    const adultsRemain = this.adults - numAdults;
    const checkChildAlone = numChilds - numAdults;

    const maxChildren = this.getMaxChildren();
    const maxChildrenLeave = maxChildren * numAdults;
    //console.log("numAdults  :" +numAdults +" numChilds :" +numChilds +" maxChildren :" +maxChildren +" maxChildrenLeave :" +maxChildrenLeave);

    if (maxChildrenLeave >= numChilds || maxChildren === undefined) {

      if (
        numAdults >= numChilds &&
        numChilds <= this.children &&
        numAdults <= this.adults &&
        adultsRemain >= childrenRemain
      ) {
        this.adults = adultsRemain;
        this.children = childrenRemain;
        return true;
      } else if (numAdults < numChilds && maxChildrenLeave >= numChilds) {
        this.adults = adultsRemain;
        this.children = childrenRemain;
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }
}

const smallSoftPaly = new SoftPlay();
smallSoftPaly.maxOccupancy(2);

console.log("Enter After Checked Max Occupancy -> " + smallSoftPaly.enter(2, 1));

smallSoftPaly.childrenPerAnAdult(2);
console.log("Enter After Checked childrenPerAnAdult-> " + smallSoftPaly.enter(1, 2));
smallSoftPaly.childrenPerAnAdult(1);
console.log("Enter After Checked childrenPerAnAdult-> " + smallSoftPaly.enter(1, 2));

smallSoftPaly.childrenPerAnAdult(2);
console.log("Leave After Checked childrenPerAnAdult-> " + smallSoftPaly.leave(1, 2));
smallSoftPaly.childrenPerAnAdult(1);
console.log("Leave After Checked childrenPerAnAdult-> " + smallSoftPaly.leave(1, 2));


// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay,
};
