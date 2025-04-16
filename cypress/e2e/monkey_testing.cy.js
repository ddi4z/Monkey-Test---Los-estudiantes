/**
 * Test principal que visita Los Estudiantes y ejecuta eventos aleatorios (monkey testing).
*/
describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.com');
        cy.wait(1000);
        randomEvent(1000);
    });
});

/**
 * Retorna un número entero aleatorio entre min (incluido) y max (excluido).
 * @param {number} min - Valor mínimo.
 * @param {number} max - Valor máximo.
 * @returns {number} Número entero aleatorio.
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Hace clic en un elemento aleatorio dado un selector.
 * @param {string} elementName - Selector del tipo de elemento a hacer clic (por ejemplo, 'a' o 'button').
*/
function randomClick(elementName) {
    cy.get('body').then($body => {
        if ($body.find(elementName).length > 0) {
            cy.get(elementName).then($elements => {
                const randomElement = $elements.get(getRandomInt(0, $elements.length));
                if (!Cypress.dom.isHidden(randomElement)) {
                    cy.wrap(randomElement).click({ force: true });
                }
            });
        }
    });
}


/**
 * Escribe texto aleatorio en un campo de texto visible.
*/
function randomTextInput() {
    /**
     * Crea una cadena aleatoria de una longitud dada.
     * @param {number} length - Longitud de la cadena.
     * @returns {string} Cadena aleatoria generada.
     */
    const createRandomString = (length) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(getRandomInt(0, chars.length));
        }
        return result;
    };

    cy.get('body').then($body => {
        if ($body.find('input[type="text"]').length > 0) {
            cy.get('input[type="text"]').then($inputs => {
                const randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if (!Cypress.dom.isHidden(randomInput)) {
                    const randomText = createRandomString(getRandomInt(1, 100));
                    cy.wrap(randomInput).type(randomText, { force: true });
                }
            });
        }
    });
}

/**
 * Selecciona una opción aleatoria de un elemento <select> visible.
*/
function randomSelect() {
    cy.get('body').then($body => {
        if ($body.find('select').length > 0) {
            cy.get('select').then($selects => {
                const randomSelect = $selects.get(getRandomInt(0, $selects.length));
                if (!Cypress.dom.isHidden(randomSelect)) {
                    cy.wrap(randomSelect).find('option').then($options => {
                        if ($options.length > 0) {
                            const randomOption = $options.get(getRandomInt(0, $options.length));
                            cy.wrap(randomSelect).select(randomOption.value, { force: true });
                        }
                    });
                }
            });
        }
    });
}

/**
 * Ejecuta una serie de eventos aleatorios sobre la página.
 * @param {number} monkeysLeft - Número de eventos restantes a ejecutar.
*/
function randomEvent(monkeysLeft) {
    const randomClickLink = () => randomClick('a');
    const randomClickBtn = () => randomClick('button');
    const fns = [randomClickLink, randomClickBtn, randomTextInput, randomSelect];
    if (monkeysLeft > 0) {
        const idx = getRandomInt(0, fns.length);
        fns[idx]();
        cy.wait(1000).then(() => {
            randomEvent(monkeysLeft - 1);
        });
    }
}