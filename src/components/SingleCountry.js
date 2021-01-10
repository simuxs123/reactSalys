import React, {useState} from 'react'
import {Button} from 'react-bootstrap';
import Modale from './Modale'
function SingleCountry(props) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="col-sm-6 col-lg-4 mb-3" >
                        <img src={props.flag} alt=""/>
                        <div className="d-flex justify-content-between align-items-center above-photo mt-1">
                            <p className="text-light">{props.name}</p>
                            <Button variant="primary" onClick={() => setModalShow(true)}>More</Button> {/* paspaudus issoka modal */}
                            <Modale  
                                areaCheck={props.area||undefined}//Yra duomenu kur reiksme yra null ir nezinau kaip geriau ispresti,pameginau su vienu sitaip,bet nezinau ar gerai
                                populationCheck={props.population||undefined}
                                {...props}                    
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                             />
                            
                        </div>
                    </div>
    )
}
export default SingleCountry
