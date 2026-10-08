# TypeScript — Very Detailed Notes

TypeScript is essentially **JavaScript + a powerful static type system**.

If you already know JavaScript, think of TypeScript as a way to tell your code:

> “This variable should contain a number, this function should return a string, this object must have these properties, and this class should follow this structure.”

The biggest benefit is that many mistakes are caught **before your code runs**.

---

## 1. What is TypeScript?

TypeScript is a programming language developed by Microsoft that is built on top of JavaScript.

```ts
let username: string = "Sadik";
let age: number = 21;
```

JavaScript:

```js
let username = "Sadik";
let age = 21;
```

TypeScript adds:

```ts
: string
: number
```

These are called **type annotations**.

### Important

TypeScript code does not normally run directly in the browser.

It is converted/transpiled into JavaScript.

```text
TypeScript
    ↓
TypeScript Compiler
    ↓
JavaScript
    ↓
Browser / Node.js
```

For example:

```ts
let age: number = 21;
```

can become:

```js
let age = 21;
```

The type information is mainly used during development/type checking.

---

## 2. Why TypeScript?

Imagine JavaScript:

```js
function add(a, b) {
    return a + b;
}
```

You might expect:

```js
add(10, 20);
```

Result:

```text
30
```

But JavaScript also allows:

```js
add("10", "20");
```

Result:

```text
1020
```

TypeScript lets you specify:

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

Now:

```ts
add(10, 20);      // ✅
add("10", "20");  // ❌ TypeScript error
```

This is one of the major reasons TypeScript is useful.

---

## 3. TypeScript vs JavaScript

| JavaScript | TypeScript |
|---|---|
| Dynamically typed | Statically checked types |
| Errors often appear at runtime | Many errors caught during development |
| No compilation required for browser | Usually compiled/transpiled |
| Easier to start | More structured |
| Less type safety | Stronger type safety |
| `.js` | `.ts` |
| Great for small scripts | Excellent for large applications |

TypeScript does **not replace JavaScript**.

TypeScript is a superset of JavaScript.

That means most valid JavaScript is also valid TypeScript.

---

## 4. Installing TypeScript

Install TypeScript using npm:

```bash
npm install -g typescript
```

Check version:

```bash
tsc --version
```

Create a file:

```text
app.ts
```

Write:

```ts
let message: string = "Hello TypeScript";

console.log(message);
```

Compile:

```bash
tsc app.ts
```

This generates:

```text
app.js
```

Then run:

```bash
node app.js
```

---

## 5. Type Inference

TypeScript can automatically understand the type of a variable.

```ts
let age = 21;
```

TypeScript understands:

```text
age → number
```

So:

```ts
age = 25;       // ✅
age = "hello";  // ❌
```

### Explicit Type

```ts
let age: number = 21;
```

### Type Inference

```ts
let age = 21;
```

Both are valid.

### Recommended

Use inference when the type is obvious:

```ts
let name = "Sadik";
let age = 21;
let isLoggedIn = true;
```

Use explicit types when they improve clarity or are required:

```ts
let userId: number;
```

---

## 6. Basic Types

Important TypeScript types include:

```text
string
number
boolean
any
unknown
void
null
undefined
never
object
array
tuple
enum
union
intersection
```

---

## 7. String

Use `string` for text.

```ts
let username: string = "Sadik";
let city: string = "Delhi";
```

Invalid:

```ts
let city: string = 123;
```

---

## 8. Number

TypeScript uses `number` for integers and floating-point numbers.

```ts
let age: number = 21;
let price: number = 99.99;
let score: number = 100;
```

All are:

```text
number
```

TypeScript does not have separate `int`, `float`, and `double` types.

---

## 9. Boolean

Boolean represents:

```text
true
false
```

Example:

```ts
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
```

---

## 10. Arrays

### Method 1

```ts
let numbers: number[] = [10, 20, 30];
```

### Method 2

```ts
let numbers: Array<number> = [10, 20, 30];
```

