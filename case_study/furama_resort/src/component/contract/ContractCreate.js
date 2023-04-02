import React from "react";

function ContractCreate() {
    return (
        <div>
            <center>
                <h1 style={{fontWeight: "bold"}}>Thêm mới hợp đồng</h1>
                <form className="w-50 border border-2 border-success p-3 rounded">
                    <input type="hidden"/>
                    <div className="form-group">
                        <label htmlFor="idContract" style={{fontWeight: "bold"}}>
                            Mã hợp đồng:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="idContract"
                                className="form-control"
                                placeholder="Nhập mã hợp đồng"
                                name="idContract"
                            />
                            <span className="input-group-text"/>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="startDay" style={{fontWeight: "bold"}}>
                            Ngày bắt đầu:<span style={{color: "red"}}>*</span>
                        </label>
                        <input
                            type="date"
                            id="startDay"
                            className="form-control"
                            name="startDay"
                        />
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="endDay" style={{fontWeight: "bold"}}>
                            Ngày kết thúc:<span style={{color: "red"}}>*</span>
                        </label>
                        <input type="date" id="endDay" className="form-control" name="endDay"/>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="money" style={{fontWeight: "bold"}}>
                            SỐ tiền cọc:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="money"
                                className="form-control"
                                placeholder="Nhập số tiền cọc"
                                name="money"
                            />
                            <span className="input-group-text"/>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <label htmlFor="total" style={{fontWeight: "bold"}}>
                            Tổng tiền thanh toán:<span style={{color: "red"}}>*</span>
                        </label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="total"
                                className="form-control"
                                placeholder="Nhập tổng tiền thanh toán"
                                name="total"
                            />
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

export default ContractCreate;