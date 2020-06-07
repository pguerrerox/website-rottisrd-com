# rottisrd.com.do

This is a static website build with a Vue Framework `Nuxt.js` and deploy on `Github Pages`.

### Technologies

- HTML - CSS - JS, the usual suspects.
- Vue.js
- Nuxt.js  ~~Gridsome~~ 

Happy coding!

### Challenges <sub>(nuxt.js)</sub>
- Smaller and effective images, WEBP
Couldn't deloy WEBP images because they don't work on the safary browser., not related to nuxt though. Actually it was fun looking around to deploy PNG to safary and WEBP to the rest.

```bash
gridsome...
- Fetching data from a json file
- Using the gridsome tag <g-image> together with Vue directive <v-for>    
- Problems generating pages or loading, not sure
    1.  Found info related to this problem on the gridsome documentacion. Turns out that gridsome will not generate all the dynamically generated pages (which is very inteligent).
    https://gridsome.org/docs/dynamic-routing/#generating-rewrite-rules
        
decided to change direction and implement nuxt instead.
```
