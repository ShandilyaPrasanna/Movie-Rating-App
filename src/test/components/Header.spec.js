import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from ".../../modules/components/Header";

jest.mock("react-dom");

configure({ adapter: new Adapter() });
describe("Header Test", () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<Header />);
  });

  it("renders Header ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
