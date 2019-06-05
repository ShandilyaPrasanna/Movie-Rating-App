import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import { App } from "./index";
import Adapter from "enzyme-adapter-react-16";

jest.mock("react-dom");

configure({ adapter: new Adapter() });
describe("movieGrid Test", () => {
  let tree;

  beforeEach(() => {
    tree = shallow(<App />);
  });

  it("renders App ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
