
const AddBoxHeader = (props: {title: string}) => {
    return (
        <div className="addBoxHeader">
            <h1>
                {props.title}
            </h1>
        </div>
    )
}

export default AddBoxHeader;