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

