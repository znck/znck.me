---
date: 2017-06-28
description: What's new in vue-loader v13.0.0 and vue-router v2.7.0
tags:
  - vue
  - vue-loader
  - vue-router
collection: New in Vue
---
# Vue Loader v13.0.0 and Router v2.7.0 are Released

New versions of vue-loader and vue-router has been released and vue 2.4 would be released soon.

## What's New in Vue Loader v13.0.0

#### New Stuff

The `esModule` option is added. It is `true` by default. We now use ES modules internally to take advantage of webpack 3 scope hoisting. This should result in smaller bundle sizes but it has also introduced *a breaking change*.

We are using PostCSS v6.0.1. This might break old PostCSS plugins that haven't been updated yet.

#### Breaking Changes

As export from a `*.vue` file is now an ES module by default, async components via dynmic import will break. 

``` javascript
const Foo = () => import('./Foo.vue)
```

*Note:* This would continue to work with Vue v2.4 + vue-router v2.7, which will automatically resolve ES modules' default exports when dealing with async components. In earlier versions of Vue and vue-router you will have to do this:

``` javascript
const Foo = () => import('./Foo.vue').then(m => m.default)
```

Alternatively, you can turn off the new behavior by explicitly using `esModule: false` in vue-loader options.

CommonJS-style requires will also need to be updated:

``` javascript
// before
const Foo = require('./Foo.vue')

// after
const Foo = require('./Foo.vue').default
```

## What's New in Vue Router v2.7.0

#### New Stuff

When resolving async components, we will now automatically resolve the default export if the component module is an ES module.

#### Bug Fixes

Component `beforeRouteUpdate` was overriden by mixin `beforeRouteUpdate`, merge strategy for `beforeRouteUpdate` is fixed now.
