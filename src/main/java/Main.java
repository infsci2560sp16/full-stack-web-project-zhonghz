import com.google.gson.Gson;
import java.sql.*;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Map;

import java.net.URI;
import java.net.URISyntaxException;

import static spark.Spark.*;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;

import com.heroku.sdk.jdbc.DatabaseUrl;

public class Main {



  public static void main(String[] args) {

    port(Integer.valueOf(System.getenv("PORT")));
    staticFileLocation("/public");

    get("/hello", (req, res) -> "Hello World");

    get("/test", (req, res) -> {
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

            Map<String, Object> attributes = new HashMap<>();
            attributes.put("oddtopics", oddtopics);
            attributes.put("eventopics", eventopics);
            attributes.put("weektopics", weektopics);

            return new ModelAndView(attributes, "index.ftl");
          } , new FreeMarkerEngine());

      // get("/register", (req, res) -> {
      //   Map<String, Object> data = new HashMap<>();
      //   data.put("", "json");
      //   data.put("status", "live");
      //   return data;
      // }, gson::toJson);

    //get("/", (request, response) -> {
    //        Map<String, Object> attributes = new HashMap<>();
    //        attributes.put("message", "Hello World!");
    //
    //        return new ModelAndView(attributes, "index.ftl");
    //    }, new FreeMarkerEngine());

    // get("/api/", (req, res) -> {
    //
    //   Map<String, Object> data = new HashMap<>();
    //   data.put("", "json");
    //   data.put("status", "live");
    //   return data;
    // }, gson::toJson);
    Gson gson = new Gson();
    
    get("api/find", (req, res) -> {
      Connection connection = null;
      Map<String, Object> attributes = new HashMap<>();
      try {
        connection = DatabaseUrl.extract().getConnection();

        Statement stmt = connection.createStatement();
        // stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
        // stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
        ResultSet rs = stmt.executeQuery("SELECT username, nlanguage, planguage FROM users");

        Map<String, Object> data = new HashMap<>();
        //ArrayList<String> output = new ArrayList<String>();
        while (rs.next()) {
          data.put("username", rs.getString("username"));
          data.put("nlanguage", rs.getString("nlanguage"));
          data.put("planguage", rs.getString("planguage"));
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
