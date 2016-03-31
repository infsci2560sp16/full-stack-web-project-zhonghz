import com.google.gson.Gson;
import org.json.JSONObject;
import java.sql.*;
import java.util.*;
import java.util.Date;
import java.text.SimpleDateFormat;

import java.net.URI;
import java.net.URISyntaxException;

import static spark.Spark.*;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import com.heroku.sdk.jdbc.DatabaseUrl;
import spark.Request;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main {



  public static void main(String[] args) {

    port(Integer.valueOf(System.getenv("PORT")));
    staticFileLocation("/public");

    get("/hello", (req, res) -> "Hello World");

    //ftl
    get("/index", (request, response) -> {
            Map<String, Object> attributes = new HashMap<>();

            ArrayList<String> oddtopics = new ArrayList<String>();
            oddtopics.add("Animal");
            oddtopics.add("Beauty");
            oddtopics.add("Books");
            oddtopics.add("Television");
            ArrayList<String> eventopics = new ArrayList<String>();
            eventopics.add("Culture");
            eventopics.add("Music");
            eventopics.add("Technology");
            ArrayList<String> weektopics = new ArrayList<String>();
            weektopics.add("Cooking");
            weektopics.add("Movies");
            weektopics.add("Sports");
            weektopics.add("Travel");

            SimpleDateFormat formatter = new SimpleDateFormat("EEEE");
            String dayOfWeek = formatter.format(new Date());

            attributes.put("oddtopics", oddtopics);
            attributes.put("eventopics", eventopics);
            attributes.put("weektopics", weektopics);
            attributes.put("dayOfWeek", dayOfWeek);


            return new ModelAndView(attributes, "index.ftl");
          } , new FreeMarkerEngine());



    //get("/", (request, response) -> {
    //        Map<String, Object> attributes = new HashMap<>();
    //        attributes.put("message", "Hello World!");
    //
    //        return new ModelAndView(attributes, "index.ftl");
    //    }, new FreeMarkerEngine());

    Gson gson = new Gson();
    //GET JSON
    get("api/find", (req, res) -> {
      Connection connection = null;
      Map<String, Object> attributes = new HashMap<>();
      try {
        connection = DatabaseUrl.extract().getConnection();

        Statement stmt = connection.createStatement();
        // stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
        // stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
        ResultSet rs = stmt.executeQuery("SELECT username, nlanguage, planguage FROM users");

        //Map<String, Object> data = new HashMap<>();
        //ArrayList<String> output = new ArrayList<String>();
        List<Object> data = new ArrayList<>();
        while (rs.next()) {
          Map<String, Object> member = new HashMap<>();
          member.put("username", rs.getString("username"));
          member.put("nlanguage", rs.getString("nlanguage"));
          member.put("planguage", rs.getString("planguage"));
          //data.put(rs.getString("username"), member);
          data.add(member);
        }
        return data;
        //attributes.put("results", output);
        //return new ModelAndView(attributes, "db.ftl");
      } catch (Exception e) {
        attributes.put("message", "There was an error: " + e);
        return new ModelAndView(attributes, "error.ftl");
      } finally {
        if (connection != null) try{connection.close();} catch(SQLException e){}
      }
    }, gson::toJson);

    //POST JSON
    post("api/register", (req, res) -> {
          Connection connection = null;
          //Testing
          System.out.println(req.body());
        try {
          connection = DatabaseUrl.extract().getConnection();
          JSONObject obj = new JSONObject(req.body());
          String username = obj.getString("username");
          String password = obj.getString("password");
          String email = obj.getString("email");
          String fname = obj.getString("fname");
          String lname = obj.getString("lname");
          String gender = obj.getString("gender");
          String language = obj.getString("language");
          String planguage = obj.getString("planguage");
          String topic = obj.getString("topic");

          String sql = "INSERT INTO users VALUES ('"+ username + "','" + password + "','" + email + "','" + fname + "','"+ lname + "','" + gender + "','" + language + "','" + planguage + "','" + topic + "')";

          connection = DatabaseUrl.extract().getConnection();
          Statement stmt = connection.createStatement();
          stmt.executeUpdate(sql);

          ResultSet rs = stmt.executeQuery("SELECT * FROM users where username ='" + username + "'");
          Map<String, Object> currentuser = new HashMap<>();

					currentuser.put("username", rs.getString("username"));
					currentuser.put("email", rs.getString("email"));

          return currentuser;
        //  return req.body();
        } catch (Exception e) {
          return e.getMessage();
        } finally {
          if (connection != null) try{connection.close();} catch(SQLException e){}
        }
      });

      //GET XML
      get("api/forum", (req, res) -> {

          Connection connection = null;
          // res.type("application/xml"); //Return as XML

          Map<String, Object> attributes = new HashMap<>();
          try {
              //Connect to Database and execute SQL Query
              connection = DatabaseUrl.extract().getConnection();
              Statement stmt = connection.createStatement();
              ResultSet rs = stmt.executeQuery("SELECT title,username,threads.planguage,threads.topic,description FROM users,threads WHERE users.email=threads.email");


              String xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
              xml += "<forum>";
              while (rs.next()) {
              xml += "<thread>";
						  xml += "<title>"+rs.getString("title")+"</title>";
						  xml += "<username>"+rs.getString("username")+"</username>";
						  xml += "<language>"+rs.getString("planguage")+"</language>";
						  xml += "<topic>"+rs.getString("topic")+"</topic>";
						  xml += "<description>"+rs.getString("description")+"</description>";
					    xml += "</thread>";
              }
              xml += "</forum>";
              res.type("text/xml");
              return xml;

          } catch (Exception e) {
              attributes.put("message", "There was an error: " + e);
              return attributes;
          } finally {
              if (connection != null) try{connection.close();} catch(SQLException e){}
          }
        });//End api/forum



    get("/db", (req, res) -> {
      Connection connection = null;
      Map<String, Object> attributes = new HashMap<>();
      try {
        connection = DatabaseUrl.extract().getConnection();

        Statement stmt = connection.createStatement();
        stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
        stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
        ResultSet rs = stmt.executeQuery("SELECT tick FROM ticks");

        ArrayList<String> output = new ArrayList<String>();
        while (rs.next()) {
          output.add( "Read from DB: " + rs.getTimestamp("tick"));
        }

        attributes.put("results", output);
        return new ModelAndView(attributes, "db.ftl");
      } catch (Exception e) {
        attributes.put("message", "There was an error: " + e);
        return new ModelAndView(attributes, "error.ftl");
      } finally {
        if (connection != null) try{connection.close();} catch(SQLException e){}
      }
    }, new FreeMarkerEngine());

  }

}
