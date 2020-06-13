import React, { useState } from 'react';
import styles from './style.module.scss';
import './style.scss';
import dataInsta from './dataInstagram';
// import Instafeed from 'instafeed.js';




function HomePage() {
    console.log(dataInsta);
    const stories = [
        {
            pathImage: 'https://instagram.fsgn5-4.fna.fbcdn.net/v/t51.2885-15/e35/90707976_143536407176234_8897186274773102090_n.jpg?_nc_ht=instagram.fsgn5-4.fna.fbcdn.net&_nc_cat=102&_nc_ohc=gggkMJBRfSMAX_DBp_P&oh=076993dcba9162f95bd14be8c115c85e&oe=5F0BB3FA',
            title: 'To you, yes you'
        },
        {
            pathImage: 'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/91774977_577602593110807_3245127335149713062_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=107&_nc_ohc=J9fN5zCLSpMAX9AQjIn&oh=986f3e1a08d853694301fb308b31c191&oe=5F0B4916',
            title: 'stories 1'
        },
        {
            pathImage: 'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/96620438_230574101560151_2539699626693846317_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rBF16rQRB1sAX9fCbzk&oh=82fc51ad09b2ee30160e32a821df825a&oe=5F0ECB70',
            title: 'stories 2'
        },
        {
            pathImage: 'https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/94225605_552148322172196_7227653798673738910_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=X03D38hFzL0AX-8pVhJ&oh=f1fbdb5746379cd3977f3af7561258c5&oe=5F0C05B2',
            title: 'stories 3'
        },
        {
            pathImage: 'https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/93940546_230652091345359_5726510629581984567_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8PISD2x0IaQAX85EQPf&oh=dc50329518c9bf3c1afb8c1859705f95&oe=5F0A2A05',
            title: 'stories 4'
        },
        {
            pathImage: 'https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/96620438_230574101560151_2539699626693846317_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=rBF16rQRB1sAX_SBO9q&oh=4eafc044dec20305b929ff5afe8b02f0&oe=5F0AD6F0',
            title: 'stories 5'
        },
        {
            pathImage: 'https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/e35/90707976_143536407176234_8897186274773102090_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=gggkMJBRfSMAX_gLSJ9&oh=1d7bba03dcdacc17ed27524f52bae5b1&oe=5F0BB3FA',
            title: 'stories 6'
        },
        {
            pathImage: 'https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/101137056_900707570396119_8332778551222636741_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_O91e0yHdn4AX9QVG4a&oh=ed56bdd9ed46a678c1a65fcba92517cf&oe=5F088B7B',
            title: 'stories 7'
        },
        {
            pathImage: 'https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/96001895_257068739003232_4317405867906802364_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=JLbUL1mT-9wAX-4hQnM&oh=26a958448386e93b62f0708548e23287&oe=5F0B5109',
            title: 'stories 8'
        }
    ];
    return (
        <>
            <div id="instafeed" className="hidden"></div>
            <div className="container mt-6 d-flex">
                <div className={`${styles.avatarUser}`}>
                    <div className="avatar avatar-xxl">
                        <div className={`${styles.gradientAvt}`}>
                            <img src="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/96292822_244805370090236_7062501899211112448_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=kAlED3kvz-4AX9aKVge&oh=2ecd67c84b4bb2ff9e5b8ec6c9526a56&oe=5EF797E4" alt="..." className="avatar-img rounded-circle" />
                        </div>
                    </div>
                </div>
                <div className="flex-fill mb-6">
                    <div className="mb-3">
                        <h2>dinhtheloc.png <button className="btn btn-outline-primary ml-6">Edit Profile</button>
                            <span className={`ml-6`}>
                                <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M18.622 9.75h.128a2.25 2.25 0 110 4.5h-.065a.488.488 0 00-.446.295.488.488 0 00.089.54l.045.044a2.25 2.25 0 11-3.183 3.184l-.04-.04a.49.49 0 00-.545-.094.486.486 0 00-.295.444v.127a2.25 2.25 0 11-4.5 0 .524.524 0 00-.363-.514.485.485 0 00-.532.092l-.044.045a2.25 2.25 0 11-3.184-3.183l.04-.04a.49.49 0 00.094-.545.486.486 0 00-.443-.295H5.25a2.25 2.25 0 110-4.5.524.524 0 00.514-.363.485.485 0 00-.092-.532l-.045-.044A2.25 2.25 0 118.81 5.687l.04.04c.142.139.355.177.537.097l.108-.023a.486.486 0 00.255-.423V5.25a2.25 2.25 0 114.5 0v.065c0 .194.117.37.303.449.182.08.395.042.532-.092l.044-.045a2.25 2.25 0 113.184 3.183l-.04.04a.488.488 0 00-.097.537l.023.108a.486.486 0 00.423.255z" fill="#335EEA" opacity=".3"></path><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="#335EEA"></path></g></svg>
                            </span>
                        </h2>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md py-md-4 mb-6 mb-md-0">
                            <a className="text-reset text-decoration-none" href="#!">
                                <h6 className="text-uppercase mb-0">
                                    Post
                                </h6>

                                <small className="text-muted">
                                    16
                                </small>
                            </a>
                        </div>
                        <div className="col-md py-md-4 mb-6 mb-md-0 border-left-md">
                            <a className="text-reset text-decoration-none" href="mailto:#!">
                                <h6 className="text-uppercase mb-0">
                                    Followers

                                </h6>
                                <small className="text-muted">
                                    3,347
                                </small>
                            </a>

                        </div>
                        <div className="col-md py-md-4 border-left-md">
                            <a className="text-reset text-decoration-none" href="tel:#!">
                                <h6 className="text-uppercase mb-0">
                                    Following
                                </h6>

                                <small className="text-muted">
                                    578
                                </small>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className={`mb-0`}>Đinh Thế Lộc</h3>
                        <p className={`mb-3`}>
                            Software developer <br />
                            Front-End developer of Zalopay
                        </p>
                        <p className="text-gray-500 font-size-xs">Followed by <span className="text-gray-800 font-family-serif">mrpkhahaha</span>, <span className="text-gray-800 font-family-serif">warnermusic.vietnam</span>, <span className="text-gray-800 font-family-serif">l_.anna._l</span> + 5 <span className="text-underline-warning">more</span></p>
                    </div>
                </div>
            </div>

            <div className={`container mb-6 bg-checkered`}>
                <div className={`${styles.stories}`}>
                    {
                        stories.map((item) => (
                            <div className={`avatar avatar-lg ${styles.item}`}>
                                <a className={`${styles.hoverStories}`} href="#">
                                    <div className={`${styles.gradientStories}`}>
                                        <img src={`${item.pathImage}`} alt={`${item.title}`} className={`avatar-img rounded-circle ${styles.fixSize}`} />
                                    </div>
                                    <h3 className={`${styles.titleStories} font-size-xs mt-3`}>{`${item.title}`}</h3>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container">

                <ul className="nav nav-pills mb-6 font-family-serif" id="pills-tab" role="tablist">
                    <li className="nav-item flex-fill" role="presentation">
                        <a className="nav-link d-flex justify-content-center align-items-center active" id="pills-posts-tab" data-toggle="pill" href="#pills-posts" role="tab" aria-controls="pills-posts" aria-selected="true">
                            <span className="fe fe-grid mr-2"></span> <span>POSTS</span>
                        </a>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <a className="nav-link d-flex justify-content-center align-items-center" id="pills-igtv-tab" data-toggle="pill" href="#pills-igtv" role="tab" aria-controls="pills-igtv" aria-selected="false">
                            <span className="fe fe-tv mr-2"></span> <span>IGTV</span>
                        </a>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <a className="nav-link d-flex justify-content-center align-items-center" id="pills-saved-tab" data-toggle="pill" href="#pills-saved" role="tab" aria-controls="pills-saved" aria-selected="false">

                            <span className="fe fe-bookmark mr-2"></span> <span>SAVED</span>
                        </a>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <a className="nav-link d-flex justify-content-center align-items-center" id="pills-tagged-tab" data-toggle="pill" href="#pills-tagged" role="tab" aria-controls="pills-tagged" aria-selected="false">
                            <span className="fe fe-user mr-2"></span> <span>TAGGED</span>
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-posts" role="tabpanel" aria-labelledby="pills-posts-tab">
                        <div className="row">
                            {
                                dataInsta.map((item) => (
                                    <div className={`${styles.thumbnail} col-sm-4 mb-6 position-relative`}>
                                        <img className="img-fluid rounded-top-left lift lift-lg rounded-bottom-right"
                                            src={item.images.standard_resolution.url} alt={item.id} />
                                        <div className={`${styles.middle}`}>
                                            <div className="font-size-lg">
                                                <span className="fe fe-heart mr-1"></span>{item.likes.count || 0}<span className="fe fe-message-circle ml-4 mr-1"></span>{item.likes.comments || 0}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-igtv" role="tabpanel" aria-labelledby="pills-igtv-tab">igtv</div>
                    <div className="tab-pane fade" id="pills-saved" role="tabpanel" aria-labelledby="pills-saved-tab">saved</div>
                    <div className="tab-pane fade" id="pills-tagged" role="tabpanel" aria-labelledby="pills-tagged-tab">tagged</div>
                </div>
            </div>

        </>
    );
}

export default HomePage;
