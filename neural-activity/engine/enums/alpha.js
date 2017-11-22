/**
 * Interface Enum
 */
Alpha = {
  FULLY_VISIBLE: 1.0,
  PARTLY_VISIBLE: 0.4,
  INVISIBLE: 0.0
};

Alpha.values = function() {
  return Object.keys(Alpha).map(function(key) { return Alpha[key]; });
};

Alpha.isValid = function(value) { 
  return Alpha.values().includes(value);
};

