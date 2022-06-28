type Obj = Record<string, unknown>;

const getQueryParams = (): Obj =>
  new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop as string),
  }) as unknown as Obj;

export { getQueryParams };
