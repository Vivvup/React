import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Carousel () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
            {["../pictures/children.png", "../pictures/dog.png","../pictures/elephant.png","../pictures/flowers.png","../pictures/modern.png","../pictures/sea.png"].map((element, i) => <div key={i}>
            <img className= "carousel_item" src={element} alt="" />
          </div>)}
        </Slider>
      );
    }

export default Carousel;