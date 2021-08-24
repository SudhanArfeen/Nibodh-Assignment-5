import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {
    const [Xyz, setXyz] = useState([9, "po", { Lk: "po" }]);
    console.log({ state: Xyz });
    const normal = () => {
        setXyz(56)
    }

    var arr2 = [
        { link: "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        { link: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg"},
        { link: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" },
        { link: "https://i.pinimg.com/originals/31/38/11/313811274a28746379ebf4d4fcf7842b.jpg" },
        { link: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg" },
        { link: "https://www.marshallsindia.com/images/younique/nature/nature-cover-slider-6.jpg" },
        { link: "https://img.freepik.com/free-photo/odenwald-germany-is-pure-nature_181624-32381.jpg?size=626&ext=jpg" },
        { link: "https://rukminim1.flixcart.com/image/416/416/j7usl8w0/poster/5/c/h/medium-beautiful-nature-wallpapers-poster-png6n7po1154-original-imaexz5rzfmqkkv8.jpeg?q=70" },
    ]


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows:true,
    };

    return (
        // dom html tags /components reacts components
        <div style={{backgroundColor: "#fff7e6", height: "320px"}} >

<br/>

            <div class="button9 onClick={normal}">NATURE HERE</div>
            <br/>
            <br/>
            <br/>        

            <Slider arrows={true} {...settings}>
                {
                    arr2.map(data => {

                        return (<div>
                            <img className=" slider-image-team" src={data.link} alt="" />
                        </div>)
                    })
                }


            </Slider>
        </div>
    )
}