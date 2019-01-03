const Hours = require('../src/hours.js');

class Clock {
    constructor() {
        this.ticks = 0
    }

    tick() {
        this.ticks++
        const hours = new Hours(this.ticks)
        return {
            second: "enabled",
            five_hours: ["disabled", "disabled", "disabled", "disabled"],
            hours: hours.asJson(),
            quarters: [
                "disabled", 
                "disabled", 
                "disabled", // 15
                "disabled", 
                "disabled", 
                "disabled", // 30
                "disabled", 
                "disabled", 
                "disabled", // 45
                "disabled",
                "disabled"
            ],
            minutes: ["disabled", "disabled", "disabled", "disabled"]
        };
    }
};

module.exports = Clock;