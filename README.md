## DigitalOcean username generator

This package allows one to generate DigitalOcean-style usernames.

#### JavaScript usage
```js
const Generator = require("do-usernames");
const myGenerator = new Generator({
  nouns: arr => {
    // this function gets passed the built-in array of nouns. You can return a new array within this function. Alternatively, you can replace the function with an array, or not include it at all.
    return [...arr, "Crustacean"];
  },
  size: 32 // this is the maximum size of usernames generated. The default is 30.
});

console.log(myGenerator.getNames(5)); // generates 5 names
console.log(myGenerator.getNames()); // generates 1 name

// .getNames is aliased as .getName
```

---

### CLI usage
- Run `npm i -g do-usernames`.
- Run `do-usernames [amount]`.
