import { useState } from "react";
import { ChromePicker } from "react-color";

const AddBoxForm = (props) => {

    const [custName, setCustName] = useState('');
    const [custWeight, setCustWeight] = useState();
    const [custColour, setCustColour] = useState();
    const [selectedColour, setSelectedColour] = useState(custColour);
    const [custCountry, setCustCountry] = useState('Sweden');
    const [textColour, setTextColour] = useState('black');
    var [viewColourPicker, toggleColourPicker] = useState(false);

    const colourPickerButton = () => {
        toggleColourPicker(viewColourPicker = !viewColourPicker);
        setSelectedColour(custColour);
        try {
            const redColour = parseInt(custColour.substr(1,2), 16);
            const greenColour = parseInt(custColour.substr(3,2), 16);
            if (redColour < 100 && greenColour < 100) {
                setTextColour('white');
            } else {
                setTextColour('black');
            }
        } catch(e) {
            setTextColour('black');
        }
    }


    return (
        <div className="AddBoxForm">
            <div>
                <input placeholder="Name" type="text" value={custName} onChange={event => setCustName(event.target.value)}/>
            </div>
            <div>
                <input placeholder="Weight" type="number" value={custWeight} onChange={event => setCustWeight(event.target.value)} />
            </div>
            <div>
                <button style={{backgroundColor: selectedColour, color: textColour}} onClick={colourPickerButton}>
                    {viewColourPicker ? 'Select' : 'Click to change color'}
                </button>
                <div className={viewColourPicker ? 'show' : 'hide'}>
                    <ChromePicker className="colourPicker" color={custColour} disableAlpha={true} onChange={updatedColor => setCustColour(updatedColor.hex.substr(0,5) + '00')}/>
                </div>
            </div>
            <div>
                <select value={custCountry} onChange={event => setCustCountry(event.target.value)} >
                    <option>Sweden</option>
                    <option>China</option>
                    <option>Brazil</option>
                    <option>Australia</option>
                </select>
            </div>
            <div>
                <button type="submit" className="saveButton" onClick={() => props.onSubmitFunction(custName, custWeight, selectedColour, custCountry)}>Save</button>
            </div>
        </div>
    )
}

export default AddBoxForm;