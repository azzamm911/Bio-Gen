import './App.css';
import React from "react";
import {bio} from './App';

function Bio() {

    const refresh = () => {
        let profileLength1 = document.getElementById('Profile-Container-1').childNodes.length;
        let profileLength2 = document.getElementById('Profile-Container-2').childNodes.length;
        let i = 0;

        if (profileLength1 != 0 && profileLength2 != 0){
            const profileContainer1 = document.querySelector('#Profile-Container-1');
            const profileContainer2 = document.querySelector('#Profile-Container-2');
            const profileContainer3 = document.querySelector('#Profile-Container-3');


            while (profileContainer1.firstChild){
                profileContainer1.removeChild(profileContainer1.firstChild);
            };

            while (profileContainer2.firstChild){
                profileContainer2.removeChild(profileContainer2.firstChild);
            };

            while (profileContainer3.firstChild){
                profileContainer3.removeChild(profileContainer3.firstChild);
            };
        }

        for (const [key, value] of Object.entries(bio)){
            const data = document.createElement('p');
            data.id = `data_${key}`;
            data.innerHTML = value;
            data.style.margin = 0;

            if (i >= 0 && i <= 1){
                document.getElementById('Profile-Container-1').appendChild(data);
            }
            else if (i > 1 && i <= 4){
                document.getElementById('Profile-Container-2').appendChild(data);    
            }
            else if (i > 4 && i <= 5){
                document.getElementById('Profile-Container-3').style.borderTop = '1px solid white';
                document.getElementById('Profile-Container-3').appendChild(data);
            }            
            else if (i > 5){
                break;
            }
            i++;
        }
        document.getElementById('Photo-Bio').src = bio.imageUrl;
        document.getElementById('data_name').style.marginRight= '10px';
        document.getElementById('data_name').innerHTML += ',';
        document.getElementById('data_email').innerHTML += '    |';
        document.getElementById('data_email').style.marginRight = '10px';
        document.getElementById('data_occupation').style.marginRight = '10px';
        document.getElementById('data_occupation').innerHTML += ',';
        document.getElementById('data_desc').style.marginTop = '10px';
    }

    return (
        <div className="Bio-App" style={{margin: '20px 0'}}>
            <div className='Main-Container' style={{display: 'flex', justifyContent: 'center', width: '100%'}}>               
                <div className='Bio-Wrapper' style={{display: 'flex', flexDirection: 'column', width: '1000px', height: '600px', border: 'none', background: '#F7F5F2', borderRadius: '5px', boxShadow: "5px 5px gray"}}>                    
                    <div className="Bio-Top-Wrapper" id="Bio-Top-Wrapper" style={{width: '100%', height: '80%'}}>
                        <div className='Bio-Top-Container' style={{display: 'flex', flexDirection: 'row', height: '90%', margin: '25px 25px 0 25px', padding: '25px 25px 0 25px', border: 'none', borderRadius: '5px', background: '#191919', color: 'white'}}>
                            <div className='Bio-Top-Left-Container' style={{display: 'flex', justifyContent: 'center', width: '40%', height: '100%'}}>
                                <img className="Photo-Bio" id="Photo-Bio" src={process.env.PUBLIC_URL + 'placeholder_avatar.png'} style={{height: '75%', width: '75%', margin: "auto 0", borderRadius: '5px'}}></img>
                            </div>
                            <div className='Bio-Top-Right-Container' style={{display: 'flex', flexDirection: 'column', width: '60%', margin: '50px 0'}}>
                                <div className='Profile-Container-1' id='Profile-Container-1' style={{display: 'flex', flexDirection: 'row', height: 'fit-content', fontSize: '45px'}}></div>
                                <div className='Profile-Container-2' id='Profile-Container-2' style={{display: 'flex', flexDirection: 'row', height: 'fit-content', fontSize: '25px', marginTop: "10px"}}></div>
                                <div className='Profile-Container-3' id='Profile-Container-3' style={{display: 'flex', flexDirection: 'row', height: 'fit-content', fontSize: '20px', marginTop: "20px"}}></div>
                            </div>
                        </div>                        
                    </div>
                    <div className="Bio-Bottom-Wrapper" id="Bio-Bottom-Wrapper" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '20%'}}>
                        <div style={{display: 'flex', justifyContent: 'center', height: "50%"}}>
                            <h1>Preview</h1>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', height: "50%"}}>
                            <button onClick={refresh} style={{width: '25%', height: '50%', margin: 'auto 0'}}>Refresh</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default Bio;