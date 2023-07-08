const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=f972746eb101cc6fa3562dce3b555dd6&query=31.3811,74.5212&units=f'

// request({url: url, json: true },(error, response) => {

//     if (error) {
//         console.log("unable to connect to weather app!")
//     }else if(response.body.error){
//         console.log("unable to find location")
//     } 
    
//     else{
//         console.log("It is currently " + response.body.current.temperature + " degree" + " and feels like " + response.body.current.feelslike  + " degree outside. There is a " + response.body.current.precip + " % chance of rain.")

//     }

// })

// const geocodeURL = "http://api.radar.io/v1/geocode/forward?query=841+broadway+new+york/Authorization:prj_test_pk_f9d0d66685a6e598f1489138685b24b202e68aae"

// request({url: geocodeURL, json: true},(error, response)=>{
//     const lattitude = response.body.features[0].center[1]
//     const longitude = response.body.feature[0].center[0]
//     console.log(lattitude, longitude)
// })

const geocode = (address, callback) => {
    const url = "http://api.radar.io/v1/geocode/forward?query=841+broadway+new+york" + "Authorization:prj_test_pk_f9d0d66685a6e598f1489138685b24b202e68aae"
}

geocode("Philadelphia", (error, data) => {

})