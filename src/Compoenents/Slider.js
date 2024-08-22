import "./Slider.css";


function Slider() {

    return (
      <>
        <div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://th.bing.com/th/id/R.253ac3c356772db8c6bdc1dc221181e2?rik=0WcmzasQse2vHA&pid=ImgRaw&r=0"
                  className="d-block w-100 height-300"
                  alt="..."
                />
              </div>
              <div className="carousel-item">   
                <img
                  src="https://th.bing.com/th/id/R.253ac3c356772db8c6bdc1dc221181e2?rik=0WcmzasQse2vHA&pid=ImgRaw&r=0"
                  className="d-block w-100 height-300"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://th.bing.com/th/id/R.253ac3c356772db8c6bdc1dc221181e2?rik=0WcmzasQse2vHA&pid=ImgRaw&r=0"
                  className="d-block w-100 height-300"
                  alt="..." 
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
}

export default Slider;
