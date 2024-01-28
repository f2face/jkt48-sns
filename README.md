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

## Example Usage

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
```
