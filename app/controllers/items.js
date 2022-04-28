const axios = require('axios').default // Importar los modulos
const _ = require('lodash')
const { number, string } = require('joi')
const url = ('https://rickandmortyapi.com/api/character/?id=1')




exports.getData = (req, res) => {
    axios.get(url)
    .then((result) => {
        console.log(charecter = _.filter(result.data, 
            {
                id: {
                    type: number
                },
                name: {
                    type: String
                },
                status: {
                    type: String
                },
                species: {
                    Alive: String
                },
                gender: {
                    type: String
                },
                origin: {
                    name: String,
                    url: String
                },
                image: {
                    type: String
                },
                episodeSize: {
                    type: number.count(_.compact)
                }
            }
            ));
    }).catch((err) => {
        console.log(err);
    });
}