const LOWERCASE_ALPHA = "abcdefghijklmnopqrstuvwxyz",
	UPPERCASE_ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	DIGITS = "0123456789",
	PUNCT1 = "!@#$%^&*()",
	PUNCT2 = "~`-_=+[]{}\\|;:'\",.<>?/";

// Calculate the size of the alphabet.
//
// This is a mostly back-of-the hand calculation of the alphabet.
// We group the a-z, A-Z and 0-9 together with the leftovers of the keys on an US keyboard.
// Characters outside ascii add one more to the alphabet. Meaning that the alphabet size of the word:
// "ümlout" will yield 27 characters. There is no scientific reasoning behind this, besides to
// err on the save side.
/**
 * @param {Str} str String to calculate the alphabet from
 * @returns {Number} n Size of the alphabet
 */
const alphabetSize = (str: string): number => {
	let c: string;
	let size = 0;

	const collect: Record<string, number> = {
		alcaps: 0,
		punct1: 0,
		digits: 0,
		alpha: 0,
		unicode: 0,
		size: 0,
	};

	let _seen = "";

	for (let i = 0; i < str.length; i++) {
		c = str[i];

		// we only need to look at each character once
		if (str.indexOf(c) !== i) continue;
		if (LOWERCASE_ALPHA.indexOf(c) !== -1)
			collect.alpha = LOWERCASE_ALPHA.length;
		else if (UPPERCASE_ALPHA.indexOf(c) !== -1)
			collect.alcaps = UPPERCASE_ALPHA.length;
		else if (DIGITS.indexOf(c) !== -1) collect.digits = DIGITS.length;
		else if (PUNCT1.indexOf(c) !== -1) collect.punct1 = PUNCT1.length;
		else if (PUNCT2.indexOf(c) !== -1) collect.size = PUNCT2.length;
		// I can only guess the size of a non-western alphabet.
		// The choice here is to grant the size of the western alphabet, together
		// with an additional bonus for the character itself.
		//
		// Someone correct me if I'm wrong here.
		else if (c.charCodeAt(0) > 127) {
			collect.alpha = 26;
			collect.unicode += 1;
		}

		_seen += c;
	}

	for (const k in collect) {
		size += collect[k];
	}

	return size;
};

// Calculate [information entropy](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength)
/**
 * @param {String} str String to calculate entropy for
 * @returns {Number} entropy
 */
export const entropy = (str: string): number => {
	if (!str) return 0;
	return Math.round(str.length * (Math.log(alphabetSize(str)) / Math.log(2)));
};
