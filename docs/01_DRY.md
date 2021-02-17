# Dry - Don't Repeat Yourself

This is something I'm trying to get a lot better at myself.
But, rather than having `app-header` and `app-footer` in each component's template, I moved it into the app.component template.
We can individually handle cases where a page shouldn't have the header or footer.  

- [Dry - Don't Repeat Yourself](#dry---dont-repeat-yourself)
  - [Services](#services)

## Services

Services are an Angular implementation that allow for you to decentralize functionality to be used throughout the application.
So any requests to the server/database should be in their own dedicated class.
This allows that functionality to be used in any component that needs it, instead of redefining this functionality in each component.  
