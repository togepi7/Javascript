const accountId = 144553 //values cant be changed later
let accountEmail = "hitesh@google.com" //it has a block scope, values  can be changed 
var accountPassword = "12345" //if other developers declare var in block scope then also it will take this value
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/

/*
In JavaScript, `var`, `let`, and `const` are used for variable declaration, but they have some key differences:

### `var`
- **Scope**: `var` is function-scoped. It means if you declare a variable using `var` inside a function, it is accessible anywhere within that function.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means you can use the variable before it is declared.
- **Re-declaration**: You can re-declare a variable declared with `var` without any error.

```javascript
console.log(a); // undefined
var a = 5;
var a = 10; // No error
console.log(a); // 10
```

### `let`
- **Scope**: `let` is block-scoped. It means a variable declared with `let` is only accessible within the block it is defined in (e.g., within a pair of `{}`).
- **Hoisting**: Variables declared with `let` are also hoisted, but they are not initialized. This means you cannot use the variable before its declaration, leading to a ReferenceError.
- **Re-declaration**: You cannot re-declare a variable declared with `let` within the same scope.

```javascript
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;
// let b = 10; // SyntaxError: Identifier 'b' has already been declared
console.log(b); // 5
```

### `const`
- **Scope**: `const` is block-scoped like `let`.
- **Hoisting**: Variables declared with `const` are also hoisted but not initialized, so you cannot use them before their declaration.
- **Re-declaration**: You cannot re-declare a variable declared with `const` within the same scope.
- **Assignment**: `const` is used to declare constants. The value assigned to a `const` variable cannot be changed after its initial assignment. However, if the variable holds an object or array, the contents of the object or array can be modified.

```javascript
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;
// c = 10; // TypeError: Assignment to constant variable.
// const c = 10; // SyntaxError: Identifier 'c' has already been declared
console.log(c); // 5

const obj = { name: 'Alice' };
obj.name = 'Bob'; // This is allowed
console.log(obj.name); // Bob
```

### Summary
- **Scope**: `var` is function-scoped, while `let` and `const` are block-scoped.
- **Hoisting**: All are hoisted, but `let` and `const` are not initialized.
- **Re-declaration**: `var` allows re-declaration, while `let` and `const` do not.
- **Assignment**: `const` prevents re-assignment of the variable itself, though it allows modification of the contents if it's an object or array.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//other wise we  have to use console.log everytime which is highly inefficient