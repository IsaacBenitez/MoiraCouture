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
        }
    },[props.data])


    function newProduct(product){
        props.setData([...props.data, product])
    }

    function delProduct(idProduct){
        const productIndex = props.data.findIndex(producto => producto.id === idProduct);
        props.data.splice(productIndex,1)
        setData(props.data)
        setReload(!reload)
    }

    function editProduct(editedProduct, idProduct){
        editedProduct["id"] = idProduct;
        const productIndex = props.data.findIndex(producto => producto.id === editedProduct.id);
        props.data[productIndex] = editedProduct
        setData(props.data)
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
                setData={setData}
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