type tAddBoxFormProps = {
    onSubmitFunction: (boxname: string, boxweight: number, boxcolour: string, boxdestination: string, boxfactor: number) => void;
    optionsList: {countryName: string;
                countryFactor: number}[];
  }
export default tAddBoxFormProps;