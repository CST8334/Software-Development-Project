import React from 'react';



const Products = () => {
    return (
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
        
    )
}



export default Products
