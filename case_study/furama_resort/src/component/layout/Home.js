import React from "react";

function Home() {
    return(
        <>
            <div
                className="row"
                style={{ background: "#046056", height: 60, textAlign: "center" }}
            >
                <nav className="navbar navbar-expand-lg" style={{ background: "#046056" }}>
                    <div
                        className="collapse navbar-collapse container-fluid"
                        id="navbarNavAltMarkup"
                    >
                        <div className="col-lg-1" />
                        <div className="navbar-nav col-lg-8">
                            <div>
                                <button type="button" className="btn btn-close-white">
                                    <a href="/" style={{ textDecoration: "none" }}>
                                        TRANG CHỦ
                                    </a>
                                </button>
                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <button type="button" className="btn btn-close-white">
                                    <a href="/employee" style={{ textDecoration: "none" }}>
                                        NHÂN VIÊN
                                    </a>
                                </button>
                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <button type="button" className="btn btn-close-white">
                                    <a href="/customer" style={{ textDecoration: "none" }}>
                                        KHÁCH HÀNG
                                    </a>
                                </button>
                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <button type="button" className="btn btn-close-white">
                                    <a href="/facility" style={{ textDecoration: "none" }}>
                                        DỊCH VỤ
                                    </a>
                                </button>
                            </div>
                            <div style={{ marginLeft: 30 }}>
                                <button type="button" className="btn btn-close-white">
                                    <a href="/contract" style={{ textDecoration: "none" }}>
                                        HỢP ĐỒNG
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <form className="d-flex" method="get">
                                <button className="btn btn-close-white">Đăng kí</button>
                                <button className="btn btn-close-white">Đăng nhập</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div style={{ width: "100%", height: "30%" }}>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>

    )
}
export default Home;
