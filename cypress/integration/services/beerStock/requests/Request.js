///<reference types="cypress" />

const { new_beer, changed_beer } = require('../payloads/beer.payload.json');

export class Request {

    request(url = 'beerstock', method = "GET", data = {}) {

        const headers = {
            "Content-Type": "application/json"
        }

        return cy.request({
            url,
            method,
            headers,
            body: data,
            failOnStatusCode: false
        });
    }

    GET(id='') {
        return this.request(`beerstock/${id}`);
    }

    POST() {

        new_beer.name += (Math.random() * 10);
        
        return this.request("beerstock", "POST", new_beer);
    
    }

    PUT(id) {
        changed_beer.name += (Math.random() * 5);

        return this.request(`beerstock/${id}`, "PUT", changed_beer);
    }

    DELETE(id) {
        return this.request(`beerstock/${id}`, "DELETE");
    }
    
}