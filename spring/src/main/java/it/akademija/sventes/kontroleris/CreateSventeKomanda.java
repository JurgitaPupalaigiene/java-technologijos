package it.akademija.sventes.kontroleris;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

public class CreateSventeKomanda {
    @NotNull
    @Length(min = 1, max = 30)
    private String title;
    @NotNull
    @Length(min = 1, max = 30)
    private String description;
    @NotNull
    @Length(min = 1, max = 30)
    private String image;
    @NotNull
    @Length(min = 1, max = 30)
    private String type;
    private boolean flag;

    public CreateSventeKomanda() {
    }



        public String getTitle () {
            return title;
        }


        public void setTitle (String title){
            this.title = title;
        }


        public String getDescription () {
            return description;
        }


        public void setDescription (String description){
            this.description = description;
        }


        public String getImage () {
            return image;
        }


        public void setImage (String image){
            this.image = image;
        }


        public String getType () {
            return type;
        }


        public void setType (String type){
            this.type = type;
        }


        public boolean isFlag () {
            return flag;
        }


        public void setFlag ( boolean flag){
            this.flag = flag;
        }
    }
