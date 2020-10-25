## DigitalOcean username generator

This package allows one to generate DigitalOcean-style usernames. The logic for the generator is taken from [IPv4's generator](https://github.com/MattIPv4/do_username).

#### JavaScript usage
Example:
```js
const Generator = require("do-usernames");
const myGenerator = new Generator({
  nouns: arr => [...arr, "Crustacean"],
  size: 32
});

console.log(myGenerator.getNames(5));
```

---

#### Documentation
A class, `Generator`, is exported.

`#` means static.

`.` means an instance property.

###### `Generator#SEA_CREATURES`
A list of sea creatures, taken from [IPv4's generator](https://github.com/MattIPv4/do_username).

##### `Generator#SEA_OBJECTS`
An array of sea objects, taken from [IPv4's generator](https://github.com/MattIPv4/do_username)

##### `Generator#ADJECTIVE_DESCRIPTORS`
An array of adjectives, taken from [IPv4's generator](https://github.com/MattIPv4/do_username).

##### `Generator#SIZE_DESCRIPTORS`
An array of sizes, taken from [IPv4's generator](https://github.com/MattIPv4/do_username).

##### `Generator#CREATURE_DESCRIPTORS`
An array of action descriptors, taken from [IPv4's generator](https://github.com/MattIPv4/do_username).

##### `Generator#COLORS`
An array of ocean-related colors, taken from [IPv4's generator](https://github.com/MattIPv4/do_username).

##### `Generator#SEA_LIST`
An array of sea nouns. This is created by combining `Generator#SEA_CREATURES` and `Generator#SEA_OBJECTS`.

##### `Generator#DESCRIPTORS`
An array of sea adjectives. This is created by combining `Generator#ADJECTIVE_DESCRIPTORS`, `Generator#SIZE_DESCRIPTORS`, and `Generator#CREATURE_DESCRIPTORS`.

##### `new Generator({colors?, nouns?, descriptors?, size?}?)`
Creates a `Generator`. `colors`, `nouns`, and `descriptors` can each be either a function, in which case the first argument to that function is the built-in array, and the return value is used as the word pool, or an array, in which case the array is used as the word pool. `size` must be a number (if given),

Example:
```js
new Generator({
  colors: arr => [...arr, "CoralPink"]
});
new Generator({
  colors: ["SeaGreen", "CoralPink", "Cyan"]
});
new Generator();
new Generator({
  size: 16
});
```

##### `Generator.getColors()`, `Generator.getNouns()`, `Generator.getDescriptors()`
These functions return `colors`, `nouns`, and `descriptors` respectively. They do not clone the array, so be careful while modifying it.

##### `Generator.getSize()`
Returns the current maximum username size of the generator.

##### `Generator.setNouns(arr)`, `Generator.setColors(arr)`, `Generator.setDescriptors(arr)`
Allows for post-initalization modification of the `nouns`, `colors`, and `descriptors` array. These functions will throw if an empty array (or non-array) is given, so make sure the input is valid.

##### `Generator.setSize(num = 30)`
Sets the maximum username size of the generator.

##### `Generator.getName(amount = 1)`, `Generator.getNames(amount = 1)`
These functions are aliases for each other. They return either one value or an array of values, depending on the amount. Each value is a username generated from the word pools in the generator.

---

### CLI usage
- Run `npm i -g do-usernames`.
- Run `do-usernames [amount]`.

---

### Testing/Contributing
To contribute, clone the repository, code away, and then make a pull request when you're ready.

Once you've written code, but you want to test it, run `npm test`. This will run an automated test collection to see if your code breaks anything important. If you are adding new features, try to add tests for those features to `test/test.js`.
