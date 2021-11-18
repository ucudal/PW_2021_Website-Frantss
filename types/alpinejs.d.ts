declare module 'https://cdn.skypack.dev/alpinejs' {
  function start(): void;
  function store<T>(name: string, store: T): void;
  function data<T>(name: string, data: T): void;
}
