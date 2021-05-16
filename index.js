const printHeader = () => {
  console.log('easy-test v0.0.0');
  console.log('----------------\n');
}

const printFooter = () => {
  console.log('\nTests completed!');
}

printHeader();

const suite = (suiteDesc, tests) => {
  console.log(suiteDesc);
  tests();
};

const test = (testDesc, testFunction) => {
  console.log(`\t${testDesc}`);
  testFunction();
};

class assert {
  constructor() {
    this.result = null;
  }

  static equals() {
    this.result = arguments[0];
    return this;
  }

  static toBe(expectedValue) {
    const actualResult = this.result === expectedValue;
    const emoji = actualResult ? '✅' : '❌';
    console.log(`\t${emoji}`);
    return this;
  }
}

const assertNew = function() {
  this.result = null;

  return {
    equals: function() {
      this.result = arguments[0];
      return this;
    },

    toBe: function (expectedValue) {
      const actualResult = this.result === expectedValue;
      return this;
    }
  }

  return this.result;
}

suite('example test suite', () => {
  test('should equal true', () => {
    assert.equals(1 == 1).toBe(true);
  });

  test('should equal false', () => {
    assert.equals(1 == 2).toBe(true);
  });
});

printFooter();
