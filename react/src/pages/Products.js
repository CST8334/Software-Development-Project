import React, { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import Modal from '../components/Modal'
import ProductsAdd from '../components/ProductsAdd'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle';
import createHistory from 'history/createBrowserHistory'
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

/*couple of stlyes*/
const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const me = JSON.parse(localStorage.getItem("me"));

function getProductListFromBackend() {
    return axios.post("/productsView", {
        productOwnerId: me.uuid
    });
}

function productDeletionCallback(response) { }

function deleteProduct(productUUID) {
    console.log(productUUID)
    axios.delete("/deleteproduct", { data: { uuid: productUUID } }).then(response => {
        productDeletionCallback(response)
    })
}

const Faq = styled.div`
    margin: 20px;
    width: 50vw;
    padding: 1px;
    background: white;
    border-radius: 2px;
    box-shadow: 2px 5px 10px #dfdfdf;
    cursor: pointer;
    .answer{
        height: 150px;
        position: absolute;
    }
`

const AddDelete = styled.div`
    display: flex;
    float: right;
    margin-top: -50px;
    margin-right: 50px;
    #plus{
        color: #2196f3;
        margin-right: 10px;
        font-size: 20px;
    }
    #minus{
        color: #ff0000;
        font-size: 20px;

    }
`


/*getting text from input and replacing tags based on input*/
const Products = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [state, setState] = useState({ productList: [] });
    const [search, setSearch] = useState('');

    const history = createHistory();

    const buttonClick = async (event, state) => {
        const result = await axios.post("/products", {
            model: {
                name: state.name,
                modelNumber: state.model,
                versionNumber: state.version
            },
            ownerUUID: me.uuid
        });
        setState({ productList: (await getProductListFromBackend()).data });
        history.go(0)
        console.log(result);

        setIsOpen(false)
    }

    React.useEffect(async () => {
        productDeletionCallback = async (response) => {
            setState({ productList: (await getProductListFromBackend()).data })
            history.go(0)
        }
        setState({ productList: (await getProductListFromBackend()).data })
    }, []);

    async function sortatz() {
        console.log(state.productList)
        var dropList = document.getElementById("sort")
        if(dropList)
        state.productList.sort((a, b) => a.name > b.name ? 1:-1).map(
        (item, i) =><div key={i}> {item.name} {item.modelNumber} {item.versionNumber} </div>)
        console.log(state.productList)
    }

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const filteredProducts = state.productList.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )

    const [value, setValue] = useState("")
    const handleSelect = (e) => {
        console.log(e)
        if(value="1"){
            setValue(e).sort((a, b) => a.name > b.name ? 1:-1).map(
                (item, i) =><div key={i}> {item.name} {item.modelNumber} {item.versionNumber} </div>)
                console.log(state.productList)
        }

    } 

    // const handleSelect2 = [].concat(this.state.productList)
    //     .sort((a, b) => a.model.name > b.model.name ? 1 : -1)
    //     .map((product, p) => <div key={p}> {product.model.name} {product.model.modelNumber} {product.model.versionNumber} </div>);

    // const sortProducts = state.productList.sort((a, b) => a.name > b.name ? 1:-1).map(
    //     (item, i) => 
    //     <div key={i}> {item.name} {item.modelNumber} {item.versionNumber} </div>
    //     )



    // refreshProductList()

    /*rendering products page*/
    return (

        <Container>
            <header1>
                <h1><b>Products</b></h1>
            </header1>
            <header2>
                <div class="sort">
                    <label>Sort by: </label>
                    <select id="sort" onSelect={handleSelect}>
                        <option value="" >Choose..</option>
                        <option value="1">Status</option>
                        <option value="2">Alphabetical</option>
                    </select>
                    <button onClick={sortatz}>Sort A to Z</button>
                </div>
            </header2>
            <header3>
                <input id="search" type="text" placeholder="Search.." onChange={handleSearch} />

            </header3>
            <header4>
                <div class="topnav">
                    <Link to="/FormAddDocument"><button type="button">ADD DOCUMENT</button></Link>&nbsp;&nbsp;
                    <button onClick={() => setIsOpen(true)}> Create Product </button>
                    <div style={BUTTON_WRAPPER_STYLES}>
                        <Modal addProduct={buttonClick} open={isOpen} onClose={() => setIsOpen(false)} />
                    </div>
                </div>
            </header4>
            <sidebar>
                <div class="sidebarchild">
                    <div>
                        <h2>Filter</h2>
                        <label id="label" for="compliance">Compliance Status</label>
                        <br />
                        <select id="compliance">
                            <option value="COM">Compliant</option>
                            <option value="STE">Soon to Expire</option>
                            <option value="EXP">Expired</option>
                        </select>
                    </div>
                    <div>
                        <label id="label" for="country">Country</label>
                        <br />
                        <select id="country">
                            <option value="USA">United States</option>
                            <option value="BRA">Brazil</option>
                            <option value="CAN">Canada</option>
                            <option value="MEX">Mexico</option>
                        </select>
                    </div>

                    <div>
                        <label id="label" for="body">Issuing Body</label>
                        <br />
                        <select id="body">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                            <option value="Option 4">Option 4</option>
                        </select>
                    </div>
                    <CheckBox>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label><label className="Switch">Show products whose documents have unread comments </label>
                    </CheckBox>
                </div>
            </sidebar>
            <main>
                <MainGrid>
                    <mg1>
                        <ProductsAdd />
                        <ul>
                            {filteredProducts.map((product) => {
                                return <AddProduct key={state.productList.length} data={product} />
                            })}
                        </ul>
                    </mg1>
                    <mg2>
                        <button>LOAD MORE</button>
                    </mg2>
                </MainGrid>
            </main>
        </Container>
    )
}

