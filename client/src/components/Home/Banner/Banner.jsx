import "./Banner.scss";
import BannerImg from "../../../assets/Apple-iPhone-15-Pro-Max.png";

const Banner = () => {
    return (
<div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Hello Every Body</p>
                <div className="ctas">
                    <div className="banner-cta">Red More</div>
                    <div className="banner-cta v2">Shopping</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>
    );
};
export default Banner;
