import 'jest-canvas-mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter()});
const wrapper = shallow(<App />)
it("renders without crashing", () => {
    shallow(<App />);
});
  
it("renders addbox link", () => {
    const Link1 = "Add a Box";
    expect(wrapper.contains(Link1)).toEqual(true);
});

it("renders addbox link", () => {
    const Link1 = "Add a Box";
    expect(wrapper.contains(Link1)).toEqual(true);
});
