import {KurdishNicknames} from './index.js'
import assert from 'assert'


describe('generate 10 nicknames', function() {
    describe('#generate()', function() {
        it('should generate 10 names', function(done) {
            let generated_names = KurdishNicknames.generate("both", 15, 10)
            if (generated_names.length === 10){
                done()
            }else{
                done("10 names were not generated")
            }
        });
    });
});


describe('generate 10 female nicknames', function() {
    describe('#generate()', function() {
        it('should generate 10 female names', function(done) {
            let generated_names = KurdishNicknames.generate("female", 15, 10)
            if (generated_names.length === 10){
                let i
                for (i = 0; i < generated_names.length; i++){
                    if (generated_names.gender === "male"){
                        done("The gender of one of the generated names was male (not female or both)!")
                        return
                    }
                }

                done()
            }else{
                done("10 names were not generated")
            }
        });
    });
});


describe('generate 10 male nicknames', function() {
    describe('#generate()', function() {
        it('should generate 10 male names', function(done) {
            let generated_names = KurdishNicknames.generate("male", 15, 10)
            if (generated_names.length === 10){
                let i
                for (i = 0; i < generated_names.length; i++){
                    if (generated_names.gender === "female"){
                        done("The gender of one of the generated names was female (not male or both)!")
                        return
                    }
                }

                done()
            }else{
                done("10 names were not generated")
            }
        });
    });
});