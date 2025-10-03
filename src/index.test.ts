import * as assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { entropy } from "./index.js";

test("alpha numeric strings between 8 and 9 have low entropy", () => {
	const samples = {
		abcdefgh: 38,
		abcd1234: 41,
		abcd12345: 47,
		abcdefghi: 42,
		abcdefg1h: 47,
		abcdefg12: 47,
		abcdefg123: 52,
	};

	for (const [str, entropyValue] of Object.entries(samples)) {
		assert.equal(
			entropy(str),
			entropyValue,
			`"${str}" has an entropy of ${entropyValue}`,
		);
	}
});

test("phrases make better passwords", () => {
	for (let i = 0; i < 99999; i++) {
		const str = [
			Math.round(Math.random() * 10e13).toString(36),
			Math.round(Math.random() * 10e13).toString(36),
			Math.round(Math.random() * 10e13).toString(36),
		].join(" ");
		assert.ok(entropy(str) > 100, 'three "words" yield high entropy');
	}
});

test("the 10k most common passwords are weak", () => {
	const data = readFileSync(`${process.cwd()}/10k_most_common.txt`);
	const lines = data.toString().split(/\n/);

	for (const pwd of lines) {
		assert.ok(entropy(pwd) < 70, "Yup, that's a weak password");
	}
});

test("a supposedly strong passwords", () => {
	assert.equal(entropy("correct horse battery staple"), 132, "xkcd is right");
});
