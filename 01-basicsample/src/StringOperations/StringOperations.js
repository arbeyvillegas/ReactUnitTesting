export function reverse(value) {
    let reversedString = "";

    if (!value) 
        return reversedString;

    if (typeof value === "number")
        throw new Error("cannot reverse numbers");

    for (let i = value.length - 1; i >= 0; i--) {
        reversedString +=  value.charAt(i);
    }
    return reversedString;
}

export function isPalindrome(value) {
    let reversedString = reverse(value);
    return (reversedString === value);
}