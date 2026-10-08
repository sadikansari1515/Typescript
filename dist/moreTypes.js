let response = "42";
let numericLength = response.length;
let bookString = '{"name":who moved my cheese}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error)
        console.log(error.message);
    console.log("error", error);
}
const data = "chai aur code";
const strData = data;
function redirectBasedRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
export {};
//# sourceMappingURL=moreTypes.js.map