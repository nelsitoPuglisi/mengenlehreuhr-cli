const FiveHours = require('../src/five_hours.js');
const Hours = require('../src/hours.js');
const Minutes = require('../src/minutes.js');
class Clock {
    constructor() {
        this.ticks = 0
    }

    tick() {
        this.ticks++
        const fiveHours = new FiveHours(this.ticks)
        const hours = new Hours(this.ticks)
        const minutes = new Minutes(this.ticks)
        return {
            second: "enabled",
            five_hours: fiveHours.asJson(),
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
            minutes: minutes.asJson()
        };
    }
};

module.exports = Clock;