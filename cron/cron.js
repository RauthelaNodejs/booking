var cron = require('node-cron');
const {signUp,dynamicUserCollection} = require('../controller/userController');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
  length: 2
}); 


 function insertDynamicData(params) {
    cron.schedule('*/10 * * * * *', () => {
        console.log('running a task every minute');
        let obj = {
            email : shortName+"@yopmail.com",
            name :"uuu",
            address : {
                "city": "mathura",
                "street": "jjhkj",
                "houseNumber": "456"
            },
            phone : 4582225,
            password : "password",
        }
         dynamicUserCollection(obj);
      });
}


module.exports = {
    insertDynamicData
}