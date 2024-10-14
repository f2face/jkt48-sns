# JKT48 SNS

JKT48 members and officials account list.

✅ IDN

✅ Instagram

✅ SHOWROOM

✅ TikTok

✅ Twitter/X

## Install

```shell
pnpm i jkt48-sns
```

## Example

```javascript
import { membersInstagram, officialsInstagram } from 'jkt48-sns';

console.log(Object.values(membersInstagram));
console.log(Object.values(officialsInstagram));

// Or put them all together
const allInstagram = Object.values({
    ...membersInstagram,
    ...officialsInstagram,
});
console.log(allInstagram);
/*
[
  { id: '51673997280', username: 'jkt48.amanda.s' },     
  ...
  { id: '4775538769', username: 'jkt48mrch' }
]
*/

// Or get data for specific member
console.log(membersInstagram.fiony); // { id: '14997520514', username: 'jkt48.fiony' }
```
