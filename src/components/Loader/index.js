import React from 'react'
import './index.css'

export default function Loader() {
    return (
        <div className="lds-ellipsis"
          style={ window.innerWidth > 1199 ?
            {position: 'absolute', top: '35%', left: '47%'}
            :
            {position: 'absolute', top: '35%', left: '42%'}
            }
          ><div></div><div></div><div></div><div></div></div>
      )
}