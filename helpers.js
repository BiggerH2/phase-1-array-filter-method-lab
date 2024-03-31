// helper.js

// findMatching function
function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

// fuzzyMatch function
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

// matchName function
function matchName(drivers, name) {
  return drivers.filter(driver =>
    driver.name.toLowerCase() === name.toLowerCase()
  );
}

// Export the functions to be accessible from outside
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
