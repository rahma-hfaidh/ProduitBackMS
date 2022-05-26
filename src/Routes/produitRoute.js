const express = require('express')
const router = express.Router()
const ProduitController=require("../Controllers/produitController");
router.get('/GetAllProduits', ProduitController.findAll);
router.get('/GetAllRepas', ProduitController.findAllRepas);
router.get('/GetAllBoissons', ProduitController.findAllBoissons);
router.get('/GetAllDesserts', ProduitController.findAllDesserts);
router.get('/GetProdByIdCat/:id_cat',ProduitController.findProdByIdCat);
router.get('/GetProdByIdRestau/:id_restau',ProduitController.findProdByIdRestau);
router.get('/GetProdByIdProd/:id_prod',ProduitController.findProdByIdProd);
router.get('/FindNameRestByIdRest/:id_restau',ProduitController.findNameRestByIdRest);
router.get('/images/:id_prod',ProduitController.Images);
router.post('/postProd',ProduitController.post);
router.get('/GetAllcommandesP/:id_com',ProduitController.findAlll);
router.get('/GetAllcommandesPA/:id_com',ProduitController.findAllA);
router.get('/GetAllcommandesPweb/:id_com',ProduitController.findAllweb);
router.get('/GetPriceProd/:id_prod/:id_unite', ProduitController.findPrice);
module.exports=router;  


/*
const express = require('express');
const { body } = require('express-validator'); 
const prodController = require('../controllers/produit');
const routerP = express.Router();
routerP.get('/', prodController.getAllproduits);
routerP.post('/min', prodController.getPord);
routerP.get('/images',prodController.Images);
module.exports = routerP;
*/
