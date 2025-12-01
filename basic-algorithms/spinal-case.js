/**
 * Spinal Case Converter
 * ---------------------
 * This function converts a given string into spinal case format.
 * Spinal case is a lowercase string where all words are separated by hyphens.
 *
 * The function handles:
 * - Spaces and underscores between words
 * - camelCase transitions (e.g., "thisIsSpinalTap" → "this-is-spinal-tap")
 * - Mixed formatting styles
 *
 * Example:
 * spinalCase("The_Andy_Griffith_Show")  -> "the-andy-griffith-show"
 *
 * This solution uses a combination of regex to:
 * - Insert hyphens before uppercase letters in camelCase
 * - Replace spaces and underscores with hyphens
 * - Convert the final result to lowercase
 */

function spinalCase(string){
  const regex = /(?<=[a-z])(?=[A-Z])|[\s_]+/g;
  return string.replace(regex,"-").toLowerCase();
}


