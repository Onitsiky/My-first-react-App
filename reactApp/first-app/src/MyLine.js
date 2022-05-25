import { data } from "./data";

export function Myline(){
        return(
            <>
                {
                    data.map((data, key) =>{
                        return(
                        <tr>
                            <td>{data.Name}</td>
                            <td>{data.Position}</td>
                            <td>{data.Office}</td>
                            <td>{data.Age}</td>
                            <td>{data.StartDate} </td>
                            <td>{data.Salary}</td>
                        </tr>
                        )
                    })
                }
            </>
        )
}