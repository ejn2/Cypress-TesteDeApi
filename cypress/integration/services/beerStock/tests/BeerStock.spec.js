///<reference types="cypress" />

import { Request } from '../requests/Request';

context('Testando endpoint beerstock', () => {
    const id =  1;
    let request;

    beforeEach(() => {
        request = new Request();
    });

    it('[POST] Criando nova cerveja (beer)', () => {
        request.POST().should(res => {
            expect(res.status).to.eq(201);
            expect(res.body.name).to.be.not.null;
            expect(res.body.name).to.be.not.NaN;
        });
    });

    it(' [GET] Listando todas as cervejas (beers)', () => {
        request.GET().should(res => {
            expect(res.status).to.eq(200);
            expect(res.body[0].name).to.be.not.null;
            expect(res.body[0].name).to.be.not.NaN;
        });
    });

    it('[GET] Encontra uma unica cerveja (beer)', () => {
        request.GET(id).should(res => {
            expect(res.status).to.eq(200);
            expect(res.body.id).to.eq(id);
            expect(res.body.name).to.be.not.null;
            expect(res.body.name).to.be.not.NaN;
        });
    });

    it('[PUT] Atualiza uma cerveja (beer)', () => {
        
        request.GET(id).then(res => {
            request.PUT(id).should(res => {
                expect(res.status).to.eq(200);
                expect(res.body.name).to.be.not.null;
                expect(res.body.name).to.be.not.NaN;
            });
        });

    });


    it('[DELETE] Deleta uma cerveja (beer)', () => {
        
        request.GET(id).then(res => {
            request.DELETE(id).should(res => {
                expect(res.status).to.eq(204);
            });
        });

    });

});