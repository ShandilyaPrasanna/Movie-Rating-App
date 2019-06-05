import movieAppReducer from "../../modules/reducers/movieAppReducer";

const movies = [
  {
    id: "6f69864e-8d7d-4233-8a73-34067efe8c9a",
    title: "Black Panther",
    description:
      "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
    year: "2018",
    duration: "2h 15m",
    director: "Ryan Coogler",
    genre: "Fantasy,Sci-fi",
    reviews: [{ rating: "7.3/10", provider: "IMDb" }]
  },
  {
    id: "6f69864e-8d7d-4233-8a73-34067efe8c9a",
    title: "Black Panther",
    description:
      "After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.",
    year: "2018",
    duration: "2h 15m",
    director: "Ryan Coogler",
    genre: "Fantasy,Sci-fi",
    reviews: [
      { rating: "7.3/10", provider: "IMDb" },
      { rating: "7.3/10", provider: "IMDb" }
    ]
  }
];
const defaultState = {
  loading: false,
  movies: []
};
const state = {
  loading: false,
  movies
};

describe("Check reducer Functionality", () => {
  it("check reducer ", () => {
    expect(
      movieAppReducer(defaultState, { type: "GET_MOVIES", payload: movies })
    ).toMatchObject(state);
    expect(
      movieAppReducer(defaultState, { type: "IS_LOADING", payload: true })
        .loading
    ).toBe(true);
    expect(
      movieAppReducer(defaultState, { type: "Default", payload: "" })
    ).toMatchObject(defaultState);
  });
});
