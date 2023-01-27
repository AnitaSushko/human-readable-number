module.exports = function toReadable(number) {
    const mapZeroToNine = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    const mapTenToNineteen = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    const mapTwentyToOneHundred = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }

    const stringNumber = number.toString();
    let resultString = '';
    for (let i = 0; i < stringNumber.length; i++) {
        if (stringNumber.length === 3) {
            if (i === 0) {
                resultString += `${mapZeroToNine[stringNumber[i]]} ${mapTwentyToOneHundred[100]}`;
            } else if (stringNumber[i] == 1 && i === 1) {
                resultString += ` ${mapTenToNineteen[`${stringNumber[i]}${stringNumber[i + 1]}`]}`;
                break;
            } else {
                if (stringNumber[i] > 1 && i === 1) {
                    resultString +=
                        ` ${mapTwentyToOneHundred[`${stringNumber[i]}0`]}`;
                }
                if (stringNumber[i] != 0 && i === 2) {
                    resultString += ` ${mapZeroToNine[`${stringNumber[i]}`]}`;
                } 
            }

        } else if (stringNumber.length === 2) {
            if (stringNumber[i] == 1 && i === 0) {
                resultString += `${mapTenToNineteen[`${stringNumber[i]}${stringNumber[i + 1]}`]}`
                break;
            }
            if (stringNumber[i] > 1 && i === 0) {
                resultString += `${mapTwentyToOneHundred[`${stringNumber[i]}0`]}`;
            }
            if (stringNumber[i] >= 1 && i === 1) {
                resultString += ` ${mapZeroToNine[`${stringNumber[i]}`]}`;
            }

        } else if (stringNumber.length === 1) {
            resultString += `${mapZeroToNine[`${stringNumber[i]}`]}`;
        }
    }
    return resultString;
}