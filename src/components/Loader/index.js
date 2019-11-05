import React from 'react'
import './index.css'

export default function Loader() {
    return (
        <div className="lds-ellipsis" style={{position: 'absolute', top: '35%', left: '47%'}}><div></div><div></div><div></div><div></div></div>
      )
}