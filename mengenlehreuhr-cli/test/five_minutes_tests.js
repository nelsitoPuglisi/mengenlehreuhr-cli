const expect = require('chai').expect;

const FiveMinutes = require('../src/five_minutes.js');
 
describe('FiveMinutes Unit Tests', () => {
  it('No minutes to show: 0', () => {
    ticks = 0 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('1 minutes to show: 0', () => {
    ticks = 6 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('2 minutes to show: 0', () => {
    ticks = 13 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('3 minutes to show: 0', () => {
    ticks = 16 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('4 minutes to show: 0', () => {
    ticks = 24 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('5 minutes to show: 0', () => {
    ticks = 28 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'Y', 'B', 'B', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('6 minutes to show: 0', () => {
    ticks = 32 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'B', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('7 minutes to show: 0', () => {
    ticks = 39 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'B', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('8 minutes to show: 0', () => {
    ticks = 44 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y', 'B', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('9 minutes to show: 0', () => {
    ticks = 48 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y', 'R', 'B', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('10 minutes to show: 0', () => {
    ticks = 52 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'B']
    expect(actual).to.be.eql(expected)
  })

  it('11 minutes to show: 0', () => {
    ticks = 57 //from 12:00:35
    minutes = new FiveMinutes(ticks)
    actual = minutes.toRow()
    expected = ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y']
    expect(actual).to.be.eql(expected)
  })
})