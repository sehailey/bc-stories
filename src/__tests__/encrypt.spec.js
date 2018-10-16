const {
  generatePassword,
  encryptString,
  decryptString,
  encryptStory,
  decryptStory,
  testStory
} = require("../components/encrypt");

const string = "Hello, world!";
const key = "3gjw-030fa=?eWW";

const assert = require("chai").assert;

describe("decryptString", () => {
  it("takes a string and its key and decrypts the string", () => {
    const encrypted = encryptString(string, key);

    const decrypted = decryptString(encrypted, key);
    assert.equal(decrypted, string);
  });
});

const story = testStory;

describe("encryptStory", () => {
  it("takes a story object, encrypts each part, and returns that object", () => {
    const password = generatePassword();
    const encryptedStory = encryptStory(story, password);
    const decryptedStory = decryptStory(encryptedStory, password);
    assert.deepEqual(story, decryptedStory);
  });
});
