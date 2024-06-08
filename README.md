# Benchmark Framework that return a simple json { "message": "hello world" }

# PC Specs
- Intel i5 8250U
- 20GB Ram
- Windows 11
- Node 18
- Bun 1.1.1
- Dotnet 8
- Spring Boot 3.3.0
- JDK 22
- Maven 3.9.7
- Laragon 6.0
- Apache 2.4.59
- PHP 8.3.6
- Laravel 11

# Test Method

```bash
$ npm i autocannon -g
$ autocannon -c 100 -d 60 -p 10 127.0.0.1:3000
```

## 1. Dotnet 8

```bash
$ cd dotnet
$ dotnet run
```

## 2. Spring Boot

```bash
$ cd spring-boot
$ mvn spring-boot:run
```

## 3. Laravel

```bash
# If using "php artisan serve --port=3000" I got error Malformed HTTP request

# Temporary solution is to deploy using apache or nginx web server
# Copy contents of laravel into apache or nginx, on my test i will use apache with laragon
# Then hit the url of the deployed laravel apps
```

## 4. Go Basic

```bash
$ cd go-basic
$ go build
$ ./go-basic.exe
```

## 5. Go Fiber

```bash
$ cd fiber
$ go build
$ ./fiber.exe
```

## 6. Go Gin

```bash
$ cd gin
$ go build
$ ./gin.exe
```

## 7. Node Basic

```bash
$ cd node-basic
$ node index.js
```

## 8. Bun Basic

```bash
$ cd node-basic
$ bun index.js
```

## 9. Bun Elysia

```bash
$ cd elysia
$ bun install
$ bun run src/index.ts
```

## 10. Node Express

```bash
$ cd express
$ yarn install
$ node index.js
```

## 11. Bun Express

```bash
$ cd express
$ yarn install
$ bun index.js
```

## 12. Node Fastify

```bash
$ cd fastify
$ yarn install
$ node index.js
```

## 13. Bun Fastify

```bash
$ cd fastify
$ yarn install
$ bun index.js
```

## 14. Bun Hono

```bash
$ cd hono-bun
$ bun install
$ bun index.ts
```

## 15. Node Hono

```bash
$ cd hono-nodejs
$ npm install
$ npm run build && npm run start
```

## 16. Node Koa

```bash
$ cd koa
$ yarn install
$ node index.js
```

## 17. Bun Koa

```bash
$ cd koa
$ yarn install
$ bun index.js
```

## 18. Node Nest Express

```bash
$ cd nestjs-express
$ npm install
$ npm run build
$ node ./dist/main.js
```

## 19. Bun Nest Express

```bash
$ cd nestjs-express
$ npm install
$ npm run build
$ bun ./dist/main.js
```

## 20. Node Nest Fastify

```bash
$ cd nestjs-fastify
$ npm install
$ npm run build
$ node ./dist/main.js
```

## 21. Bun Nest Fastify

```bash
$ cd nestjs-fastify
$ npm install
$ npm run build
$ bun ./dist/main.js
```

## 22. Rust Axum

```bash
$ cd axum
$ cargo clean && cargo build && cargo run
```
