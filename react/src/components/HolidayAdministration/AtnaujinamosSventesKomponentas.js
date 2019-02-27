import React from 'react';

const AtnaujinamosSventesKomponentas = (props) => {    
    return (
        <form >
            <div className="form-row">
                <div className="col-md-12 mb-12">
                    <p>{props.fromMenu}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault01">Sventes pavadinimas</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="" value={props.currentTitle} required onChange={props.handleChangeOfTitle}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault02">Nuotrauka</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="" value={props.currentImage} required onChange={props.handleChangeOfImage}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="validationDefault03">Apie svente</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="" value={props.currentDescription} required onChange={props.handleChangeOfDescription}></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault04">Tipas</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="" value={props.currentType} required onChange={props.handleChangeOfType}></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationDefault05">Veliava</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="" value={props.currentFlag} required onChange={props.handleChangeOfFlag}></input>
                </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={props.handleSubmit}>Sau</button>
            <button className="btn btn-primary" onClick={props.handleDelete}>Delete</button>
        </form>
    );
}

export default AtnaujinamosSventesKomponentas;