const express = require("express")
const  {registerVeterinaireProfile, veterinaireProfileLogin, deleteVET, updateVeterinaireProfile} = require('../Controllers/veterinaireProfile.controller')
const {registerRules,validator} = require("../middlewares/validatorVeto")
const isAuth = require ("../middlewares/passportSetupVeto")
const veterinaireProfile = require("../Models/veterinaireProfile")

const Router = express.Router()

Router.post('/register', registerRules(),validator, registerVeterinaireProfile )

Router.post('/login', veterinaireProfileLogin)
Router.get("/currentvet",isAuth(),function (req, res) {
    res.send(req.user);
  })

Router.get('/GET',(req, res)=>{
    veterinaireProfile.find()
    .then(veterinaireProfiles=>res.status(200).json(veterinaireProfiles))
    .catch(err=> res.status(400).json(err))
});

Router.delete('/delete/:id', deleteVET);

// Router.put('/update/:id', update);
Router.put('/:_id',updateVeterinaireProfile)


module.exports = Router