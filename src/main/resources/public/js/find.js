$(function () {
  $.ajax({
    url: "/api/find",
    type: 'GET',
    dataType: 'json',
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
        }
      }
    }});
  });
