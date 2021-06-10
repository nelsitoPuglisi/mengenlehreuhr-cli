const expect = require('chai').expect;

const FiveHours = require('../src/five_hours.js');

describe("FiveHours Unit Tests", () => {

  it('Before fifth hour', () => {
    hours = new FiveHours(04);//Between 00:00:00 and 04:59:59
    actual = hours.toRow();

    expected = ["B", "B", "B", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fifth hour', () => {
    hours = new FiveHours(06);//Between 05:00:00 and 09:59:59
    actual = hours.toRow();

    expected = ["R", "B", "B", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Tenth hour', () => {
    hours = new FiveHours(13);//Between 10:00:00 and 14:59:59
    actual = hours.toRow();

    expected = ["R", "R", "B", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Fifteenth hour', () => {
    hours = new FiveHours(17);//Between 15:00:00 and 19:59:59
    actual = hours.toRow();

    expected = ["R", "R", "R", "B"];

    expect(actual).to.be.eql(expected);
  });
  
  it('Twetieth hour', () => {
    hours = new FiveHours(22);//Between 20:00:00 and 23:59:59
    actual = hours.toRow();

    expected = ["R", "R", "R", "R"];

    expect(actual).to.be.eql(expected);
  });
});