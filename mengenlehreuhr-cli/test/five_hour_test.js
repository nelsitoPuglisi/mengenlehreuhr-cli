const expect = require('chai').expect;

const FiveHours = require('../src/five_hours.js');

describe("FiveHours Unit Tests", () => {

  it('Before fifth hour', () => {
    hours = new FiveHours(3599);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Fifth hour', () => {
    hours = new FiveHours(3600);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Tenth hour', () => {
    hours = new FiveHours(3600 * 2);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Fifteenth hour', () => {
    hours = new FiveHours(3600 * 3);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Twetieth hour', () => {
    hours = new FiveHours(3600 * 4);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "enabled"];

    expect(expected).to.be.eql(actual);
  });
});