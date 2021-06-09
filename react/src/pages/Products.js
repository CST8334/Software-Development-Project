
import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import styled from 'styled-components';
import Modal from '../components/Modal'

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const Products = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <div>
            <ProdSelec>
                <div>
                    <h1>Products</h1>
                        <div>
                            <label for="compliance">Compliance Status</label>
                            <br/>
                                <select id="compliance">
                                    <option value="volvo">Compliant</option>
                                    <option value="saab">Soon to Expire</option>
                                    <option value="opel">Expired</option>
                                </select>
                        </div>    
                        <div>
                            <label for="country">Country</label>
                            <br/>
                                <select id="country">
                                    <option value="volvo">United States</option>
                                    <option value="saab">Brazil</option>
                                    <option value="opel">Canada</option>
                                    <option value="opel">Mexico</option>
                                </select>
                        </div>
            
                        <div>
                            <label for="body">Issuing Body</label>
                            <br/>
                                <select id="body">
                                    <option value="volvo">Option 1</option>
                                    <option value="saab">Option 2</option>
                                    <option value="opel">Option 3</option>
                                    <option value="opel">Option 4</option>
                                </select>
                        </div>
                </div>
            </ProdSelec>
                
            <div style={BUTTON_WRAPPER_STYLES}>
                <button onClick={() => setIsOpen(true)}> CREATE PRODUCT </button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <form>
                        <div>
                            <p>Product Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Model Name</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Product Version</p>
                            <input type="text" />
                        </div>
                        <button type="button">Submit</button> 
                    </form>
                </Modal>
            </div>
                <div>
                    <Faq>
                            <Toggle title="Languages">
                                <div className="anwser">
                                    <p>Proficient in HTML, CSS, Javascript, React, SQL, Linux, and Cobol but constantly expanding and learning new languages!</p>
                                </div>
                            </Toggle>
                            <Toggle title="Education">
                                <div className="anwser">
                                    <p>Currently enrolled in the Computer Programming program at Algonquin College. Expected to graduate in August 2021.</p>
                                </div>
                            </Toggle>
                            <Toggle title="Goals">
                                <div className="anwser">
                                    <p>Looking for a full-time position where able to contribute to the team and learn from other developers.</p>
                                </div>
                            </Toggle>
                            <Toggle title="Other...">
                                <div className="anwser">
                                    <p>Other skills include knoledge of Photoshop and Figma. Both are very powerful tools and go hand in hand with web development.</p>
                                </div>
                            </Toggle>
                    </Faq>
                </div>
        </div> 
    )
}

const ProdSelec = styled.div`
    width: 200px;
    height: 200px;
    margin: 50px;
    padding: 10px;
    display: flex;
    background: white;
    flex-direction: column;
    border-radius: 20px;
`

const Faq = styled.div`

width: 600px;
height: 200px;
margin: 20px;
padding: 1px;
display: flex;
flex-direction: column;

    display: block;
    span{
        display: block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`




export default Products
