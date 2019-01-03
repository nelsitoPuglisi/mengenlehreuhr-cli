class Seconds {
  constructor() {
      this.toogle = false;
  }

  toJSON() {
      if ( toogle ) {
          return "enabled";
      } else {
          return "disabled";
      }
  }
};

module.exports = Seconds;