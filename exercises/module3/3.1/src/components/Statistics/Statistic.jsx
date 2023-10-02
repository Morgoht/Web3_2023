const Statistic = ({name, value}) => {

    return (
        <tr>
            <th>{name} : </th>
            <td> {value}</td>
        </tr>
    )
}
export default Statistic