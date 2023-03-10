import db from "../config/db.js";
 
// Get All Hotels
export const getHotels = (result) => {
    db.query("SELECT h.*, t.Hind FROM hotell h inner join tuba t on h.Hotelli_ID=t.Hotelli_ID WHERE t.hind = (SELECT min(hind) FROM tuba WHERE Hotelli_ID = t.Hotelli_ID) GROUP BY h.Hotelli_ID, t.Hind;", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Hotel
export const getHotelByName = (name, result) => {
    db.query(`SELECT * FROM hotell WHERE Nimi like ?`, [name], (err, results) => {      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getHotelById = (id, result) => {
    db.query(`SELECT * FROM hotell WHERE Hotelli_ID = ?`, [id], (err, results) => {      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getHotelsByOwnerId = (id, result) => {
    db.query(`SELECT * FROM hotell WHERE Omanik = ?`, [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const getLatestHotelByOwnerId = (id, result) => {
    db.query(`SELECT * FROM hotell WHERE Omanik = ? ORDER BY Hotelli_ID DESC LIMIT 1;`, [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}


// Add hotel
export const insertHotel = (data, result) => {
    db.query("INSERT INTO hotell SET ?", [data], (err, results) => {      
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



/* Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}*/
 
// Delete Hotel from Database
export const deleteHotelById = (id, result) => {
    id = id.slice(1)
    db.query("DELETE FROM hotell WHERE Hotelli_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}