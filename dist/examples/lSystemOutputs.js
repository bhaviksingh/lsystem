"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lsystem_1 = __importDefault(require("../src/lsystem"));
const parser_1 = require("../src/parser");
const util_1 = __importDefault(require("util"));
//Basic test
// let a1 = parseAxiom("A(0)");
// let i1 = 20;
// let p1 = parseProductions(["A(x){x<2}: FA(x+1)","A(x){x>=2} : A(x)X"]);
// let l1 = new LSystem(a1, p1, i1);
// console.log("**** Created Lsystem");
// console.log(util.inspect(l1, false, null, true));
// console.log("**** Iterated " + i1 + " times");
// let r1 = l1.iterate();
// console.log(r1);
// //Weighted selection
// let a2 = parseAxiom("A");
// let p2 = parseProductions(["A:1", "A:2", "A:3", "A:4", "A:{20}5"]);
// let i2 = 2;
// let l2 = new LSystem(a2,p2, i2);
// console.log("**** Created Lsystem");
// console.log(util.inspect(l2, false, null, true));
// console.log("**** Iterated " + i2 + " times");
// let r2 = l2.iterate();
// console.log(r2);
//CONTEXT MATCHING
let a3 = parser_1.parseAxiom("ABC");
let p3 = parser_1.parseProductions(["A<B>C:Y", "R<A>R:X"]);
let i3 = 1;
let l3 = new lsystem_1.default(a3, p3, i3);
console.log("**** Created Lsystem");
console.log(util_1.default.inspect(l3, false, null, true));
//At one iteration
console.log("**** Iterated " + i3 + " times");
let r3 = l3.iterate();
console.log(r3);
//At two iterations
// l3.setIterations(2);
// let r4 = l3.iterate();
// console.log(r4);
//# sourceMappingURL=lSystemOutputs.js.map