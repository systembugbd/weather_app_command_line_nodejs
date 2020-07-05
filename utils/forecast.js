const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, location, callback) => {

    const url = `http://api.weatherstack.com/forecast?access_key=ec57eef9bbaa2d8c6b3f2d01926ca25a&query=${latitude},${longitude}`

    request({url: url, json:true}, (err, res) => {
        if(err){
            callback(chalk.red.inverse.bold('Cant connect with the weather service!', undefined))
        }else if(res.body.success === false){
            callback(chalk.red.inverse.bold('Cant find location, please try another location', undefined))
        }else{
            callback(undefined, `You search For ${chalk.yellow.inverse.bold(location)}, lat: ${chalk.inverse(latitude)} long: ${chalk.inverse(longitude)}, \nthere is ${chalk.red.inverse.bold(res.body.current.temperature +' degrees')} out Temperature, and there is a ${chalk.yellow.inverse.bold(res.body.current.precip +'%')} chance to rain`)
        }

    })

}


module.exports = {
    forecast
}