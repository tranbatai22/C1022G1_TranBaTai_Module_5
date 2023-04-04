import React from "react";

function FacilityCreate() {
    return (
        <div>
            <center>
                <h1 style={{fontWeight: "bold"}}>Thêm mới dịch vụ</h1>
                <form className="w-50 border border-2 border-success p-3 rounded">
                    <div className="form-group">
                        <label htmlFor="name" style={{fontWeight: "bold"}}>
                            Tên:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="name" className="form-control" placeholder="Nhập tên" name="name"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="area" style={{fontWeight: "bold"}}>
                            Diện tích:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="area" className="form-control" placeholder="Nhập diện tích"
                                   name="area"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="cost" style={{fontWeight: "bold"}}>
                            Giá tiền:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="cost" className="form-control" placeholder="Nhập giá tiền"
                                   name="cost"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="maxPeople" style={{fontWeight: "bold"}}>
                            Số người tối đa:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="maxPeople" className="form-control"
                                   placeholder="Nhập số người tối đa" name="maxPeople"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="standardRoom" style={{fontWeight: "bold"}}>
                            Tiêu chuẩn phòng:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="standardRoom" className="form-control" placeholder="Tiêu chuẩn phòng"
                                   name="standardRoom"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="descriptionOtherConvenience" style={{fontWeight: "bold"}}>
                            Mô tả:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="descriptionOtherConvenience" className="form-control"
                                   placeholder="Nhập mô tả" name="descriptionOtherConvenience"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="poolArea" style={{fontWeight: "bold"}}>
                            Diện tích hồ bơi:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="poolArea" className="form-control"
                                   placeholder="Nhập diện tích hồ bơi" name="poolArea"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="numberOfFloors" style={{fontWeight: "bold"}}>
                            Số tầng:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="numberOfFloors" className="form-control" placeholder="Nhập số tầng"
                                   name="numberOfFloors"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="facilityFree" style={{fontWeight: "bold"}}>
                            Dịch vụ miễn phí:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input type="text" id="facilityFree" className="form-control"
                                   placeholder="Nhập dịch vụ miễn phí" name="facilityFree"/>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="facilityType" style={{fontWeight: "bold"}}>
                            Loại dịch vụ:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <select id="facilityType" className="form-control" name="facilityType">
                                <option/>
                            </select>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 form-group">
                        <label htmlFor="rentType" style={{fontWeight: "bold"}}>
                            Kiểu thuê:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <select id="rentType" className="form-control" name="rentType">
                                <option/>
                            </select>
                            <span className="input-group-text"/>
                        </div>
                    </div>

                    <div className="mt-3 text-center">
                        <button
                            className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                            -- Save --
                        </button>
                    </div>
                </form>
            </center>
        </div>
    )
}

export default FacilityCreate;