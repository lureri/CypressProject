describe('Admin page', () => {
    it('Add user', () => {
        cy.login('Admin','admin123')
        cy.contains('Admin').click()
        cy.get("i[class*='bi-plus']").click()
         cy.contains('-- Select --').click()
         cy.xpath('.//div[div[label[contains(.,"User Role")]]]//span[contains(.,"Admin")]').click()
         cy.xpath('.//div//input[@placeholder="Type for hints..."]').type('Timothy Lewis Amiano')
         cy.wait(1000)
         cy.xpath('.//div//input[@placeholder="Type for hints..."]').type('{downArrow}{enter}')
         cy.contains('-- Select --').click()
         cy.xpath('.//div[div[label[contains(.,"Status")]]]//span[contains(.,"Enabled")]').click()
         cy.xpath('.//div[div[label[contains(.,"Username")]]]//div//input').type('Luis5')
         cy.xpath('.//div[div[label[text()="Password"]]]//input').type('This.is.a0password')
         cy.xpath('.//div[div[label[contains(.,"Confirm Password")]]]//div//input').type('This.is.a0password')
         cy.get('[type=submit]').click()
         cy.get('div[class="oxd-toast-start"]').should('be.visible')

    })
  


    it('edit user', () => {

        cy.login('Admin','admin123')
        cy.contains('Admin').click()
        cy.xpath('.//div[div[label[text()="Username"]]]//input').type('Luis5')
        cy.get('[type=submit]').click()
        cy.get('i[class="oxd-icon bi-pencil-fill"]').click()
        cy.get('[type=submit]').click()
        cy.get('div[class="oxd-toast-start"]').should('be.visible')
    })


    it('delet user', () => {

        cy.login('Admin','admin123')
        cy.contains('Admin').click()
        cy.xpath('.//div[div[label[text()="Username"]]]//input').type('Luis5')
        cy.get('[type=submit]').click()
        cy.get('i[class="oxd-icon bi-trash"]').click()
        cy.get('i[class="oxd-icon bi-trash oxd-button-icon"]').click()
        cy.get('div[class="oxd-toast-start"]').should('be.visible')
    })

})