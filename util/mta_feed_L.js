const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const request = require('request');
const keys = require('../keys')

module.exports = {
  dataFeed: () => {
    const requestSettings = {
      method: 'GET',
      url: 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l',
      encoding: null,
      headers: { 
        'x-api-key': keys.API_KEY,
      }
    };
    request(requestSettings, function (error, response, body) {
      console.log(body)
      if (!error && response.statusCode == 200) {
        var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
        feed.entity.forEach(function(entity) {
          if (entity.tripUpdate) {
            entity.tripUpdate.stopTimeUpdate.forEach(ele => console.log(ele))
          }
        });
      }
    })
  }
}