import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="row" style={{background: "#046056", height: 60, textAlign: "center"}}>
            <nav className="navbar navbar-expand-lg" style={{background: "#046056"}}>
                <div className="collapse navbar-collapse container-fluid" id="navbarNavAltMarkup">
                    <div className="col-lg-1"/>
                    <div className="navbar-nav col-lg-8">
                        <div>
                            <NavLink to='/' style={{color: "white", textDecoration: "none"}}>
                                <button type="button" className="btn btn-outline-secondary">
                                    TRANG CHỦ
                                </button>
                            </NavLink>
                        </div>
                        <div style={{marginLeft: 30}}>
                            <NavLink to='/customerList' style={{color: "white", textDecoration: "none"}}>
                                <button type="button" className="btn btn-outline-secondary"> KHÁCH HÀNG
                                </button>
                            </NavLink>
                        </div>
                        <div style={{marginLeft: 30}}>
                            <NavLink to='/facilityList' style={{color: "white", textDecoration: "none"}}>
                                <button type="button" className="btn btn-outline-secondary">
                                    DỊCH VỤ
                                </button>
                            </NavLink>
                        </div>
                        <div style={{marginLeft: 30}}>
                            <NavLink to='/contractList' style={{color: "white", textDecoration: "none"}}>
                                <button type="button" className="btn btn-outline-secondary">
                                    HỢP ĐỒNG
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <form className="d-flex" method="get">
                            <div>
                                <button className="btn btn-outline-secondary"
                                        style={{color: "white", textDecoration: "none"}}>Đăng kí
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-outline-secondary"
                                        style={{color: "white", textDecoration: "none"}}>Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;