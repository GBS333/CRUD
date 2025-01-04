const db = require('../config/db');

const bikes = {
    // Cria um novo produto
    create: (bikes, callback) => {
        const query = 'INSERT INTO bikes (name, price, category) VALUES (?, ?, ?)';
        db.query(query, [bikes.name, bikes.price, bikes.category], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    // Encontra um produto por ID
    findById: (id, callback) => {
        const query = 'SELECT * FROM bikes WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    // Atualiza um produto existente
    update: (id, bikes, callback) => {
        const query = 'UPDATE bikes SET name = ?, price = ?, category = ? WHERE id = ?';
        db.query(query, [bikes.name, bikes.price, bikes.category, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Deleta um produto por ID
    delete: (id, callback) => {
        const query = 'DELETE FROM bikes WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Obtém todos os produtos
    getAll: (callback) => {
        const query = 'SELECT * FROM bikes';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = bikes;
