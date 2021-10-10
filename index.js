import {first_names, last_names} from './names.js'

/**
 * The main class to generate the nicknames
 * */
export class KurdishNicknames {
    /**
     * Generate a name object or an array of name objects
     * @param gender of the request name, default is both
     * @param max_length the max length allowed for each first and last name
     * @param no_of_names The number of name objects to be generated
     * @return a name object is no_of_names=1 otherwise an array of name objects
     * */
    static generate(gender="both", max_length= 25, no_of_names = 1) {
        if (no_of_names === 1){
            return getName(gender, max_length)
        }else{
            let i
            let result = []
            for (i = 0; i < no_of_names; i++){
                result.push(getName(gender, max_length))
            }
            return result
        }
    }
}

/**
 * Generate a name object
 * @param gender the gender of the name to be generated, could be male, female or both
 * @param max_length The max allowed length for each first and last name
 * @return the name object
 * */

function getName(gender, max_length){
    let f_name_item = {}
    let l_name_item = {}
    let result = {first_name: "", last_name: "", first_name_meaning: "", last_name_meaning: "", gender: gender}

    if (gender !== "both"){
        f_name_item = getRandom(first_names.filter((name) => (name.gender === gender || name.gender === "both") && name.name.length <= max_length))
        l_name_item = getRandom(last_names.filter((name) => (name.gender === gender || name.gender === "both") && name.name.length <= max_length))
    }else {
        f_name_item = getRandom(first_names.filter((name) => (name.gender === result.gender || name.gender === "both") && name.name.length <= max_length))
        l_name_item = getRandom(last_names.filter((name) => (name.gender === result.gender || name.gender === "both") && name.name.length <= max_length))
    }

    if (f_name_item.name === l_name_item.name){
        return getName(gender, max_length)
    }

    result.first_name = f_name_item.name
    result.last_name = l_name_item.name
    result.first_name_meaning = f_name_item.meaning
    result.last_name_meaning = l_name_item.meaning
    return result
}

/**
 * Get random item from an array
 * @param items the array of items
 * @return the randomly selected item
 * */
function getRandom(items){
    return items[Math.floor(Math.random()*items.length)];
}


