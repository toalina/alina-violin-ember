App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route("about");
  this.route("collaborators");
  this.route("videos");
  this.route("contact");
  this.resource("recordings", function() {
    this.resource("recording", { path: "/:recording_id"});
  });
  this.route("hireme");
});

// Route for all Recordings
App.RecordingsRoute = Ember.Route.extend({
  model: function() {
    return recordings;
  }
});

// Route for a single Recording
App.RecordingRoute = Ember.Route.extend({
  model: function(params) {
    return recordings.findBy("id", params.recording_id);
  }
});

// Array Controller...decorates all model data
App.RecordingsController = Ember.ArrayController.extend({
  totalRecordings: function() {
    return this.get("model.length");
  }.property("@each")
});

// Object Controller...decorates a single piece of model data
App.RecordingController = Ember.ObjectController.extend({
  recordingTitle: function() {
    return this.get("title") + " by " + this.get("artist");
  }.property("artist", "title")
});

var recordings = [
  {
    "id": 1,
    "artist": "Recess Monkey",
    "title": "TBA",
    "year": 2015,
    "image": ""
  },
  {
    "id": 2,
    "artist": "OK Sweetheart",
    "title": "TBA",
    "year": 2014,
    "image": ""
  },
  {
    "id": 3,
    "artist": "David Bazan and the Passenger String Quartet",
    "title": "Volume 1",
    "year": 2014,
    "image": ""
  },
  {
    "id": 4,
    "artist": "B'shnorkestra",
    "title": "Go To Orange",
    "year": 2013,
    "image": ""
  },
  {
    "id": 5,
    "artist": "Scrape",
    "title": "Approaching Yvonnes",
    "year": 2013,
    "image": ""
  },
  {
    "id": 6,
    "artist": "Susy Sun",
    "title": "Wanderlust",
    "year": 2013,
    "image": ""
  },
  {
    "id": 7,
    "artist": "Night Cadet",
    "title": "Valley",
    "year": 2013,
    "image": ""
  },
  {
    "id": 8,
    "artist": "Kris Orlowski & Andrew Joslyn",
    "title": "Pieces We Are",
    "year": 2012,
    "image": ""
  },
  {
    "id": 9,
    "artist": "Fleet Foxes",
    "title": "Helplessness Blues",
    "year": 2011,
    "image": ""
  },
  {
    "id": 10,
    "artist": "Shenandoah Davis",
    "title": "The Company We Keep",
    "year": 2011,
    "image": ""
  },
  {
    "id": 11,
    "artist": "Zoe Boekbinder",
    "title": "Darling Specimens",
    "year": 2011,
    "image": ""
  },
  {
    "id": 12,
    "artist": "Kris Orlowski & The Passenger String Quartet",
    "title": "Live @ The Fremont Abbey with the Passenger String Quartet",
    "year": 2011,
    "image": ""
  },
  {
    "id": 13,
    "artist": "Drew Victor",
    "title": "My Mother, The Pacific",
    "year": 2010,
    "image": ""
  },
  {
    "id": 14,
    "artist": "Grand Hallway",
    "title": "Promenade",
    "year": 2009,
    "image": ""
  },
  {
    "id": 15,
    "artist": "Voyager One",
    "title": "Afterhours In The Afterlife",
    "year": 2009,
    "image": ""
  },
  {
    "id": 16,
    "artist": "Grand Hallway",
    "title": "Yes Is The Answer",
    "year": 2007,
    "image": ""
  },
  {
    "id": 17,
    "artist": "Peter Parker",
    "title": "Semiautobiographical",
    "year": 2001,
    "image": ""
  },
];



