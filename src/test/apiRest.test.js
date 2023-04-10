import supertest from "supertest";

import {
    expect
} from "chai";

const request = supertest('http://localhost:8080')

describe('Test de funcionamiento', () => {
    describe('GET', () => {
        it('La peticion debe retornar un status 200', async () => {
            let res = await request.get('/login')
            expect(res.status).to.equal(200)
        })
    })
    describe('POST', () => {
        it('Debe completar el añadir producto en el api', async () => {
            let producto = {

                "articulo": "samsung A21",
                "precio": 1100,
                "imagen": "https://images.samsung.com/is/image/samsung/p6pim/ar/feature/143075245/ar-feature-streamlined-design-aesthetics-472118890?$FB_TYPE_A_MO_JPG$"

            }


            let res = await request.post('/productos').send(producto)

            expect(res.status).to.be.equals(200)
            const resBody = res.body
            expect(resBody).to.include.keys("message", "producto")
        })
    })


})