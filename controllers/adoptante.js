
const Adoptante = require('../models/adoptantes');

class AdoptanteControllers{

    constructor(){}

    async findAll() {
        try {
            return await Adoptante.find().lean();
        } catch (error) {
            throw error;
        }
    }

    async create(adoptante) {
        try {
            return await Adoptante.create(adoptante);
        } catch (error) {
            throw error;
        }
    }

}


module.exports = new AdoptanteControllers();