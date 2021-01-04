import Slider from "react-slick";
import { BannerContent, BannerImgContent, BannerImg } from "./style";

function SliderItem(props) {
  return (
    <BannerImgContent>
      <BannerImg src={props.src} alt={props.alt} />
    </BannerImgContent>
  );
}

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
  };
  return (
    <BannerContent>
      <Slider {...settings}>
        <SliderItem
          src={
            "https://images.unsplash.com/photo-1562007908-69cf18a6da04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          }
          alt="pic1"
        />
        <SliderItem src={"https://imgur.com/HB8fY8K.jpg"} alt="pic2" />
        <SliderItem
          src={
            "https://images.unsplash.com/photo-1601000937859-3031d1be1caa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          }
          alt="pic3"
        />
      </Slider>
    </BannerContent>
  );
}
