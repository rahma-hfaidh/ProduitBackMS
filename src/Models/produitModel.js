var db=require('../../Config/database');


module.exports = class Produit{
    constructor(id_prod,nomProd,imageProd,id_restau,id_cat){
        this.id_prod=id_prod;
        this.nomProd=nomProd;
        this.imageProd=imageProd;
        this.id_restau=id_restau;
        this.id_cat=id_cat;
   
      
    }
  

    static fetchAll(){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat from produit');
     
    }

    static findProdByIdCat(id_cat){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat FROM produit WHERE id_cat = ?',[id_cat]);
     
    }
    static findAllRepas(){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat FROM produit WHERE id_cat = 2');
     
    }
    static findAllBoissons(){
        return db.execute (
            'SELECT id_prod,nomProd,id_restau,id_cat FROM produit WHERE id_cat = 1');
     
    }
    static findAllDesserts(){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat from produit WHERE id_cat = 3');
     
    }

    static findProd(id_prod){
        return db.execute (
            'Select * from produit WHERE id_prod = ?',[id_prod]);
     
    }
    static findProdByRestau(id_restau){
        return db.execute (
            'Select * from produit WHERE id_restau = ?',[id_restau]);
     
    }


    static findNameRestByIdRest(id_restau){
        return db.execute (
            'Select designation from restaurant WHERE id_restau = ?',[id_restau]);
     
    }

    static fetchImage(id_prod){
        return db.execute (
            'SELECT imageProd FROM produit WHERE id_prod = ?',[id_prod]);
     
    }

    static getid(){
        return db.execute (
            'SELECT MAX(id_prod) as id_prod FROM produit');
     
    }
    static fetchProd(id_prod){
 
        return db.execute (
            'SELECT nomProd FROM produit WHERE id_prod = ?',[id_prod]);
     
    }

    

    static postProd(nomProd,id_restau,id_cat){
 
        return db.execute('INSERT INTO produit (nomProd,id_restau,id_cat) VALUES (?,?,?)',
        [nomProd,id_restau,id_cat] );
       
       
    }
    static postImageProd(imageProd,id_prod){
 
        return db.execute('UPDATE produit SET imageProd = ? WHERE id_prod = ?',[imageProd,id_prod]);
       
       
    }

    //detailles by idcommande 
    static fetchAllForCommande(id_com){
        return db.execute (
            "SELECT detail_com.id_detailCom,detail_com.quantite,produit.nomProd As produit ,unite.nomUnite As unite ,produit.imageProd As image_produit,detailprod.prix As prix   FROM detail_com JOIN detailprod ON detail_com.id_detailProd = detailprod.id_detailProd Join produit ON produit.id_prod = detailprod.id_prod Join unite ON unite.id_unite = detailprod.id_unite WHERE id_com =?" ,[id_com]);
     
    }

      
    //findAllproduitscomA
    static findAllproduitscomA(id_com){
        return db.execute (
            "SELECT detail_com.id_detailCom,detail_com.quantite,produit.nomProd As produit ,unite.nomUnite As unite ,produit.imageProd As image_produit ,detailprod.prixProd  FROM detail_com JOIN detailprod ON detail_com.id_detailProd = detailprod.id_detailProd Join produit ON produit.id_prod = detailprod.id_prod Join unite ON unite.id_unite = detailprod.id_unite WHERE id_com =?" ,[id_com]);
    
    }

    static postDetailProd(prixProd,id_prod,id_unite){
 
        return db.execute('INSERT INTO detailprod (prixProd,id_prod,id_unite) VALUES (?,?,?)',
        [prixProd,id_prod,id_unite] );
       
       
    }

    static findPrice(id_prod,id_unite){
        return db.execute (
            'Select prixProd from detailprod WHERE id_prod = ? and id_unite = ?',[id_prod,id_unite]);
     
    }
 
   
};