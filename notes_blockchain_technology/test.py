letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

def letterTransform(begin, diff):
    index = letters.index(begin)
    newIndex = index + diff
    if newIndex > 25:
        newIndex -= 26
    return letters[newIndex]

def wordProcess(str, diff):
    newStr = ""
    for letter in str:
        if letter in letters:
            newLetter = letterTransform(letter, diff)
            newStr += newLetter
        else:
            newStr += " "
    return newStr
        

# words = "WII CSY MR XAS PSRK AIIOW HIEVIWX JVMIRH"
# diff = 14
# for num in range(26):
#     print(num)
#     print(wordProcess(words.upper(), num))

print((8*8*8*8*8)%119)