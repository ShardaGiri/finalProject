import React, { Component } from 'react'

export class FAQ extends Component {
    render() {
        return (
             <div>
               <h1 style={{textAlign:"center"}}>Frequently Asked Questions</h1>
            <div className="container" style={{border:"2px solid grey",marginTop:"20px"}}>
            <div >
              
                <h1 style={{border:"2px solid grey",marginTop:"10px"}} >1. General questions</h1>
            <div class="panel-group" id="accordion">
               <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. What is the status of my order?</a>
                          </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse">
                       <div class="panel-body">
                         <p>Once you have placed your order, we will send you a confirmation email to track the status of your order.</p>
                         <p>Once your order is shipped we will send you another email to confirm you the expected delivery date as well as the link to track your order (when the delivery method allows it).</p>
                         <p>Additionally, you can track the status of your order from your "order history" section on your account page on the website.</p>
                       </div>
                   </div>
                </div>
               <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">2. Can I change my order?</a>
                          </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>We can only change orders that have not been processed for shipping yet.</p>
                       <p>Once your order is under the status "preparing for shipping", "shipping" or "delivered", then we cannot accept any edits to your order.</p>
                        <p>To make changes to your order, please reach out to support through the helpdesk.</p>
                       </div>
                   </div>
                </div>
           
           
               <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">3. How long does it take to ship my order?</a>
                          </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>Once you've placed your order, it usually takes 24 to 48 hours to process it for delivery.</p>
                      <p>Standard shipping time for the countries covered by our delivery partners are presented below. You can find them when choosing for a delivery method before confirming your order:</p>
                    <p>
                    - United-States: 1-2 days <br></br>
                    - India: 1-2 days  <br></br>
                    - UK: 2-3 days  <br></br>
                    - Germany: 2-3 days 
                    </p>
                       </div>
                   </div>
                </div>
           </div>

           <h1 style={{border:"2px solid grey"}}>2. Payment</h1>
           <div class="panel-group" id="accordion">
           <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">1. What payment methods do you accept?</a>
                          </h4>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>You can purchase on our website using a debit or credit card.</p>
                       <p>We additionnaly offer support for Paypal, Amazon Pay, Apple Pay, and Google Pay.</p>
                       <p>You can chose these payment methods at checkout.</p>
                       </div>
                   </div>
            </div>
            </div>
            

            <h1 style={{border:"2px solid grey"}}>3. Shipping</h1>
            <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">1. What if I'm not home?</a>
                          </h4>
                    </div>
                    <div id="collapseFive" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>If you're not home, a new delivery will be performed the next day or the delivery partner will reach out to schedule a new delivery date depending on the country and delivery method you choose.</p>
                       <p>You may also have to go to your local post office to collect your package in case it cannot be delivered to you.</p>
                       </div>
                   </div>
            </div>
            </div>

            <h1 style={{border:"2px solid grey"}}>4. Returns</h1>
            <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">1. Do you accept returns?</a>
                          </h4>
                    </div>
                    <div id="collapseSix" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>We do accept returns in respect to the following conditions:</p>
                    <p>
                    - The item must have been sold on our online store <br></br>
                    - The item shouldn't have been used in any way <br></br>
                    - The return or exchange request is made within 28 days of delivery <br></br>
                    - The return is made within 14 days of the return or exchange request  
                    </p>
                    <p>To ask for a return, please contact our support using our helpdesk.</p>
                       </div>
                   </div>
            </div>
            <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSev">2. Can I exchange an item?</a>
                          </h4>
                    </div>
                    <div id="collapseSev" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>We do accept exchanges and they follow the same conditions as returns</p>
                       <p>In order to ask for an exchange, please mention that you would like your item to be exchanged with another item when preparing your return with our support.</p>
                    
                       </div>
                   </div>
            </div>
            <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseEig">3. Are returns free?</a>
                          </h4>
                    </div>
                    <div id="collapseEig" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>Returns within the US are free. You can refer to the delivery paper within your package to perform organize your return.</p>
                       <p>Returns from outside of the US are the responsibility of the buyer.</p>
                       <p>Feel free to contact our support agents through our helpdesk for more details.</p>
                       </div>
                   </div>
            </div>
            <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseNin">4. How long does it take to process a return?</a>
                          </h4>
                    </div>
                    <div id="collapseNin" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>Returns are confirmed within 14 days of receiving the package at our warehouse.</p>
                      <p>Once your return is accepted, the reimbursement, exchange or credit will be issued within 14 days of our services accepting your return.</p>
                    
                       </div>
                   </div>
            </div>
            </div>

            <h1 style={{border:"2px solid grey"}}>5. Other questions</h1>
            <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                   <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTen">1. Is there a warranty?</a>
                          </h4>
                    </div>
                    <div id="collapseTen" class="panel-collapse collapse">
                       <div class="panel-body">
                       <p>We guarantee any of our product made by us and sold through our online store to be free of defect. We would gladly accept any return or exchange request resulting from a defective item granted they respect the following conditions:</p>
                    <p>
                    - The item must have been sold on our online store <br></br>
                    - The item shouldn't have been used in any way <br></br>
                    - The return or exchange request is made within 28 days of delivery <br></br>
                    - The return is made within 14 days of the return or exchange request 
                    </p>
                    <p>If you have a return or exchange request resulting from a defective item please reach out to our support for more information on how to proceed.</p>

                       </div>
                   </div>
            </div>
            </div>
           
        
        </div>
                
        </div>
        </div>
        )
    }
}

export default FAQ