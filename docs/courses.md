# Examples of courses endpoints

```
https://api-js-wiki.deno.dev/api/courses
```

## Get one courses

To get a specific courses information you may use the question id

### Interface of Question

```ts
export interface Course {
  title: string;
  author: string;
  avatar: string;
  course: string;
  id: string;
}
```

### Curl

```bash
curl https://api-js-wiki.deno.dev/api/courses/js-fernando # id
```

### Javascript

```js
fetch("https://api-js-wiki.deno.dev/api/courses/js-fernando")
    .then(d => d.json())
    .then(data => console.log(data))
```

[Go To Endpoint](https://api-js-wiki.deno.dev/api/courses/js-fernando)


## Get all courses


### Curl

```bash
curl https://api-js-wiki.deno.dev/api/courses # without the id
```

### Javascript

```js
fetch("https://api-js-wiki.deno.dev/api/courses")
    .then(d => d.json())
    .then(data => console.log(data))
```

[Go To Endpoint](https://api-js-wiki.deno.dev/api/courses)



