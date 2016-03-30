$(function () {
  $.ajax({
    url: "/api/find",
    success: function (result) {
      var member = JSON.parse(result);
      console.log(data);
      for (var i = 0; i < member.length; i++) {
        if (i%2 !== 0) {
          // $odddiv = $('<div class="edemo"></div>');
          // $("div#members").append($odddiv);
          // $($odddiv).append('<img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" />');
          // $($odddiv).append("<h4>member[i].username</h4>");
          // $($odddiv).append("<br/>");
          // $($odddiv).append("<p>member[i].nlanguage</p>");
          // $($odddiv).append("<p>member[i].planguage</p>");
          // $($odddiv).append("<span class='time'>Last Login Date</span>");
          $("div#members").html('<div class="edemo">'+
                                '<img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" />'+
                                '<h4>Username'+member[i].username+'</h4>'+
                                '<br/>'+'<p>Native Language'+member[i].nlanguage+'</p>'+
                                '<p>Practise Language'+member[i].planguage+'</p>'+'<span class="time">Last Login Date</span>'+'</div>');
        } else {
          $("div#members").html('<div class="demo">'+
                                '<img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" />'+
                                '<h4>Username'+member[i].username+'</h4>'+
                                '<br/>'+'<p>Native Language'+member[i].nlanguage+'</p>'+
                                '<p>Practise Language'+member[i].planguage+'</p>'+'<span class="time">Last Login Date</span>'+'</div>');
          // $evendiv = $("<div class='demo'></div>");
          // $("div#members").append($evendiv);
          // $($evendiv).append("<img class='userPic' src='images/userpic.jpg' alt='userpic' width='60' height='60' />");
          // $($evendiv).append("<h4>Username+car[0]</h4>");
          // $($evendiv).append("<br/>");
          // $($evendiv).append("<p>Native Language</p>");
          // $($evendiv).append("<p>Practise Language</p>");
          // $($evendiv).append("<span class='time'>Last Login Date</span>");
          // $("div#members").html("<div class="edemo"><img class="userPic
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
