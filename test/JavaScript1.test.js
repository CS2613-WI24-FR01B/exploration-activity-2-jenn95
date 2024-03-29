const Carnival = require('../src/JavaScript1');
let ferrisWheelMinAge;
let rollercoasterMinAge;
let BumperCarsMinAge;
let MerryGoRoundMinAge;
let TitlAWhirlMinAge;
let ferrisWheelMinHeight;
let rollercoasterMinHeight;
let BumperCarsMinHeight;
let MerryGoRoundMinHeight;
let TiltAWhirlMinHeight;
let ferrisWheelMinWeight;
let rollercoasterMinWeight;
let BumperCarsMinWeight;
let MerryGoRoundMinWeight;
let TiltAWhirlMinWeight;

let desiredView = "View";
let noPreference = "N/A";

let excitingExp = "Exciting";
let calmExp = 'Calm';

//this can be particularly good for server connections or database connections.
beforeEach(()=>{
    initializeGlobalAges();
    initializeGlobalHeights();
    initializeGlobalWeight();
});
describe("JavaScript PQ#1 Test Suite", ()=>{
    describe("Testing isFerriesWheelOption", ()=>{
        test('Underage ferris wheel rider, ferriswheel option should be false', () => {
            expect(Carnival.isFerrisWheelOption(ferrisWheelMinHeight, ferrisWheelMinAge-1, calmExp)).toBe(false);
          });
          test('Under height req ferris wheel rider, ferriswheel option should be false', () => {
              expect(Carnival.isFerrisWheelOption(ferrisWheelMinHeight-0.5, ferrisWheelMinAge, calmExp)).toBe(false);
            });
          test('Of min age and min height ferris wheel rider, ferriswheel option should be true', () => {
              expect(Carnival.isFerrisWheelOption(ferrisWheelMinHeight, ferrisWheelMinAge, calmExp)).toBe(true);
            });
          test('Over min age ferris wheel rider and over min height, ferriswheel option should be true', () => {
              expect(Carnival.isFerrisWheelOption(ferrisWheelMinHeight+1, ferrisWheelMinAge+1, calmExp)).toBe(true);
            });
            test('Wants exciting, ferriswheel option should be false', () => {
              expect(Carnival.isFerrisWheelOption(ferrisWheelMinHeight, ferrisWheelMinAge, excitingExp)).toBe(false);
            });
            test('Rider meets reqs with no preference on view or exp, ferriswheel option should be true', () => {
              expect(Carnival.isFerrisWheelOption(ferrisWheelMinHeight, ferrisWheelMinAge, noPreference)).toBe(true);
            });
          
            //*can uncomment code below to see how I caught this mistake by using Jest! */
          //   test('Rider meets reqs with no preference on view or exp, ferriswheel option should be true', () => {
          //     expect(Carnival.isFerrisWheelOptionBeforeJest(ferrisWheelMinHeight, ferrisWheelMinAge, noPreference)).toBe(true);
          //   });
    });
    describe("Testing printParkMessage()", ()=>{
      test('Out of season, should log twice', () => {
        const logSpy = jest.spyOn(global.console, 'log'); 
        const getCurrentDate = jest.fn();
        getCurrentDate.mockReturnValueOnce(new Date((new Date().getFullYear(), 8, 30)));
        Carnival.printParkMessage([]);      
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith("\nWe hope to see you when our park opens, every day 11AM-11PM from May 1st to September 30th.");
        });
      });
});



function initializeGlobalAges(){
    ferrisWheelMinAge = 10;
    rollercoasterMinAge = 11;
    BumperCarsMinAge = 15;
    MerryGoRoundMinAge = 5;
    TitlAWhirlMinAge = 5;
}

function initializeGlobalHeights(){
    ferrisWheelMinHeight = 152.4;
    rollercoasterMinHeight = 152.4;
    BumperCarsMinHeight = 152.4;
    MerryGoRoundMinHeight = 0;
    TiltAWhirlMinHeight = 152.4
}

function initializeGlobalExp(){
    ferrisWheelExp = 'Calm';
    rollercoasterExp = 'Exciting';
    BumperCarsExp = 'Calm';
    MerryGoRoundExp = 'Calm';
    TiltAWhirlExp = 'Exciting';
}

function initializeGlobalWeight(){
    ferrisWheelMinWeight = 0;
    rollercoasterMinWeight = 0;
    BumperCarsMinWeight = 36.29;
    MerryGoRoundMinWeight = 0;
    TiltAWhirlMinWeight = 36.29;
}

