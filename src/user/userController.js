var userService = require('./userService');

var getDataControllerFunction = async (req, res) => {
    var usuario = await userService .getDataFromDBService();
    res.send({"status": true, "data": usuario});
}

var createUserControllerFunction = async (req, res) => {
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log("-----------------------------");
    console.log(status);
    console.log("-----------------------------");

    if (status) {
        res.send({"status":true, "message": "Usuário criado com sucesso"});
    } else {
        res.send({"status":false, "message": "Erro ao tentar criar usuário"});
    }
}

var updateUserControllerFunction = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await userService.updateUserDBService(req.params.id, req.body);

    if (result)
        res.send({"status":true, "message":"Usuário atualizado"});
    else
        res.send({"status":false, "message":"Falha ao atualizar o usuário"});
}

var deleteUserControllerFunction = async (req, res) => {
    console.log(req.params.id);
    var result = await userService.removeOneUserDBService(req.params.id);
    
    if (result)
        res.send({"status":true, "message":"Usuário excluídp com sucesso"});
    else
        res.send({"status":false, "message":"Erro ao excluir o usuário"});

}

module.exports = {getDataControllerFunction, createUserControllerFunction, updateUserControllerFunction, deleteUserControllerFunction};