const places = require('../places.js');

/**
* Returns a list of places nearby a central location.
* Optionally only searches for a certain type of place.
* Example location: `"35.46323,123.67834"`
* Example radius: `3`
* Example num: `5`
* Example type: `"restaurant"`
* Example return: `[Place, Place, ...]` (See above)
* @param {string} location Comma separated latitude and longitude to search around
* @param {number} radius How far around to search for points of interest in meters
* @param {number} num Limit the number of places returned
* @param {string} type Optionally only find a certain type of place
* @returns {object}
*/
module.exports = async (location, radius, num, type = null, context) => {
    let data = (await places.getNearby(location, radius, type));
    
    data = data.map(place => {
        return {
            id: place.id,
            name: place.name,
            rating: place.rating,
            types: place.types,
            address: place.vicinity,
            icon: place.icon,
            photo: place.photos ? place.photos[0].photo_reference : undefined
        };
    }).slice(0, num);

    return {
        result: data
    };
};
