import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const HeaderSec = ({ title, btnTitle, path }) => {
    return (
        <div className='d-flex justify-content-between mt-5'>
            <Link to={path}>
                <Button className='boldFont' variant="outline-dark">{btnTitle}</Button>'
            </Link>
            <p className='boldFont'>{title}</p>
        </div >
    )
}
