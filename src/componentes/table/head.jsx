function Head(props){

    // no renderizar el header tools si no hay datos
    let toolsColumn = <></>;
    if (props.tools && props.tools.length > 0) {
        toolsColumn = <th key="Tools" scope="col">Tools</th>;
    }

    return(
        <thead className="table-dark">
            <tr>
                {props.columnsAlias.map((value) => {
                    return (<th key={value} scope="col">{value}</th>)
                })}
                {toolsColumn}
            </tr>
        </thead>
    );
}
export default Head;