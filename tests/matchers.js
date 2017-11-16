expect.extend({
  toBeInstanceOf(subject, expectedType) {
    const pass = {
      message: () => (
        `expected ${subject} not to be type of ${expectedType}`
      ),
      pass: true,
    };

    const fail = {
      message: () => (
        `expected ${subject} to be type of ${expectedType}`
      ),
      pass: false,
    };

    if (subject instanceof expectedType) {
      return pass;
    }
    return fail;
  },
});
