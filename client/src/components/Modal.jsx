import React from 'react'
import '../App.css'

const Modal = ({ message, onConfirm, onCancel }) => {
	return (
		<div className="modal">
			<p>{message}</p>
			<button className='btn-update' onClick={onConfirm}>Yes</button>
			<button className='btn-delete' onClick={onCancel}>No</button>
		</div>
	);
};

export default Modal