// const request = require('request')
const { geocode }   = require('./utils/utils');
const { forecast }  = require('./utils/forecast')
const chalk         = require('chalk')


// &forecast_days=7
// &hourly=1
// &interval=3
// &units=m
// &language=en
// &callback=MY_CALLBACK

const place = process.argv[2]

if(place){

    geocode(place, (err, data) => {
        if(err){
            console.log(err)
        }else{
            forecast(data.latitude, data.longitude, data.location, (err, res) =>{
                if(err){
                    console.log(err)
                }else{
                console.log(res)
                }
            })
        }
    })

}else{
    console.log(chalk.red.inverse.bold("Please Provide your desired location in command line after file name-"))
}
 