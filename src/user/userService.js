var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new UserModel();

        userModelData.nome = userDetails.nome;
        userModelData.sobrenome = userDetails.sobrenome;
        userModelData.email = userDetails.email;
        userModelData.senha = userDetails.senha;
        var criptografado = criptografado.criptografar(userDetails.senha);
        userModelData.senha = criptografado;

        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result) {
            if (error) {
                reject (false);
            } else {
                resolve (result);
            }
        });
    });
}

module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id, function returnData(error, result) {
            if (error)
                reject(false);
            else
                resolve(result);
        });
    });
}