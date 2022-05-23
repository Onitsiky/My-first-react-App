export function MyHead (props){
    const { Name, Position, Office, Age, StartDate, Salary } = props;
    return(
        <tr>
            <th>{Name}</th>
            <th>{Position}</th>
            <th>{Office}</th>
            <th>{Age}</th>
            <th>{StartDate} </th>
            <th>{Salary}</th>
        </tr>
    );
}