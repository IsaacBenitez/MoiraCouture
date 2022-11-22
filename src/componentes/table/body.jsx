import Tools from "./tools";

function Body(props) {
    return (
        <tbody>
        {props.data.length  > 0 && props.data.map((row, rowIndex) => {
            return (
                <tr key={rowIndex}>
                    {props.columns.map( (column) => {
                        if (column === "imagen") {
                            return (
                                <td key={column} className= "align-middle w-25">
                                    <img src={row[column]} alt="Imagen producto" width="20%" className="rounded" id="imgDashboard"/>
                                </td>
                                )
                        }
                        return (
                        <td key={column} className= "align-middle">{row[column]}</td>
                        )
                    })}
                    <Tools
                        editproduct={props.editproduct}
                        delproduct={props.delproduct}
                        tools={props.tools}
                        path={props.path}
                        producto={row}
                    />
                </tr>
            )
        })}
        </tbody>
    )
}

export default Body;