//copied from the link provided in Lab2
const { userInfo } = require('os');

//for jest
module.exports = {};

const height_cutoff = 152.4;
const weight_cutoff = 36.29;

const Rides = {
	FerrisWheel: "Ferris Wheel",
	Rollercoaster: "Rollercoaster",
	BumperCars: "Bumper Cars",
	MerryGoRound: "Merry-Go-Round",
    TiltAWhirl: "Tilt-A-Whirl"
}

// *** -- Redacted code from JS1 due to public nature of this repo -- ** //

  function getCurrentDate(){
    return new Date();
  };
  module.exports.getCurrentDate = getCurrentDate;

  module.exports.printParkMessage = function printParkMessage(rideOptions){
    let currentDate = getCurrentDate();
    let year = currentDate.getFullYear();

    //closing day sept 30
    let closingDay = new Date(year, 7, 30);

    //opening day May 1st
    let openingDay = new Date(year, 4, 1);

    let openPark;
    if(currentDate > closingDay || currentDate<openingDay){
        openPark = false;
    }
    else if(currentDate.getHours >= 11 && currentDate.getHours <= 23){
        openPark = true;
    }
    else{
        openPark = false;
    }
    let parkStatusText = "OPEN";
    if(!openPark){
        parkStatusText = "CLOSED";
    }
    let dateIndent = "     ";
    console.log(`\n${formatTime(currentDate)}\t- The Amusement Park is ${parkStatusText}. Recommended rides:`);
    
    let result = Array.from(rideOptions);
    for(let i=0; i<result.length; i++){
        console.log("\t" + result[i]);
    }

    if(openPark){
        console.log("\nHope to see you soon!");
    }
    else{
        console.log("\nWe hope to see you when our park opens, every day 11AM-11PM from May 1st to September 30th.");
    }
  };

  function formatTime(date){
        let timeStr;
        if (date.getHours()<10){
            timeStr = "0" + date.getHours();
        }
        else{
            timeStr = date.getHours();
        }
        timeStr = timeStr + ":";
        if(date.getMinutes() < 10){
            timeStr = timeStr + "0" + date.getMinutes();
        }
        else{
            timeStr += date.getMinutes()
        }
        return timeStr;
  };

  module.exports.isFerrisWheelOption = function isFerrisWheelOption(height, age, mood){
        if(height >= height_cutoff && age >= 10 && mood!="Exciting"){
            return true;
        } 
        return false;
  };
  module.exports.isFerrisWheelOptionBeforeJest = function isFerrisWheelOption(height, age, mood){
    if(height > height_cutoff && age >= 10 && mood!="Exciting"){
        return true;
    } 
    return false;
};

  function isRollercoasterOption(height, age, mood){
    if(height > height_cutoff && age > 10 && mood!="Calm"){
        return true;
    } 
    return false;
  };
  
  function isBumperCarOption(height, age, weight, mood, view){
    if(height > height_cutoff && age > 14 && weight > weight_cutoff
        &&  mood!="Calm" && view!= "View"){
        return true;
    } 
    return false;
};

function isMerryGoRoundOption(age, mood, view){
    if(age>4 && age < 12 &&  mood!="Exciting" && view!= "View"){
        return true;
    } 
    return false;
};

function isTiltAWhirlOption(age, height, weight, mood, view){
    if(age > 4 && height > height_cutoff && weight > weight_cutoff
        &&  mood!="Calm" && view!= "View"){
            return true;
    } 
    return false;
};

