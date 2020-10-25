const Generator = require("..");
const {assert} = require("chai");

describe("Basic username generation", () => {
  it("Can generate a valid username", () => {
    const generator = new Generator();
    const name = generator.getName();
    assert.equal(name[0].toUpperCase(), name[0]);
  });

  it("Can generate multiple valid usernames", () => {
    const generator = new Generator();
    const names = generator.getName(5);
    assert.equal(names.length, 5);
    for (const name of names) {
      assert.equal(name[0].toUpperCase(), name[0]);
    }
  });
});

describe("Invalid input", () => {
  it("Throws on non-object options", () => {
    assert.throws(() => {
      new Generator(5);
    });
  });

  it("Throws on non-function in options", () => {
    assert.throws(() => {
      new Generator({
        colors: "abc"
      });
    });
  });

  it("Throws on non-array return value in options", () => {
    assert.throws(() => {
      new Generator({
        colors: () => 5
      });
    });
  });

  it("Throws on non-number .setSize", () => {
    assert.throws(() => {
      const generator = new Generator();
      generator.setSize("hi!");
    });
  });

  it("Throws on non-integer .setSize", () => {
    assert.throws(() => {
      const generator = new Generator();
      generator.setSize(5.6);
    });
  });

  it("Throws on negative .setSize", () => {
    assert.throws(() => {
      const generator = new Generator();
      generator.setSize(-1);
    });
  });

  it("Throws on invalid .setNouns", () => {
    assert.throws(() => {
      const generator = new Generator();
      generator.setNouns(5);
    });
  });
});

describe("Word modification", () => {
  it("Can modify words after being initialized", () => {
    const generator = new Generator();
    const arr = ["a", "b", "c"];
    generator.setNouns(arr);
    assert.equal(arr, generator.getNouns());
  });

  it("Can modify size after being initialized", () => {
    const generator = new Generator();
    const size = 5;
    generator.setSize(size);
    assert.equal(generator.getSize(), size);
  });

  it("Can use an array option to set words", () => {
    const arr = ["a", "b", "c"];
    const generator = new Generator({
      nouns: arr
    });
    assert.equal(generator.getNouns(), arr);
  });

  it("Can use a function option to set words", () => {
    const arr = ["a", "b", "c"];
    const generator = new Generator({
      nouns: () => arr
    });
    assert.equal(generator.getNouns(), arr);
  });

  it("Provides the current array to option functions", () => {
    let provided;
    new Generator({
      nouns: arr => provided = arr
    });
    assert.equal(provided, Generator.SEA_LIST);
  });

  it("Can use size option", () => {
    const size = 5;
    const generator = new Generator({
      size
    });
    assert.equal(generator.getSize(), size);
  });
});
