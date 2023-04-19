
import hero from '../../assets/icons/hero.png';
import hombre from '../../assets/icons/hombre.png';
import mujer from '../../assets/icons/mujer.png';
import '../../css/App.css';
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import carousel from "bootstrap/js/src/carousel";
/* global bootstrap */

function Cards(props) {
    return (
<div >
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1681867681/hero_o9pbjq.png" className="d-block w-100" alt="compadres posando"/>
            </div>
            <div className="carousel-item">
                <img src="https://res.cloudinary.com/ddonlrenm/image/upload/c_scale,h_2160,w_3840/v1681871028/retrato-elegante-pareja-joven-interracial-mirando-camara_1_hmqhf5.jpg" className="d-block w-100" alt="pareja posando"/>
            </div>
            <div className="carousel-item">
                <img src="https://res.cloudinary.com/ddonlrenm/image/upload/c_scale,h_2160,w_3840/v1681871011/foco-superficial-dos-hombres-negros-pie-contra-pared-roja_1_syqbgg.jpg" className="d-block w-100" alt="amigos morenos posando"/>
            </div>
            <div className="carousel-item">
                <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1681867298/165903-beauty-carla_ossa-model-couch-shoulder-1280x720_popotb.jpg" className="d-block w-100" alt="carla posando"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
        <div>
            <div className="container px-5 py-3" />
            <h2 className="pb-2 border-bottom text-center">MODA URBANA 100% COLOMBIANA</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-5 justify-content-center">

                <div className="col mx-4">
                    <div className="card card-cover overflow-hidden  rounded-4 shadow-lg">
                        <Link to={"/Hombre"} className="links nav-link link-secondary">
                        <img className="image-hover-effect" src={hombre} alt="Imagen Hombre" />
                        </Link>
                    </div>
                </div>
                <div className="col mx-4">
                    <div className="card card-cover overflow-hidden  rounded-4 shadow-lg">
                        <Link to={"/Mujer"} className="links nav-link link-secondary">
                            <img className="image-hover-effect" src={mujer} alt="Imagen Mujer" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}

export default Cards;