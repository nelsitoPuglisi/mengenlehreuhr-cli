class FiveMinutes {
  constructor(ticks) {
    this.row = []
    if (ticks >= 5) {
      this.row.push('Y')
    }
    if (ticks >= 10) {
      this.row.push('Y')
    }
    if (ticks >= 15) {
      this.row.push('R')
    }
    if (ticks >= 20) {
      this.row.push('Y')
    }
    if (ticks >= 25) {
      this.row.push('Y')
    }
    if (ticks >= 30) {
      this.row.push('R')
    }
    if (ticks >= 35) {
      this.row.push('Y')
    }
    if (ticks >= 40) {
      this.row.push('Y')
    }
    if (ticks >= 45) {
      this.row.push('R')
    }
    if (ticks >= 50) {
      this.row.push('Y')
    }
    if (ticks >= 55) {
      this.row.push('Y')
    }
    
    while (this.row.length < 11) {
      this.row.push('B')
    }
    
  }

  toRow() {
    return this.row
  }
};

module.exports = FiveMinutes;