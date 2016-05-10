var L = require('leaflet'),
    Control = require('./control'),
    Itinerary = require('./itinerary'),
    Line = require('./line'),
    OSRMv1 = require('./osrm-v1'),
    Plan = require('./plan'),
    Waypoint = require('./waypoint'),
    Autocomplete = require('./autocomplete'),
    Formatter = require('./formatter'),
    GeocoderElement = require('./geocoder-element'),
    Localization = require('./localization');

L.routing = {
    control: function(options) { return new Control(options); }
};

module.exports = L.Routing = {
    Control: Control,
    Itinerary: Itinerary,
    Line: Line,
    OSRMv1: OSRMv1,
    Plan: Plan,
    Waypoint: Waypoint,
    Autocomplete: Autocomplete,
    Formatter: Formatter,
    GeocoderElement: GeocoderElement,
    Localization: Localization
};
