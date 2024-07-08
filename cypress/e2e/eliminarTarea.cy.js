describe('Eliminar tareas', () => {
    beforeEach(()=>{
        cy.visit('https://todomvc.com/examples/react/dist/');
    })
    it('Eliminar un tarea  ', () => {
        cy.get("#todo-input").should("be.visible").type("comprar una mesa{enter}")
        cy.contains("comprar una mesa").should("be.visible")
        //cy.get(".view").trigger("mouseover").find("button").click()

    });
    it('Eliminar todas la tareas', () => {
        cy.get("#todo-input").should("be.visible").type("comprar una mesa{enter}")
        cy.contains("comprar una mesa").should("be.visible")
        cy.get("#todo-input").should("be.visible").type("comprar una silla{enter}")
        cy.contains("comprar una silla").should("be.visible")
        cy.get(".toggle-all").click()
        cy.get(".clear-completed").should("be.visible").and("contain.text", "Clear completed").click()
    });

});