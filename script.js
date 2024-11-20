const sentence = "I love learning JavaScript";
const words = sentence.split(" ");
console.log(words);
let countA = 0;
let j = 0;
while (j < words.length) {
    if (words[j].includes("a")) {
        countA++;
    } 
    j++;
}
console.log(`Number of words containing 'a': ${countA}`);
for ( let i = 0; i<words.length;i++){
    if(words[i].length >= 5){
        words[i] = "LongWord"
    }else{
        words[i] = "ShortWord"
    }
}
console.log(words.join(" "));

const words2 = "ShortWord ShortWord LongWord LongWord";
console.log(words2);
const finalWord = words2.split(" ");
console.log(finalWord);
let b = 0;
 do {
    console.log(finalWord[b]);
    b++;
 } while (b < finalWord.length);