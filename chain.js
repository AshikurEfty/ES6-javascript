const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]
console.log(users[0].id);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 1, name: 'kabul', job: 'subleader'},

    ]
}
console.log(data.data[0].job);


const user = {
    id: 5001,
    name: 'Thomas asba edison',
    address: {
        street: {
            first: ' 32/A dhanmondi',
            sicond: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'

    }
}
const userFloor = user.address?.street;
console.log(userFloor);