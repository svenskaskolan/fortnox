/* const AddBoxHeader = (props: {title: string}) => {
    return (
        <div className="addBoxHeader">
            <h1>
                {props.title}
            </h1>
        </div>
    )
} */
// example of a class component below.
import {Component} from "react";
interface IHeaderProps {
    title: string;
}
class AddBoxHeader extends Component<IHeaderProps> {
    render() {
        return (
            <div className="addBoxHeader">
            <h1>
                {this.props.title}
            </h1>
        </div>
        )
    }
}

export default AddBoxHeader;