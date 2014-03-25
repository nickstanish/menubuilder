package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

import play.data.validation.Constraints.Required;
import play.db.ebean.Model;

@Entity
public class Section extends Model {
	@Id
	public Long id;
	@Required
	public String title;
	public List<MenuItem> menuitems;

	public static List<Section> all() {
		return find.all();
	}

	public static void create(Section section) {
		section.save();
	}

	public static void delete(Long id) {
		find.ref(id).delete();
	}
	public static Finder<Long,Section> find = new Finder( Long.class, Section.class );
	
}    