
describe('Category Filters', () => {

//Checkbox locators assigned to variables
    var checkbox_thoroughbred = '[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]'
    var checkbox_greyhound = '[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]'
    var checkbox_harness = '[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]'

    beforeEach( () => {                                                       //visit the URL at the start of each test
        cy.visit("http://localhost:3000/")
    })

    it('Should validate that all checkboxes are checked by default', () => {

      cy.get(checkbox_thoroughbred)
        .should('be.checked')                               //verifying if the checkbox is checked

      cy.get(checkbox_greyhound)
        .should('be.checked')

      cy.get(checkbox_harness)
        .should('be.checked')

  });

    it('Should validate that checkboxes filter content appropriately', () => {

        cy.log('Only races from thoroughbred should be visible on the UI')

    // When only thoroughbred is selected
        cy.get(checkbox_greyhound).uncheck()
        cy.get(checkbox_harness).uncheck()

        cy.intercept('http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=*').as('new')        //using intercept to get the network call and aliasing it as new

        var namesFromDom = []                         //creating an empty array

        cy.get('.item > .race-name > p').then((elements) => {
            elements.each((index, element) => {      //Access each element individually
            namesFromDom.push(element.innerText)     //Pushing the accessed elements to the array
            })
            console.log('namesFromDom', namesFromDom)
            cy.log('Getting race name from UI',namesFromDom)   //logging the names of races

        })

        cy.wait('@new',{timeout: 20000}).then(resp =>{       //waiting until interception is caught and then waiting extra 20 secs to make sure the network call is made
            const data = resp.response.body;                 //putting response body in data constant
            const keysOfSelectectedCat=  data.category_race_map['4a2788f8-e825-4d36-9894-efd4baf1cfae'].race_ids        //Putting objects of thoroughbred race_ids into keysOfSelectectedCat

            var namesFromApi = Object.keys(data.race_summaries).filter(key => {         //putting object keys from response.body.race_summaries by filtering out keys of the elements selected through dom
                return keysOfSelectectedCat.includes(key)
            }).map(key => {
                return data.race_summaries[key].meeting_name                //getting meeting names against the filtered keys
               })

            const boolValue = namesFromDom.every(item => namesFromApi.includes(item))  //Checking if every item on the UI is from the selected category
            console.log('namesFromApi',namesFromApi)                //logging the names from API
            cy.log('Getting race names from API', namesFromApi)
            console.log(boolValue)
            expect(boolValue).to.be.true            //asserting if all the names on the UI belong to the right category
            cy.log('The race names on the UI belong to the Selected Category - Thoroughbred' )
        })



  //When only greyhound is selected
        cy.log('Only races from thoroughbred should be visible on the UI')

        cy.get(checkbox_greyhound).check()       //checking greyhound checkbox
        cy.get(checkbox_thoroughbred).uncheck()        //unchecking

        cy.intercept('http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=*').as('new2')

        var namesFromDom2 = []

        cy.get('.item > .race-name > p').then((elements2) => {    //traversing through UI and placing all the race names into array
            elements2.each((index, element) => {
            namesFromDom2.push(element.innerText)
            })
            console.log('namesFromDom2', namesFromDom2)
            cy.log(namesFromDom2)

        })

          cy.wait('@new2',{timeout: 20000}).then(resp =>{
            const data = resp.response.body;
            const keysOfSelectectedCat=  data.category_race_map['9daef0d7-bf3c-4f50-921d-8e818c60fe61'].race_ids

            var namesFromApi = Object.keys(data.race_summaries).filter(key => {
                return keysOfSelectectedCat.includes(key)
            }).map(key => {
                return data.race_summaries[key].meeting_name
               })

            const boolValue = namesFromDom2.every(item => namesFromApi.includes(item))
            console.log('namesFromApi',namesFromApi)
            cy.log('Getting race names from API', namesFromApi)
            console.log(boolValue)
            expect(boolValue).to.be.true
            cy.log('The name on the UI belong to the Selected Category - greyhound' )
          })
     })




    it('Should validate that unchecking all checkboxes re-enables all', () => {

        cy.get(checkbox_thoroughbred)                         //Getting the checkbox
          .should('be.checked')                               //Verify if the checkbox is checked
          .uncheck().should('not.be.checked')                 //unchecking the checkbox

        cy.get(checkbox_greyhound)
          .should('be.checked')
          .uncheck().should('not.be.checked')                 //unchecking the checkbox

        cy.get(checkbox_harness)
          .should('be.checked')
          .uncheck().should('be.checked')                     //unchecking the checkbox and verifying if it got checked again

        cy.get(checkbox_greyhound)
          .should('be.checked')                               //Verify if the checkbox is checked

        cy.get(checkbox_thoroughbred)
          .should('be.checked')                               //Verify if the checkbox is checked

    });

    it('Verifies if the races on the UI match a combination of 2 selected categories', () =>{

        cy.get(checkbox_harness).uncheck()           //unchecking the harness category

        cy.intercept('http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=*').as('new2')

        var namesFromDom2 = []

        cy.get('.item > .race-name > p').then((elements2) => {
            elements2.each((index, element) => {
                namesFromDom2.push(element.innerText)
            })
            console.log('namesFromDom2', namesFromDom2)
            cy.log(namesFromDom2)

        })

        cy.wait('@new2',{timeout: 20000}).then(resp =>{
            const data = resp.response.body;
            const keysOfSelectectedCat1 =  data.category_race_map['4a2788f8-e825-4d36-9894-efd4baf1cfae'].race_ids
            const keysOfSelectectedCat2 = data.category_race_map['9daef0d7-bf3c-4f50-921d-8e818c60fe61'].race_ids

            const mergedKeys = keysOfSelectectedCat1.concat(keysOfSelectectedCat2);           //Merging keys from both the categories into one constant
            cy.log(mergedKeys)
            console.log('mergedKeys',mergedKeys)

            var namesFromApi = Object.keys(data.race_summaries).filter(key => {
                return mergedKeys.includes(key)         ////putting object keys from response.body.race_summaries by filtering out keys of the elements selected thorugh dom
            }).map(key => {
                return data.race_summaries[key].meeting_name
               })

            const boolValue = namesFromDom2.every(item => namesFromApi.includes(item))
            console.log('namesFromApi',namesFromApi)
            cy.log('Getting names from API', namesFromApi)
            console.log(boolValue)
            expect(boolValue).to.be.true
            cy.log('The name on the UI belong to the Selected Category - greyhound + thorough' )
          })

})

});
