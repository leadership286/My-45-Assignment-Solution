
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Equality  Test with string 
console.log("Equality test with string: ", "Apple" === "Apple");
console.log("Equality test with string: ", ("Apple" as string) =='Orange');
//Inequality Test with string 
console.log("Inequality test with string: ", ("Apple" as string) != 'Orange');
console.log("Inequality test with string: ", "Apple" != 'Apple');
console.log;
//Tests using the lower case function
console.log('Lower Case Function test : ', "HELLO".toLowerCase() === "hello");
console.log('Lower Case Function test : ', "Hello".toLowerCase() === "HELLO");
//Numerical tests with Equality
console.log('Equality test with number: ', 26 === 26);
console.log('Equality test with number:',(26 as number) ==20);
//Numerical Test with Inequality
console.log('Inequality test with number: ',(20 as number) ==20);
console.log('Inequality test with number: ',(20 as number) ==23);
//Greater than or Equal to test
console.log('Greater than or equal to: ', 10>=5);
console.log('Greater than or Equal to: ', 10>=15);
//Less than or Equal to Test
console.log('Less than or Equal to: ',5<=10);
console.log('Less than or Equal to: ',10<=5);
//Test using "and" and "or" operators
//Test using "and" operators
console.log("And operators test: ",5===5 && 10>5);
console.log("And operators test: ",5===5 && 10>15);
//Test using "or" operators
console.log('Or operators test: ',5===5 || false);
console.log('Or operators test: ',(5 as number) ===10|| false );
//Test whether an item is in Array
const fruits :string[] = ['Apple','Banana','Strawberry','Orange'];
console.log("Test Strawberry in Array: ",fruits.includes("Strawberry"));
console.log("Test Strawberry in Array: ",fruits.includes("Peach"));
//Test whether an item is not in Array
console.log("Test Peach  is not in Array: ",!fruits.includes("Peach"));
console.log("Test Banana is not in Array: ",!fruits.includes("Orange"));








