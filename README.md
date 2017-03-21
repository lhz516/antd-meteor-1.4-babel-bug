# Ant Design Babel bug in Meteor 1.4.x

This is a reproduction of Meteor issue https://github.com/meteor/meteor/issues/8399

[`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import) is not working in this project. There is an unexpected warning message in browser console.

```
You are using a whole package of antd,
please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
```
