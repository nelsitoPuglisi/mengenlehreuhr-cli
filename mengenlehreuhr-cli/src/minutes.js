class Minutes {
  constructor(ticks) {
    const mod = ticks % 5
    this.first = "B"
    if(mod >= 1) {
      this.first = "Y"
    }

    this.second = "B"
    if(mod >= 2) {
      this.second = "Y"
    }

    this.third = "B"
    if(mod >= 3) {
      this.third = "Y"
    }

    this.fourth = "B"
    if(mod >= 4) {
      this.fourth = "Y"
    }
  }

  toRow() {
    return [this.first, this.second, this.third, this.fourth]
  }
};

module.exports = Minutes;