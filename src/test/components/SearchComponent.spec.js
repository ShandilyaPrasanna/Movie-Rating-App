import React from "react";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchComponent } from "../../modules/components/SearchComponent";

jest.mock("react-dom");

configure({ adapter: new Adapter() });
describe("SearchComponent Test", () => {
  let tree;
  const getMoviesAction = jest.fn();
  const isLoading = jest.fn();

  const props = {
    getMoviesAction,
    isLoading,
    classes: {}
  };
  beforeEach(() => {
    tree = shallow(<SearchComponent {...props} />);
  });

  it("renders SearchComponent ", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("check onChange of searchBar ", () => {
    tree.find("#searchBar").simulate("change", { target: { value: "apple" } });
    setTimeout(function() {
      try {
        done();
      } catch (e) {
        done.fail(e);
      }
      expect(tree.state("searchTxt")).toBe("apple");
    }, 500);
  });
  it("check checkbox state change ", () => {
    tree.find("#checkboxGenre").simulate("change");
    expect(tree.state("checked").genre).toBe(true);
  });
  it("check checkbox state change ", () => {
    tree.find("#checkboxYear").simulate("change");
    expect(tree.state("checked").year).toBe(true);
  });
  it("Apply filter button functionality ", () => {
    tree.setState({ checked: { year: true, genre: true } });
    tree.find("#applyFiler").simulate("click");
    expect(getMoviesAction).toHaveBeenCalled();
    expect(isLoading).toHaveBeenCalled();
  });

  it(" filter year change handler ", () => {
    tree
      .find("#standard-genre")
      .simulate("change", { target: { value: 2019 } });
    expect(tree.state("filterValues").year).toBe(2019);
  });
});
