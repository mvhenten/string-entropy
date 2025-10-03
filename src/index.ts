const LOWERCASE_ALPHA = "abcdefghijklmnopqrstuvwxyz",
	UPPERCASE_ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	DIGITS = "0123456789",
	PUNCT1 = "!@#$%^&*()",
	PUNCT2 = "~`-_=+[]{}\\|;:'\",.<>?/";

/* Calculate the size of the alphabet.
 *
 * This is a mostly back-of-the hand calculation of the alphabet.
 * We group the a-z, A-Z and 0-9 together with the leftovers of the keys on an US keyboard.
 * Characters outside ascii add one more to the alphabet. Meaning that the alphabet size of the word:
 * "ümlout" will yield 27 characters. There is no scientific reasoning behind this, besides to
 * err on the safe side.
 *
 * @param {Str} str String to calculate the alphabet from
 * @returns {Number} n Size of the alphabet
 */
const alphabetSize = (str: string): number => {
	const seen = new Set();

	const collect = {
		alcaps: false,
		punct1: false,
		digits: false,
		alpha: false,
		unicode: false,
		punct2: false,
	};

	let size = 0;

	for (const c of str) {
		if (seen.has(c)) continue;
		seen.add(c);

		switch (true) {
			case LOWERCASE_ALPHA.includes(c) && !collect.alpha:
				collect.alpha = true;
				size += LOWERCASE_ALPHA.length;
				break;
			case UPPERCASE_ALPHA.includes(c) && !collect.alcaps:
				collect.alcaps = true;
				size += UPPERCASE_ALPHA.length;
				break;
			case DIGITS.includes(c) && !collect.digits:
				collect.digits = true;
				size += DIGITS.length;
				break;
			case PUNCT1.includes(c) && !collect.punct1:
				collect.punct1 = true;
				size += PUNCT1.length;
				break;
			case PUNCT2.includes(c) && !collect.punct2:
				collect.punct2 = true;
				size += PUNCT2.length;
				break;
			case c.charCodeAt(0) > 127:
				// I can only guess the size of a non-western alphabet.
				// The choice here is to grant the size of the western alphabet, together
				// with an additional bonus for the character itself.
				if (!collect.alpha) {
					collect.alpha = true;
					size += LOWERCASE_ALPHA.length;
				}
				size += 1;
				break;
			default:
				break;
		}
	}

	return size;
};

/**
 * Calculate [information entropy](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength)
 * of a string.
 *
 * @param {String} str String to calculate entropy for
 * @returns {Number} entropy
 */
export const entropy = (str: string): number => {
	if (!str) return 0;
	return Math.round(str.length * (Math.log(alphabetSize(str)) / Math.log(2)));
};
