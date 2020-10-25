function upperFirstLetter(s) {
  return s[0].toUpperCase() + s.slice(1);
}

class Generator {
  static SEA_CREATURES = "walrus seal fish shark clam coral whale crab lobster starfish eel dolphin squid jellyfish ray shrimp mantaRay angler snorkler scubaDiver urchin anemone morel axolotl".split(" ");
  static SEA_OBJECTS = "boat ship submarine yacht dinghy raft kelp seaweed anchor".split(" ");
  static ADJECTIVE_DESCRIPTORS = "cute adorable lovable happy sandy bubbly friendly floating drifting".split(" ");
  static SIZE_DESCRIPTORS = "large big small giant massive tiny little".split(" ");
  static CREATURE_DESCRIPTORS = "swimming sleeping eating hiding".split(" ");
  static COLORS = "blue blueGreen darkCyan electricBlue greenBlue lightCyan lightSeaGreen seaGreen turquoise aqua aquamarine teal cyan gray darkBlue cerulean azure lapis navy".split(" ");

  static SEA_LIST = [...Generator.SEA_OBJECTS, ...Generator.SEA_CREATURES];
  static DESCRIPTORS = [...Generator.ADJECTIVE_DESCRIPTORS, ...Generator.SIZE_DESCRIPTORS, ...Generator.CREATURE_DESCRIPTORS];

  #words = {
    colors: Generator.COLORS,
    nouns: Generator.SEA_LIST,
    descriptors: Generator.DESCRIPTORS
  };
  #size = 30;

  constructor(opts = {}) {
    if (typeof opts !== "object") throw new TypeError("Options was given, but is not an object");

    for (const prop in this.#words) {
      if (opts[prop] === undefined || opts[prop] === null) continue;
      if (typeof opts[prop] === "function") {
        const returned = opts[prop](this.#words[prop]);
        if (!Array.isArray(returned)) throw new TypeError(`Return value of option "${prop}" was not an array`);
        this.#words[prop] = returned;
      }
      else if (Array.isArray(opts[prop]))
        this.#words[prop] = opts[prop];
      else throw new TypeError(`Option "${prop}" was given, but is neither an array nor a function`);
    }

    if (opts.size !== undefined && opts.size !== null) {
      if (!Number.isInteger(opts.size) || opts.size < 1) throw new TypeError('Option "size" was given, but is not a positive integer');
      this.#size = opts.size;
    }
  }

  getColors() {
    return this.#words.colors;
  }
  getNouns() {
    return this.#words.nouns;
  }
  getDescriptors() {
    return this.#words.descriptors;
  }
  getSize() {
    return this.#size;
  }

  setNouns(val) {
    if (!Array.isArray(val)) throw new TypeError("Value given to .setNouns is not an array");
    if (!val.length) throw new TypeError("Array given to .setNouns is empty");
    this.#words.nouns = val;
    return this;
  }
  setColors(val) {
    if (!Array.isArray(val)) throw new TypeError("Value given to .setColors is not an array");
    if (!val.length) throw new TypeError("Array given to .setColors is empty");
    this.#words.colors = val;
    return this;
  }
  setDescriptors(val) {
    if (!Array.isArray(val)) throw new TypeError("Value given to .setDescriptors is not an array");
    if (!val.length) throw new TypeError("Array given to .setDescriptors is empty");
    this.#words.descriptors = val;
    return this;
  }
  setSize(val = 30) {
    if (!Number.isInteger(val) || val < 1) throw new TypeError("Value given to .setSize is not a positive integer");
    this.#size = val;
    return this;
  }

  getName(amount = 1) {
    if (!Number.isInteger(amount) || amount < 1)
      throw new TypeError("A amount was given to .getName, but is not a positive integer");

    const names = [];
    while (amount--) {
      const noun = upperFirstLetter(this.#words.nouns[Math.floor(Math.random() * this.#words.nouns.length)]);
      const descriptor = upperFirstLetter(this.#words.descriptors[Math.floor(Math.random() * this.#words.descriptors.length)]);
      const color = upperFirstLetter(this.#words.colors[Math.floor(Math.random() * this.#words.colors.length)]);

      if ((descriptor + color + noun).length <= this.#size) names.push(descriptor + color + noun);
      else if ((descriptor + noun).length <= this.#size) names.push(descriptor + noun);
      else if ((color + noun).length <= this.#size) names.push(color + noun);
      else names.push(noun.slice(0, this.#size));
    }

    if (names.length === 1) return names[0];
    else return names;
  }

  getNames(...args) {
    return this.getName(...args);
  }
}

module.exports = Generator;
