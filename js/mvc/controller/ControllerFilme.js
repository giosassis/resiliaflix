
class ControllerFilme{

    fazMagia(){
        let modal = new ModalFilme;
        modal.requereDados();
        let viewFilme = new ViewFilme(catModel);
        viewFilme.updateView();
    }

}