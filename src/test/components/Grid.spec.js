import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  movieGrid as Grid,
  mapStateToProps
} from "../../modules/components/Grid";

jest.mock("react-dom");

const movies = [
  {
    _id: "6f69864e-8d7d-4233-8a73-34067efe8c9a",
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
    _id: "6f69864e-8d7d-4233-8a73-34067efe8c9a",
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

configure({ adapter: new Adapter() });
describe("movieGrid Test", () => {
  let tree;
  const props = {
    movies: movies,
    classes: {}
  };
  beforeEach(() => {
    tree = shallow(<Grid {...props} />);
  });

  it("renders movieGrid ", () => {
    expect(mapStateToProps({ app: { movies } }).movies).toMatchObject(movies);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
