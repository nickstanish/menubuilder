MenuBuilder
==========
_Nick Stanish_

Menubuilder is a single-page application tool using knockout, knockout-validation, play 2 framework, jquery, and bootstrap 3 for creating and editing a "menu" and uploading the data back to the server. 

It features 
- Responsive view with hideable sidebar
- dynamic creation of new menu items and sections
- accordian display of sections and items within sections
- validation through knockout-validation
- fast building, editing, deleting of items

Known bugs
- Certain display sizes can screw up scrolling display
- initial models should be loaded though a GET request via javascript
- "Publish" should notify of success/failure in a non-blocking manner
- deleting items could be better by displaying an "undo" button for a few seconds
