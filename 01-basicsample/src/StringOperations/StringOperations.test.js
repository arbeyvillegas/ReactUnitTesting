import * as StringOperations from './StringOperations';

describe("reverse() function", () =>{
    it("reverse a string correctly", () =>{
        // arrange 
        const expected ="gnirts a si siht";

        //act
        const reversedString = StringOperations.reverse("this is a string");

        //assert
        expect(reversedString).toEqual(expected);
    });

    it("returns empty when the value is null", () => {
        //arrange
        //act
        const result = StringOperations.reverse(null);

        //assert
        expect(result).not.toBeNull();
        expect(result).toHaveLength(0);
    });

    it("when numbers are sent in it throws an exception", () => {
        // arrange
        const wrapper = () => {
            StringOperations.reverse(456);
        }

        // act
        // assert
        expect(wrapper).toThrowError("cannot reverse");
    });
});

describe("isPalindrome() function", () => {
    it("the value is palindrome", () => {
        // arrange 
        const value ="asddsa";

        //act
        const isPalindrome = StringOperations.isPalindrome(value);

        //assert
        expect(isPalindrome).toBe(true);
    });

    it("the value is not palindrome", () => {
        // arrange 
        const value ="asddsaxyz";

        //act
        const isPalindrome = StringOperations.isPalindrome(value);

        //assert
        expect(isPalindrome).toBeFalsy();
    });
});

