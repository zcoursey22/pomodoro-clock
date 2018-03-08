$(function() {

  var paused = false;
  var onBreak = false;

  $('#addSessionTimeButton').click(function() {
    if ($('#sessionTime').text() < 60) {
      var sessionTime = $('#sessionTime').text();
      sessionTime++;
      $('#sessionTime').text(sessionTime);
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
      if (typeof playing == 'undefined' && paused == false) $('#timer').text(sessionTime);
    }
  });

  $('#removeSessionTimeButton').click(function() {
    if ($('#sessionTime').text() > 1) {
      var sessionTime = $('#sessionTime').text();
      sessionTime--;
      $('#sessionTime').text(sessionTime);
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
      if (typeof playing == 'undefined' && paused == false) $('#timer').text(sessionTime);
    }
  });

  $('#addBreakTimeButton').click(function() {
    if ($('#breakTime').text() < 30) {
      var breakTime = $('#breakTime').text();
      breakTime++;
      $('#breakTime').text(breakTime);
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
    }
  });

  $('#removeBreakTimeButton').click(function() {
    if ($('#breakTime').text() > 1) {
      var breakTime = $('#breakTime').text();
      breakTime--;
      $('#breakTime').text(breakTime);
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
    }
  });

  $('#playButton').click(function() {
    if (typeof playing == "undefined") {
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
      playing = setInterval(play, 1000);
      paused = false;
    }
  });

  function play() {
    var timer = $('#timer').text();
    if (timer > 0) {
      timer--;
      $('#timer').text(timer);
      if (timer == 0 && onBreak === true) {
        clearInterval(playing);
        playing = undefined;
        $('#timer')[0].style.color = 'red';
        onBreak = false;
      } else if (timer == 0) {
        $('#currentTimer').text('Break');
        $('#timer').text($('#breakTime').text());
        onBreak = true;
      }
    }
  }

  $('#pauseButton').click(function() {
    if (typeof playing != "undefined") {
      clearInterval(playing);
      playing = undefined;
      paused = true;
    }
  });

  $('#resetButton').click(function() {
    clearInterval(playing);
    playing = undefined;
    $('#timer').text($('#sessionTime').text());
    paused = false;
  });

});
