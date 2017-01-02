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