String array:

```ts
let names: string[] = ["Rahul", "Aman", "Sadik"];
```

Boolean array:

```ts
let values: boolean[] = [true, false, true];
```

### Mixed Array

```ts
let data: (string | number)[] = [
    "Sadik",
    21,
    "Delhi",
    500
];
```

---

## 11. Object

Suppose:

```ts
let user = {
    name: "Sadik",
    age: 21
};
```

TypeScript infers:

```text
name → string
age → number
```

You can also explicitly define it:

```ts
let user: {
    name: string;
    age: number;
} = {
    name: "Sadik",
    age: 21
};
```

Now:

```ts
user.name = "Rahul"; // ✅
user.age = 22;       // ✅
```

But:

```ts
user.age = "22";     // ❌
```

---

## 12. Optional Object Properties

Sometimes a property isn't required.

Use `?`:

```ts
let user: {
    name: string;
    age?: number;
} = {
    name: "Sadik"
};
```

Here:

```text
name → required
age → optional
```

Both are valid:

```ts
const user1 = {
    name: "Sadik"
};

const user2 = {
    name: "Sadik",
    age: 21
};
```

---

## 13. Type Aliases

If an object type becomes large, writing it repeatedly becomes annoying.

Instead, create a type:

```ts
type User = {
    name: string;
    age: number;
    email: string;
};
```

Now:

```ts
let user1: User = {
    name: "Sadik",
    age: 21,
    email: "sadik@example.com"
};
```

Another:

```ts
let user2: User = {
    name: "Rahul",
    age: 22,
    email: "rahul@example.com"
};
```

Type aliases are extremely useful in real-world TypeScript.

---

## 14. Type Alias with Functions

You can define function types.

```ts
type AddFunction = (a: number, b: number) => number;
```

Then:

```ts
const add: AddFunction = (a, b) => {
    return a + b;
};
```

---

## 15. Interface

An interface describes the structure of an object.

```ts
interface User {
    name: string;
    age: number;
    email: string;
}
```

Then:

```ts
const user: User = {
    name: "Sadik",
    age: 21,
    email: "sadik@example.com"
};
```

---

## 16. Type vs Interface

Both can describe objects.

### Type

```ts
type User = {
    name: string;
    age: number;
};
```

### Interface

```ts
interface User {
    name: string;
    age: number;
}
```

For basic object structures, both work.

Interfaces are especially useful with:

- classes
- object-oriented programming
- extension
- library/API definitions

Example:

```ts
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}
```

Now:

```ts
const dog: Dog = {
    name: "Tommy",
    breed: "Labrador"
};
```

---

## 17. Function Types

TypeScript allows you to specify:

1. Parameter types
2. Return type

Example:

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

Structure:

```text
function add(
    parameter: type,
    parameter: type
): returnType
```

Another example:

```ts
function greet(name: string): string {
    return `Hello ${name}`;
}
```

---

## 18. Function Returning Nothing

Use `void`:

```ts
function printMessage(message: string): void {
    console.log(message);
}
```

The function doesn't return a value.

---

## 19. Optional Parameters

You can make function parameters optional.

```ts
function greet(name?: string) {
    console.log(name);
}
```

Now both work:

```ts
greet();
greet("Sadik");
```

---

## 20. Default Parameters

```ts
function greet(name: string = "Guest"): string {
    return `Hello ${name}`;
}
```

Calling:

```ts
greet();
```

Output:

```text
Hello Guest
```

---

## 21. Union Types

Union means:

> This value can have one of several types.

Use `|`:

```ts
let id: string | number;
```

Now:

```ts
id = 101;        // ✅
id = "ABC101";   // ✅
```

But:

```ts
id = true;       // ❌
```

### Union in Functions

```ts
function printId(id: string | number) {
    console.log(id);
}
```

Both work:

```ts
printId(101);
printId("ABC101");
```

Remember:

```text
| = OR
```

---

