import connection from "../db/database.js";

async function getAllUsers(req, res) {
    const query = `SELECT * FROM users ORDER BY name;`;
    connection.query(query, (err, result, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal server error"});
        } else {
            console.log(result)
            console.log(fields)
            res.status(200).json(result);
        }
    });
}

async function getUserById(req, res) {
    const id = req.params.id;
    const query = `SELECT * FROM users WHERE id = ?;`;
    connection.query(query, [id], (err, result, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal server error"});
        } else {
            if (result.length) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({message: `User with id ${id} not found`});
            }
        }
    });
}

async function createUser(req, res) {
    const {name, mail, image, title} = req.body;
    const query = `INSERT INTO users (name, mail, image, title) VALUES (?, ?, ?, ?);`;
    connection.query(query, [name, mail, image, title], (err, result, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal server error"});
        } else {
            res.status(201).json({id: result.insertId, name, mail, image, title});
        }
    });
}

async function updateUser(req, res) {
    const id = req.params.id;
    const {name, mail, image, title} = req.body;
    const query = `UPDATE users SET name = ?, mail = ?, image = ?, title = ? WHERE id = ?;`;
    connection.query(query, [name, mail, image, title, id], (err, result, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal server error"});
        } else {
            res.status(200).json({id, name, mail, image, title});
        }
    });
}

async function deleteUser(req, res) {
    const id = req.params.id;
    const query = `DELETE FROM users WHERE id = ?;`;
    connection.query(query, [id], (err, result, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal server error"});
        } else {
            res.status(204).json();
        }
    });
}

export {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}