const AddProduct = (props) => {
    return (
        <>
            <Faq>
                <Toggle title="<Company Name>" data={props.data}>
                    <div className="answer">
                        <div className="title">
                            <div className="first">
                                <p>Certificate Name</p>
                                <button id="expired">Expired</button>
                            </div>
                            <div className="second">
                                <button id="one">Submit Request</button>
                                <button id="two">⋮</button>
                            </div>
                        </div>
                        <div className="parent">
                            <div className="country">
                                <p>Country</p>
                                <p>Issuing Body</p>
                            </div>
                            <div className="exp">
                                <p>Issued On:</p>
                                <p>Renewal Start On:</p>
                                <p>Exp Date:</p>
                            </div>
                        </div>
                    </div>
                </Toggle>
            </Faq>
            <AddDelete>
                <Link to="/FormAddDocument"><AiOutlinePlusCircle id="plus" /></Link>
                <AiOutlineMinusCircle id="minus" onClick={() => { console.log("hi2"); deleteProduct(props.data.uuid) }} />
            </AddDelete>
        </>
    )
}
/*styling products page*/




const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 20% 40% 10%;
    grid-template-rows: 20px auto 20px;
    grid-gap: 1rem;

    .sort{
        select{
            width: 150px;
            height: 40px;
            border: none;
            border-radius: 8px;
        }
        option{
            border-radius: 8px;
        }
    }

    #search{
        height: 40px;
        width: 13vw;
        border: none;
        border-radius: 30px;
        &::placeholder{
            padding-left: 15px;
        }

        &::focus{
            outline: none;
        }
    }

    header1{

        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;

        h1{
            font-size: 30px;
            font-weight: 100;
        }


    }
    header2{

        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: start;

        select{
            height: 30px;
        }
    }
    header3{

        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: end;


    }
    header4{

        grid-column-start: 5;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: start;

        .topnav{
            form{
                width: 40vw;
            }
        }


        button{
            width: 150px;
            height: 40px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 8px;
        }
    }
    main{

        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-start: 3;
        grid-row-end: 4;
        align-self: start;

      }

    sidebar{

        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 6;

        height: 70vh;


      }

    .sidebarchild{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        h2 {
            margin-bottom: 10px;
        }
        label {
            display: block;
            margin-top: 10px;
            padding-top: 1px;
        }
        select {
             width: 200px;
             height: 40px;
             border: none;
             border-radius: 8px;
        }

        option {
            width: 200px;
        }
    }


`

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: auto auto auto;
    mg1{
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    mg2{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 3;
        button{
            position: fixed;
            bottom: 5vw;
            width: 100px;
            height: 30px;
        }
    }

`
const CheckBox = styled.div`
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
   label {
       font-size: 12px;
   }
   .Switch{
       margin-left: 4px;
       font-size: 12px;
   }
`

export default Products

