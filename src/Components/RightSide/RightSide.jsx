import React, { useState } from 'react'
import { TableData } from '../../Data/TableApiData.js'
import { AiFillDownSquare } from 'react-icons/ai'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Divider } from '@mui/material'
import TemToggleBtn from '../TemToggleBtn.jsx'
import SizeToggleBtn from '../SizeToggleBtn.jsx'
import { Link } from 'react-router-dom'
import '../Styles.css'

const RightSide = () => {
    const [partNumber, setpartPartNumber] = useState(false);
    const [price, setPrice] = useState(false);
    const [stock, setStock] = useState(false);
    const [material, setMaterial] = useState(false);
    const [color, setColor] = useState(false);
    const [hardness, setHardness] = useState(false);
    const [scale, setScale] = useState(false);
    const [type, setType] = useState(false);
    const [size, setSize] = useState(false);
    const [cs, setCS] = useState(false);
    const [id, setID] = useState(false);
    const [materialDescription, setMaterialDescription] = useState(false);
    const [highTmp, setHighTmp] = useState(false);
    const [lowTmp, setLowTmp] = useState(false);


    return (
        <div>
            {/* Toggle Button  */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: '-26px', marginBottom: "4px" }}>
                <TemToggleBtn />
                <SizeToggleBtn />
            </div>


            {/* Table  */}
            <div className='tableOuterStyle' >
                <table className="custom-table" style={{ width: "90vw", }}>
                    <thead>
                        <tr>
                            <th>Part Number <AiFillDownSquare className='icon' onClick={() => setpartPartNumber(!partNumber)} />
                                {partNumber && (<div className="dropdown"><p onClick={() => setpartPartNumber(false)}> Ascending</p> <Divider /> <p onClick={() => setpartPartNumber(false)}> Descending</p></div>)}
                            </th>
                            <th>Starting <br /> Price<AiFillDownSquare className='icon' onClick={() => setPrice(!price)} />
                                {price && (<div className="dropdown"><p onClick={() => setPrice(false)}> Ascending</p> <Divider /> <p onClick={() => setPrice(false)}> Descending</p></div>)}
                            </th>
                            <th>Stock<AiFillDownSquare className='icon' onClick={() => setStock(!stock)} />
                                {stock && (<div className="dropdown"><p onClick={() => setStock(false)}> Ascending</p> <Divider /> <p onClick={() => setStock(false)}> Descending</p></div>)}
                            </th>
                            <th>Material<AiFillDownSquare className='icon' onClick={() => setMaterial(!material)} />
                                {material && (<div className="dropdown"><p onClick={() => setMaterial(false)}> Ascending</p> <Divider /> <p onClick={() => setMaterial(false)}> Descending</p></div>)}
                            </th>
                            <th>Color<AiFillDownSquare className='icon' onClick={() => setColor(!color)} />
                                {color && (<div className="dropdown"><p onClick={() => setColor(false)}> Ascending</p> <Divider /> <p onClick={() => setColor(false)}> Descending</p></div>)}
                            </th>
                            <th>Hardness <AiFillDownSquare className='icon' onClick={() => setHardness(!hardness)} />
                                {hardness && (<div className="dropdown"><p onClick={() => setHardness(false)}> Ascending</p> <Divider /> <p onClick={() => setHardness(false)}> Descending</p></div>)}
                            </th>
                            <th>Scale <AiFillDownSquare className='icon' onClick={() => setScale(!scale)} />
                                {scale && (<div className="dropdown"><p onClick={() => setScale(false)}> Ascending</p> <Divider /> <p onClick={() => setScale(false)}> Descending</p></div>)}
                            </th>
                            <th>Type<AiFillDownSquare className='icon' onClick={() => setType(!type)} />
                                {type && (<div className="dropdown"><p onClick={() => setType(false)}> Ascending</p> <Divider /> <p onClick={() => setType(false)}> Descending</p></div>)}
                            </th>
                            <th>Size <AiFillDownSquare className='icon' onClick={() => setpartPartNumber(true)} />
                                {size && (<div className="dropdown"><p onClick={() => setpartPartNumber(false)}> Ascending</p> <Divider /> <p onClick={() => setpartPartNumber(false)}> Descending</p></div>)}
                            </th>
                            <th>CS<span>(mm)</span><AiFillDownSquare className='icon' onClick={() => setpartPartNumber(true)} />
                                {cs && (<div className="dropdown"><p onClick={() => setpartPartNumber(false)}> Ascending</p> <Divider /> <p onClick={() => setpartPartNumber(false)}> Descending</p></div>)}
                            </th>
                            <th>ID<span>(mm)</span><AiFillDownSquare className='icon' onClick={() => setpartPartNumber(true)} />
                                {id && (<div className="dropdown"><p onClick={() => setpartPartNumber(false)}> Ascending</p> <Divider /> <p onClick={() => setpartPartNumber(false)}> Descending</p></div>)}
                            </th>
                            <th style={{ width: "200px" }}>Material Description <AiFillDownSquare className='icon' onClick={() => setpartPartNumber(true)} />
                                {materialDescription && (<div className="dropdown"><p onClick={() => setpartPartNumber(false)}> Ascending</p> <Divider /> <p onClick={() => setpartPartNumber(false)}> Descending</p></div>)}
                            </th>
                            <th>High Tmp<span>(°C)</span> <AiFillDownSquare className='icon' onClick={() => setpartPartNumber(true)} />
                                {highTmp && (<div className="dropdown"><p onClick={() => setpartPartNumber(false)}> Ascending</p> <Divider /> <p onClick={() => setpartPartNumber(false)}> Descending</p></div>)}
                            </th>
                            <th>Low Tmp<span>(°C)</span>  <AiFillDownSquare className='icon' onClick={() => setpartPartNumber(true)} />
                                {lowTmp && (<div className="dropdown"><p onClick={() => setpartPartNumber(false)}> Ascending</p> <Divider /> <p onClick={() => setpartPartNumber(false)}> Descending</p></div>)}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableData.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <tr className={item.id % 2 === 1 ? 'gray-row' : ''} style={{ cursor: "pointer" }}>
                                    <Link to={`/detail/${item.id}`}>
                                        <td>{item.SearchDescription}</td>
                                    </Link>
                                    <td>{item.price}</td>
                                    <td className={item.qnty === 0 ? 'O-qnty' : 'qnty-col'}>
                                        {
                                            item.qnty === 0 ? <p style={{ color: '#fff' }}>Check Stock</p> : <p style={{ color: '#fff' }}> In Stock</p>
                                        }</td>
                                    <td>{item.Material}</td>
                                    <td>{item.Color}</td>
                                    <td>{item.DurometerRange}</td>
                                    <td>{item.DurometerScale}</td>
                                    <td>{item.CrossSectionalGeometry}</td>
                                    <td>{item.SizeAS568}</td>
                                    <td>{item.CrossSectionalDiameter}</td>
                                    <td>{item.InsideDiameter}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.HighTemperature}</td>
                                    <td>{item.LowTemperature}</td>
                                </tr>
                                {index < TableData.length - 1 && (
                                    <tr className="horizontal-row">
                                        <td colSpan="19"></td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ width: "100%", display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 8, paddingRight: "20px" }}>
                <select value={''} className='section' >
                    <option value={20}>20</option>
                    <option value={40}>40</option>
                    <option value={60}>60</option>
                </select>
                <button className='paginationBtn'><GrPrevious /></button>
                <button className='paginationBtn'><GrNext /></button>
            </div>
        </div>

    );
}
export default RightSide