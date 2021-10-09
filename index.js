import {first_names, last_names} from './names.js'


export class KurdishNicknames {
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

function getName(gender, max_length){
    let f_name_item = {}
    let l_name_item = {}
    let result = {first_name: "", last_name: "", first_name_meaning: "", last_name_meaning: "", gender: getRandom(["male", "female", "both"])}

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

function getRandom(items){
    return items[Math.floor(Math.random()*items.length)];
}
