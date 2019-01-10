class Minutes {
  constructor(ticks) {
    var mod = (ticks / 60) % 5
    this.first = "disabled"
    if(mod >= 1) {
      this.first = "enabled"
    }

    this.second = "disabled"
    if(mod >= 2) {
      this.second = "enabled"
    }

    this.third = "disabled"
    if(mod >= 3) {
      this.third = "enabled"
    }

    this.fourth = "disabled"
    if(mod >= 4) {
      this.fourth = "enabled"
    }
  }

  asJson() {
    return [this.first, this.second, this.third, this.fourth]
  }
};

module.exports = Minutes;