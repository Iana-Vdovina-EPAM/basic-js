class VigenereCipheringMachine {
    constructor(reverse) {
        console.log(reverse);
        this.alphabet = [...Array(26)].map((val, _) => String.fromCharCode(_ + 65));
        this.reverse = reverse;
    }
    encrypt(message, key) {
        if (typeof(message) !== 'string' || typeof(key) !== 'string') throw new Error();
        const upperMessage = message.toUpperCase().split('')
        const upperKey = key.toUpperCase()
        const extendedKey = upperKey.repeat(upperMessage.length / upperKey.length) + upperKey.substr(0, upperMessage.length % upperKey.length);
        let result = [];
        let keyIterator = 0;
        for (let i = 0; i < upperMessage.length; i++) {
            const val = upperMessage[i];
            if (!this.alphabet.some(i => val === i)) {
                result.push(val);
                continue;
            }
            result.push(this.alphabet[(val.charCodeAt(0) + extendedKey.charCodeAt(keyIterator) - 2 * 65) % 26]);
            keyIterator++;
        }
        const str = result.join('')
        if (this.reversed === false) {
            str = str.split('').reverse().join('')
        }
        return str;
    }
    decrypt(encryptedMessage, key) {
        //console.log(encryptedMessage)
        //console.log(key)
        if (typeof(encryptedMessage) !== 'string' || typeof(key) !== 'string') throw new Error();
        let upperMessage = encryptedMessage.toUpperCase().split('')
            // if (this.reversed === false) {
            //     upperMessage = upperMessage.split('').reverse().join('')
            // }
        const upperKey = key.toUpperCase()
        const extendedKey = upperKey.repeat(upperMessage.length / upperKey.length) + upperKey.substr(0, upperMessage.length % upperKey.length);
        let result = [];
        let keyIterator = 0;
        for (let i = 0; i < upperMessage.length; i++) {
            const val = upperMessage[i];
            if (!this.alphabet.some(i => val === i)) {
                result.push(val);
                continue;
            }
            const letter = this.alphabet[(val.charCodeAt(0) + 26 - extendedKey.charCodeAt(keyIterator)) % 26]
            result.push(letter);
            keyIterator++;
        }
        let str = result.join('')
        if (this.reversed === false) {
            str = str.split('').reverse().join('')
        }
        return str;
    }
}

module.exports = VigenereCipheringMachine;