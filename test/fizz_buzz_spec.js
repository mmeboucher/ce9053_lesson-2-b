var FizzBuzz = {
    generate: function(count) {
        var results = [ ];
        
    
    for (var i = 1; i <= count; i++){
        if(i % 3 == 0 && i % 5 == 0)
             results.push('FizzBuzz');
             if ( i % 3 == 0)
                results.push('Fizz');
             else if ( i % 5 == 0)
                results.push('Buzz');
        else
            results.push(i);
    }
    return results;
    
    }
    
};

describe("FizzBuzz", function() {
    it("exists", function(){
        expect(FizzBuzz).toBeDefined();
        
    });
    
    describe("generate", function(){
        it("exists", function() {
            expect(FizzBuzz.generate).toBeDefined();
            });
            
            it("generate(3) returns [1,2,'Fizz']", function(){
                expect(FizzBuzz.generate(3)).toEqual([1,2,'Fizz']);
            });
            
            it("generate(5) returns [1,2,'Fizz', 4, 'Buzz']", function(){
                expect(FizzBuzz.generate(5)).toEqual([1,2,'Fizz', 4, 'Buzz']);
            });
    });
});