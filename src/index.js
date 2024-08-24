module.exports = function check(str, bracketsConfig) {
  // function check(str, bracketsConfig) {
  // part 1 - check str is true //

  function checkBr(string) {
    let br = [")", "]", "}", "|", "(", "[", "{"];
    let someBr = [];
    if (
      string[0] == ")" ||
      string[0] == "]" ||
      string[0] == "}") {
      return false;
    } else if (!br.some((el) => string.includes(el))) {
      return false;
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

  // return checkBr(str) !== true
  //   ? false
  //   : checkBr(bracketsConfig.join("")) === true
  //   ? true
  //     : false;
  if (str.length % 2 !== 0) {
    return false;
  } else if (checkBr(str) === true && checkBr(bracketsConfig.join("")) === true) {
    return true;
  } else if (
    checkBr(str) === false &&
    checkBr(bracketsConfig.join("")) === false
  ) {
    return true;
  } else {
    return false;
  }
};

// console.log(
//   check(
//     "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()",
//     [
//       ["1", "2"],
//       ["3", "4"],
//       ["5", "6"],
//       ["7", "7"],
//       ["8", "7"],
//     ]
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
