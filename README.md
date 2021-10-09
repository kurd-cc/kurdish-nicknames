# kurdish-nicknames <br>
Kurdish nicknames generator package that generates high quality Kurdish (Kurmanji) nicknames for both genders and their meanings in English.<br>
https://www.npmjs.com/package/kurdish-nicknames
<br>

### Features:

- ~50K possible different combinations of names
- Easy to use
- Meanings in English (are done manually)
- You can choose the names for male, female or the names that can be used by both genders

### Install: <br>
With `NPM`:

```shell
npm i kurdish-nicknames
```

OR with `Yarn`:

```shell
yarn add kurdish-nicknames
```

### Usage: <br>

```javascript
import {KurdishNicknames} from 'kurdish-nicknames'

// KurdishNicknames.generate(GENDER,
//                          MAX LENGTH PER NAME (EACH FIRST AND LAST NAME),
//                          NUMBER OF NAMES TO BE GENERATED)
let generated_names_items = KurdishNicknames.generate("both", 15, 1)


```

Sample output object (single object for 1 name or an array of objects for more): <br>

```javascript
{
  first_name: 'Şevreş',
  last_name: 'Batman',
  first_name_meaning: 'Dark night',
  last_name_meaning: 'It is a city name located in Bakur or Northern Kurdistan',
  gender: 'both'
}
```

### Testing: <br>

You can test with `Mocha`:<br>

```shell
npm test
```