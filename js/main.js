var $ = jQuery;
$( document ).ready(function(){
  var calendarData = {
    "0": {
      "image":"baby.jpeg",
      "description" : "Überaschung",
    },
    "1": {
      "image" : "1week.jpeg",
      "description" :  "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" +"zweite WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:",
    },
    "2": {
      "image" : "2week.jpeg",
      "description" :  "zweite WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:"+ "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" +"zweite WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:",
      "link" : "https://www.babyartikel.de/magazin/schwangerschaftskalender",
    },
    "3": {
      "image": "3week.jpeg",
      "description" :  "dritte WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:"+ "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" +"zweite WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:" + "erste WocheJetzt ist es Zeit, die Kliniktasche zu packen und sich in aller Ruhe auf die Geburt vorzubereiten. Die wenigsten Babys kommen zum errechneten Geburtstermin "
      + "und Dein Bauch wird sich in den letzten Wochen noch einmal verändern. Unser Schwangerschaftskalender verrät Dir, was in den letzten Wochen vor der Geburt passiert:",
      "link" : "https://www.babyartikel.de/magazin/schwangerschaftskalender",
    },
    "4": {
      "image": "4week.jpg",
      "description":"4 Woche",
      "link" : "https://www.babyartikel.de/magazin/schwangerschaftskalender",
    }
    ,
    "5": {
      "image": "5week.jpeg",
      "description":"5 Woche",
      "link" : "https://www.babyartikel.de/magazin/5-ssw",
    }
    ,
    "6": {
      "image": "6week.jpeg",
      "description":"6 Woche",
      "link" : "https://www.babyartikel.de/magazin/6-ssw",
    }
    ,
    "7": {
      "image": "7week.jpeg",
      "description":"7 Woche",
      "link" : "https://www.babyartikel.de/magazin/7-ssw",
    }
    ,
    "8": {
      "image": "8week.jpeg",
      "description":"8 Woche",
      "link" : "https://www.babyartikel.de/magazin/8-ssw",
    }
    ,
    "9": {
      "image": "9week.jpg",
      "description":"9 Woche",
      "link" : "https://www.babyartikel.de/magazin/9-ssw",
    }
    ,
    "10": {
      "image": "10week.jpeg",
      "description":"10 Woche",
      "link" : "https://www.babyartikel.de/magazin/10-ssw",
    }
    ,
    "11": {
      "image": "11week.jpeg",
      "description":"11 Woche",
      "link" : "https://www.babyartikel.de/magazin/11-ssw",
    },
    "12": {
      "image": "12week.jpeg",
      "description":"12 Woche",
      "link" : "https://www.babyartikel.de/magazin/12-ssw",
    },
    "13": {
      "image": "13week.jpg",
      "description":"13 Woche",
      "link" : "https://www.babyartikel.de/magazin/13-ssw",
    }

  }

  var $textWeeks = $("#textWeeks");
  var $pregnanceWeekSelector = $("#pregnanceWeek");
  var $weekLink= $("#js-week-link");
  var $container = $('#schwangerschaftPlugin');
  var selectedWeek = $container.attr('data-selected-week');

  if (typeof selectedWeek === typeof undefined || selectedWeek === false) {
    selectedWeek = 5;
  }

  var imagePath = $container.attr('data-imageurl');
  if (typeof imagePath === typeof undefined || imagePath === false) {
    imagePath = '/wp-content/plugins/wp-examplePlugin/img/';
  }

  console.log(imagePath);
  // if (window.location.hash) {
  //     selectedWeek = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
  // }

  $pregnanceWeekSelector.val(selectedWeek);
  displayWeek($pregnanceWeekSelector.find("option:selected").val());
  $pregnanceWeekSelector.on('change',function(){
    if (window.history.replaceState) {
     //prevents browser from storing history with each change:
     window.history.replaceState({}, null, '?ssw='+this.value);
  }
    //parent.location.hash = this.value;
    displayWeek(this.value);
  });

  function displayWeek(selectedWeek){
    $textWeeks.html("");
    var weekData = calendarData[selectedWeek];

    if (weekData != undefined) {
      var image = '<img src="' + imagePath + weekData["image"] + '"/>';

      $textWeeks.html(image + '<br>' + weekData["description"]);

      if(weekData["link"]) {
        $weekLink.attr('href',weekData["link"]);
      }else{
        $weekLink.attr('href',"#");
      }
      $weekLink.find('span').text(selectedWeek);

    }
  }

  $('#js-next').on('tap',function(){
    $pregnanceWeekSelector.find('option:selected')
        .prop("selected", false)
        .next()
        .prop("selected", true);

    $pregnanceWeekSelector.trigger("change");
  });
  $('#js-previous').on('tap',function(){
    $pregnanceWeekSelector.find('option:selected')
        .prop("selected", false)
        .prev()
        .prop("selected", true);

    $pregnanceWeekSelector.trigger("change");
  });

var $twitterShare = $('[data-js="twitter-share"]');
$twitterShare.on('click',function(e) {
  e.preventDefault();
  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
  if(twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  });

  var $facebookShare = $('[data-js="facebook-share"]');

  $facebookShare.on('click',function(e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
    if(facebookWindow.focus) { facebookWindow.focus(); }
      return false;
    });
});
