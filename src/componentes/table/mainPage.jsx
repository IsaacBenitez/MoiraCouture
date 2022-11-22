import Table from "./table";
import CreateButton from "./createButton";
import SearchBar from "./searchBar";
import {useEffect, useState} from "react";


function MainPage(props) {
    const [reload, setReload] = useState(false);
    const [data, setData] = useState([]);

    // esta pendiente de cargar el componente cada que reciba datos
    useEffect(() => {
        if(props.data){
            setData(props.data)
        console.log("settie data")}
    },[props.data])

    function newProduct(product){
        setData([...data, product])
    }

    function delProduct(idProduct){
        const newData = data.filter(producto => producto.id !== idProduct);
        setData(newData)
    }

    function editProduct(editedProduct, idProduct){
        editedProduct["id"] = idProduct;
        const productIndex = data.findIndex(producto => producto.id === editedProduct.id);
        data[productIndex] = editedProduct
        setReload(!reload)
    }


    return (
        <div>
            <div className="d-flex justify-content-end mx-3 mb-2">
                <SearchBar
                    setData={setData}
                    data={props.data}
                    columns={props.columns}
                />
                <CreateButton newproduct={newProduct} path={props.path} />
            </div>
            <Table
                editproduct={editProduct}
                delproduct={delProduct}
                data={data}
                name={props.name}
                columns={props.columns}
                columnsAlias={props.columnsAlias}
                tools={props.tools}
                path={props.path}
            />
        </div>
    );
}
export default MainPage;