const expect = require('chai').expect;

const Hours = require('../src/hours.js');

describe("Hours Unit Tests", () => {

  it('Before first hour', () => {
    hours = new Hours(3599);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('First hour', () => {
    hours = new Hours(3600);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Second hour', () => {
    hours = new Hours(3600 * 2);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Third hour', () => {
    hours = new Hours(3600 * 3);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fourth hour', () => {
    hours = new Hours(3600 * 4);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "enabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fifth hour', () => {
    hours = new Hours(3600 * 5);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });


});