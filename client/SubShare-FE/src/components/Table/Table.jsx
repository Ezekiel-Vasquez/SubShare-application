import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./Table.module.css";

//sample data
const data = [
    {id:1, name: "test3", subscription: "Netflix", amount: 900, status: false},
    {id:2, name: "test", subscription: "Netflix", amount: 900, status: false},
    {id:3, name: "test2", subscription: "Netflix", amount: 900, status: true}
];

function Table () {
    return (
        <table className={styles.table}>
            <thead>
                <TableHeader />
            </thead>  
            <tbody>
                {data.map((item) => (
                    <TableRow key={item.id} item={item}/>
                ))}
            </tbody>          
        </table>
    )
}

export default Table;