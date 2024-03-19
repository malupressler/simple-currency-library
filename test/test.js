'use strict';

import { expect } from 'chai';

import formatCurrencyInput from '../index.js';

describe('good path cases for formatCurrencyInput', function() {
    it('should convert digit 1 to 0,01', function() {
        var result = formatCurrencyInput('1');
        expect(result).to.equal('0,01');
    });
    it('should convert digits 23  to 0,23', function() {
        var result = formatCurrencyInput('23');
        expect(result).to.equal('0,23');
    });
    it('should convert digits 740  to 7,40', function() {
        var result = formatCurrencyInput('740');
        expect(result).to.equal('7,40');
    });
    it('should convert digits 9177  to 91,77', function() {
        var result = formatCurrencyInput('9177');
        expect(result).to.equal('91,77');
    });
    it('should convert digits 25129  to 251,29', function() {
        var result = formatCurrencyInput('25129');
        expect(result).to.equal('251,29');
    });
    it('should convert digits 558950  to 5589,50', function() {
        var result = formatCurrencyInput('558950');
        expect(result).to.equal('5589,50');
    });
});

describe('bad path cases for formatCurrencyInput', function() {
    it('should return a error when passing value as number instead of string', function() {
        var result = formatCurrencyInput(1);
        expect(result).to.equal('');
    });
    it('should return a error when passing value as number instead of string', function() {
        var result = formatCurrencyInput('test');
        expect(result).to.equal('');
    });
});