import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from ".../../modules/components/Footer";

jest.mock("react-dom");

configure({ adapter: new Adapter() });
describe("Footer Test", () => {
  let tree;
  beforeEach(() => {
    tree = shallow(<Footer />);
  });

  it("renders Footer ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
