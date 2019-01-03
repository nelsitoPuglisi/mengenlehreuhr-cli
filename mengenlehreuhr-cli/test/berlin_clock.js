
const expect = require('chai').expect;

const Clock = require('../src/clock.js');

describe("Berlin Clock", () => {

    it('First second', () => {
        clock = new Clock();

        actual = clock.tick();

        expected = {
            second: "enabled",
            five_hours: ["disabled", "disabled", "disabled", "disabled"],
            hours: ["disabled", "disabled", "disabled", "disabled"],
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

        expect(expected).to.be.eql(actual);

    });

    it('First hour', () => {
        clock = new Clock();

        for(i = 0; i < 3600; i++) {
          actual = clock.tick();
        }

        expected = {
            second: "enabled",
            five_hours: ["disabled", "disabled", "disabled", "disabled"],
            hours: ["enabled", "disabled", "disabled", "disabled"],
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

        expect(expected).to.be.eql(actual);

    });

});