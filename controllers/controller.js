const express = require('express');
const model = require('../models/product');

module.exports = {

    /**
     * Recebe todos os dados dos produtos e insere no banco de dados
     */
    async create(req, res) {
        let { tittle, price, category, description } = req.body;

        model.insertMany(
            [
                {
                    tittle: tittle,
                    price: price,
                    category: category,
                    description: description
                }
            ],
            (err, results) => {
                if (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ response: "error", err: err });
                } else {
                    console.log("Insert Success");
                    res.status(201).json({ response: "success" });
                }
            }
        );
    },

    /**
     * Recebe o titulo e categoria de um produto e remove todas as suas informações do banco de dados
     */
    async remove(req, res) {
        let { tittle, category } = req.body;

        model.deleteMany({ tittle: tittle, category: category }, (err, results) => {
            if(err) {
                console.log("Error: ", err);
                res.status(500).json({ response: "error", err: err });
            } else {
                console.log("Removed success");
                res.status(200).json({ response: "success" });
            }
        });
    },

    /**
     * Recebe o titulo, categoria e novas informações do produtos e atualiza no banco de dados
     */
    async update(req, res) {
        let { tittle, category, newTittle, newPrice, newCategory, newDescription } = req.body;

        model.updateMany(
            { tittle: tittle, category: category },
            { "$set": { tittle: newTittle, category: newCategory, price: newPrice, description: newDescription } },
            (err, results) => {
                if (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ response: "error", err: err });
                } else {
                    console.log("Updated success");
                    res.status(200).json({ response: "success" })
                }
            });
    },

    /**
     * Recebe o titulo, categoria e nova categoria do produto e atualiza no banco de dados
     */
    async updateProductCategory(req, res) {
        let { tittle, category, newCategory } = req.body;

        model.updateMany(
            { tittle: tittle, category: category },
            { "$set": { category: newCategory } },
            (err, results) => {
                if (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ response: "error", err: err });
                } else {
                    console.log("Updated success");
                    res.status(200).json({ response: "success" })
                }
            });
    },

    /**
     * Recebe a categoria e nova categoria dos produtos e atualiza no banco de dados
     */
    async updateCategory(req, res) {
        let { category, newCategory } = req.body;

        model.updateMany(
            { category: category },
            { "$set": { category: newCategory } },
            (err, results) => {
                if (err) {
                    console.log("Error: ", err);
                    res.status(500).json({ response: "error", err: err });
                } else {
                    console.log("Updated success");
                    res.status(200).json({ response: "success" })
                }
            });
    },

    /**
     * Retorna os dados de todos os produtos cadastrados
     */
    async readAll(req, res) {
        model.find({}, (err, results) => {
            if (err) {
                console.log("Error: ", err);
                res.status(500).json({ response: "error", err: err });
            } else {
                console.log("Success");
                res.status(200).json({ response: "success", results: results })
            }
        });

    },

    /**
     * Recebe uma categoria e retorna as informações de todos os produtos daquela categoria
     */
    async categoryResearch(req, res) {
        let { category } = req.body;

        model.find({ category: category }, (err, results) => {
            if (err) {
                console.log("Error: ", err);
                res.status(500).json({ response: "error", err: err });
            } else {
                console.log("Success");
                res.status(200).json({ response: "success", results: results })
            }
        });
    },

    /**
     * Recebe um titulo e retorna as informaçoes de todos os produtos com aquele titulo
     */
    async tittleResearch(req, res) {
        let { tittle } = req.body;

        model.find({ tittle: tittle }, (err, results) => {
            if (err) {
                console.log("Error: ", err);
                res.status(500).json({ response: "error", err: err });
            } else {
                console.log("Success");
                res.status(200).json({ response: "success", results: results })
            }
        });
    }
}