describe('Countdown Timer', () => {

    beforeEach( () => {                                                       //visit the URL at the start of each test
        cy.visit("http://localhost:3000/")
    })

    var timer_row_1 = ':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)'

    it.only('Should validate that timer is ticking down', () => {
        cy.clearCookies()           //clearing cookies to avoid flakiness of the timer
        cy.wait(5000)               //waiting 5 seconds

    cy.get(timer_row_1).invoke('text').then((time_before) => {      //invoking text of locator to get the time
        cy.log('Capture time first' , time_before)

        let array1 = time_before.split(" ");        //splitting the text
        let totalSeconds_before = 0;                //creating variable
        console.log('time before',array1)

        for(let timeObj in array1){                 //converting text into int
            let timeStr = array1[timeObj];
            let unit = timeStr[timeStr.length-1];

            console.log({timeStr, unit})

            switch(unit){
                case 'm':
                let minutes = timeStr.split('m')[0];
                totalSeconds_before += parseInt(minutes) * 60;  //multiply mins by 60

                break

                case 's':
                let seconds = timeStr.split('s')[0];
                totalSeconds_before += parseInt(seconds);       //add seconds to the variable
              }
}
    cy.log(totalSeconds_before)
    console.log({totalSeconds_before})

    cy.wait(7000)     //wait for 7 seconds before capturing the time again

    cy.get(timer_row_1).invoke('text').then((time_after) => {

        let array2 = time_after.split(" ");
        let totalSeconds_after = 0;
        console.log('time after', array2)


        for(let timeObj in array2){
            let timeStr = array2[timeObj];
            let unit = timeStr[timeStr.length-1];

            console.log({timeStr, unit})

            switch(unit){
                case 'm':
                let minutes = timeStr.split('m')[0];
                totalSeconds_after += parseInt(minutes) * 60;

                break
                case 's':
                let seconds = timeStr.split('s')[0];
                totalSeconds_after += parseInt(seconds);
            }
        }
        cy.log(totalSeconds_after)

        console.log({totalSeconds_after})

 if(totalSeconds_before < 0){           //check if total time is in negative value
    expect(totalSeconds_after).to.be.greaterThan(totalSeconds_before)       //if so the lesser negative number should be greater which indicates that time is ticking
    console.log("negative value")

 } else{
    expect(totalSeconds_after).to.be.lessThan(totalSeconds_before)
    console.log("positive value")
    }
   });
  });


 });

 // it('Should validate that race time sign swaps to negative when expected jump time is exceeded', () => {
    // Handle this deterministically through mocking race jump times
 // });

  it.skip('Should validate that races do not display after 5 minutes past the jump', () => {

    cy.intercept('http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=*').as('getRaces')  //intercepting the network request

    cy.wait('@getRaces').then(interception => {
        const response = interception.response.body.category_race_map['161d9be2-e909-4326-8c2c-35ed71fb460b']
        cy.log(JSON.stringify(response))
        console.log("INTERCEPTION: ", response)

    })
  });

 // it('Insert additional tests here and below', () => {
    
  //});
});
