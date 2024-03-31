const chai = require('chai');
const { findMatching, fuzzyMatch, matchName } = require('../helpers.js');

// Define expect explicitly
const expect = chai.expect;

describe('Helper Functions', function () {
  const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];

  describe('findMatching()', function () {
    it('returns all drivers that match the passed-in name', function () {
      expect(findMatching(drivers, 'Bobby')).to.eql([
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ]);
      expect(findMatching(drivers, 'Sammy')).to.eql([{ name: 'Sammy', hometown: 'New York' }]);
    });
it('returns an empty array if there is no match', function () {
  expect(findMatching(drivers, 'Susan')).to.eql([]);
    });
  });

  describe('fuzzyMatch()', function () {
    it('returns drivers whose names begin with the provided letters', function () {
      expect(fuzzyMatch(drivers, 'Sa')).to.eql([
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' }
      ]);
    });

    it('does not return drivers if only middle or ending letters match', function () {
        expect(fuzzyMatch(drivers, 'y')).to.eql([]);
        expect(fuzzyMatch(drivers, 'mm')).to.eql([]);
      });
  });

  describe('matchName()', function () {
    it('returns drivers whose name property matches the provided string', function () {
      expect(matchName(drivers, 'Bobby')).to.eql([
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ]);
    });
  });
});
