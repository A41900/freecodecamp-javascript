/**
 * Translate Pig Latin
 * --------------------
 * Converts an English word into Pig Latin.
 *
 * Rules:
 * - If the word starts with a vowel → append "way"
 * - If it starts with a consonant cluster → move the cluster to the end and append "ay"
 *
 * Examples:
 * translatePigLatin("android") → "androidway"
 * translatePigLatin("play") → "ayplay"
 * translatePigLatin("string") → "ingstray"
 */

function translatePigLatin(string){
  const regexVowel = /^[aeiou]/;
  if(regexVowel.test(string[0]))
  return string+"way"

  const regexConsonant = /^[^aeiou]+/;
  const start =  string.match(regexConsonant);
  return string.replace(start,"")+start+"ay";

}