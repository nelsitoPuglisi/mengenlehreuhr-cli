const expect = require('chai').expect;

const FiveHours = require('../src/five_hours.js');

describe("FiveHours Unit Tests", () => {

  it.only('Before fifth hour', () => {
    hours = new FiveHours(3599);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fifth hour', () => {
    hours = new FiveHours(3600);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Tenth hour', () => {
    hours = new FiveHours(3600 * 2);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fifteenth hour', () => {
    hours = new FiveHours(3600 * 3);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Twetieth hour', () => {
    hours = new FiveHours(3600 * 4);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "enabled"];

    expect(actual).to.be.eql(expected);
  });
});