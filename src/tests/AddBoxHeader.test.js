import 'jest-canvas-mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import AddBoxForm from '../components/AddBoxForm';

// ToDo more testing needed for this component.
configure({ adapter: new Adapter()});
const countryValues = 
    [{
      countryName: 'Sweden',
      countryFactor: 1.3
    },
    { countryName: 'China',
      countryFactor: 4,
    },
    {
      countryName: 'Brazil',
      countryFactor: 8.6
    },
    { countryName: 'Australia',
      countryFactor: 7.2,
    }]

describe("", () => {
  const wrapper = mount(<AddBoxForm optionsList = {countryValues}/>)
  it("AddBoxForm accepts country values", () => {
    expect(wrapper.props().optionsList).toEqual(countryValues);
  });
});