import '../css/listItem.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import '../css/SuperResponsiveTableStyle.css';
import tBoxinatorData from '../interfacesAndTypes/tBoxinatorData';
import countryValues from '../enums/countryValues';

const ListBoxOrders = (props: {orders:tBoxinatorData[]}) => {
    return (
        <div className="listItem">
            <Table>
                <Thead>
                    <Tr>
                        <Th>Reciever</Th>
                        <Th>Weight</Th>
                        <Th>Box colour</Th>
                        <Th>Shipping cost</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {props.orders.map(data =>
                    <Tr>
                        <Td>{data.boxName}</Td>
                        <Td>{data.boxWeight}</Td>
                        <Td style={{backgroundColor: data.boxColour}}></Td>
                        <Td>{data.boxWeight * 5}</Td>
                    </Tr>
                )}
                </Tbody>
            </Table>
        </div>
    )
}

export default ListBoxOrders;