## 22. Type Narrowing

Suppose:

```ts
function printId(id: string | number) {

    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}
```

TypeScript understands:

```text
if string → string methods
else → number methods
```

This is called **type narrowing**.

---

## 23. Literal Types

You can restrict a variable to specific values.

```ts
let direction: "left" | "right";
```

Allowed:

```ts
direction = "left";
direction = "right";
```

Not allowed:

```ts
direction = "up";
```

Useful for statuses:

```ts
type Status = "loading" | "success" | "error";

let status: Status = "loading";
```

---

## 24. Enum

Enums allow you to define named constants.

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

Usage:

```ts
let direction: Direction = Direction.Up;
```

By default:

```text
Up    = 0
Down  = 1
Left  = 2
Right = 3
```

### String Enum

```ts
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
```

Usage:

```ts
let role: Role = Role.Admin;
```

---

## 25. Any

`any` essentially tells TypeScript:

> Don't perform normal type checking on this value.

Example:

```ts
let value: any = 10;

value = "Hello";
value = true;
value = {
    name: "Sadik"
};
```

Everything is allowed.

### Problem

```ts
let value: any = "hello";

value.toUpperCase();
value.doSomethingRandom();
```

TypeScript won't protect you properly.

**Avoid `any` when possible.**

---

## 26. Unknown

`unknown` is a safer alternative to `any`.

```ts
let value: unknown = "Hello";
```

You cannot directly do:

```ts
value.toUpperCase();
```

You need to check first:

```ts
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

### Any vs Unknown

`any`:

```ts
let value: any;

value.foo();
value.bar();
value();
```

TypeScript allows it.

`unknown`:

```ts
let value: unknown;

value.foo(); // ❌
```

You need to check the type first.

**Prefer `unknown` over `any` when the type isn't known.**

---

## 27. Null and Undefined

```ts
let value: null = null;
let value2: undefined = undefined;
```

More commonly:

```ts
let username: string | null = null;
```

Now:

```ts
username = "Sadik";
username = null;
```

Both are allowed.

---

## 28. Never

`never` represents something that never successfully completes.

Function that always throws:

```ts
function throwError(message: string): never {
    throw new Error(message);
}
```

Infinite loop:

```ts
function infiniteLoop(): never {
    while (true) {
    }
}
```

---

## 29. Tuples

A tuple is an array with a fixed structure and known positions.

```ts
let user: [string, number] = ["Sadik", 21];
```

Meaning:

```text
index 0 → string
index 1 → number
```

Correct:

```ts
let user: [string, number] = ["Sadik", 21];
```

Incorrect:

```ts
let user: [string, number] = [21, "Sadik"];
```

Another example:

```ts
let employee: [number, string, boolean] = [
    101,
    "Sadik",
    true
];
```

---

## 30. Readonly

You can prevent modification.

```ts
const numbers: readonly number[] = [1, 2, 3];
```

This is not allowed:

```ts
numbers.push(4); // ❌
```

Tuple:

```ts
let user: readonly [string, number] = ["Sadik", 21];
```

---

## 31. Type Assertions

Sometimes you know more about a value than TypeScript does.

You can tell TypeScript:

> Trust me, I know this value is this type.

Example:

```ts
let value: unknown = "Hello";

let text = value as string;
```

Now:

```ts
text.toUpperCase();
```

Alternative:

```ts
let text = <string>value;
```

Prefer `as string`, especially in `.tsx` files.

---

## 32. Interfaces in Detail

Example:

```ts
interface User {
    id: number;
    name: string;
    email: string;
}
```

Then:

```ts
const user: User = {
    id: 1,
    name: "Sadik",
    email: "sadik@example.com"
};
```

### Optional Interface Properties

```ts
interface User {
    id: number;
    name: string;
    age?: number;
}
```

### Readonly Interface Property

```ts
interface User {
    readonly id: number;
    name: string;
}
```

Then:

```ts
const user: User = {
    id: 101,
    name: "Sadik"
};

