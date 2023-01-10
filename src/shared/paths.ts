export const paths = {
  home: (state: { query?: string } = {}) =>
    state.query ? `/?search=${state.query}` : "/",
  tvShow: (id: number) => `/shows/${id}`,
};
