"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d) { return d[0]; }
;
;
;
;
const grammar = {
    Lexer: undefined,
    ParserRules: [
        { "name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/] },
        { "name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": function (d) {
                return parseInt(d[0].join(""));
            }
        },
        { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "-" }] },
        { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "+" }] },
        { "name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id },
        { "name": "int$ebnf$1", "symbols": [], "postprocess": () => null },
        { "name": "int$ebnf$2", "symbols": [/[0-9]/] },
        { "name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": function (d) {
                if (d[0]) {
                    return parseInt(d[0][0] + d[1].join(""));
                }
                else {
                    return parseInt(d[1].join(""));
                }
            }
        },
        { "name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/] },
        { "name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/] },
        { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{ "literal": "." }, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"] },
        { "name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id },
        { "name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": () => null },
        { "name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": function (d) {
                return parseFloat(d[0].join("") +
                    (d[1] ? "." + d[1][1].join("") : ""));
            }
        },
        { "name": "decimal$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id },
        { "name": "decimal$ebnf$1", "symbols": [], "postprocess": () => null },
        { "name": "decimal$ebnf$2", "symbols": [/[0-9]/] },
        { "name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] },
        { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "decimal$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "decimal$ebnf$3$subexpression$1$ebnf$1"] },
        { "name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id },
        { "name": "decimal$ebnf$3", "symbols": [], "postprocess": () => null },
        { "name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": function (d) {
                return parseFloat((d[0] || "") +
                    d[1].join("") +
                    (d[2] ? "." + d[2][1].join("") : ""));
            }
        },
        { "name": "percentage", "symbols": ["decimal", { "literal": "%" }], "postprocess": function (d) {
                return d[0] / 100;
            }
        },
        { "name": "jsonfloat$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id },
        { "name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": () => null },
        { "name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/] },
        { "name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] },
        { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"] },
        { "name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id },
        { "name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": () => null },
        { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id },
        { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null },
        { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/] },
        { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"] },
        { "name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id },
        { "name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": () => null },
        { "name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": function (d) {
                return parseFloat((d[0] || "") +
                    d[1].join("") +
                    (d[2] ? "." + d[2][1].join("") : "") +
                    (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : ""));
            }
        },
        { "name": "Main$ebnf$1", "symbols": ["ALetter"] },
        { "name": "Main$ebnf$1", "symbols": ["Main$ebnf$1", "ALetter"], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "Main", "symbols": ["Main$ebnf$1"], "postprocess": id },
        { "name": "ALetter", "symbols": ["symbol"], "postprocess": (d) => ({ symbol: d[0], params: undefined }) },
        { "name": "ALetter", "symbols": ["symbol", { "literal": "(" }, "AxiomParams", { "literal": ")" }], "postprocess": ([l, x, p]) => ({ symbol: l, params: p }) },
        { "name": "AxiomParams", "symbols": ["decimal"] },
        { "name": "AxiomParams$ebnf$1", "symbols": ["AxParam"] },
        { "name": "AxiomParams$ebnf$1", "symbols": ["AxiomParams$ebnf$1", "AxParam"], "postprocess": (d) => d[0].concat([d[1]]) },
        { "name": "AxiomParams", "symbols": ["decimal", "AxiomParams$ebnf$1"], "postprocess": (d) => [d[0], ...d[1]] },
        { "name": "AxParam", "symbols": [{ "literal": "," }, "decimal"], "postprocess": ([c, n]) => n },
        { "name": "symbol", "symbols": [/[^,():{}<>]/], "postprocess": id }
    ],
    ParserStart: "Main",
};
exports.default = grammar;
