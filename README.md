# New Tech Learning Framework

## Goal

* Align every company and job-seeker's expectations on "knowing" a framework
* Feel more confident about what you know. In other words, a means to fight Imposter Syndrome
* Have a mental framework to learn frameworks faster

## Target Audience

This document targets experienced developers.

Rookie devs should balance learning a language (to accomplish a task), learning a framework (to do fun stuff), and book learning (to understand the how/why).

## Motivation

I recently came back from sabbatical and started hunting for a job. Each company has a set of frameworks that they use to solve their customers' problems and thus they want to find someone who "knows [framework]".

I spent over a year with Angular 1.x before I **felt** like I knew it, yet I was sitting there in a conference room and was asked "Do you know Angular 2?" Angular 2 final was released September 2016. It's now December 2016. You can imagine how that conversation went.

After being out of the game for six months while on sabbatical, I had a lot to learn. After reflecting on this interview and my conversations with some smart people, I realized that we all had different definitions of what it means to "know".

I was confident that if there was a single document on what it means to "know" a framework that I could be both more confident and also come up with a way to learn frameworks faster.

## Using and Contributing

This document is a guide not a strict path. You may think the outline is out of order. For your mental schema on learning frameworks, it may very well be. Use this as a reference.

With that said, I am interested in contributions and additions!

## Knowing a Language

The majority agrees that it is a pre-requisite to know the language prior to knowing the framework.

### JavaScript

* Know ES5
* ES6+ and TypeScript are nice-to-haves, but need to know ES5

TBA: Notes on what it means to know a language

## Knowing a Framework

The foundations for saying you know a framework include three items

1. You understand the big picture of the framework's ecosystem and how it fits in with other frameworks
1. You have the ability to solve common problems and have sufficient knowledge to solve problems when you're stuck
1. You stay updated on releases

In further detail:

* Discuss the pros and cons of the framework (versus another)
* Knowledge on who uses the framework to strengthen the pros/cons list
* Knowledge on the key concepts under-the-hood
* Ability to solve common problems without using the documentation
* Knowledge of "what to Google" when stuck
* Ability to discuss a new feature implementation
* Stays updated on new features and deprecations (by version)
* Stays updated on the current roadmap of features
* Works with the most updated tools

### Angular

* Know the key differences between ng1 and ng2 and why
* Know the upgrade strategy from ng1 to ng2

## Mental Framework to Learn a Framework

### Research

Research the answers to these questions. Run it by someone you know or members of the community. Bonus: Add cards on [Anki](http://ankisrs.net/) to quickly learn (and remember) the answers to most of these questions.

* What: What is the framework?
* What: What are the common problems that it solves?
* What: What are the reasons for the major upgrade (if applicable)?
* What: What are the common terms used? What do they mean?
* What: What are the key concepts used under-the-hood?
* What: List the common underlying tools used
* Why: Compare and contrast this framework to other major frameworks
* Who: List out the major players who are using this technology
* Where: Does it target new/fun projects? Startups? Big companies?
* Where: Where would you use this framework? Where would you not?
* How: For each common problem, how is it solved?
	* Read real code examples from other people's projects first
	* Aim to minimize documentation lookup
	* Read the test suite
* How: What are the best practices and how are they used?
* How: What are the known anti-patterns?
* When: When were new features added and deprecations introduced?
* When: What does the roadmap look like and when will they be added?

Next, it's time to build projects. While building them, create a cheatsheet.

### Front-End Projects

The best starter projects are ones that you get from people you trust. Ask a mentor or the community first. As a backup plan, here is a learning path.

* Calculator using form inputs
	* Focus: getting a project started; basic architecture; forms; message patterns
	* All three should be text input fields
	* Live check to see if the first and last fields are numbers (show a warning if not a number)
	* Live check to see if the middle field is "plus" "minus" "multiply" or "divide" (show a warning if not one of those -- UX doesn't have to be perfect)
	* On enter, it outputs the calculation
	* Testing not required
* Sales page
	* Focus: list of items; user interaction; DRY'd code via components
	* Have 10 items that you want to sell
	* When the user clicks on an item, the colors change and text is added saying "Added to cart"
	* Multiple items can be clicked
	* Testing not required
	* Bonus: Have it make API calls to your server to grab the items
* Non-trivial app
	* Focus: whatever you like; testing; data flow
	* Apply TDD
	* Needs to have at least one API call
	* Add a chart of some kind
	* Bonus: Add websockets

### TBA: Back-End Projects