user.name = "Rahul"; // ✅
user.id = 202;       // ❌
```

---

## 33. Extending Interfaces

```ts
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}
```

Now:

```ts
const developer: Developer = {
    name: "Sadik",
    age: 21,
    language: "TypeScript"
};
```

### Multiple Interface Inheritance

```ts
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

interface Developer extends Person, Employee {
    language: string;
}
```

---

## 34. Type Intersection

Intersection uses `&`.

```ts
type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type Developer = Person & Employee;
```

Now:

```ts
const developer: Developer = {
    name: "Sadik",
    employeeId: 101
};
```

Remember:

```text
| → OR
& → AND
```

---

## 35. Classes in TypeScript

```ts
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

Create object:

```ts
const user = new User("Sadik", 21);
```

---

## 36. Access Modifiers

TypeScript provides:

```text
public
private
protected
```

### Public

```ts
class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

`public` is the default.

### Private

```ts
class User {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }
}
```

You cannot access it directly:

```ts
const user = new User("12345");

user.password; // ❌
```

### Protected

`protected` allows access inside the class and subclasses.

```ts
class User {
    protected username: string;

    constructor(username: string) {
        this.username = username;
    }
}

class Admin extends User {
    showUsername() {
        console.log(this.username);
    }
}
```

---

## 37. Parameter Properties

Instead of:

```ts
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

You can write:

```ts
class User {
    constructor(
        public name: string,
        public age: number
    ) {}
}
```

---

## 38. Getters and Setters

```ts
class User {
    private _name: string = "";

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
```

Usage:

```ts
const user = new User();

user.name = "Sadik";

console.log(user.name);
```

---

## 39. Static Members

Static properties belong to the class rather than an object.

```ts
class User {
    static count = 0;

    constructor() {
        User.count++;
    }
}
```

Then:

```ts
new User();
new User();
new User();

console.log(User.count);
```

Output:

```text
3
```

---

## 40. Abstract Classes

Abstract classes cannot be directly instantiated.

```ts
abstract class Animal {
    abstract makeSound(): void;
}
```

Child class:

```ts
class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}
```

Then:

```ts
const dog = new Dog();
dog.makeSound();
```

---

## 41. Interfaces with Classes

A class can implement an interface.

```ts
interface User {
    name: string;
    login(): void;
}
```

Class:

```ts
class Admin implements User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    login(): void {
        console.log("Admin logged in");
    }
}
```

---

## 42. Generics

Generics are one of the most important TypeScript concepts.

They allow you to create reusable code while preserving type information.

Instead of:

```ts
function identity(value: any) {
    return value;
}
```

Use:

```ts
function identity<T>(value: T): T {
    return value;
}
```

Now:

```ts
const num = identity<number>(100);
```

Type:

```text
number
```

And:

```ts
const name = identity<string>("Sadik");
```

Type:

```text
string
```

---

## 43. Why Generics?

Instead of:

```ts
function getFirst(arr: any[]) {
    return arr[0];
}
```

Use:

```ts
function getFirst<T>(arr: T[]): T {
    return arr[0];
}
```

Now:

```ts
const number = getFirst([10, 20, 30]);
```

TypeScript knows:

```text
number → number
```

And:

```ts
const name = getFirst(["Sadik", "Rahul"]);
```

TypeScript knows:

```text
name → string
```

---

## 44. Generic Interface

```ts
interface Box<T> {
    value: T;
}
```

Use:

```ts
const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "Hello"
};
```

---

## 45. Generic Constraints

Sometimes you want to restrict what `T` can be.

```ts
function printLength<T extends { length: number }>(value: T) {
    console.log(value.length);
}
```

Strings work:

```ts
printLength("Hello");
```

Arrays work:

```ts
printLength([1, 2, 3]);
```

Numbers don't:

```ts
printLength(100); // ❌
```

---

## 46. `keyof`

`keyof` gives you the keys of a type.

