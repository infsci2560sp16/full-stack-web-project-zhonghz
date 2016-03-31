<!DOCTYPE html>
<html>
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

   <h3><a href="#"><br/>Recommended Topics for ${dayOfWeek}</a></h3>

   <#if dayOfWeek == "Tuesday"|| dayOfWeek == "Thursday">
   <#list 0..oddtopics?size-1 as i>
   <h4>${eventopics[i]}</h4>
   </#list>
   <#elseif dayOfWeek == "Monday"|| dayOfWeek == "Wesnesday"||day == "Friday">
   <#list 0..oddtopics?size-1 as i>
   <h4>${oddtopics[i]}</h4>
   </#list>
   <#else dayOfWeek == "Saturday"|| dayOfWeek == "Sunday">
   <#list 0..oddtopics?size-1 as i>
   <h4>${weektopics[i]}</h4>
   </#list>
   </#if>
   
   </div>
  </div>
  <div id="footer">
   <p>Copyright © 2016 Huizhi Zhong</p>
  </div>
 </div>
</body>
</html>
