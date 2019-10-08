# ABOUT

Just some react stuff with data in it.

A project that I ended up sticking with despite initially having written it in a manner that suggested the opposite.
 

OCTOBER 7, 2019:
TS2339: Type error when trying to call Object.values(targetObject) . 
> I got an error when trying to pull the values into an array out of object.  MDN says you can [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values).  However, it turns out it wasn't added until es2017 and if your `tsconfig.json` was not configured to account for that then typescript will flag that method call as a type error.  It can be resolved by appending "es2017" to the "compilerOptions"."lib" array as denoted below:

```json
"compilerOptions": {
    "lib": ["es2017"]
}
```

The solution was found [here](https://stackoverflow.com/a/42967397).

OCTOBER 4, 2019: 
TS2362: Error when doing arithmetic operations on dates.

> I got an error whilst doing math using `Date` objects.  I used [this](https://github.com/microsoft/TypeScript/issues/5710) as a reference.  I ended up using the `+` operator in front of the new `Date` objects ( +new Date()).  It made the type errors go away.

JULY 10:
Things I've learned from trying Typescript:

1. Sometimes `export default ComponentName` doesn't work. You need named exports.

2. Unfortunately, `React.lazy(() => import("./MyComponent"))` doesn't work well without default exports so you're forced to resort to weird looking things as follows: `javascript const Home = React.lazy(() => import("./Home").then(({ Home }) => ({ default: Home })));`

3. You can't or shouldn't use file extentions (.tsx|.ts) when importing relative files at the top of your components because when the code is transformed by babel or what not the extensions don't change with it and the code can't find itself.

4. Set "resolveJsonModule": true in `tsconfig.json` if you want to read in data from a JSON file.

5. Add "es2018.promise" to "lib": [] in the `tsconfig.json` if you want to use `.finally(()=>{})`. [Source](https://stackoverflow.com/questions/52079031/property-finally-does-not-exist-on-type-promisevoid)

6. There was some issue with Styled Components and Typescript such that there was an error with compilation. I resolved the issue by following the directions provided [here](https://stackoverflow.com/questions/52079031/property-finally-does-not-exist-on-type-promisevoid). I think edited `tsconfig.json` to have "types": []. With "node" contained within that array. Another solution was to set a field "skipLibCheck": true in `tsconfig.json` but the sentiment I got from reading the comments suggested that was subideal.

JULY 3: Adding Typescript.

JUNE 28: Currently wondering if it is a bad idea to integrate typescript into this because technology fads/trends.
