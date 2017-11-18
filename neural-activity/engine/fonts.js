/**
 * Interface Enum
 */
Fonts = {
  ARIAL: "Arial",
  VERDANA: "Verdana",
  TIMES_NEW_ROMAN: "Times New Roman",
  COURIER_NEW: "Courier New",
  SERIF: "serif",
  SANS_SERIF: "sans-serif",
};

Fonts.values = function() {
  return Object.keys(Fonts).map(function(key) { return Fonts[key]; });
};

Fonts.isValid = function(value) { 
  return Fonts.values().includes(value);
};

