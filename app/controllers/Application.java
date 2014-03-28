package controllers;

import java.util.Map;

import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller {

	public static Result index() {
		return ok(views.html.index.render("Menu Builder"));
	}
	
	public static Result updateMenu(){      
		Map<String, String[]> parameters = request().body().asFormUrlEncoded();
	    String message = (String)parameters.get("message")[0];
	    play.Logger.info(message);
		return ok();
	}

}