```ts
interface User {
    name: string;
    age: number;
    email: string;
}

type UserKeys = keyof User;
```

Equivalent to:

```text
"name" | "age" | "email"
```

### `keyof` with Generics

```ts
function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
) {
    return obj[key];
}
```

Example:

```ts
const user = {
    name: "Sadik",
    age: 21
};

getProperty(user, "name");
```

But:

```ts
getProperty(user, "xyz"); // ❌
```

---

## 47. Type Guards

A type guard helps TypeScript understand the type.

Common type guards:

```text
typeof
instanceof
in
```

### typeof

```ts
function print(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

### instanceof

```ts
class Dog {}

class Cat {}

function checkAnimal(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        console.log("Dog");
    } else {
        console.log("Cat");
    }
}
```

### in

```ts
type Dog = {
    bark: () => void;
};

type Cat = {
    meow: () => void;
};

function speak(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}
```

---

## 48. Function Overloading

TypeScript allows multiple function signatures.

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
    return a + b;
}
```

Now:

```ts
add(10, 20);
add("Hello ", "World");
```

---

## 49. `typeof` as a Type

`typeof` can create a type from an existing variable.

```ts
const user = {
    name: "Sadik",
    age: 21
};

type User = typeof user;
```

Now `User` has the same structure.

---

## 50. `ReturnType`

Example:

```ts
function createUser() {
    return {
        name: "Sadik",
        age: 21
    };
}
```

Extract the return type:

```ts
type User = ReturnType<typeof createUser>;
```

---

## 51. Important Utility Types

Important built-in utility types:

```text
Partial
Required
Readonly
Pick
Omit
Record
ReturnType
Parameters
```

### Partial

```ts
interface User {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
    name: "Sadik"
};
```

All properties become optional.

### Required

```ts
type RequiredUser = Required<User>;
```

All properties become required.

### Readonly

```ts
type ReadonlyUser = Readonly<User>;
```

Properties cannot be changed.

### Pick

```ts
type UserPreview = Pick<User, "name" | "email">;
```

### Omit

```ts
type UserWithoutEmail = Omit<User, "email">;
```

### Record

```ts
type Scores = Record<string, number>;

const scores: Scores = {
    Sadik: 95,
    Rahul: 87
};
```

---

## 52. Modules

TypeScript supports JavaScript modules.

Export:

```ts
export const username = "Sadik";
```

Import:

```ts
import { username } from "./user";
```

### Export Function

```ts
export function add(a: number, b: number): number {
    return a + b;
}
```

Import:

```ts
import { add } from "./math";
```

### Default Export

```ts
export default function greet() {
    console.log("Hello");
}
```

Import:

```ts
import greet from "./greet";
```

### Type Imports

```ts
import type { User } from "./types";
```

---

## 53. TypeScript with APIs

Suppose API returns:

```json
{
    "id": 1,
    "name": "Sadik",
    "email": "sadik@example.com"
}
```

Create interface:

```ts
interface User {
    id: number;
    name: string;
    email: string;
}
```

Then:

```ts
const response = await fetch("/api/user");

const user: User = await response.json();
```

Now your editor knows:

```ts
user.id
user.name
user.email
```

and their types.

---

## 54. TypeScript with React

TypeScript is heavily used with React.

```tsx
interface Props {
    name: string;
    age: number;
}

function UserCard({ name, age }: Props) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
}
```

Usage:

```tsx
<UserCard name="Sadik" age={21} />
```

This is invalid:

```tsx
<UserCard name={100} age="21" />
```

---

## 55. React `useState` with TypeScript

Simple:

```tsx
const [count, setCount] = useState(0);
```

TypeScript infers:

```text
count → number
```

For complex data:

```tsx
interface User {
    name: string;
    age: number;
}

const [user, setUser] = useState<User | null>(null);
```

Now:

```tsx
setUser({
    name: "Sadik",
    age: 21
});
```

---

## 56. TypeScript with React Events

Input:

