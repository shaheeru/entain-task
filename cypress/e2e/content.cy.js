//import { RACING_CATEGORIES } from "../config/constants";
///<reference types = "cypress"/>

import {HomePage} from "./Pages/home_page"                  //importing class HomePage to use objects and methods de

//var title = ''
//const homePage = new HomePage()

describe('Page Content', () => {

    beforeEach( () => {
        cy.visit("http://localhost:3000/")
    })


  it('Should correctly display page title', () => {
   // cy.visit("http://localhost:3000/")

    var expected_title='Next To Go Races'                            //assigning the expected title text to a variable

        cy.xpath('//h1[@data-testid="page-title"]')                  //Locating title element by xpath
          .invoke('text').then((current_title) =>{                   //Invoking its text
            expect(current_title).to.equal(expected_title)           //Explicit assertion on title

            cy.log('Title verified')
            })
  });

  it('Should display expected values for race row contents', () => {

    var race_number_1 = ':nth-child(1) > .race-name > .race-number'
    var race_number_2 = ':nth-child(2) > .race-name > .race-number'
    var race_number_3 = ':nth-child(3) > .race-name > .race-number'
    var race_number_4 = ':nth-child(4) > .race-name > .race-number'
    var race_number_5 = ':nth-child(5) > .race-name > .race-number'

    //cy.visit("http://localhost:3000/")
    for(let i = 1 ; i < 6 ; i++){
    cy.get(race_number_1`)                                   //Getting Race number dom element through variable
      .should('be.visible')                                 //Element should be visible
      .should('contain', 'R')                               //Element should have R
    }
//    cy.get(race_number_1)                                   //Getting Race number dom element through variable
//      .should('be.visible')                                 //Element should be visible
//      .should('contain', 'R')
//
//    cy.get(race_number_1)                                   //Getting Race number dom element through variable
//      .should('be.visible')                                 //Element should be visible
//      .should('contain', 'R')
//
//    cy.get(race_number_1)                                   //Getting Race number dom element through variable
//      .should('be.visible')                                 //Element should be visible
//      .should('contain', 'R')
//
//    cy.get(race_number_1)                                   //Getting Race number dom element through variable
//      .should('be.visible')                                 //Element should be visible
//      .should('contain', 'R')



    cy.get(':nth-child(1) > .race-name > p')  //venue name
    .should('be.visible')

    cy.get(':nth-child(2) > .race-name > p')

    cy.get(':nth-child(3) > .race-name > p')

    cy.get(':nth-child(4) > .race-name > p')

    cy.get(':nth-child(5) > .race-name > p')


    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)') //time to jump
    .should('be.visible')

    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)')
    .should('be.visible')

    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)')
    .should('be.visible')

    cy.get(':nth-child(4) > :nth-child(2)')
    .should('be.visible')

    cy.get(':nth-child(5) > :nth-child(2)')
    .should('be.visible')

    // Race number, venue name, time to jump
  });

  //it('Insert additional tests here and below', () => {
    //title to have h1
  //});
//  it('contains class', () => {
//  cy.visit("http://localhost:3000/")
//  cy.contains('Thoroughbred')
//  .should('have.class', 'category-filter')



 // })

});
