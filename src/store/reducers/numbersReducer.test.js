import reducer from './numbersReducer'




describe("Numbers", () => {
    it('should return the initial state', () => {
      const  expected= {
           "condition": "continue",
             "facts": [],
             "factsList":  [
                 {
                   "number": 551,
               "numberFact": "551 is the year that Liang Yu Zhang Wang succeeds Liang Jian Wen Di as ruler of the Chinese Liang Dynasty.",
                },
                  {
                  "number": 22,
                   "numberFact": "22 is the year that Drusus Julius Caesar receives the tribunicia potestas (tribunician power).",
                },
              ],
            }
        expect(reducer(undefined, {})).toEqual(expected);

    })


})






// describe("Numbers", () => {
//     it('bla-bla', () => {
//         const expected = {
//             facts: [],
//             condition: {
//                 status: NUMBERS_CONDITION.LOADING,

//             },
//         };


//         const received = reducer(undefined, getArticlesRequest());
//         expect(received).toEqual(expected);

//     })


// })