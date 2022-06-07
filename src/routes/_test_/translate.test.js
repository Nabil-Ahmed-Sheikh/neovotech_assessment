const request = require('supertest');

const app = require('../../app');


describe("POST /translate/normal", () => {

    it('success when valid text is supplied', async () => {

        const response = await request(app)
            .post('/translate/normal')
            .send({
                text: 'Are you the cat\'s owner?',
            })
            .expect(200);
        
        expect(response.body.translation).toEqual('AoArore yoyou tothohe cocatot\'sos owownoneror?');

    });

    it('fail when valid no text or empty string is supplied', async () => {
        
        await request(app)
            .post('/translate/normal')
            .send()
            .expect(400);
        
        await request(app)
            .post('/translate/normal')
            .send({
                'text': '',
            })
            .expect(400);

    });
    
});

describe("POST /translate/rovarspraket", () => {

    it('success when valid text is supplied', async () => {
        //USER
        const response = await request(app)
            .post('/translate/rovarspraket')
            .send({
                text: 'AoArore yoyou tothohe cocatot\'sos owownoneror?',
            })
            .expect(200);
        
        expect(response.body.translation).toEqual('Are you the cat\'s owner?');

    });

    it('fail when valid no text or empty string is supplied', async () => {
        
        await request(app)
            .post('/translate/rovarspraket')
            .send()
            .expect(400);
        
        await request(app)
            .post('/translate/rovarspraket')
            .send({
                'text': '',
            })
            .expect(400);

    });

    it('fail when invalid roverspraket string is supplied', async () => {
        
        await request(app)
            .post('/translate/rovarspraket')
            .send({
                'text': 'Hi',
            })
            .expect(400);
    });
    
});

describe("POST /translate/translateJokeOfTheDay", () => {

    it('success against a valid request', async () => {
        //USER
        await request(app)
            .post('/translate/translateJokeOfTheDay')
            .expect(200);

    });
    
});