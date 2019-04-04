const expect = require('chai').expect;

const Minute = require('../src/minutes.js');

describe("Minutes Unit Tests", () => {

  it('Before first minute', () => {
    hours = new Minute(59);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('First minute', () => {
    hours = new Minute(60);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Before second minute', () => {
    hours = new Minute(119);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Second minute', () => {
    hours = new Minute(120);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Third minute', () => {
    hours = new Minute(180);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fourth minute', () => {
    hours = new Minute(240);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "enabled"];

    expect(actual).to.be.eql(expected);
  });


  
  it('Fifth minute', () => {
    hours = new Minute(300);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(actual).to.be.eql(expected);
  });


});