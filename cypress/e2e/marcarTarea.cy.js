describe('Marcar tareas', () => {
    beforeEach(()=>{
        cy.visit("https://todomvc.com/examples/react/dist/")
    })
    it('Completar una tarea', () => {
        cy.get("#todo-input").should("be.visible").type("comprar una mesa{enter}")
        cy.get("label[data-testid='todo-item-label']").should("contain.text", "comprar una mesa")
        cy.get(".toggle").click()
        cy.get(".completed").should("be.visible")
    });

});