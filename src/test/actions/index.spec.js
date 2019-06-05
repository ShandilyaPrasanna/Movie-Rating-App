import { getMoviesAction, isLoading } from "../../modules/actions";

const response = {
  movies: [],
  loading: false
};

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    statusText: "success",
    json: () => {
      return response;
    }
  })
);

describe("Check actions", () => {
  it("Test for action getMoviesAction ", () => {
    getMoviesAction("apple")();
    expect(getMoviesAction("apple")).toBeInstanceOf(Function);
  });

  it("Test for action isLoading ", () => {
    expect(isLoading(true)).toMatchObject({
      type: "IS_LOADING",
      payload: true
    });
  });
});
