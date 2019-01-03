class Hours {
  constructor(ticks) {
    this.first = "disabled"
    if(ticks >= 3599) {
      this.first = "enabled"
    }

    this.second = "disabled"
    if(ticks >= 3599 * 2) {
      this.second = "enabled"
    }

    this.third = "disabled"
    if(ticks >= 3599 * 3) {
      this.third = "enabled"
    }

    this.fourth = "disabled"
    if(ticks >= 3599 * 4) {
      this.fourth = "enabled"
    }
  }

  asJson() {
    return [this.first, this.second, "disabled", "disabled"]
  }
};

module.exports = Hours;