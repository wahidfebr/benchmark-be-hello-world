# Benchmark Framework that return a simple json { "message": "hello world" }

# PC Specs
- Intel i5 8250U
- 20GB Ram
- Windows 11
- Node 18
- Bun 1.1.1
- Dotnet 8
- Spring Boot 3.3.0

## Rust Axum

```bash
$ cd axum
$ cargo clean && cargo build && cargo run
```

## Dotnet 8

```bash
$ cd dotnet
$ dotnet run
```

## Bun Elysia

```bash
$ cd elysia
$ bun install
$ bun run src/index.ts
```

## Node Express

```bash
$ cd express
$ yarn install
$ node index.js
```

## Bun Express

```bash
$ cd express
$ yarn install
$ bun index.js
```
