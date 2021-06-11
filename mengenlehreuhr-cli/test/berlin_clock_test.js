
const expect = require('chai').expect;

const BerlinClock = require('../src/berlin_clock.js');

describe("Berlin Clock", () => {

    it('Five hours', () => {
        clock = new BerlinClock('16:52:33');
        actual = clock.asJson()
        expected = {
            second: "Y",
            five_hours: ['R', 'R', 'R', 'B'],
            hours: ['R', 'B', 'B', 'B'],
            quarters: [
                "Y", 
                "Y", 
                "R", // 15
                "Y", 
                "Y", 
                "R", // 30
                "Y", 
                "Y", 
                "R", // 45
                "Y",
                "B"
            ],
            minutes: ["Y", "Y", "B", "B"]
        };

        expect(actual).to.be.eql(expected);

    });

});