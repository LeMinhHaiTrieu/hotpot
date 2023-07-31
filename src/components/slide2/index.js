function Slide2() {
    return (
        <section className="video-intro">
            <div className="video-content">
                <div className="small-video-content">
                    <video
                        autoplay="autoplay"
                        muted="muted"
                        loop="loop"
                        poster="/us/static/img/video_poster.d9fd3f5c.jpg"
                        className="video-small"
                    >
                        <source data-v-5cebb3c7="" src="https://cdn-global-website.superhi-cdn.com/website/video/f183871eece945b69f9b5d64e9491333" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="circle-content">
                <span className="circle-line sp1" style={{ marginTop: "-25%" }}></span>
                <span className="circle-line sp2" style={{ marginTop: "-37.5%" }}></span>
                <span className="circle-line sp3" style={{ marginTop: "-49%" }}></span>
            </div>
            <span className="circle-red">
                <svg data-v-5b1e4217="" viewBox="0 0 200 200" x="0px" y="0px">
                    <path d="M100,0C44.9,0,0,44.9,0,100c0,55.1,44.9,100,100,100c55.1,0,100-44.9,100-100C200,44.9,155.1,0,100,0zM171.9,131.9c-11.7,27.5-37.6,49.6-66.8,60.9c0,0-0.1,0-0.1,0c-0.4,0-0.7-0.3-0.7-0.7c0-0.1,0-0.3,0.1-0.4c4.1-4.9,4.9-13.3-4.3-13.2c-1.7,0-3.4,0-5.1-0.2c-43.3-2.8-76.3-40.1-73.5-83.5c2.8-43.3,40.1-76.3,83.5-73.5c43.3,2.8,76.3,40.1,73.5,83.5C177.9,114.6,175.6,123.6,171.9,131.9z" className="st0"></path>
                </svg>
            </span>
        </section>
    );
}

export default Slide2;