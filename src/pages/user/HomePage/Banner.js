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
        <SliderItem src={"https://imgur.com/hD9sl8M.jpg"} alt="pic1" />
        <SliderItem src={"https://imgur.com/3WznfZI.jpg"} alt="pic2" />
        <SliderItem src={"https://imgur.com/SgjY53n.jpg"} alt="pic3" />
      </Slider>
    </BannerContent>
  );
}
