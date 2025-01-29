import Body from "./body";
import Head from "./head";

function Table(props) {
return (
    <table className="table table-striped table-hover">
        <Head 
            columnsAlias={props.columnsAlias} 
            tools={props.tools} 
            setData={props.setData} 
            data={props.data} c
            columns={props.columns}/>
        <Body 
            editproduct={props.editproduct} 
            delproduct={props.delproduct} 
            data={props.data} 
            columns={props.columns} 
            tools={props.tools} 
            path={props.path}/>
    </table>
);
}
export default Table;