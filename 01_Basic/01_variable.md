🔹 JavaScript Variable Declarations

JavaScript provides three ways to declare variables:

1️⃣ const

Cannot be reassigned

Must be initialized at the time of declaration

Use when the value should not change

const accountId = 1234;

2️⃣ let

Can be reassigned

Can be declared without an initial value

Block-scoped

let accountEmail = "pavan@gmail.com";
let accountState;

3️⃣ var (Not Recommended)

Function-scoped (not block-scoped)

Can cause unexpected bugs

Avoid using in modern JavaScript

var accountPassword = 123455;

⚠ Best Practice

Always prefer const and let over var.