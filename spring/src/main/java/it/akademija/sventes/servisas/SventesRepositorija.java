package it.akademija.sventes.servisas;

import it.akademija.sventes.SventesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SventesRepositorija extends JpaRepository <SventesEntity, Long> {
    SventesEntity findSventeByTitle(String title);
    void deleteSventeByTitle(String title);
}
