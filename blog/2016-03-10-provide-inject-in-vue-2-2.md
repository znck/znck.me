---
pageTitle: Provide/Inject in Vue 2.2 -
post:
  title: Provide/Inject in Vue 2.2
  date: March 10, 2017
  brief: Exploring provide & inject pair in Vue 2.2
  medium: https://medium.com/@znck/provide-inject-in-vue-2-2-b6473a7f7816
  pinned: true
---

The **Initial D** release of Vue have some amazing new features, including improved server side rendering, v-model customisations, better error handling, provide & inject pair and many other small improvements.

The provide and inject pair offers data flow deep in descendant chain. Ancestor components can serve as dependency injector for all its descendants, regardless how deep the component hierarchy is. The feature is advertised for advance plugin/component usages. 

### Workflow

It works in two parts — One component would provide data and other would use it (inject).
> The provide option should be an object or a function that returns an object. This object contains the properties that are available for injection into its descendants. You can use ES2015 Symbols as keys in this object, but only in environments that natively support Symbol and Reflect.ownKeys.

    const Provider = {
     provide: {
       foo: 'bar'
      }
    }
> The inject options should be either an Array of strings or an object where the keys stand for the local binding name, and the value being the key (string or Symbol) to search for in available injections.

    const Child = {
     inject: ['foo']
    }

<script async src="//jsfiddle.net/znck/4v95vfh3/embed/"></script>

The provide/inject binding are **NOT** reactive. But if observed objects are provided, they do remain reactive.

    const Provider = {
      provide () {
        const foo = {}

        Object.defineProperty(foo, 'bar', {
           enumerable: true,
           get: () => this.bar,
        })

        return { foo }
      },

      data: () => ({ bar: 'baz' })
    }

<script async src="//jsfiddle.net/znck/fdzwtz43/embed/"></script>

Injections are available in props and data. So, you could set prop defaults to injected data or you can use injections as initial data.

### Performance

Both provide and inject are one time actions performed at component initialisation. So, there won’t be any apparent performance degradation.

provide action is constant time.

For each injected property, inject would traverse the parent chain until first provider is reached.

### Conclusion

With provide/inject, you can provide data to distant descendent and that allows to create amazing functionalities. A whole new type of Vue plugins are about to appear.

For example: A parent component can inject validation messages in input components.

<script async src="//jsfiddle.net/znck/go4yepc1/embed/"></script>
