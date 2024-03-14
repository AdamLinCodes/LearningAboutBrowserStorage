
// function palindrome(s) {
//     if (s.length <= 1) return true;

//     let front = 0;
//     let back = s.length - 1;

//     for (let i = 0; i < Math.floor(s.length/2); i++) { // 0, 1, 2, 3, 4
//         if (s[front] != s[back]) return false;

//         front++;
//         back--;
//     }
//     return true;
// }

// function palindromeRec(s) {
//     //base
//     if (s.length <= 1) return true;

//     if (s[0] == s[s.length - 1]) {
//         return palindromeRec(s.substring(1, s.length - 1))
//     }
//     else {
//         return false;
//     }
// }

// //tests
// console.log("Iterative Tests")
// console.log(palindrome(""))// true
// console.log(palindrome("racecar")) // true
// console.log(palindrome("r"))// true
// console.log(palindrome("hireadamlin"))// false
// console.log(palindrome("abccba")) // true

// console.log("\nRecursive Tests")// true
// console.log(palindromeRec(""))// true
// console.log(palindromeRec("racecar")) // true
// console.log(palindromeRec("r"))// true
// console.log(palindromeRec("hireadamlin"))// false
// console.log(palindromeRec("abccba")) // true

function brokenFoo() {
    const str = "Hello, World!";

    for (const i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

function brokenFoo2() {
    let i = 0;

    while (i !== 10) {
        console.log(i);
    }
}

function brokenFoo3() {
    const arr = [1, 45, 23, 13, 7, 5, 68, 101, 13, 25];

    arr.filter((ele) => {
        return ele > 25;
    });

    console.log(arr);
}

//brokenFoo();
//brokenFoo2();
brokenFoo3();