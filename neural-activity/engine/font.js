/**
 * Interface Enum
 */
Font = {
  ARIAL: "Arial",
  VERDANA: "Verdana",
  TIMES_NEW_ROMAN: "Times New Roman",
  COURIER_NEW: "Courier New",
  SERIF: "serif",
  SANS_SERIF: "sans-serif",
};

Font.values = function() {
  return Object.keys(Font).map(function(key) { return Font[key]; });
};

Font.isValid = function(value) { 
  return Font.values().includes(value);
};

