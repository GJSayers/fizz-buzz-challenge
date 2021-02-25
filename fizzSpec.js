describe("fizzBuzz", function() {
    
    beforeEach(function(){
        fizz = new fizzBuzz();
    });
    
    describe("Checks if number is divisible by 3 and 5", function()
{it("should exist", function(){
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return fizzBuzz when called as fizzBuzz(15)", function() {
        var result = fizzBuzz(15)
        expect(result).toBe("fizzBuzz"); 
        });

        it("should return fizz when called as fizzBuzz(9)", function() {
        var result = fizzBuzz(9)
        expect(result).toBe("fizz"); 
        });

        it("should return Buzz when called as fizzBuzz(20)", function() {
        var result = fizzBuzz(20)
        expect(result).toBe("Buzz"); 
        });

        it("should return number when called as fizzBuzz(22)", function() {
        var result = fizzBuzz(22)
        expect(result).toBe(22); 
        });

       
});
}); 