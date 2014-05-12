/**
 * Calculate the size of the alphabet.
 *
 * This is a mostly back-of-the hand calculation of the alphabet.
 * We group the a-z, A-Z and 0-9 together with the leftovers of the keys on an US keyboard.
 *
 * Characters outside ascii add one more to the alphabet. Meaning that the alphabet size of the word:
 * "ümlout" will yield 27 characters. There is no scientific reasoning behind this, besides to
 * err on the save side.
 *
 * @param {Str} str String to calculate the alphabet from
 * @returns {Number} n Size of the alphabet
 */
function alphabetSize(str) {
    var c, size = 0,
        alpha = true,
        alcaps = true,
        digits = true,
        punct1 = true,
        punct2 = true;

    for (var i = 0; i < str.length; i++) {
        c = str[i];

        if (str.indexOf(c) !== i) continue;

        if (alpha && 'abcdefghijklmnopqrstuvwxyz'.indexOf(c) !== -1) {
            size += 26;
            alpha = false;
            continue;
        }

        if (alcaps && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c) !== -1) {
            size += 26;
            alcaps = false;
            continue;
        }

        if (digits && '0123456789'.indexOf(c) !== -1) {
            size += 10;
            digits = false;
            continue;
        }

        if (punct1 && '!@#$%^&*()'.indexOf(c) !== -1) {
            size += 10;
            punct1 = false;
            continue;
        }

        if (punct2 && '~`-_=+[]{}\\|;:\'",.<>?/'.indexOf(c) !== -1) {
            size += 22;
            punct1 = false;
            continue;
        }

        // non-ascii character set.
        if (c.charCodeAt(0) > 127) size += 1;
    }

    return size;
}

/**
 * Calculate (information entropy)[https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength]
 *
 * @param {String} str String to calculate entropy for
 * @returns {Number} entropy
 */
function entropy(str) {
    if (!str) return 0;
    return str.length * (Math.log(alphabetSize(str)) / Math.log(2));
}

module.exports = entropy;
