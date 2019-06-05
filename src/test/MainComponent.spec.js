import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MainComponent, mapStateToProps } from "../modules/MainComponent";

const state = {
  app: {
    loading: true,
    images: [],
    pagination: {}
  }
};

configure({ adapter: new Adapter() });
describe("MainComponent Test", () => {
  let tree;
  const getMoviesAction = jest.fn();
  const isLoading = jest.fn();
  const props = {
    getMoviesAction,
    isLoading,
    loading: true
  };
  beforeEach(() => {
    tree = shallow(<MainComponent {...props} />);
  });

  it("renders MainComponent ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("mapStateToProps ", () => {
    expect(mapStateToProps({ app: { loading: true } }).loading).toBe(true);
  });
});
