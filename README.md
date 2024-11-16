# React 16 updates

## Error Handling in React 16

[Blog: Error Handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

**Error boundaries** are React components that catch JavaScript errors anywhere in their **child component tree**, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

A class component becomes an error boundary if it defines a new lifecycle method called `componentDidCatch(error, info)`.

To see the filenames and line numbers in the component stack trace add `@babel/plugin-transform-react-jsx-source`

- `npm install --save-dev @babel/plugin-transform-react-jsx-source`
- In `.babelrc` add
    ```babelrc
    {
    "plugins": ["@babel/plugin-transform-react-jsx-source"]
    }
    ```
This plugin should be disabled in production.

### Where to Place Error Boundaries
- You may wrap top-level route components.
- You may also wrap individual widgets in an error boundary to protect them from crashing the rest of the application.

### Why was this introduced?

As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.

## Lazy Loading

[Detail: React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)

Introduced in React 16.6.

`React.lazy` currently only supports default exports. If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default.

TODO:

- [ ] Adding test cases.
- [ ] Styling the application.
- [ ] [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)