import React from "react";

function Navbar() {
    return (
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
                            <input
                                className="form-control me-2 algin"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="btn btn-outline-success text-white" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;