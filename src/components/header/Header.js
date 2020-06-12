import React from 'react';
import style from './style.module.scss';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white border-bottom">
                <div className="container-lg">
                    <a className="navbar-brand d-block d-lg-none" href="../index.html">Instagram</a>
                    <button className="navbar-toggler d-block d-lg-none" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="justify-content-around w-100 d-none d-lg-flex">
                        <div className="logo">
                            <h1>Instagram</h1>
                        </div>


                        <div className="input-group w-25">
                            <div className="input-group-prepend">
                                <span className="input-group-text fe fe-search">
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                        </div>

                        <div className="text-center d-flex align-items-center">
                            <div className={`mr-4 ${style.iconAction} lift lift-lg`}>
                                <span className="fe fe-home" />
                            </div>
                            <div className={`mr-4 ${style.iconAction} lift lift-lg`}>
                                <span className="fe fe-send" />
                            </div>
                            <div className={`mr-4 ${style.iconAction} lift lift-lg`}>
                                <span className="fe fe-globe" />
                            </div>
                            <div className={`mr-4 ${style.iconAction} lift lift-lg`}>
                                <span className="fe fe-heart" />
                            </div>
                            <div className={`mr-4 ${style.iconAction} lift lift-lg position-relative`}>
                                <img className={style.avatarProfile} alt="locdt94's profile picture"
                                    src="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s150x150/96292822_244805370090236_7062501899211112448_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&amp;_nc_ohc=kAlED3kvz-4AX9ALcPc&amp;oh=993eeb71e7d50036489779fb596add7b&amp;oe=5EF44714" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={style.heightHeader}></div>
        </>
    );
}

export default Header;
