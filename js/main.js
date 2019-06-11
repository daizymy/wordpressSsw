var $ = jQuery;
$( document ).ready(function(){
  var calendarData = window.calendarData ? window.calendarData : {};
  var $textWeeks = $("#textWeeks");
  var $pregnanceWeekSelector = $("#pregnanceWeek");
  var $weekLink= $("#js-week-link");
  var $container = $('#schwangerschaftPlugin');
  var imagePath = $container.attr('data-imageurl');
  var selectedWeek = $container.attr('data-selected-week');

  if (typeof selectedWeek === undefined || selectedWeek === false) {
    selectedWeek = 1;
  }

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
    var imageUrl = imagePath + weekData["image"];

    if (weekData != undefined) {
      var image = '<img src="' + imageUrl + '"/>';

      $textWeeks.html(image + '<br>' + weekData["description"]);

      // replace button link;
      if(weekData["link"]) {
        $weekLink.attr('href',weekData["link"]);
      }else{
        $weekLink.attr('href',"#");
      }
      $weekLink.find('span').text(selectedWeek);

      // override og: metatags;
      var babySize = (weekData["baby_size"] != undefined ? weekData["baby_size"] : "");
      replaceOgMeta('title', "Mein Baby ist jetzt so groß wie " + babySize);
      replaceOgMeta('description', weekData["description"]); // @todo: max length 300 chars
      replaceOgMeta('image', imageUrl);
      replaceOgMeta('url', document.URL);
    }
  }
  function replaceOgMeta(name,content){
    $('meta[property="og:' + name + '"]').remove();
    $('head').append('<meta property="og:' + name + '" content="' + content + '">');
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
