# Building Applications with React and Flux

[Link to course](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents)

## Summary

I was going through the [Building Applications with React and Redux in ES6](https://app.pluralsight.com/player?author=cory-house&name=react-redux-react-router-es6-m1&mode=live&clip=1&course=react-redux-react-router-es6) course, when he suggested going through the first four modules of this course to get a basic understanding of React.

## Versions

* React 0.13.3
* React-Router 0.13.3
* Flux 2.0.3

## Notes

* JSX: Combines HTML and JS because the two are strongly interwined. Separation of concerns does not have value when it's this tightly coupled.
* Inline styling is OK
* CommonJS: encaspulate your modules to be used elsewhere using a common syntax. It follows three rules:
	1. Reference any file you want using `require()` (such as `require('/path/to/file')`)
	1. Declare module itself. `var myModule = { /* ... */ }`
	1. Expose to others. `module.exports = myModule;`
* Flux is more of a pattern, but it's also the name of Facebook's flux (pattern) implementation
* Streams allow you to keep the data rather than writing to disc, making it faster. Gulp uses streams while Grunt does not.
* Why React?
	* Fast
	* Scales to complex UIs
	* Composable (working with multiple components is easy)
	* Pluggable into existing apps
	* Isomorphic Friendly (client and server)
	* Battle proven
* In terms of MVC, good React apps are like VC -- controller views make up the Smart Components
* JSX compiles to JS -- JSX is optional, but highly, highly encouraged
* JSX: "Fail fast, Fail loudly"
* Isomorphic and React Native are large concepts that have their own courses
* Can use a `.js` or `.jsx` extension. There are pros/cons to both. Consistency is #1
* Props
	* Immutable
	* Look like HTML attributes
* State
	* Mutable
	* Strive to only use them on your controller views (aka Smart Components aka top-level view)
	* Pass down State attributes to the child props
* `componentDidMount` lifecycle hook is great when interacting with 3rd party tools -- it means that it is now a part of the DOM
* When adding dynamic children, such as a loop of users in a users#index, need to use a `<div key={user.id}>` key attribute so React can keep track (note: doesn't need to be `.id` but it needs to be some sort of unique id)
* Composition
	* The Controller View owns the child views -- like an avatar component owns the profile pic and the profile info
	* The Controller View interacts with the stores
* PropType validation
	* Does not run in production (with minified React)
* For React Router, if you don't provide a `path` attribute, it'll assume the `name` is the same as the `path`
* `this.props.params` and `this.props.query`
* Hash vs History URLs
	* History (aka HTML5 push state style) is cleaner and doesn't have the `#` in the URL
	* Hash location works on all browsers, History requires IE10+
	* History is required to do server-side rendering
	* Hash is the default from React-Router
* When doing a form, the high-level component should be a Controller-View aka a Smart Component
* If you're inputting HTML into the base page, it's a sign that you're not doing Smart Components
* When working with forms, React requires you to create a custom handler -- if you run into a scenario where typing into a form doesn't do anything, it's because React is redrawing on the Virtual DOM. You need to set it so that typing changes the attribute so on a re-draw it shows the new text
* When other people will be using your component, make sure to define `propTypes` so they get a warning if they aren't used corectly plus it'll provide documentation
* Flux
	* Pattern, not a framework
	* Has a centralized dispatcher that dispatches changes to the data
	* Also the name of Facebook's Flux implementation
	* Many alternatives to Facebook's flux implementation
	* Action -> Dispatcher -> Store -> React View
	* Dispatcher: singleton registry -- or rather a centralized list of callback
* Example
	* Action: Delete User
	* Dispatcher: Notifies every store that cares
	* Store: Hold app state
	* React View: Updates when given new data
* Every action's payload with a type and data
* Dispatcher: there's only one, dispatches actions, broadcasts payload to all registered callbacks, stores essentially subscribe to events in the Dispatcher
* Store: Holds app state, logic, data retrieval, not a model but contains models, one or many, uses Node's `EventEmitter`, the only part that knows how to update with new data
* Every Store...
	* Extends EventEmitter
	* `addChangeListener` and `removeChangeListener`
	* `emitChange`
* Controller Views should interact with Stores
* Flux API
	* `register(fn callback)` -- "Hey Dispatcher, run me when actions happen. --Store"
	* `unregister(string id)` -- "Hey Dispatcher, stop worrying about this action. --Store"
	* `waitFor(array<string> ids)` -- "Hey Dispatcher, call these other stores first and in the given order. --Store"
	* `dispatch(object payload)` -- "Hey Dispatcher, tell the stores about this action. --Action"
	* `isDispatching()` -- boolean that is `true` when Dispatcher is dispatching things
* Not the same thing as PubSub
	* Callbacks are not subscribed to particular events; Every payload is dispatched to every registered callback
	* Callbacks can be deferred until other callbacks are completed
	
	
