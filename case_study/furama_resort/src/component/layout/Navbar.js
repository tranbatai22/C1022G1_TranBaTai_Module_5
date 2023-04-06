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
                            <button type="button" className="btn btn-close-white">
                                <NavLink to='/'>TRANG CHỦ</NavLink>
                            </button>
                        </div>
                        <div style={{marginLeft: 30}}>
                            <button type="button" className="btn btn-close-white">
                                <a href="/employee" style={{textDecoration: "none"}}>
                                    NHÂN VIÊN
                                </a>
                            </button>
                        </div>
                        <div style={{marginLeft: 30}}>
                            <button type="button" className="btn btn-close-white">
                                <NavLink to='/customerList'>Khách hàng</NavLink>
                            </button>
                        </div>
                        <div style={{marginLeft: 30}}>
                            <button type="button" className="btn btn-close-white">
                                <NavLink to='/facilityList'>Dịch vụ</NavLink>
                            </button>
                        </div>
                        <div style={{marginLeft: 30}}>
                            <button type="button" className="btn btn-close-white">
                                <NavLink to='/contractList'>Hợp đồng</NavLink>
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
    )
}

export default Navbar;