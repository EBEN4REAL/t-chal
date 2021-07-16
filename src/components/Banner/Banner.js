import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/img/r.jpg'

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="banner__container app-width">
                <h2 className="banner__header font-bold text-white">
                    Juniors make IT work.
                </h2>
                <p className="text-white">Hire and invest in highly skilles juniors now.</p>
                <div className="mt-3">
                    <button className="btn ">Post Offer Now</button>
                </div>
            </div>
        </div>
    )
}
export default Banner