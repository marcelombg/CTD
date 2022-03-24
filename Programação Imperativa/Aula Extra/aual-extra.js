const { json } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const fs = require('fs');

app.get('/', (req, res) => {
    const dados = require('./dados.json')

    if (dados) {
        const jsonData = JSON.parse(JSON.stringfy(dados));

        res.render(
            'pages/index.ejs',
            {
                listagem: jsonData.dados.lenght > 0 ?
                jsonData.dados : null
            }
        )
    }

});

app.get('/form/:codigo', (req, res) => {
    res.render(
        'pages/form.ejs',
        {
            nome: null,
            checkpoint1: null,
            checkpoint2: null,
            checkpoint3: null,
            ativo: null
        }
    );
});

app.post('/salvar', (req, res) => {
    let jsonString = '';

    req.on('data', (data) => {
        jsonString += data;
    });

    req.on('end', () => {
        const params = new URLSearchParams(jsonString);

        fs.readFila('./dados.json', (erros, data) => {
            if (!erro) {
                const jsonData = JSON(data);

                let codigo, media;

                codigo = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

                media = parseInt(params.get('checkpoint1')) +
                parseInt(params.get('checkpoint2')) +
                parseInt(params.get('checkpoint3'));

                json = {
                    codigo: codigo,
                    nome: params.get('nome'),
                    checkpoint1: params.get('checkpoint1'),
                    checkpoint2: params.get('checkpoint2'),
                    checkpoint3: params.get('checkpoint3'),
                    ativo: params.get('ativo'),
                }

                jsonData.dados.push(json);

                fs.writeFile('./dados.json', JSON.stringify)
            }      
        });
    });
});

app.get('/listagem', (req, res) => {



    
})

app.listen('8081');
