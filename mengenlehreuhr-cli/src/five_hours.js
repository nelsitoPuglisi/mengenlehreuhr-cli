class FiveHours {
  constructor(ticks) {
    const mod = ticks % 5
    this.first = "B"
    if(ticks >= 5) {
      this.first = "R"
    }

    this.second = "B"
    if(ticks >= 10) {
      this.second = "R"
    }

    this.third = "B"
    if(ticks >= 15) {
      this.third = "R"
    }

    this.fourth = "B"
    if(ticks >= 20) {
      this.fourth = "R"
    }
  }

  toRow() {
    return [this.first, this.second, this.third, this.fourth]
  }
};

module.exports = FiveHours;