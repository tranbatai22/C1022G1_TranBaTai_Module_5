import {Component} from "react";

function Header() {
    return (
        <div className="row" style={{backgroundColor: "gray", padding: 20}}>
            <div className="col-lg-3">
                <img
                    src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                    style={{width: 100, marginLeft: 70}}
                />
            </div>
            <div className="col-lg-9 pt-5">
                <div className="row" style={{fontFamily: '"Times New Roman"'}}>
                    <div className="col-lg-4">
        <span style={{textAlign: "center", color: "#1e2125"}}>
          <i className="fa-solid fa-location-dot"/>
          103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
          Danang City, Vietnam
        </span>
                        <p>7,0 km from Danang Airport</p>
                    </div>
                    <div className="col-lg-5">
                        <p style={{textAlign: "center", color: "#1e2125"}}>
                            <i className="fa-solid fa-phone"/> 84-236-3847 333/888
                            <br/>
                            <i className="fa-solid fa-envelope"/> reservation@furamavietnam.com
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <p style={{color: "#1e2125"}}>
                            <i className="fa-solid fa-user"/>
                            Trần Bá Tài
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;