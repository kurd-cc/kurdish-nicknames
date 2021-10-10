import {KurdishNicknames} from './index.js'
import assert from 'assert'


describe('generate 100 nicknames', function() {
    describe('#generate()', function() {
        it('should generate 10 names', function(done) {
            let generated_names = KurdishNicknames.generate("both", 15, 100)
            if (generated_names.length === 100){
                done()
            }else{
                done("100 names were not generated")
            }
        });
    });
});


describe('generate 100 female nicknames', function() {
    describe('#generate()', function() {
        it('should generate 10 female names', function(done) {
            let generated_names = KurdishNicknames.generate("female", 15, 100)
            if (generated_names.length === 100){
                let i
                for (i = 0; i < generated_names.length; i++){
                    if (generated_names[i].gender === "male"){
                        done("The gender of one of the generated names was male (not female or both)!")
                        return
                    }
                }

                done()
            }else{
                done("100 names were not generated")
            }
        });
    });
});


describe('generate 100 male nicknames', function() {
    describe('#generate()', function() {
        it('should generate 10 male names', function(done) {
            let generated_names = KurdishNicknames.generate("male", 15, 100)
            if (generated_names.length === 100){
                let i
                for (i = 0; i < generated_names.length; i++){

                    if (generated_names[i].gender === "female"){
                        done("The gender of one of the generated names was female (not male or both)!")
                        return
                    }
                }

                done()
            }else{
                done("100 names were not generated")
            }
        });
    });
});


describe('generate 100 nicknames for both genders', function() {
    describe('#generate()', function() {
        it('should generate 100 names of both genders', function(done) {
            let generated_names = KurdishNicknames.generate("both", 15, 100)
            if (generated_names.length === 100){
                let i
                let female_found = false
                let male_found = false
                let both_found = false
                for (i = 0; i < generated_names.length; i++){
                    if (generated_names[i].gender === "female"){
                        female_found = true
                    }
                    if (generated_names[i].gender === "male"){
                        male_found = true
                    }
                    if (generated_names[i].gender === "both"){
                        both_found = true
                    }
                }

                if (male_found && female_found && both_found){
                    done()
                }else if (!male_found){
                    done("No male names were found in the 100 generated names")
                }else if (!female_found){
                    done("No female names were found in the 100 generated names")
                }else if (!both_found){
                    done("No names for both genders were found in the 100 generated names")
                }
            }else{
                done("100 names were not generated")
            }
        });
    });
});