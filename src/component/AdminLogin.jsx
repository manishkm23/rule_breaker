import React from 'react';
import '../loginPage.css';

export default function PasswordModal(){
    const checkInput=()=>
    {
        let input=document.getElementById('inputField').value.length;
        let btnId=document.getElementById('submitBtn');
        if(input===10)
        {
            btnId.click();
        }
    }
    const openModal=()=>
    {
        let input=document.getElementById('inputField');
        if(input.value==="manishkm23"){
            document.getElementById("modalBtn").click();
        }else{
            alert("User Not Found");
        }
    }
    const passwordSubmit=()=>
    {
        let pass=document.getElementById('passwordField').value.length;
        let passBtn=document.getElementById('passwordSubmitBtn');
        if(pass===10)
        {
            passBtn.click();
        }
    }
    const finalSubmit=()=>
    {
        let pass=document.getElementById('passwordField');
        if(pass.value==="7607700415"){
            alert("Success")
        }
        else{
            alert("Wrong Password");
        }
    }
    return (<>
    <div className='container-fluid' style={{height:'667px'}}>
        <div className='row'>
            <h1 className='h1Text' style={{fontSize:'72px'}}>WELCOME</h1>
            <form action="">
                <input id='inputField' type="text" className='form-control txt h1Text' placeholder='Enter Your ID' style={{width:'40%',marginTop:'1.7%'}} onKeyUp={checkInput}  maxLength='10' required autoComplete='off' pattern="[A-Z a-z 0-9]" autoFocus/><br/>
                <input type="submit" id="submitBtn" style={{display:'none'}} className="btn btn-success" onClick={openModal}></input>
            </form>
            <a className="btn btn-danger" data-bs-toggle="modal" href="#exampleModalToggle" role="button" id='modalBtn' style={{display:'none'}}>Open</a>
        </div>
    </div>
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{backgroundColor:'transparent'}} >
                <div className="modal-body">
                <form action="">
                    <input type="password" id='passwordField' className="form-control txt" placeholder="Password" required autocomplete="off" onKeyUp={passwordSubmit} maxLength='10' autoFocus style={{borderRadius:'15px'}}/>
                    <input type="submit" id="passwordSubmitBtn" style={{display:'none'}} className="btn btn-success" onClick={finalSubmit}></input>
                </form>
                </div>
            </div>
        </div>
    </div>
    </>)
}