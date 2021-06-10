const expect = require('chai').expect;

const Minute = require('../src/minutes.js');

describe("Minutes Unit Tests", () => {

  it('No minutes to show: 0', () => {
    ticks = 0 //from 12:00:35
    minutes = new Minute(ticks)
    actual = minutes.toRow()
    expected = ['B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('No minutes to show: 5', () => {
    ticks = 35 //from 12:35:35
    minutes = new Minute(ticks)
    actual = minutes.toRow()
    expected = ['B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('First minute', () => {
    ticks = 21 //from 12:21:35
    minutes = new Minute(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  });
  
  it('Second minute', () => {
    ticks = 27 //from 12:27:35
    minutes = new Minute(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'B', 'B']
    expect(actual).to.be.eql(expected)
  });
  
  it('Third minute', () => {
    ticks = 23 //from 12:23:35
    minutes = new Minute(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'Y', 'B']
    expect(actual).to.be.eql(expected)
  });
  
  it('Fourth minute', () => {
    ticks = 29 //from 12:29:35
    minutes = new Minute(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'Y', 'Y']
    expect(actual).to.be.eql(expected)
  });
});