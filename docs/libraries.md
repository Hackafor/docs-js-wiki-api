# Examples of libraries endpoints

```
https://api-js-wiki.deno.dev/api/libraries
```

### Interface of Library

```ts
export interface Library {
  name: string;
  id: string;
  link: string
  logo: string
}

```

## Get all libraries

### Curl

```bash
curl https://api-js-wiki.deno.dev/api/libraries # id
```

### Javascript

```js
fetch("https://api-js-wiki.deno.dev/api/libraries")
    .then(d => d.json())
    .then(data => console.log(data))
```

[Go To Endpoint](https://api-js-wiki.deno.dev/api/libraries)


