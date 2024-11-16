# Hooks

[Documentation](https://reactjs.org/docs/hooks-intro.html)

- Added in React 16.8
- You use state and other React features without writing a class

## React Today and Tomorrow and 90% Cleaner React With Hook - React Conf 2018

_The first three talks from React Conf 2018 by Sophie Alpert, Dan Abramov, and Ryan Florence._

Three problems with React:

1. Reusing logic
2. Gaint Components
3. Confusing classes

These are three symptoms of one problem.

>> React doesn't provide a **stateful primitive** simlper than a class component.

This is an existing problem and once we tried to solve it using mixins but it creates problems worse than existing one.

We can use hooks more than once in a function.

Context: Global values required by our components. Instead of passing them down as props we use context. Examples are theme and locale.

The most common method we use is `render prop`.
```jsx
import { LocaleContext } from './context';
<LocaleContext.Consumer>
{
    locale => (
        <Row label="Language">
            {locale}
        </Row>
    )
}
</LocaleContext.Consumer>
```
The same can be done using hooks.
```jsx
import React, { useContext } from 'react';
import { LocaleContext } from './context';

export default function Greeting (props) {
    const locale = useContext(LocaleContext);

    return (
        <Row label="Language">
            {locale}
        </Row>
    );
};
```

React relies on the order of the hooks. We cannot use hooks inside conditions and should remain at the top.

Lifecycle methods are use to create side effects. Hence we have `useEfect`.

With hooks we can:
- Use all React features without a class.
- **Reuse stateful logic** between components.
- Opt-in and **100% backwards-compatible**.
- **Don't rewrite** your components!

Code: src/hooks/users

## Background

> Favour object composition over class inheritance 

by the Gang of Four, “Design Patterns: Elements of Reusable Object Oriented Software”

[Well-known problems in object oriented design](https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea):

- **The tight coupling problem**: Because child classes are dependent on the implementation of the parent class, class inheritance is the tightest coupling available in object oriented design.
- **The fragile base class problem**: Due to tight coupling, changes to the base class can potentially break a large number of descendant classes — potentially in code managed by third parties. The author could break code they’re not aware of.
- **The inflexible hierarchy problem**: With single ancestor taxonomies, given enough time and evolution, all class taxonomies are eventually wrong for new use-cases.
- **The duplication by necessity problem**: Due to inflexible hierarchies, new use cases are often implemented by duplication, rather than extension, leading to similar classes which are unexpectedly divergent. Once duplication sets in, it’s not obvious which class new classes should descend from, or why.
- **The gorilla/banana problem**: “…the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ~ Joe Armstrong, “Coders at Work”

## Motivation
- They allow you to reuse stateful logic without changing your component hierarchy.
- They let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.
- They let you use more of React’s features without classes.

**Note: There are no plans to remove classes from React.**

[Hooks: FAQ](https://reactjs.org/docs/hooks-faq.html)

> You can’t use Hooks inside a class component, but you can definitely mix classes and function components with Hooks in a single tree.

> In the longer term, we expect Hooks to be the primary way people write React components.

## What is a Hook?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

For example, `useState` is a Hook that lets you add React state to function components.

## When would I use a Hook? 

If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

## Links

[Highest Voted: Questions tagged [react-hooks]](https://stackoverflow.com/questions/tagged/react-hooks?tab=Votes)

## Hook: useState

[Blog: useState](https://reactjs.org/docs/hooks-state.html)
```js
/**
 * @param [Any] initial state : doesn't have to be object always
 * Declares the state variable
 * @return [Array] the current state and a function that updates it
*/
const [something, setSomething] = useState(null);
```
### Prerequisite
- Array Destructuring

### Consider Counter as Example.

Set state `count` in Counter for class component.
```js
this.state = {
    count: 0
};
```
It is replaced with `useState` in functional component.
```js
const [count, setCount] = useState(0);
```
Access the state: Class component
```js
<h1>Count = {this.state.count}</h1>
```
Access the state: Functional component
```js
<h1>Count = {count}</h1>
```
Set the state: Class component
```js
<button onClick={() => this.setState((prevState) => ({count: prevState.count + 1}))}>+</button>
```
Set the state: Functional component
```js
<button onClick={() => setCount(count + 1)}>+</button>
```

[You can declare multiple states or club them together](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables).

## Hook: useEffect

The lifecycle methods are used to create side effects in our components. We can replace `componentDidMount` and `componentDidUpdate` with `useEffect`.
