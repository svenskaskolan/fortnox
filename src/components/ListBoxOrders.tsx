import '../css/listItem.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import '../css/SuperResponsiveTableStyle.css';
import tBoxinatorData from '../interfacesAndTypes/tBoxinatorData';
import { useEffect, useState } from 'react';

//Display box orders in a reactive way.
const ListBoxOrders = (props: {orders:tBoxinatorData[]}) => {
    let [totalWeight, setTotalWeight] = useState(0);
    let [totalCost, setTotalCost] = useState(0);

    // set the totals, update the totals on change of data.  In this example we dont have a central database so wont see any effect.
    useEffect(() => {
        setTotalWeight(props.orders.reduce((total, order) =>  total = total + order.boxWeight, 0));
        setTotalCost(props.orders.reduce((total, order) => total = total + (order.boxWeight * order.boxFactor), 0))
    }, [props.orders]);

    return (
        <div className="ListItem">
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
                {props.orders.map((data, index) =>
                    <Tr key={index}>
                        <Td>{data.boxName}</Td>
                        <Td>{data.boxWeight} Kilograms</Td>
                        <Td style={{backgroundColor: data.boxColour}}></Td>
                        <Td>{data.boxWeight * data.boxFactor} SEK</Td>
                    </Tr>
                )}
                </Tbody>
            </Table>
            <div className="Listitem__totals">
                <div>Total Weight: {totalWeight}</div>
                <div>Total Cost: {totalCost}</div>
            </div>
        </div>
    )
}

export default ListBoxOrders;