$(function() {

  $('#addSessionTimeButton').click(function() {
    if ($('#sessionTime').text() < 60) {
      var sessionTime = $('#sessionTime').text();
      sessionTime++;
      $('#sessionTime').text(sessionTime);
    }
  });

  $('#removeSessionTimeButton').click(function() {
    if ($('#sessionTime').text() > 1) {
      var sessionTime = $('#sessionTime').text();
      sessionTime--;
      $('#sessionTime').text(sessionTime);
    }
  });

  $('#addBreakTimeButton').click(function() {
    if ($('#breakTime').text() < 30) {
      var breakTime = $('#breakTime').text();
      breakTime++;
      $('#breakTime').text(breakTime);
    }
  });

  $('#removeBreakTimeButton').click(function() {
    if ($('#breakTime').text() > 1) {
      var breakTime = $('#breakTime').text();
      breakTime--;
      $('#breakTime').text(breakTime);
    }
  });

  function play() {
    console.log('timer started')
  }

  function pause() {
    console.log('timer paused')
  }

  function reset() {
    console.log('timer reset')
  }

});
