const Perro = require("../models/perros");

class PerroControllers {
  constructor() {}

  async findAll() {
    try {
      return await Perro.find().lean();
    } catch (error) {
      throw error;
    }
  }

  async searchPerros(input) {
    try {
      return await Perro.find({
        '$text': {
          '$search': input,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async create(perro) {
    try {
      return await Perro.create(perro);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PerroControllers();
