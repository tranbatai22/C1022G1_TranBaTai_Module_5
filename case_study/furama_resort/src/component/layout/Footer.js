import React from "react";

function Footer() {
    return (
        <footer>
            {/*    Footer*/}
            <div className='container-fluid'>
            <div className="row" style={{background: "gray"}}>
                <div className="col-lg-2"/>
                <div className="col-lg-3" style={{backgroundColor: "#fdfdfe", color: "black"}}>
                    <h2 style={{color: "#cbbe73", fontFamily: '"Al Nile"', marginTop: 30, marginLeft: 30}}>
                        How to Get to Us
                    </h2>

                    <p style={{fontFamily: "Times New Roman", marginLeft: 30}}>
                        Furama is a premier base for exploring one of Asia’s most exciting new
                        destinations. Just a short drive from Danang lay four UNESCO-listed
                        World Heritage Sites
                    </p>

                    <h4 style={{color: "#cbbe73", fontFamily: '"Al Nile"', marginTop: 30, marginLeft: 30}}>
                        Local Places
                    </h4>

                    <ol style={{color: "black", fontFamily: "Times New Roman"}}>
                        <li>The former imperial city of HUE</li>
                        <hr style={{marginTop: 2}}/>
                        <li>The ancient Hoi An</li>
                        <hr style={{marginTop: 2}}/>
                        <li>Champa civilization, My Son</li>
                        <hr style={{marginTop: 2}}/>
                        <li>Phong Nha Caves</li>
                    </ol>
                </div>
                <div className="col-lg-3" style={{marginTop: 30}}>
                    <a href="https://furamavietnam.com/activities/" style={{color: "#fdfdfe", fontFamily: '"Al Nile"'}}>
                        New
                    </a>
                    <br/>
                    <a href="https://furamavietnam.com/furama-resort-danang-rack-rate/"
                       style={{color: "#fdfdfe", fontFamily: '"Al Nile"'}}>
                        Rack Rate
                    </a>
                    <br/>
                    <a href="https://furamavietnam.com/lifestyle-blog/"
                       style={{color: "#fdfdfe", fontFamily: '"Al Nile"'}}>
                        Lifestyle Blog
                    </a>
                    <br/>
                    <a href="https://furamavietnam.com/work-with-us/"
                       style={{color: "#fdfdfe", fontFamily: '"Al Nile"'}}>
                        Work with us
                    </a>
                    <br/>
                    <a href="https://furamavietnam.com/contact/" style={{color: "#fdfdfe", fontFamily: '"Al Nile"'}}>
                        Contact us
                    </a>
                    <img style={{marginTop: 150}}
                         src="https://furamavietnam.com/wp-content/uploads/2019/02/Ariyana-Tourism-Complex-02-2.png"
                         alt="Ariyana Tourism Complex" width="500px;"/>
                </div>
                <div className="col-lg-4">
                    <h4 style={{color: "#cbbe73", fontFamily: '"Al Nile"', marginTop: 30}}>
                        Contact US
                    </h4>
                    <span className="d-flex"
                          style={{color: "darkgray", marginTop: 20, marginLeft: 30, fontFamily: '"Times New Roman"'}}>
        <i className="fa-solid fa-location-dot"/>
        103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
        Danang City, Vietnam
      </span>
                    <p style={{color: "darkgray", marginTop: 20, marginLeft: 30, fontFamily: '"Times New Roman"'}}>
                        <i className="fa-solid fa-phone"/>
                        Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                    </p>
                    <span className="d-flex"
                          style={{color: "darkgray", marginTop: 20, marginLeft: 30, fontFamily: '"Times New Roman"'}}>
        <i className="fa-solid fa-envelope"/>
        Email: reservation@furamavietnam.com * www.furamavietnam.com GDS Codes:
        Amadeus-GD DADFUR, Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan-
        GD DADFU
      </span>
                    <hr/>
                    <p style={{marginLeft: 150, marginTop: 30, color: "darkgrey"}}>
                        © 2018 Furama Resort Danang.
                    </p>
                </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer;