import './App.css';
import React, { useState, useEffect } from "react";

export var bio;

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [country, setCountry] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState('');

  const submit = () => {
    bio = {
      name: name,
      age: age,
      email: email,
      occupation: occupation,
      country: country,
      desc: desc,
      imageUrl: imageUrl
    };

    alert("Bio successfully submitted!")

  }

  const reset = () => {
    const inData = document.getElementsByClassName("in-data");

    for(let i = 0; i < inData.length; i++){
      inData[i].value = '';
    }
  }

  const submitHandler = ()=>{
    let check = 0;
    const inData = document.getElementsByClassName("in-data");

    for(let i = 0; i < inData.length; i++){
      if(inData[i].value === ''){
        alert("Form still empty");
        break;
      }
      else {
        check++;
      }
    }

    if (check === inData.length){
      submit();
    }
  }

  const changeHandler = (e) => {
    const image = e.target.files[0];    
    setImage(image);
  }

  useEffect(() => {
    let fileReader, isCancel = false;

    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;

        if (result && !isCancel) {
          setImageUrl(result)
        }
      }
      fileReader.readAsDataURL(image);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [image]);

  return (
    <div className="Form-App"  style={{margin: '20px 0'}}>
      <div className='Main-Container' style={{display: 'flex', flexDirection: "row", justifyContent: 'center', width: '100%', height: '100%'}}>
        <div className='Form-Left-Wrapper' style={{display: 'flex', flexDirection: 'row', width: '500px', height: '250px', border: 'none', borderRadius: '5px', background: '#F7F5F2', boxShadow: "5px 5px gray"}}>
          <div className='Form-Left-Container' id='Form-Container' style={{width: '400px', margin: '10px 0'}}>

            {/* Form */}
            <form onLoadStart={submitHandler} style={{display: 'flex', flexDirection: 'row', padding: '10px', height: '80%'}}>
              <table>
                <tbody>        
                  <tr>
                    <td>
                    <label for='name'>Name</label>
                    </td>
                    <td>
                      :
                    </td>
                    <td>
                    <input type="text" className='in-data' id='in-name' onChange={(e) => {setName(e.target.value)}} placeholder='...' autoComplete='off' maxLength={16} style={{width: '100%'}}/>
                    </td>                 
                  </tr>
                  <tr>
                    <td>
                    <label for='age'>Age</label>
                    </td>
                    <td>
                      :
                    </td>
                    <td>
                    <input type='number' className='in-data' id='in-age' onChange={(e) => {setAge(e.target.value)}} placeholder='1' min='1' autoComplete='off' style={{width: '100%'}}/>
                    </td>                 
                  </tr>
                  <tr>
                    <td>
                    <label for='email'>Email</label>
                    </td>
                    <td>
                      :
                    </td>
                    <td>
                    <input type='email' className='in-data' id='in-email' onChange={(e) => {setEmail(e.target.value)}} placeholder='...' autoComplete='off' maxLength={16} style={{width: '100%'}}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <label for='occupation'>Occupation</label>
                    </td>
                    <td>
                      :
                    </td>
                    <td>
                    <input type='text' className='in-data' id='in-occ' onChange={(e) => {setOccupation(e.target.value)}} placeholder='...' autoComplete='off' maxLength={16} style={{width: '100%'}}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <label for='country'>Country</label>
                    </td>
                    <td>
                      :
                    </td>
                    <td>
                    <input type='text' className='in-data' id='in-cty' onChange={(e) => {setCountry(e.target.value)}} placeholder='...' autoComplete='off' maxLength={16} style={{width: '100%'}}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <label for='photo'>Choose your profile picture</label>
                    </td>
                    <td>
                      :
                    </td>
                    <td>
                    <input type='file' id='in-pfp' accept='image/*' onChange={changeHandler}/>
                    </td>
                  </tr>
                </tbody>
              </table>                                  
            </form>
          </div>

          {/* Form Button Container */}
          <div className='Form-Btn-Container' id='Form-Btn-Container' style={{width: 'fit-content', margin: '10px 0'}}>
            <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
              <input type='submit' id='submit-btn' onClick={submitHandler} style={{height: '25px', marginBottom: '10px'}}/>
              <input type='reset' id='reset-btn' onClick={reset} style={{height: '25px', marginBottom: '10px'}}/>
            </div>          
          </div>
        </div>

        {/* Right Form Wrapper */}
        <div className='Form-Right-Wrapper' style={{width: '490px', height: '250px', marginLeft: '10px', border: 'none', borderRadius: '5px', background: '#F7F5F2', boxShadow: "5px 5px gray"}}>
          <div className='Form-Right-Container' id='Form-Right-Container' style={{display: 'flex', width: '100%', height: '100%'}}>
          <form style={{display: 'flex', flexDirection: 'column', padding: '10px', height: '100%', width: '100%', height: '100%'}}>
              <label for='desc'>Describe yourself: </label>
              <textarea type='text' className='in-data' id='in-desc' rows={13} onChange={(e) => {setDesc(e.target.value)}}></textarea>
            </form>
          </div>         
        </div>              
      </div>             
    </div>    
  );
}

export default Form;