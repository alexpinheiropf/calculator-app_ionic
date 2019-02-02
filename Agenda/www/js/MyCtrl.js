module.controller('CalendarCtrl', function ($scope, $cordovaCalendar) {

  $cordovaCalendar.createCalendar({
    calendarName: 'Cordova Calendar',
    calendarColor: '#FF0000'
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.deleteCalendar('Cordova Calendar').then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventWithOptions({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventInteractively({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.createEventInNamedCalendar({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0),
    calendarName: 'Cordova Calendar'
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.findEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.listEventsInRange(
    new Date(2015, 0, 6, 0, 0, 0, 0, 0),
    new Date(2015, 1, 6, 0, 0, 0, 0, 0)
  ).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.listCalendars().then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.findAllEventsInNamedCalendar('Cordova Calendar').then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.modifyEvent({
    title: 'Space Race',
    location: 'The Moon',
    notes: 'Bring sandwiches',
    startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
    endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0)
    newTitle: 'Ostrich Race',
    newLocation: 'Africa',
    newNotes: 'Bring a saddle',
    newStartDate: new Date(2015, 2, 12, 19, 0, 0, 0, 0),
    newEndDate: new Date(2015, 2, 12, 22, 30, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

  $cordovaCalendar.deleteEvent({
    newTitle: 'Ostrich Race',
    location: 'Africa',
    notes: 'Bring a saddle',
    startDate: new Date(2015, 2, 12, 19, 0, 0, 0, 0),
    endDate: new Date(2015, 2, 12, 22, 30, 0, 0, 0)
  }).then(function (result) {
    // success
  }, function (err) {
    // error
  });

});
