class Hours {
  constructor(ticks) {
    const mod = ticks % 5
    this.first = "B"
    if(mod >= 1) {
      this.first = "R"
    }

    this.second = "B"
    if(mod >= 2) {
      this.second = "R"
    }

    this.third = "B"
    if(mod >= 3) {
      this.third = "R"
    }

    this.fourth = "B"
    if(mod >= 4) {
      this.fourth = "R"
    }
  }

  toRow() {
    return [this.first, this.second, this.third, this.fourth]
  }
};

module.exports = Hours;