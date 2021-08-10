import 'jest-canvas-mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import ListBoxOrders from '../components/ListBoxOrders';

configure({ adapter: new Adapter()});
const boxOrders = (
    [{
      boxName: "Trever Williams",
      boxWeight: 10,
      boxColour: "#b2a700",
      boxDestination: "Sweden",
      boxFactor: 1.3
    },
    {
      boxName: "chris",
      boxWeight: 15,
      boxColour: "#05cd00",
      boxDestination: "Brazil",
      boxFactor: 8.6
    },
    {
      boxName: "sven",
      boxWeight: 20,
      boxColour: "#555500",
      boxDestination: "Sweden",
      boxFactor: 1.3
    }]);

describe("", () => {
  const wrapper = mount(<ListBoxOrders orders = {boxOrders}/>)
  it("Listboxorders accepts list of orders", () => {
    expect(wrapper.props().orders).toEqual(boxOrders);
  });
  // test both data props and calculations for total and display.
  it("Total cost should be 168", () => {
    expect(wrapper.contains("168")).toEqual(true);
  })
});