const expect = require('chai').expect;

const Minute = require('../src/minutes.js');

describe("Minutes Unit Tests", () => {

  it('Before first minute', () => {
    hours = new Minute(59);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('First minute', () => {
    hours = new Minute(60);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Before second minute', () => {
    hours = new Minute(119);
    actual = hours.asJson();

    expected = ["enabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Second minute', () => {
    hours = new Minute(120);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Third minute', () => {
    hours = new Minute(180);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });
  
  it('Fourth minute', () => {
    hours = new Minute(240);
    actual = hours.asJson();

    expected = ["enabled", "enabled", "enabled", "enabled"];

    expect(expected).to.be.eql(actual);
  });


  
  it('Fifth minute', () => {
    hours = new Minute(300);
    actual = hours.asJson();

    expected = ["disabled", "disabled", "disabled", "disabled"];

    expect(expected).to.be.eql(actual);
  });


});