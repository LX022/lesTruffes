/* Delete Personne*/
function deletePersonne(idPersonne) {
    superagent.delete(`/persons/${idPersonne}`)
        .then(() => {
            window.location.href = '/persons';
        });
}

/* Update Personne*/
function updatePersonne(idPersonne) {
    superagent.put('/persons')
        .send({
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