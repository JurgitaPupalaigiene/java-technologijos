package it.akademija.sventes;

public class SventesDTO {
    private String title;
    private String description;
    private String type;
    private String image;
    boolean flag;

    public SventesDTO(String title, String description, String type, String image, boolean flag) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.image = image;
        this.flag = flag;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}