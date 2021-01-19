// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           let click = new Event('click');
           expect.objectContaining(click);
})
});
