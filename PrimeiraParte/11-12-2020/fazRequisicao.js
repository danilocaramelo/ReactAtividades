function fazRequisicao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promisse resolvida");
            reject("Promisse erro");
        }, 5000);
    });
}

fazRequisicao()
    .then(console.log)
    .catch(console.log)
    .finally(console.log("finalizando..."))