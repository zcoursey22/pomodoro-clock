$(function() {

  var sessionLength = 1500;
  var breakLength = 300;
  var timeRemaining = sessionLength;
  var paused = false;
  var onBreak = false;

  $('#sessionTime').text(numberFormat(sessionLength));
  $('#breakTime').text(numberFormat(breakLength));
  $('#timer').text(fullNumberFormat(timeRemaining));

  function numberFormat(num) {
    return Math.floor(num / 60);
  }

  function fullNumberFormat(num) {
    var minutes = Math.floor(num / 60);
    if (minutes < 10) minutes = '0' + minutes;
    var seconds = Math.floor(num % 60);
    if (seconds < 10) seconds = '0' + seconds;
    return minutes + ':' + seconds
  }

  $('#addSessionTimeButton').click(function() {
    if (sessionLength < 3600) {
      sessionLength += 60;
      $('#sessionTime').text(numberFormat(sessionLength));
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
      if (typeof playing == 'undefined' && paused == false) {
        timeRemaining = sessionLength;
        $('#timer').text(fullNumberFormat(timeRemaining));
      }
    }
  });

  $('#removeSessionTimeButton').click(function() {
    if (sessionLength > 60) {
      sessionLength -= 60;
      $('#sessionTime').text(numberFormat(sessionLength));
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
      if (typeof playing == 'undefined' && paused == false) {
        timeRemaining = sessionLength;
        $('#timer').text(fullNumberFormat(timeRemaining));
      }
    }
  });

  $('#addBreakTimeButton').click(function() {
    if (breakLength < 1800) {
      breakLength += 60;
      $('#breakTime').text(numberFormat(breakLength));
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
    }
  });

  $('#removeBreakTimeButton').click(function() {
    if (breakLength > 60) {
      breakLength -= 60;
      $('#breakTime').text(numberFormat(breakLength));
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'black';
    }
  });

  $('#playButton').click(function() {
    if (typeof playing == "undefined") {
      $('#currentTimer').text('Session');
      $('#timer')[0].style.color = 'green';
      playing = setInterval(play, 1000);
      paused = false;
    }
  });

  function play() {
    if (timeRemaining > 0) {
      timeRemaining--;
      $('#timer').text(fullNumberFormat(timeRemaining));
      if (timeRemaining <= 5) $('#timer')[0].style.color = 'yellow';
      if (timeRemaining == 0 && onBreak === true) {
        clearInterval(playing);
        playing = undefined;
        $('#timer')[0].style.color = 'red';
        onBreak = false;
      } else if (timeRemaining == 0) {
        $('#timer')[0].style.color = 'green';
        $('#currentTimer').text('Break');
        timeRemaining = breakLength;
        $('#timer').text(fullNumberFormat(timeRemaining));
        onBreak = true;
      }
    }
  }

  $('#pauseButton').click(function() {
    if (typeof playing != "undefined") {
      clearInterval(playing);
      playing = undefined;
      paused = true;
      $('#timer')[0].style.color = 'teal';
    }
  });

  $('#resetButton').click(function() {
    clearInterval(playing);
    playing = undefined;
    timeRemaining = sessionLength;
    $('#timer').text(fullNumberFormat(timeRemaining));
    paused = false;
    $('#timer')[0].style.color = 'black';
  });

});
