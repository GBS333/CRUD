const bikes = require('../models/bikesModel');

const bikesController = {
    // Renderiza o formulário de criação de um novo produto
    renderCreateForm: (req, res) => {
        res.render('bikes/create');
    },

    // Cria um novo produto
    createbikes: (req, res) => {
        const newbikes = {
            name: req.body.name,
            price: parseFloat(req.body.price),
            category: req.body.category,
        };

        bikes.create(newbikes, (err, bikesId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/bikes');
        });
    },

    // Obtém um produto por ID
    getbikesById: (req, res) => {
        const bikesId = req.params.id;

        bikes.findById(bikesId, (err, bikes) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!bikes) {
                return res.status(404).json({ message: 'bikes not found' });
            }
            bikes.price = parseFloat(bikes.price);
            res.render('bikes/show', { bikes });
        });
    },

    // Obtém todos os produtos
    getAllbikes: (req, res) => {
        bikes.getAll((err, bikes) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            // Converter preços para números
            bikes.forEach(bikes => {
                bikes.price = parseFloat(bikes.price);
            });
            res.render('bikes/index', { bikes });
        });
    },

    // Renderiza o formulário de edição de um produto
    renderEditForm: (req, res) => {
        const bikesId = req.params.id;

        bikes.findById(bikesId, (err, bikes) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!bikes) {
                return res.status(404).json({ message: 'bikes not found' });
            }
            res.render('bikes/edit', { bikes });
        });
    },

    // Atualiza um produto
    updatebikes: (req, res) => {
        const bikesId = req.params.id;
        const updatedbikes = {
            name: req.body.name,
            price: parseFloat(req.body.price),
            category: req.body.category,
        };

        bikes.update(bikesId, updatedbikes, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/bikes');
        });
    },

    // Deleta um produto
    deletebikes: (req, res) => {
        const bikesId = req.params.id;

        bikes.delete(bikesId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/bikes');
        });
    },
};

exports.getBikes = async (req, res) => {
    const Bikes = await Bikes.find();
    res.json(Bikes);

module.exports = bikesController;
