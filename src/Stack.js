"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseElementNumber = exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(limit) {
        this.container = [];
        this.limit = limit;
        this.container = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.container.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.container.length === this.limit;
    };
    Stack.prototype.push = function (value) {
        if (this.isFull()) {
            throw new Error("Stack is full");
        }
        this.container.push(value);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.container.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
function ReverseElementNumber(arr) {
    var stack = new Stack(50);
    var reverseNumber = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (!stack.isFull()) {
            stack.push(num);
        }
    }
    while (!stack.isEmpty()) {
        reverseNumber.push(stack.pop());
    }
    return reverseNumber;
}
exports.ReverseElementNumber = ReverseElementNumber;
