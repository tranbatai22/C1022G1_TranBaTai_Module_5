const customer = [
    {
        id: 1,
        name: "Trần Bá Tài",
        birthday: "22/02/2004",
        gender: "Nam",
        idCard: "999999999",
        phone: "0961487519",
        email: "tranbatai2202@gmail.com",
        address: "Huế",
        customerType: {
            id: 1,
            name: "VIP"
        }
    },
    {
        id: 2,
        name: "Lê Đức Nghĩa",
        birthday: "22/02/2003",
        gender: "Nữ",
        idCard: "888889999",
        phone: "01234589",
        email: "nghiaml@gmail.com",
        address: "Đà Nẵng",
        customerType: {
            id: 2,
            name: "Thường"
        }
    },
    {
        id: 2,
        name: "Lê Đức Nghĩa",
        birthday: "22/02/2003",
        gender: "Nữ",
        idCard: "888889999",
        phone: "01234589",
        email: "nghiaml@gmail.com",
        address: "Đà Nẵng",
        customerType: {
            id: 2,
            name: "Thường"
        }
    }
]

const customerType = [
    {
        id: 1,
        name: "VIP"
    },
    {
        id: 2,
        name: "Thường"
    }
]

export default {
    customer, customerType
}