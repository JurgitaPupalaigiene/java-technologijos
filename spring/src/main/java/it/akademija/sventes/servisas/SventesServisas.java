package it.akademija.sventes.servisas;

import it.akademija.sventes.SventesEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import it.akademija.sventes.SventesDTO;

import java.util.List;
import java.util.stream.Collectors;

public class SventesServisas {

    @Autowired
    private SventesRepositorija sventesRepositorija;

    //Cia nuskaitome sventes is enticio i dto
    @Transactional(readOnly = true)
    public List<SventesDTO> getFullListOfSvenciu() {
        return sventesRepositorija.findAll().stream().map((holiday) ->
                new SventesDTO(holiday.getTitle(),
                        holiday.getDescription(),
                        holiday.getImage(),
                        holiday.getType(),
                        holiday.isFlag()
                )).collect(Collectors.toList());
    }

    //Cia nuskaitome viena svente
    @Transactional(readOnly = true)
    public SventesDTO findSventeByTitle(String title) {
        SventesEntity currentSvente = sventesRepositorija.findSventeByTitle(title);
        SventesDTO sventeToController= new SventesDTO(currentSvente.getTitle(),
                        currentSvente.getImage(),
                        currentSvente.getDescription(),
                        currentSvente.getType(),
                        currentSvente.isFlag());
        return sventeToController;
    }

    //kuriame nauja svente
    @Transactional
    public void createSvente(String title, String image, String description, String type, boolean flag) {
        SventesEntity naujaSvente = new SventesEntity(title, image, description, type, flag);
        sventesRepositorija.save(naujaSvente);
    }

    // atnaujiname svente
    @Transactional
    public void updateSvente(String currentTitle, String title, String image, String description, String type, boolean flag) {
        SventesEntity sventeToUpdate = sventesRepositorija.findSventeByTitle(
                currentTitle);
        sventeToUpdate.setTitle(title);
        sventeToUpdate.setImage(image);
        sventeToUpdate.setDescription(description);
        sventeToUpdate.setType(type);
        sventeToUpdate.isFlag();
        sventesRepositorija.save(sventeToUpdate);
    }

    //sventes istrynimas
    @Transactional
    public void deleteSvente(String title) {
        sventesRepositorija.deleteSventeByTitle(title);
    }
}
