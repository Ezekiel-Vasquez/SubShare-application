import styles from "./TableHeader.module.css";

function TableHeader () {
    return(
        <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th>Subscription</th>
            <th>Amount</th>
            <th>Status</th>
        </tr>
    )
}

export default TableHeader;