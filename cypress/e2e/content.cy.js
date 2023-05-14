//import { RACING_CATEGORIES } from "../config/constants";
///<reference types = "cypress"/>

describe('Page Content', () => {

    beforeEach( () => {
        cy.visit("http://localhost:3000/")
    })


  it('Should correctly display page title', () => {

    var expected_title='Next To Go Races'                            //assigning the expected title text to a variable

        cy.xpath('//h1[@data-testid="page-title"]')                  //Locating title element by xpath
          .invoke('text').then((current_title) =>{                   //Invoking its text
            expect(current_title).to.equal(expected_title)           //Explicit assertion on title

            cy.log('Title verified')
            })
  });

  it('Should display expected values for race row contents', () => {

  // Race number locators
    var race_number_1 = ':nth-child(1) > .race-name > .race-number'
    var race_number_2 = ':nth-child(2) > .race-name > .race-number'
    var race_number_3 = ':nth-child(3) > .race-name > .race-number'
    var race_number_4 = ':nth-child(4) > .race-name > .race-number'
    var race_number_5 = ':nth-child(5) > .race-name > .race-number'

  // Race name locators
    var race_name_1 = ':nth-child(1) > .race-name > p'
    var race_name_2 = ':nth-child(2) > .race-name > p'
    var race_name_3 = ':nth-child(3) > .race-name > p'
    var race_name_4 = ':nth-child(4) > .race-name > p'
    var race_name_5 = ':nth-child(5) > .race-name > p'

  // Time to jump locators
    var race_time_1 = ':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)'
    var race_time_2 = ':nth-child(3) > :nth-child(2) > :nth-child(2)'
    var race_time_3 = ':nth-child(3) > :nth-child(3) > :nth-child(2)'
    var race_time_4 = ':nth-child(4) > :nth-child(2)'
    var race_time_5 = ':nth-child(5) > :nth-child(2)'


    cy.get(race_number_1)                                   //Getting Race number dom element through variable
      .should('be.visible')                                 //Element should be visible
      .should('contain', 'R')                               //Element should have R

    cy.get(race_number_2)                                   //Getting Race number dom element through variable
      .should('be.visible')                                 //Element should be visible
      .should('contain', 'R')

    cy.get(race_number_3)                                   //Getting Race number dom element through variable
      .should('be.visible')                                 //Element should be visible
      .should('contain', 'R')

    cy.get(race_number_4)                                   //Getting Race number dom element through variable
      .should('be.visible')                                 //Element should be visible
      .should('contain', 'R')

    cy.get(race_number_5)                                   //Getting Race number dom element through variable
      .should('be.visible')                                 //Element should be visible
      .should('contain', 'R')

    cy.log('All race numbers are visible')

    cy.get(race_name_1)  //Race name
    .should('be.visible')

    cy.get(race_name_2)
    .should('be.visible')

    cy.get(race_name_3)
    .should('be.visible')

    cy.get(race_name_4)
    .should('be.visible')

    cy.get(race_name_5)
    .should('be.visible')

    cy.log('All race names are visible')

    cy.get(race_time_1) //time to jump
    .should('be.visible')

    cy.get(race_time_2)
    .should('be.visible')

    cy.get(race_time_3)
    .should('be.visible')

    cy.get(race_time_4)
    .should('be.visible')

    cy.get(race_time_5)
    .should('be.visible')

    cy.log('All race times are visible')

    cy.log('Test Completed')
    // Race number, venue name, time to jump
  });
});
