import * as assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { entropy } from "./index.js";

test("alpha numeric strings between 8 and 9 have an entropy less then 50", () => {
	for (let i = 0; i < 99999; i++) {
		const str = Math.round(Math.random() * 10e13).toString(36);
		assert.ok(entropy(str) < 50, "9 random alphanum chars are a weak password");
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
	assert.ok(entropy("correct horse battery staple") > 120, "xkcd is right");
});
