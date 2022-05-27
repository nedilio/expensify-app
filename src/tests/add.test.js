const add = (a,b) => a+b;
const generategreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
  const result = add (3,4);
  expect(result).toBe(7);

  if (result != 7) {
    throw new Error(`Adding 4 and 3 the result was ${result}. expect 7`)
  }
});

test ('should greet Nelson', ()=> {
  const result = generategreeting('Nelson');
  expect(result).toBe('Hello Nelson!');
})
test ('should greet Anonymous', ()=> {
  const result = generategreeting();
  expect(result).toBe('Hello Anonymous!');
})