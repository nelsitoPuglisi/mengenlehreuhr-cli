const expect = require('chai').expect;

const Hours = require('../src/hours.js');

describe("Hours Unit Tests", () => {

  it('Before first hour', () => {
    hours = new Hours(3599);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('First hour', () => {
    hours = new Hours(3600);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Second hour', () => {
    hours = new Hours(3600 * 2);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Third hour', () => {
    hours = new Hours(3600 * 3);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Fourth hour', () => {
    hours = new Hours(3600 * 4);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "enabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Fifth hour', () => {
    hours = new Hours(3600 * 5);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });


});