const facility = [
    {
        id : 1,
        name: 'Bơi lội',
        area: 100,
        cost: 50,
        maxPeople: 20,
        facilityType: {
            id: 2,
            name: 'Gold'
        },
        rentType:  {
            id: 1,
            name: 'VND'
        },
        standardRoom: 'Twin bedroom',
        description: 'Tốt',
        poolArea: 50,
        numberOfFloors: 3,
        facilityFree: "đồ bơi, kính bơi",
        status: false


    },
    {
        id : 2,
        name: 'Bơi lội',
        area: 100,
        cost: 50,
        maxPeople: 20,
        facilityType: {
            id: 2,
            name: 'Gold'
        },
        rentType:  {
            id: 1,
            name: 'VND'
        },
        standardRoom: 'Twin bedroom',
        description: 'Tốt',
        poolArea: 50,
        numberOfFloors: 3,
        facilityFree: "đồ bơi, kính bơi",
        status: false


    },
    {
        id : 3,
        name: 'Bơi lội',
        area: 100,
        cost: 50,
        maxPeople: 20,
        facilityType: {
            id: 2,
            name: 'Gold'
        },
        rentType:  {
            id: 1,
            name: 'VND'
        },
        standardRoom: 'Twin bedroom',
        description: 'Tốt',
        poolArea: 50,
        numberOfFloors: 3,
        facilityFree: "đồ bơi, kính bơi",
        status: false


    }
];

const facilityType = [
    {
        id: 1,
        name: 'Villa'
    },
    {
        id: 2,
        name: 'House'
    },
    {
        id: 3,
        name: 'Room'
    }
];

const rentType = [
    {
        id: 1,
        name: 'VND'
    },
    {
        id: 2,
        name: 'USD'
    }

]

export default  {
    facility, facilityType, rentType
}