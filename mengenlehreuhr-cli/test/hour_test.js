const expect = require('chai').expect;

const Hours = require('../src/hours.js');

describe("Hours Unit Tests", () => {

  it('Before first hour', () => {
    hours = new Hours(0);
    actual = hours.toRow();

    expected = ["B", "B", "B", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('First hour', () => {
    hours = new Hours(1);
    actual = hours.toRow();

    expected = ["R", "B", "B", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Second hour', () => {
    hours = new Hours(7);
    actual = hours.toRow();

    expected = ["R", "R", "B", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Third hour', () => {
    hours = new Hours(8);
    actual = hours.toRow();

    expected = ["R", "R", "R", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fourth hour', () => {
    hours = new Hours(4);
    actual = hours.toRow();

    expected = ["R", "R", "R", "R"];

    expect(actual).to.be.eql(expected);
  });


});