import React from 'react';
import './style.scss';

function HomePage() {
    return (
        <>
            <div className="container mt-6 d-flex">
                <div className="avatar-user">
                    <div className="avatar avatar-xxl">
                        <img src="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s320x320/96292822_244805370090236_7062501899211112448_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=kAlED3kvz-4AX9aKVge&oh=2ecd67c84b4bb2ff9e5b8ec6c9526a56&oe=5EF797E4" alt="..." className="avatar-img rounded-circle" />
                    </div>
                </div>
                <div className="flex-fill">
                    <div className="row"></div>
                </div>
            </div>

        </>
    );
}

export default HomePage;
