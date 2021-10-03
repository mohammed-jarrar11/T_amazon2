describe('Test amazon', function () {
    var url = 'https://www.amazon.com/b/?_encoding=UTF8&node=16225007011&pf_rd_r=WR33PTN3SZ6P6CXYX3VP&pf_rd_p=fd5b8b68-04e1-4072-9ad7-e8e24fc19a34&pd_rd_r=d6caa53a-fb26-4754-961b-2b20b4d599bc&pd_rd_w=OCeLe&pd_rd_wg=Vildt&ref_=pd_gw_unk';
    it('Add to Cart', function () {
        cy.visit(url)
        cy.contains('Sign in').click()
        cy.url().should('include', 'signin')
       // cy.get('input[type="email"]').type('jarrarmhmd0@gmail.com')
        cy.get('input[type="email"]').type('test.jarrar2022@gmail.com')
        cy.get('input[id="continue"]').click()
        cy.contains("Password", { timeout: 10000 }).should('be.visible')
        cy.get('input[type = "password"]').type('1234@1234')
        cy.get('input[id="signInSubmit"]').click()
        cy.contains("Today's Deals", { timeout: 10000 }).should('be.visible')
        cy.get('input[id="twotabsearchtextbox"]').type('samsung s20')
        cy.get('input[id="nav-search-submit-button"]').click()
        cy.wait(3000)
        cy.contains("samsung s20", { timeout: 10000 }).should('be.visible')
        cy.get('img[data-image-index="1"]').click()
        cy.wait(3000)
        
        cy.url().should('include', 'sr_1_1')
        cy.wait(3000)
        cy.get('input[id="add-to-cart-button"]', { timeout: 10000 }).click()
        cy.wait(3000)
        cy.visit(url)
        
        cy.wait(3000)
        cy.get('a[id="nav-cart"]').click()
        
        
      })
    })
