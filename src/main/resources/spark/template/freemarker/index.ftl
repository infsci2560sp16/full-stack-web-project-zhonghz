<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Homepage</title>
<link href="stylesheets/style.css" rel="stylesheet" type="text/css"/>
</head>

<body>
 <div id="wrap">
  <div id="header">
   <p><img id="titleimg" src="images/title.png" alt="titleimage"/></p>
   <ul class="nav">
    <li class="left"><a href="index.html">Home Page</a></li>
    <li class="left"><a href="match.html">Find a match</a></li>
    <li class="left"><a href="forum.html">Forum</a></li>
    <li class="right"><a href="registration.html">Register</a></li>
    <li class="right"><a href="login.html">Login</a></li>
   </ul>
  </div>
  <div id="mainbody">
   <div id="pannel">
   <img src="images/welcome.png" alt="welcome"/>
   <img src="images/looking.png" alt="looking for a language partner"/>
   <p><a id="join" href="registration.html">Join Us!</a></p>

   <h3><a href="#"><br/>Recommended Topics for Today</a></h3>
   <#assign aDateTime = .now>
   <#assign day = aDateTime?string["EEEE"]>
   <#if day == "Tuesday"||day == "Thursday">
   <p>hello</p>
   <!-- <#list attributes as topic>
   <li>${topic.eventopics}</li>
   </#list> -->
   <!-- <li>${eventopics}</li> -->
   <#elseif day == "Monday"||day == "Wesnesday"||day == "Friday">
   <p>hello</p>
   <!-- <li>${oddtopics}</li> -->
   <!-- <#list attributes as topic>
   <li>${topic.oddtopics}</li>
   </#list> -->
   <#else day == "Saturday"||day == "Sunday">
   <p>hello</p>
   <!-- <li>${weektopics}</li> -->
   <!-- <#list attributes as topic>
   <li>${topic.weektopics}</li>
   </#list> -->
   </#if>
   </div>
  </div>
  <div id="footer">
   <p>Copyright © 2016 Huizhi Zhong</p>
  </div>
 </div>
</body>
</html>
