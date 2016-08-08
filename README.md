##Introduction to Angular
While a basic level of HTML/CSS and JavaScript and an understanding of front-end frameworks will be helpful to better understand this lesson, but it is not necessary to just follow along.

We're going to cover some basic information about angular and how it works and then we're going to play around with and modify an existing angular application with basic functionality.

##What is Angular?
AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write.

###Model-View-Controller (MVC)
**Model:** It's where your application's data lives, representing the current state.
* defined via JavaScript. Within Angular Services. Imperatively.
* includes:
  * Access to the persistent layer/store
  * Business logic
  * CRUD functions
  * Data validation

**View:** It displays your application's data (from the model) for the end user and handles user interaction.
* defined via HTML, CSS, some JavaScript, Angular directives ('ng-'attributes) and two-way data bindings. Within the HTML document. Declaratively.
* includes:
  * Markup for -
    * presenting data
    * handling user interactions
    * showing and hiding elements
  * Filters to limit/organize data
  * Expressions/logic

**Controller (often called the view-model):** Control the relationship between the Models and Views by exposing parts of the model and managing state.
* defined via JavaScript. Within Angular Controllers. Imperatively.

###Data Binding
Data-binding in Angular apps is the automatic synchronization of data between the model and view components. The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.

[AngularJS Docs on Data-binding](https://docs.angularjs.org/guide/databinding)

###Built-In-Directives
Directives are Angular's way of extending HTML. Angular uses directives to add functionality to HTML elements and attributes. Coupled with Angular templating, directives create dynamic components that re-render whenever the underlying data changes. According to the docs-

At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children.

In addition to the built-in-directives it is also possible to build custom directives, or to utilize custom directives built by other developers.

[AngularJS Docs on directives](https://docs.angularjs.org/api/ng/directive)

###What is scope?
Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.

[AngularJS Docs on scope](https://docs.angularjs.org/guide/scope)

###Controllers
In MVC, controllers provide properties and functionality for use in the view. Angular controllers are no different. They are just functions that provide data for use in the views.

Angular takes care of the hard part - connecting our controllers and views together. All we have to do is add various properties to the $scope and use them inside of our views.

When a new controller is created, Angular automatically gives it a brand new $scope. The $scope object is a JavaScript object that glues together controllers and views. Properties that are on the $scope object are available to both the view and the controller.

[AngularJS Docs on controllers](https://docs.angularjs.org/guide/controller)

###Looking at the Demo Project
**To view this demo project on your computer:**
* clone this repo (fork if you like)
* cd into the folder
* run `python -m SimpleHTTPServer 8000`
* go to `http://localhost:8000/#/` in your browser

**See if you can identify the topics we covered above in the example project**

**Extras Built into this Example:**
In addition to the basics reviewed above, this example includes:
* Materialize CSS (using angular-materialize)
* ui.router (replacing the ngRoute built-in-directive)
  * including nested views


**References for this article:**
[AngularJS Docs](https://docs.angularjs.org/guide)

[Harry Potter Ipsum](http://www.christinachern.com/hpipsum/)
