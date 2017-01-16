# React Learning Framework Notes

## TODO

* Answer: For each common problem, how is it solved?

## What is React?

* Technically not a framework, it's a view-only UI library
* Framework agnostic (can use with Angular, Backbone, etc)
* Works on web, mobile (via React Native), or desktop (via Electron)
* Uses unidirectional data flow

## What: What are the common problems that it solves?

* Components: easier way to manage large apps
	* The "holy grail" of front-end development
	* Moves away from MVC and more towards the Single Responsibility Principle
* Unidirectional data flow: Lowers complexity of data flow and state
	* Old school: Have state managed in objects across the entire app
	* React: State is one location; When changes are made, it's pushed in one direction using Reactive Functional Programming
	* Easier to reason with; Side effects are almost null
* Virtual DOM: DOM manipulation is only changed when necessary
	* When changes are made, the virtual DOM diffs with the real DOM, doing only the minimum number of changes necessary
	* Allows the dev to not have to worry about front-end performance
	* Much less boilerplate code for DOM manipulation

## What are the key concepts and common terms used? What do they mean?

* Component
	* Always has: `props` object, `state` object, and a `render` function
* Props
	* When you have a defined component, you can add attributes to the component, such as `this.props.name`
	* These are not modified inside of a component; Should only be set on the creation of the component
* Mounting
	* React stores a virtual node
	* When you are ready to have it display, you mount it
		* Imagine as if instead of "mounting" it was called "display"
		* However, sometimes you want to "display" JSON or XML
	* Typically called with `render`
	* The base component needs a HTML element (typically with an ID) to mount to
* State
	* Can set initial state and update state
	* Using `setState`, React will automatically check if a repaint is necessary
	* These are modified with user interaction

## List the common underlying tools used

* JSX: JavaScript XML syntax
* Node
	* Allows for isomorphic JS
		* Same code base
		* More importantly, allows for server-side rendering
			* Enables JS-blocking users to use the app
			* Enables SEO to see the site
* Babel (using ES7)
	* Classes
	* Decorators
		* Enables you to share functions without falling into the inheritance antipattern
* Webpack (typically)
* React-Bootstrap
* React Router
* Formsy-React (helps with forms)
* Redux
* Yarn (for dependency management) or npm

## Compare and contrast this framework to other major frameworks

* ng1
	* Monolithic
	* Better for small apps
	* React >>> ng1 for performance
	* Didn't have unidirectional data flow, which React brought to the masses
* ng2
	* Solves the major problems (whereas React is just a view library)
	* Integrates TypeScript at the core
	* Comparable performance (React is better at some, ng2 at others)
	* Can use unidirectional data flow
	* Testing is harder because of Dependency Injection
	* Templates typically fail at run time rather than compile time
	* React has a stronger preference for pure JS devs, whereas ng2 focuses on strengthening HTML
	* Is more opinionated, which can be good and bad
	* Will be easier to convert to Web Components
	* Requires you to learn the Angular DSL
* Vue
	* Iteration is cleaner and easier
	* Two-way data-binding is cleaner
	* Requires you to know the Vue DSL (similar to Angular)
	* React's ecosystem is much larger

## List out the major players who are using this technology

* Facebook
* Instagram
* Dropbox
* Alipay
* Khan Academy
* Lyft
* Netflix
* Reddit
* Tesla
* Treehouse
* Uber
* WhatsApp

## Does it target new/fun projects? Startups? Big companies?

* Requires the devs to be competent in JS
* Has a bit more boilerplate, but this can be solved with a starter kit
* Big companies and startups can use it

## Where would you use this framework? Where would you not?

* Use: when your app requires lots of DOM interactions and changes
* Use: when the data will change many times
* Use: when one interaction will affect many other components
* Use: with a high chance of it becoming a large app
* Use: the team is strong in pure JS
* Use: do not want to use TypeScript

* Not: if you believe that Web Components are the future
* Not: if you support Web Components' approach to open-source
* Not: your team has devs who are likely to access the DOM directly (instead of React's data store)
	* Consider that people do what they already know
	* Consider that people will act horribly under time constraints
* Not: the app will be a small, toy app
* Not: the team isn't able to tolerate a period of no-fun to get to the fun part
	* With the learning curve and a lot of boilerplate
	* After that's set up, it's easy to extend
* Not: if you want an opinionated framework
* Not: if you like stronger HTML versus stronger JS
* Not: your design team includes CSS gurus and they don't want to learn JS

## For each common problem, how is it solved?

### Form validations

### Rendering views from data

### Testing

### API calls

### Server-side rendering

* Read real code examples from other people's projects first
* Aim to minimize documentation lookup
* Read the test suite

Can solve this with a todo app sample.

## What are the best practices and how are they used?

* Tools
	* Babel
	* Webpack
	* JSX
	* Normalizr -- structures nested JSON objects into objects you can use easily
	* Jest (for testing)
* Keep the components really small
	* Keep your `render` function less than 10 lines
* Minimize use of `state` -- as this will cause React to check the virtual DOM whenever it is changed
* Use `shouldComponentUpdate` and set to `false` for static content
* Use Smart and Dumb Components
	* Smart parent -- has all the attributes that pass as `props` to the children
	* Dumb child -- simple HTML that just uses props
* Use PropTypes for data validation -- especially on large teams
* User containers, such as a Secure container (when logged in) and Insecure container (when logged out)
* Avoid Refs
* All components should be in their own file
* Correct file structure

```
.
	src
		actions
		client.js
		components
		containers
		reducers
		routes
		store
		views
		
--OR--
.
	src
		auth
			actions
			components
			reducers
			views
		client.js
		components
		containers
		products
			actions
			components
			reducers
			views
		routes
		shipping
			actions
			components
			reducers
			views
		store
```


## When were new features added and deprecations introduced?

* Recently separated React DOM from React core
* This means `render` should be called on `ReactDOM`

## What does the roadmap look like and when will they be added?

* Their official docs didn't have anything
* Google had no good results