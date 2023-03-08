# Examples of questions endpoints

```
https://api-js-wiki.deno.dev/api/questions
```

## Get one questions

To get a specific questions information you may use the question id

### Interface of Question

```ts
export interface Question {
  url: string
  title: string;
  id: string;
  content: string;
  code: string;
}
```

### Curl

```bash
curl https://api-js-wiki.deno.dev/api/questions/this-js # id
```

### Javascript

```js
fetch("https://api-js-wiki.deno.dev/api/questions/this-js")
    .then(d => d.json())
    .then(data => console.log(data))
```

[Go To Endpoint](https://api-js-wiki.deno.dev/api/questions/this-js)


## Search questions by a query

En el endpoint se coloca la query en base a buscar por ejemplo `que`

### Curl

```bash
curl https://api-js-wiki.deno.dev/api/questions/search/que # id
```

### Javascript

```js
fetch("https://api-js-wiki.deno.dev/api/questions/search/que")
    .then(d => d.json())
    .then(data => console.log(data))
```

[Go To Endpoint](https://api-js-wiki.deno.dev/api/questions/search/que)




## Get all questions


### Curl

```bash
curl https://api-js-wiki.deno.dev/api/questions # without the id
```

### Javascript

```js
fetch("https://api-js-wiki.deno.dev/api/questions")
    .then(d => d.json())
    .then(data => console.log(data))
```

[Go To Endpoint](https://api-js-wiki.deno.dev/api/questions)



