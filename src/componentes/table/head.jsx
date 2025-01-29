import { useState } from "react";

function Head(props){

    // No renderizar el header tools cuando no hay datos 
    let toolsColumn = <></>;
    if (props.tools && props.tools.length > 0) {
        toolsColumn = <th key="Tools" scope="col">Tools</th>;
    }
    // Ordenar ascendentemente o descendentemente
    const [orden, setOrden] = useState({ key: null, sentido: "asc"});

    function sortData(column) {
        // Cambiar el sentido de la ordenación
        const newOrder = orden.key === column && orden.sentido === "asc" ? "desc" : "asc";
        setOrden({ key: column, sentido: newOrder });

        // Ordenar los datos
        let sortedData = [...props.data].sort((a, b) => {
            if (a[column] > b[column]) {
                return newOrder === "asc" ? 1 : -1;
            }
            if (a[column] < b[column]) {
                return newOrder === "asc" ? -1 : 1;
            }
            return 0;
        });

        props.setData(sortedData);
    }

    return(
        <thead className="table-dark">
            <tr>
                {props.columnsAlias.map((value, index) => {
                    return (
                    <th className="cursor-pointer" key={value} scope="col" onClick={() => sortData(props.columns[index])}>
                        {value} {orden.key === props.columns[index] ? (orden.sentido === "asc" ? "▲" : "▼") : ""}
                    </th>
                    );
                })}
                {toolsColumn}
            </tr>
        </thead>
    );
}
export default Head;