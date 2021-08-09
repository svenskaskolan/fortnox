import { useState } from "react";
import { ChromePicker } from "react-color";

const AddBoxForm = (props) => {

    const [custName, setCustName] = useState('');
    const [custWeight, setCustWeight] = useState();
    const [custColour, setCustColour] = useState();
    const [selectedColour, setSelectedColour] = useState(custColour);
    const [custCountry, setCustCountry] = useState('Sweden');
    const [textColour, setTextColour] = useState('black');
    const [formIsValid, setFormIsValid] = useState(true);
    const [showToaster, setShowToaster] = useState(false);
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

    const validateForm = () => {
        if (!custName || !custWeight || custWeight < 0 || !selectedColour || !custCountry ) {
            setFormIsValid(false);
            return;
        }
        props.onSubmitFunction(custName, custWeight, selectedColour, custCountry)
        setCustName('');
        setCustWeight('');
        setSelectedColour('');
        setCustCountry('');
        setFormIsValid(true);
        // assume we get successful post to server.
        setShowToaster(true);
        setTimeout(function(){ setShowToaster(false) }, 3000);
    }

    return (
        <>
        <div className="Card">
            <div className="Card__title">Add new Box</div>
            <div>
                <input placeholder="Name" type="text" value={custName} onChange={event => setCustName(event.target.value)}/>
                {!formIsValid && !custName && (<div className="Card__errormessage">you need to enter a name</div>)}
            </div>
            <div>
                <input placeholder="Weight" type="number" value={custWeight} onChange={event => setCustWeight(event.target.value)} />
                {!formIsValid && (!custWeight || custWeight < 0) && (<div className="Card__errormessage">enter a positive value for weight</div>)}
            </div>
            <div>
                <button style={{backgroundColor: selectedColour, color: textColour}} onClick={colourPickerButton}>
                    {viewColourPicker ? 'Select colour' : 'Click to change color'}
                </button>
                {!formIsValid && !selectedColour && (<div className="Card__errormessage">you need to select a colour</div>)}
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
                {!formIsValid && !custCountry && (<div className="Card__errormessage">you need to enter a country</div>)}
            </div>
            <div>
                <button type="submit" className="Card__button" onClick={validateForm}>Save</button>
            </div>
        </div>
        <div className={showToaster ? "Card__toaster show" : "Card__toaster"}>
            <span> Box has been added</span>
        </div>
    </>
    )
}

export default AddBoxForm;