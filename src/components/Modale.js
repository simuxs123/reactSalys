import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
function Modale({areaCheck,populationCheck,name,flag,currencies,languages,show,onHide}) {

    return (
        <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="d-flex mb-0 align-items-center">{name}<img className="title-img ml-2" src={flag} alt={name}/></p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><span>Population:</span> {populationCheck.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        <p><span>Area:</span> {areaCheck.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}km2</p>
        <p><span>Currency code:</span> {currencies[0].code} </p>
        <p><span>Currency name:</span> {currencies[0].name}</p>
        <p><span>Language:</span> {languages[0].name}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}
Modale.propTypes={                        
    name:PropTypes.string,     
    populationCheck:PropTypes.number.isRequired, 
    areaCheck:PropTypes.number.isRequired,  
    flag:PropTypes.string,
    currencies:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    languages:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}
Modale.defaultProps={
  areaCheck:0,
  populationCheck:0
}
export default Modale