```tsx
const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
) => {
    console.log(event.target.value);
};
```

Button:

```tsx
const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
) => {
    console.log("Clicked");
};
```

---

## 57. TypeScript Configuration

A TypeScript project usually has:

```text
tsconfig.json
```

Create it:

```bash
tsc --init
```

Example:

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true
    }
}
```

### Important Options

`target`:

```json
"target": "ES2020"
```

Specifies the JavaScript version to generate.

`module`:

```json
"module": "commonjs"
```

or:

```json
"module": "ESNext"
```

`strict`:

```json
"strict": true
```

Enables stronger type checking.

---

## 58. `noImplicitAny`

```json
"noImplicitAny": true
```

Prevents TypeScript from silently treating certain values as `any`.

Instead of:

```ts
function add(a, b) {
    return a + b;
}
```

Use:

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

---

## 59. `strictNullChecks`

This makes TypeScript properly distinguish:

```text
null
undefined
```

With strict null checking:

```ts
let name: string = null;
```

is an error.

Instead:

```ts
let name: string | null = null;
```

This forces you to handle the possibility of `null`.

---

## 60. `as const`

Consider:

```ts
const user = {
    name: "Sadik",
    role: "admin"
};
```

Using:

```ts
const user = {
    name: "Sadik",
    role: "admin"
} as const;
```

makes the properties readonly literal values:

```text
name → "Sadik"
role → "admin"
```

---

## 61. Discriminated Unions

This is an advanced but very useful concept.

```ts
type Success = {
    status: "success";
    data: string;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type Response = Success | ErrorResponse;
```

Now:

```ts
function handleResponse(response: Response) {
    if (response.status === "success") {
        console.log(response.data);
    } else {
        console.log(response.message);
    }
}
```

The `status` property tells TypeScript which object type it is.

This pattern is extremely useful for API responses and state management.

---

## 62. Optional Chaining

```ts
const username = user?.profile?.name;
```

Instead of:

```ts
if (user && user.profile) {
    // ...
}
```

---

## 63. Nullish Coalescing

```ts
const name = username ?? "Guest";
```

If `username` is `null` or `undefined`, `"Guest"` is used.

Example:

```ts
const username: string | null = null;

const displayName = username ?? "Guest";
```

Result:

```text
Guest
```

---

## 64. TypeScript and DOM

TypeScript can type DOM elements.

```ts
const input = document.querySelector(
    "#username"
) as HTMLInputElement;

console.log(input.value);
```

Button:

```ts
const button = document.querySelector(
    "#submit"
) as HTMLButtonElement;
```

---

## 65. Generics with API Responses

A common pattern:

```ts
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

User:

```ts
interface User {
    id: number;
    name: string;
}
```

Now:

```ts
const response: ApiResponse<User> = {
    success: true,
    data: {
        id: 1,
        name: "Sadik"
    }
};
```

---

## 66. Generic API Response

```ts
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}
```

For users:

```ts
type UserResponse = ApiResponse<User>;
```

For products:

```ts
interface Product {
    id: number;
    title: string;
    price: number;
}

type ProductResponse = ApiResponse<Product>;
```

Same generic structure, different data.

---

## 67. Common TypeScript Mistakes

### Mistake 1 — Using `any` everywhere

Bad:

```ts
let user: any;
```

Better:

```ts
interface User {
    name: string;
    age: number;
}

let user: User;
```

### Mistake 2 — Over-annotating everything

You don't need:

```ts
let name: string = "Sadik";
let age: number = 21;
let isActive: boolean = true;
```

Often this is enough:

```ts
let name = "Sadik";
let age = 21;
let isActive = true;
```

TypeScript infers the types.

### Mistake 3 — Ignoring strict mode

For serious projects:

```json
"strict": true
```

is generally a good choice.

### Mistake 4 — Misusing type assertions

Avoid:

```ts
const user = something as User;
```

if you haven't actually established that `something` is a `User`.

Type assertions don't magically convert or validate data.

---

# 68. TypeScript Mental Model

A useful way to think about TypeScript:

```text
JavaScript
    +
Types
    +
Interfaces
    +
Generics
    +
Type Checking
    +
Developer Tooling
    =
TypeScript
```

TypeScript mainly helps you catch mistakes while developing.

---

# 69. Important Syntax Cheat Sheet

### Variables

```ts
let name: string = "Sadik";
let age: number = 21;
let active: boolean = true;
```

### Array

```ts
let numbers: number[] = [1, 2, 3];
```

### Object

```ts
let user: {
    name: string;
    age: number;
};
```

### Type

```ts
type User = {
    name: string;
    age: number;
};
```

### Interface

```ts
interface User {
    name: string;
    age: number;
}
```

### Function

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

### Optional parameter

```ts
function greet(name?: string) {}
```

### Union

```ts
let id: string | number;
```

### Tuple

```ts
let user: [string, number] = ["Sadik", 21];
```

### Enum

```ts
enum Role {
    Admin,
    User
}
```

### Generic

```ts
function identity<T>(value: T): T {
    return value;
}
```

### Readonly

```ts
const numbers: readonly number[] = [1, 2, 3];
```

### Type assertion

```ts
const value = something as string;
```

### Intersection

```ts
type Developer = Person & Employee;
```

---

# 70. TypeScript Learning Order

Recommended learning order:

```text
1. JavaScript fundamentals
        ↓
2. TypeScript basics
        ↓
3. Type annotations
        ↓
4. Type inference
        ↓
5. Arrays & Objects
        ↓
6. Functions
        ↓
7. Union & Intersection
        ↓
8. Type aliases
        ↓
9. Interfaces
        ↓
10. Enums
        ↓
11. Classes
        ↓
12. Generics
        ↓
13. Type narrowing
        ↓
14. Type guards
        ↓
15. Utility types
        ↓
16. keyof / typeof
        ↓
17. Advanced types
        ↓
18. TypeScript + React
        ↓
19. TypeScript + Node/Express
        ↓
20. Real-world projects
```

---

# 71. Most Important Concepts to Master

If your goal is **React + Node.js + full-stack development**, focus heavily on:

### Beginner

```text
string
number
boolean
array
object
function types
type inference
type annotations
```

### Intermediate

```text
type
interface
union
intersection
optional properties
readonly
type narrowing
type guards
generics
```

### Advanced

```text
keyof
typeof
utility types
mapped types
conditional types
discriminated unions
generic constraints
declaration files
advanced generics
```

### Full-stack TypeScript

```text
TypeScript + React
TypeScript + Express
TypeScript + MongoDB
API response types
DTOs
Error types
Generic API responses
Environment variable typing
Authentication types
```

---

# 72. Real-World Example

Here's how several concepts come together:

```ts
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
};

function getUser(): ApiResponse<User> {
    return {
        success: true,
        data: {
            id: 1,
            name: "Sadik",
            email: "sadik@example.com",
            age: 21
        }
    };
}

const response = getUser();

console.log(response.data.name);
console.log(response.data.email);
```

Here you're using:

```text
interface
optional property
type alias
generic
function return type
object typing
type inference
```

This is much closer to how TypeScript appears in real applications.

---

# 73. The Big Picture

The most important idea is:

```text
JavaScript asks:
"What should I do?"

TypeScript additionally asks:
"What kind of data should this code work with?"
```

For example:

```ts
function createUser(
    name: string,
    age: number
): User {
    return {
        name,
        age
    };
}
```

TypeScript knows:

```text
name → string
age → number
return value → User
```

This enables:

- autocomplete
- error detection
- better refactoring
- safer APIs
- better documentation
- easier maintenance

---

# Final Rule to Remember

> **Use TypeScript to describe the shape of your data, the inputs to your functions, and the outputs from your functions.**

That mindset is more valuable than simply memorizing TypeScript syntax.
