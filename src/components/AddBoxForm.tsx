import { useState } from "react";
import { ChromePicker } from "react-color";
import tAddBoxFormProps from "../interfacesAndTypes/tAddBoxFormProps";

const AddBoxForm = ({onSubmitFunction, optionsList}: tAddBoxFormProps) => {
    // Sweden set to the default country
    const [custName, setCustName] = useState('');
    const [custWeight, setCustWeight] = useState(0);
    const [custColour, setCustColour] = useState('');
    const [selectedColour, setSelectedColour] = useState(custColour);
    const [custCountry, setCustCountry] = useState('Sweden');
    const [countryFactor, setCountryFactor] = useState(1.3);
    const [textColour, setTextColour] = useState('black');
    const [formIsValid, setFormIsValid] = useState(true);
    const [showToaster, setShowToaster] = useState(false);
    var [viewColourPicker, toggleColourPicker] = useState(false);

    const colourPickerButton = () => {
        toggleColourPicker(viewColourPicker = !viewColourPicker);
        try {
            if (custColour) {
                setSelectedColour(custColour);
                const redColour = parseInt(custColour.substr(1,2), 16);
                const greenColour = parseInt(custColour.substr(3,2), 16);
                if (redColour < 100 && greenColour < 100) {
                    setTextColour('white');
                } else {
                    setTextColour('black');
                }
            }
        } catch(e) {
            setTextColour('black');
        }
    }
    // ToDo find correct typescript definition for the select event click.
    // update both the country name and value.  Name is not used currently, but keep it in the database for future.
    const setCountryData = (event:any) => {
        setCustCountry(event.target.options[event.target.selectedIndex].innerText);
        setCountryFactor(Number(event.target.value));
    }

    // only after submitting, check that all values are entered, then post the changes and reset the form.
    // show a toaster message if all saved well.
    const validateForm = () => {
        if (!custName || !custWeight || custWeight < 0 || !selectedColour || !custCountry ) {
            setFormIsValid(false);
            return;
        }
        // with backend this would be async with callback for errors and success
        onSubmitFunction(custName, custWeight, selectedColour, custCountry, countryFactor);
        //assume success
        setCustName('');
        setCustWeight(0);
        setSelectedColour('');
        setCustCountry('Sweden');
        setCountryFactor(1.3);
        setFormIsValid(true);
        setShowToaster(true);
        // switch off the toaster message after 3 seconds.
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
                <input placeholder="Weight in Kgs" type="number" value={custWeight || ''} onChange={event => setCustWeight(parseFloat(event.target.value))} />
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
                <select value={countryFactor} onChange={event => setCountryData(event)} >
                    {optionsList.map((data, index) =>
                        <option key={index} value={data.countryFactor}>{data.countryName}</option>
                    )}
                </select>
                {!formIsValid && !custCountry && (<div className="Card__errormessage">you need to enter a country</div>)}
            </div>
            <div>
                <button type="submit" className="Card__button" onClick={validateForm}>Save</button>
            </div>
        </div>
        <div className={showToaster ? "Card__toaster show" : "Card__toaster"}>
            <span>Box has been added</span>
        </div>
    </>
    )
}

export default AddBoxForm;