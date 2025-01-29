import MainPage from "../table/mainPage";
import getAllProducts from "../../requests/getAllProducts";
import React, {useEffect, useState} from "react";

function IndexDashboard(props) {
    const [data, setData] = useState([]);

    //TODO: COGER DATOS DE MONGO
    useEffect(() => {
        getAllProducts().then(result => {
            setData(result)
        })
    }, []);

    return (
        <div className="mx-5">
            <div>
                <h2 className="border-bottom text-center mx-5 py-2">GESTIÓN DEL CATÁLOGO DE PRODUCTOS</h2>
            </div>
            <MainPage
                data={data}
                setData={setData}
                name={"Lista de productos"}
                columns={["imagen", "categoria", "nombre", "sexo", "talla", "color", "precio", "stock"]}
                columnsAlias={["Foto", "Categoria", "Nombre", "Sexo", "Talla", "Color", "Precio", "Stock"]}
                tools={["update", "delete"]}
                path={"/DashboardProductos"}
            />
        </div>
    );
}

export default IndexDashboard;