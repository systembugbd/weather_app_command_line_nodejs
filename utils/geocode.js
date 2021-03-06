const request = require('request');
const chalk = require('chalk')

const geocode = (location, callback) => {
    
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoid3d3ZG9udXMiLCJhIjoiY2tjN3hqeDhmMTVpbjJybHFxemwwN3dtdCJ9.taEE74SXEEcuDindgRb82Q&limit=1`

    request({url, json:true}, (err, { body }) => {
        if(err){
            callback(chalk.red.inverse.bold('Cant connect with the server'))
        }else if(body.features[0].length === 0){
            callback(chalk.red.inverse.bold('Location you entered is not found, please try with another one'))
        }else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}



module.exports = {
    geocode
}
    

