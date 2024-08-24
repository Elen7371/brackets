module.exports = function check(str, bracketsConfig) {
  // part 1 - check str is true //

  function checkBr(string) {
    let br = [")", "]", "}", "|", "(", "[", "{"];
    let someBr = [];
    if (string[0] == ")" || string[0] == "]" || string[0] == "}") {
      return false;
    } else if (!br.some((el) => string.includes(el))) {
      someBr = [];
    } else {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
          someBr.push(string[i]);
        } else if (string[i] === ")") {
          someBr[someBr.length - 1] === "(" ? someBr.pop() : false;
        } else if (string[i] === "]") {
          someBr[someBr.length - 1] === "[" ? someBr.pop() : false;
        } else if (string[i] === "}") {
          someBr[someBr.length - 1] === "{" ? someBr.pop() : false;
        } else if (string[i] === "|") {
          if (someBr.includes("|")) {
            someBr[someBr.length - 1] === "|"
              ? someBr.pop()
              : someBr.push(string[i]);
          } else {
            someBr.push(string[i]);
          }
        }
      }
    }
    return someBr.length == 0 ? true : false;
  }
  // part 2 - check bracketsConfig is true //

  return checkBr(str) !== true
    ? false
    : checkBr(bracketsConfig.join("")) === true
    ? true
    : false;
}

// console.log(
//   check(
//     "55555125(75557777777555566667888888667661133833448441111222233333444442)266666",
//     ["1", "2"],
//     ["3", "4"],
//     ["5", "6"],
//     ["7", "7"],
//     ["8", "8"]
//   )
// );

// console.log(check("()", [["(", ")"]])); // -> true
// console.log(check("((()))()", [["(", ")"]])); // -> true
// console.log(check("())(", [["(", ")"]])); // -> false
// console.log(
//   check("([{}])", [
//     ["(", ")"],
//     ["[", "]"],
//     ["{", "}"],
//   ])
// ); // -> true
// console.log(
//   check("[(])", [
//     ["(", ")"],
//     ["[", "]"],
//   ])
// ); // -> false
// console.log(
//   check("[]()", [
//     ["(", ")"],
//     ["[", "]"],
//   ])
// ); // -> true
// console.log(
//   check("[]()(", [
//     ["(", ")"],
//     ["[", "]"],
//   ])
// ); // -> false

// // special case: opening and closing bracket can be the same :)

// console.log(check("||", [["|", "|"]])); // -> true
// console.log(
//   check("|()|", [
//     ["(", ")"],
//     ["|", "|"],
//   ])
// ); // -> true
// console.log(
//   check("|(|)", [
//     ["(", ")"],
//     ["|", "|"],
//   ])
// ); // -> false
// console.log(
//   check("|()|(||)||", [
//     ["(", ")"],
//     ["|", "|"],
//   ])
// ); // -> true
