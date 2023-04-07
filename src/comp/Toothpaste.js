import React from 'react'

export default function Toothpaste() {
  return (
    <div className="container " style={{marginTop:"4rem"}}>
        <div className="row">
            <div className='col-sm'>
                <img src="https://github.com/Rinzler2603/toothPaste/blob/main/public/toothpaste.jpg?raw=true" className="img-fluid rounded mx-auto d-block " alt="Responsive" style={{height:"30rem"}}></img>
            </div>
            <div className='col-sm text-center d-flex align-items-center' style={{margin:"6rem auto"}}>
                <h1 style={{lineHeightStep:4}}><strong>क्या आपके</strong> Toothpaste <strong>में नमक है ?</strong></h1>
            </div>
            <div className='col-sm'>
                <img src="https://github.com/Rinzler2603/toothPaste/blob/main/public/toothpaste2.jpg?raw=true" className="img-fluid rounded mx-auto d-block " alt="Responsive" style={{height:"30rem"}}></img>
            </div>
            
        </div>
    </div>
  )
}
