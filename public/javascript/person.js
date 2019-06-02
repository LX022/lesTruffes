/* Update Personne*/
function updatePersonne(idPersonne, nomP, prenomP, emailP, facebookP, telPortableP, rueP, dateNaissanceP) {
    superagent.put('/persons')
        .send({
            idPersonne: idPersonne,
            nomP: nomP,
            prenomP: prenomP,
            emailP: emailP,
            facebookP: facebookP,
            //telPortableP: req.body.telPortableP,
            rueP: rueP,
            dateNaissanceP: dateNaissanceP,
            //idPrevisiteFa: 1
        })
}

/* Delete Personne*/
function deletePersonne(idPersonne) {
    superagent.delete(`/persons/${idPersonne}`)
        .then(() => {
            window.location.href = '/persons';
        });
}

