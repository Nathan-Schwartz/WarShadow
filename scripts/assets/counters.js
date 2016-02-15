define(function() {

  function resetCounters() {
    localStorage.setItem("kill", 0);
    localStorage.setItem("headshot1", 0);
    localStorage.setItem("headshot2", 0);
    localStorage.setItem("headshot3", 0);
    localStorage.setItem("headshot4", 0);
    localStorage.setItem("headshot5", 0);
    localStorage.setItem("minutes", 0);
  }

  function incrementTime() {
    var minute = JSON.parse(localStorage.getItem("minutes"));
    minute++;
    localStorage.setItem("minutes", minute);
  };

  function getTime() {
    return JSON.parse(localStorage.getItem("minutes"));
  }

  function incrementKill() {
    var kill = JSON.parse(localStorage.getItem("kill"));
    kill++;
    localStorage.setItem("kill", kill);
  };

  function incrementHeadshot(num) {
    if (num == 1) {
      var headshot1 = JSON.parse(localStorage.getItem("headshot1"));
      headshot1++;
      localStorage.setItem("headshot1", headshot1);
    } else if (num == 2) {
      var headshot2 = JSON.parse(localStorage.getItem("headshot2"));
      headshot2++;
      localStorage.setItem("headshot2", headshot2);
    } else if (num == 3) {
      var headshot3 = JSON.parse(localStorage.getItem("headshot3"));
      headshot3++;
      localStorage.setItem("headshot3", headshot3);
    } else if (num == 4) {
      var headshot4 = JSON.parse(localStorage.getItem("headshot4"));
      headshot4++;
      localStorage.setItem("headshot4", headshot4);
    } else if (num == 5) {
      var headshot5 = JSON.parse(localStorage.getItem("headshot5"));
      headshot5++;
      localStorage.setItem("headshot5", headshot5);
    } else
      console.log('invalide number sent to increment HS');
  };


  function getKill() {
    return JSON.parse(localStorage.getItem("kill"));
  };

  function getHeadshot(num) {
    var val = 0;

    if (num == 1)
      val = JSON.parse(localStorage.getItem("headshot1"));
    else if (num == 2)
      val = JSON.parse(localStorage.getItem("headshot2"));
    else if (num == 3)
      val = JSON.parse(localStorage.getItem("headshot3"));
    else if (num == 4)
      val = JSON.parse(localStorage.getItem("headshot4"));
    else if (num == 5) {
      val = JSON.parse(localStorage.getItem("headshot5"));
    } else
      console.log('invalide number sent to get HS');
    return val;
  };

  return {
    resetCounters: resetCounters,
    incrementKill: incrementKill,
    incrementHeadshot: incrementHeadshot,
    getKill: getKill,
    getHeadshot: getHeadshot,
    incrementTime: incrementTime,
    getTime: getTime
  };
});
