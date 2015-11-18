#!/usr/bin/env node

'use strict'

var request = require('request')

if (process.argv.length < 3) {
    console.log('Please input a ip')
    return
}

request('http://freeapi.ipip.net/' + process.argv[2], function(error, response, body) {
	if(error){
		console.log(error)
	}
    if (!error && response.statusCode == 200) {
		if(body !== ''){
			var array = JSON.parse(body)
			console.log(array.join(' '))
		}else{
			console.log('Please check you ip')
		}
    }
})
