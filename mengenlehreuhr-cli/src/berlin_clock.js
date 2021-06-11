const FiveHours = require('./five_hours.js');
const Hours = require('./hours.js');
const FiveMinutes = require('./five_minutes.js');
const Minutes = require('./minutes.js');
class BerlinClock {
    constructor(time) {
        this.fiveHours = new FiveHours(time.split(':')[0])
        this.hours = new Hours(time.split(':')[0])
        this.fiveMinutes = new FiveMinutes(time.split(':')[1])
        this.minutes = new Minutes(time.split(':')[1])
        this.seconds = time.split(':')[2]
    }
    
    

    asJson() {        
        return {
            second: (this.seconds % 2 == 0) ? 'B': 'Y',
            five_hours: this.fiveHours.toRow(),
            hours: this.hours.toRow(),
            quarters: this.fiveMinutes.toRow(),
            minutes: this.minutes.toRow()
        };
    }
};

module.exports = BerlinClock;