export function MyLine (props){
    const { Name, Position, Office, Age, StartDate, Salary } = props;
    return(
        <tr>
            <td>{Name}</td>
            <td>{Position}</td>
            <td>{Office}</td>
            <td>{Age}</td>
            <td>{StartDate} </td>
            <td>{Salary}</td>
        </tr>
    );
}