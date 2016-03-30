$(function () {
  $.ajax({
    url: "/api/find",
    success: function (result) {
      var member = JSON.parse(result);
      for (var i = 0; i < member.length; i++) {
        if (i%2 !== 0) {
          $("div#members").append('<div class="edemo">'+
                                '<img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" />'+
                                '<h4>Username:'+member[i].username+'</h4>'+
                                '<br/>'+'<p>Native Language: '+member[i].nlanguage+'</p>'+
                                '<p>Practise Language: '+member[i].planguage+'</p>'+'<span class="time">Last Login Date</span>'+'</div>');
        } else {
          $("div#members").append('<div class="demo">'+
                                '<img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" />'+
                                '<h4>Username: '+member[i].username+'</h4>'+
                                '<br/>'+'<p>Native Language: '+member[i].nlanguage+'</p>'+
                                '<p>Practise Language: '+member[i].planguage+'</p>'+'<span class="time">Last Login Date</span>'+'</div>');

          // $("div#members").html("<div class="demo"><img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" /><h4>Username</h4><br/><p>Native Language</p><p>Practise Language</p><span class="time">Last Login Date</span></div>");
        }
      }
      //$("#current-time").html(result);
    }});
  });

//DOM

// $img = $("<img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" />");
// $oh4 = $("<h4>Username+car[0]</h4>");
// $br = $("<br/>");
// $onlanguage = $("<p>Native Language</p>");
// $oplanguage = $("<p>Practise Language</p>");
// $otime = $("<span class="time">Last Login Date</span>");
