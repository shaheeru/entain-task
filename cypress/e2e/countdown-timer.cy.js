//import {HomePage} from "./Pages/home_page"

var time1= ''
var time2= ''
//var timer_row_1 = ':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)'
//const homePage = new HomePage()

describe('Countdown Timer', () => {

      var timer_row_1 = ':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)'
      var timer_row_2 = ':nth-child(3) > :nth-child(2) > :nth-child(2)'
//    timer_row_3 = cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)')
//    timer_row_4 = cy.get(':nth-child(4) > :nth-child(2)')
//    timer_row_5 = cy.get(':nth-child(5) > :nth-child(2)')
  it.only('Should validate that timer is ticking down', () => {
  //var timer_row_1 = cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)')
    cy.visit("http://localhost:3000/")
   // var timer_row_1 = cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)')
    cy.clearCookies()

    cy.wait(5000)
//cy.log(this.homePage.timer_row_1)
    for(let i=1; i<3 ; i++){
    cy.get(timer_row_1).invoke('text').then((time_before) => {

    cy.log('Shaheer : ' , time_before)


//let isNegative = text1.split('')[0] === '-';
let array1 = time_before.split(" ");


let totalSeconds_before = 0;

console.log({array1})


for(let timeObj in array1){
  let timeStr = array1[timeObj];
  let unit = timeStr[timeStr.length-1];

console.log({timeStr, unit})

  switch(unit){
    case 'm':
      let minutes = timeStr.split('m')[0];
      totalSeconds_before += parseInt(minutes) * 60;

    break

    case 's':
      let seconds = timeStr.split('s')[0];
      totalSeconds_before += parseInt(seconds);
  }
}
 cy.log(totalSeconds_before)

 console.log({totalSeconds_before})

    cy.wait(7000)

    cy.get(timer_row_1).invoke('text').then((text2) => {

    let isNegative = text2.split('')[0] === '-';
let array2 = text2.split(" ");


let totalSeconds2 = 0;

console.log({array2})


for(let timeObj in array2){
  let timeStr = array2[timeObj];
  let unit = timeStr[timeStr.length-1];

console.log({timeStr, unit})

  switch(unit){
    case 'm':
      let minutes = timeStr.split('m')[0];
      totalSeconds2 += parseInt(minutes) * 60;

    break
    case 's':
      let seconds = timeStr.split('s')[0];
      totalSeconds2 += parseInt(seconds);
  }
}
 cy.log(totalSeconds2)

 console.log({totalSeconds2})

 if(totalSeconds_before < 0){
 expect(totalSeconds2).to.be.greaterThan(totalSeconds_before)
 console.log("negative value")

 }else{
 expect(totalSeconds2).to.be.lessThan(totalSeconds_before)
 console.log("positive value")
 }
// console.log("positive value")}



   // expect(text1).to.not.equal(text2)
   //expect(totalSeconds2).to.be.greaterThan(totalSeconds1)

    //assert.isBelow(text2, text1, '2 is less than 1')
    //expect(text2).isBelow(text1)
    });
    });
}







//
//
//    //cy.clearCookies()
//    cy.get(timer_row_2).invoke('text').then((text1) => {
//
//
//        cy.log('Shaheer2 : ' , text1)
//
//
//let isNegative = text1.split('')[0] === '-';
//let array1 = text1.split(" ");
//
//
//let totalSeconds1 = 0;
//
//console.log({array1})
//
//
//for(let timeObj in array1){
//  let timeStr = array1[timeObj];
//  let unit = timeStr[timeStr.length-1];
//
//console.log({timeStr, unit})
//
//  switch(unit){
//    case 'm':
//      let minutes = timeStr.split('m')[0];
//      totalSeconds1 += parseInt(minutes) * 60;
//
//    break
//    case 's':
//      let seconds = timeStr.split('s')[0];
//      totalSeconds1 += parseInt(seconds);
//  }
//}
// cy.log(totalSeconds1)
//
// console.log({totalSeconds1})
//
//    cy.wait(7000)
//
//    cy.get(timer_row_2).invoke('text').then((text2) => {
//
//
//    let isNegative = text2.split('')[0] === '-';
//let array2 = text2.split(" ");
//
//
//let totalSeconds2 = 0;
//
//console.log({array2})
//
//
//for(let timeObj in array2){
//  let timeStr = array2[timeObj];
//  let unit = timeStr[timeStr.length-1];
//
//console.log({timeStr, unit})
//
//  switch(unit){
//    case 'm':
//      let minutes = timeStr.split('m')[0];
//      totalSeconds2 += parseInt(minutes) * 60;
//
//    break
//    case 's':
//      let seconds = timeStr.split('s')[0];
//      totalSeconds2 += parseInt(seconds);
//  }
//}
// cy.log(totalSeconds2)
//
// console.log({totalSeconds2})
//
// if(totalSeconds1 < 0){
// expect(totalSeconds2).to.be.greaterThan(totalSeconds1)
// console.log("negative value2")
//
// }else{
// expect(totalSeconds2).to.be.lessThan(totalSeconds1)
// console.log("positive value2")
// }
    //expect(text1).to.not.equal(text2)
    //assert.notEqual(text2,text1, 'Text2 is smaller')
    });
    //});
    //cy.wait(5000)
 //time2 = cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').invoke('text').then((text2) => {
   // cy.log(text2)
    //});

 //expect(time1).to.not.equal(time2)
    //cy.log(time)

    // Handle this deterministically through mocking race jump times
  //});

 // it('Should validate that race time sign swaps to negative when expected jump time is exceeded', () => {
    // Handle this deterministically through mocking race jump times
 // });

  it('Should validate that races do not display after 5 minutes past the jump', () => {

    cy.intercept('http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=*').as('getRaces')
    cy.visit("http://localhost:3000/")
    // Handle this deterministically through mocking race jump times
    //cy.wait(20000)
   //let res
    //cy.intercept('http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=%5B%224a2788f8-e825-4d36-9894-efd4baf1cfae%22%2C%229daef0d7-bf3c-4f50-921d-8e818c60fe61%22%2C%22161d9be2-e909-4326-8c2c-35ed71fb460b%22%5D')

    //.then((response) => {
        //res = response.body
    //})
    //.its('response.statusCode').should('eq',200) //for the request/response cycle to complete
    //cy.wait(20000)
    //.then(({response.body}) => {
    //res = body
    //})


//    cy.get('@getRaces').its('body').then((responseBody) => {
//        const res = responseBody
//        cy.log(res)
//    })
    cy.wait('@getRaces').then(interception => {
        const response = interception.response.body.category_race_map['161d9be2-e909-4326-8c2c-35ed71fb460b']
        cy.log(JSON.stringify(response))
        console.log("INTERCEPTION: ", response)


        //expect(response).to.have('4a2788f8-e825-4d36-9894-efd4baf1cfae')
    })
      //its('response.statusCode').should('eq',200)
     // .its('response.body.category_race_map[0].race_ids').should('contain','"68f587d7-2f66-4373-8bd2-fe7e8f3aa26f')
      //cy.wrap(response.body).should()

      //expect(response.statusCode).to.eq(200)
     // })
            //.its('response.body').should('include', 'category_race_map')
            //cy.log(getRaces.response.body.ArrayBuffer)

    //const data = JSON.parse(getRaces)
    //cy.log(res)
    //cy.log()
            //.then((body) => {
            //const bodyData = JSON.parse(body)
            //cy.log(bodyData)
            //})

    //cy.get('@getRaces').then(newTodo =>{
      //  cy.log(newTodo)
        //expect(newTodo.statusCode).to.eql(200)
    //});
    //cy.log(getRaces)
  });

 // it('Insert additional tests here and below', () => {
    
  //});
});
