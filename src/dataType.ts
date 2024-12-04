// 1. 布尔类型 (boolean)

// 布尔类型用于表示真或假值，只有两个取值：true 或 false。
let isDone: boolean = false;  // 正确：布尔类型，赋值为 false
isDone = true;  // 也正确：布尔类型，赋值为 true

// 错误示范：创建 Boolean 对象，而不是基本类型
// let createdByNewBoolean: boolean = new Boolean(1);
// 错误：'Boolean' 是对象类型，不推荐使用，应该使用基本类型 'boolean'

// 2. 数字类型 (number)

// 数字类型表示整数和浮动小数，不分大小类型。
let age: number = 30;        // 正确：整数
let pi: number = 3.14159;    // 正确：浮动小数

// 错误示范：创建 Number 对象，而不是基本类型
// let notANumber: number = new Number(1);
// 错误：'Number' 是对象类型，推荐使用原始类型 'number'

// 3. 字符串类型 (string)

// 字符串类型用于表示文本数据，可以用单引号、双引号或反引号（模板字符串）表示。
let greeting: string = "Hello, TypeScript!";  // 正确：普通字符串
let name: string = 'Alice';  // 正确：单引号
let message: string = `Welcome, ${name}`;  // 正确：模板字符串

// 错误示范：创建 String 对象，而不是基本类型
// let createdByNewString: string = new String("Hello");
// 错误：'String' 是对象类型，不推荐使用，应该使用基本类型 'string'

// 4. Null 和 Undefined 类型

// null 类型表示“没有值”或“空值”。
let n: null = null;           // 正确：null 类型
// undefined 类型表示“值未定义”。
let u: undefined = undefined; // 正确：undefined 类型

// 5. Symbol 类型 (symbol)

// Symbol 类型表示唯一且不可变的值。通常用于对象属性键，避免属性名冲突。
let sym1: symbol = Symbol('description');  // 正确：声明一个 symbol 类型
let sym2: symbol = Symbol('description');  // 正确：另一个不同的 symbol

console.log(sym1 === sym2);  // 输出 false，因为每次创建的 symbol 都是唯一的

// 6. BigInt 类型 (bigint)

// bigint 类型用于表示比 number 更大的整数。大整数可以通过 `n` 后缀来声明。
let bigNumber: bigint = 123456789012345678901234567890n;    // 正确：声明一个大整数

// 错误示范：不能将 bigint 类型与普通数字相加
// let result = bigNumber + 10;  // 错误：不能将 bigint 与 number 相加
// 解决方法：将数字也转成 bigint，例如：let result = bigNumber + 10n;

// 7. 类型推断和显式声明

// TypeScript 会根据初始值推断变量的类型。
let inferredNumber = 123;  // TypeScript 推断 inferredNumber 的类型为 number
let inferredString = "Hello";  // 推断为 string

// 显式声明类型
let explicitNumber: number = 123;  // 显式声明为 number 类型
let explicitString: string = "World";  // 显式声明为 string 类型

// 练习题：
// 1. 布尔类型：创建一个布尔类型变量表示用户是否登录，并赋值为 true。
let isLoggedIn: boolean = true;  // 用户已登录
// 2. 数字类型：创建一个数字类型变量表示用户的年龄，并赋值为 25。
let userAge: number = 25;  // 用户年龄
// 3. 字符串类型：创建一个字符串类型变量表示用户名，并赋值为 "Alice"。
let userName: string = "Alice";  // 用户名
// 4. null 类型：创建一个 null 类型的变量，并赋值为 null。
let emptyValue: null = null;  // 空值
// 5. Symbol 类型：创建一个 Symbol 类型变量，并赋值为 "unique"。
let uniqueSymbol: symbol = Symbol("unique");  // 唯一标识符
// 6. BigInt 类型：创建一个 BigInt 类型变量并赋值为 100000000000000000000n。
let largeNumber: bigint = 100000000000000000000n;  // 大整数
