import axios from "axios";

const getPaymentDetails = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: 'https://parseapi.back4app.com/classes/hotel/bVonXoSUHK',
            headers: {
                'X-Parse-Application-Id': 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
                'X-Parse-REST-API-Key': '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy'
            }
        })
        .then(res => {
            const guest =
                res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.guest_adult +
                res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.guest_infant

            const data = {
                hotelDetail: {
                    image: res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail.images[5].thumbnail,
                    hotelName: res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_detail.hotel_name,
                    roomName: res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_room.room_name,
                    refundable: res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_prices.is_refundable,
                    checkInDate: res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_in,
                    checkOutDate: res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.check_out,
                    guest,
                    room: res.data.chosen_hotel.data.get_chosen_hotel.chosen_hotel_params.total_room
                },
                customers: [
                    {
                        id: 1,
                        name: 'John Doe',
                        gender: 'MR'
                    },
                    {
                        id: 2,
                        name: 'Steve Jobs',
                        gender: 'MR'
                    },
                ]
            }
            
            resolve(data)
        })
        .catch(err => {
            reject('Failed to get Payment Details!')
        })
    })
}

export default getPaymentDetails;