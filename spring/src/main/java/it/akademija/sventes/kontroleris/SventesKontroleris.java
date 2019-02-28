package it.akademija.sventes.kontroleris;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import it.akademija.sventes.SventesDTO;
import it.akademija.sventes.servisas.SventesServisas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Api(value = "holiday")
@RequestMapping(value="/holidays")

public class SventesKontroleris {
    private final SventesServisas sventesServisas;

    @Autowired
    public SventesKontroleris(SventesServisas sventesServisas) {
        this.sventesServisas = sventesServisas;
    }

    //Visos sventes
    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value="Gauti svenciu sarasa", notes = "Grazina visas uzregistruotas sventes")
    public List<SventesDTO> getSvenciuSarasa(){
        return sventesServisas.getFullListOfSvenciu();
    }

    //Viena svente
    @RequestMapping(path = "/title", method = RequestMethod.GET)
    @ApiOperation(value="Gauti svente", notes = "Grazina pasirinkta svente")

    public SventesDTO getSventeByTitle(
            @ApiParam (value= "Sventes pavadinimas", required = true)
            @Valid
            @PathVariable final String title){
        return sventesServisas.findSventeByTitle(title);
    }

    //nauja svente
    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create new holiday",
            notes = "Creates new holiday with provided data")
    public void createSvente(
            @ApiParam(value = "Sventes duomenys", required = true)
            @Valid @RequestBody
            final CreateSventeKomanda createSventeKomanda) {

        sventesServisas.createSvente(createSventeKomanda.getTitle(),
                createSventeKomanda.getDescription(), createSventeKomanda.getImage(), createSventeKomanda.getType(), createSventeKomanda.isFlag());
    }
//    //sventes atnaujinimas NEVEIKIA
//    @RequestMapping(path = "/{oldTitle}", method = RequestMethod.PUT)
//    @ResponseStatus(HttpStatus.OK)
//    @ApiOperation(value = "Atnaujinti svente", notes = "Redaguoja pasirinkta svente")
//
////    public void updateSvente(
//            @ApiParam(value = "Sventes title", required = true)
//            @Valid @PathVariable final String oldTitle,
//            @ApiParam(value = "Sventes duomenys", required = true)
//            @Valid @RequestBody final EditSventeKomanda editSventeKomanda) {
//
//        sventesServisas.updateSvente(
//                oldTitle,
//                editSventeKomanda.getTitle(),
//                editSventeKomanda.getDescription(),
//                editSventeKomanda.getImage(),
//                editSventeKomanda.getType(),
//                editSventeKomanda.isFlag());
//        }
//
//     sventes istrynimas

    @RequestMapping(path = "/{title}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation(value = "Delete holiday", notes = "Deletes selected holiday")
    public void deleteSvente(@PathVariable final String title) {
        sventesServisas.deleteSvente(title);
        }

}
