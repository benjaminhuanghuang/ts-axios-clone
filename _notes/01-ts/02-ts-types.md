## TypeScript Basic types

- boolean

- number
```
  let decLiteral: number = 20
  let hexLiteral: number = 0x14
  let binLiteral: number = 0b10100
  let octLiteral: number = 0o24
```

- string

- array
````
  let list: number[] = [1, 2, 3]  
  let list: Array<number> = [1, 2, 3]
````

- tuple
````
  let x: [string, number] = ['hello', 10]
````
- enum
````
  enum Color {
    Red,
    Green,
    Blue
  }

  let c:Color = Color.Green

  let colorName:string = Color[2]     // get enum name
````
- any

- void, null, undefined
```
  let u:void = undefined 
  let u:void = null 
```
enblen the check
```
  tsc index.ts --strictNullChecks
```
- never
```

```
- object
```
```

## 类型推断
``` 
  let someVal: any = 'this is a string'

  let strLength: number = (<string>someVal).length

  let strLength: number = (someVal as string).length
```