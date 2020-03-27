import * as changeCase from "change-case";
import { lowerCase } from "lower-case";
import { upperCase } from "upper-case";
const alfy = require('alfy');

const sentence = alfy.input;

const output = [
  {
    title: changeCase.camelCase(sentence),
    subtitle: "🐫 camelCase",
    arg: changeCase.camelCase(sentence)
  }, {
    title: changeCase.snakeCase(sentence),
    subtitle: "🐍 snake_case",
    arg: changeCase.snakeCase(sentence)
  }, {
    title: changeCase.constantCase(sentence),
    subtitle: "CONSTANT_CASE",
    arg: changeCase.constantCase(sentence)
  }, {
    title: lowerCase(sentence),
    subtitle: "lowercase",
    arg: lowerCase(sentence)
  }, {
    title: upperCase(sentence),
    subtitle: "UPPER CASE",
    arg: upperCase(sentence)
  }
];

alfy.output(output);