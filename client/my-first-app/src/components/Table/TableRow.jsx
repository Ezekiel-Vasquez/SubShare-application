import styles from "./TableRow.module.css"


function TableRow({item}) {
    return (
        <tr>
            <td className={styles.td}>{item.name}</td>
            <td>{item.subscription}</td>
            <td>{item.amount}</td>
            <td>
                <span className={`${styles.tag} ${(item.status? styles.paid : styles.pending)}`}>
                    {item.status ? "Paid" : "Pending"}
                </span>
            </td>
        </tr>
    )
}

export default TableRow;