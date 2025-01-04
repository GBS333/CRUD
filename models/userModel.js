const db = require('../config/db');

const user = {
    // Cria um novo produto
    create: (user, callback) => {
        const query = 'INSERT INTO user (name, password, role) VALUES (?, ?, ?)';
        db.query(query, [user.name, user.password, user.role], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    // Encontra um produto por ID
    findById: (id, callback) => {
        const query = 'SELECT * FROM user WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    // Atualiza um produto existente
    update: (id, user, callback) => {
        const query = 'UPDATE user SET name = ?, password = ?, role = ? WHERE id = ?';
        db.query(query, [user.name, user.password, user.role, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Deleta um produto por ID
    delete: (id, callback) => {
        const query = 'DELETE FROM user WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Obtém todos os produtos
    getAll: (callback) => {
        const query = 'SELECT * FROM user';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = user;
