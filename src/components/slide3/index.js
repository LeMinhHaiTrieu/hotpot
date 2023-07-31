import Image1 from '../../asset/images/hadilao1.png'
import Image2 from '../../asset/images/hadilao2.png'
import Image3 from '../../asset/images/hadilao3.png'
function Slide3() {
    return (
        <section className="brand-content">
            <div className="circle-content">
                <span className="circle-line sp1"></span>
                <span className="circle-line sp2"></span>
                <span className="circle-line sp3"></span>
            </div>
            <div className="row box-content justify-center">
                <div className="col col-4">
                    <a href="/">
                        <img src={Image1} alt="" />
                    </a>
                </div>
                <div className="col col-4">
                    <a href="/">
                        <img src={Image2} alt="" />
                    </a>
                </div>
                <div className="col col-4">
                    <a href="/">
                        <img src={Image3} alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
  }
  
  export default Slide3;