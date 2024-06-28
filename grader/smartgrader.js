import React from 'react';
import home from '../assests/home.png'
import setting from '../assests/setting.png'
import customer from '../assests/customer.png'
import interview from '../assests/interview.png'
import testing from '../assests/testing.png'
import testinga from '../assests/testinga.png'

function SmartGrader() {
    return (
        <div style={{
            margin: 0,
            padding: 0,
            //height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            height: 420,
            width: '100%',
        }}>

            <div style={{width: '20vw', height: '115vh', backgroundColor: '', margin: 0, padding: 0 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '2px'  }}>
                <div>smartgrader.</div>
                <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
                    <div
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: '50%'
                        }}> 
                             <img src={'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'} alt="Avatar" class="avatar" style={{ height: 40, width: 40,  borderRadius: '50%' }}></img>
                        </div>
                    <div style={{ marginLeft: 5 }}>
                        <span style={{ padding: 0 }}>welcome</span>
                        <br></br>
                        <span>Sanjeet_kumar</span>
                    </div>
                    
                </div>

                <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
        <hr style={{ backgroundColor: 'black', height: 1, width: '90%', margin: 0, border: 'none', marginBottom: 20}} />
    </div>

    <div style={{backgroundColor: '', width: 170 , margin: 0, padding: 10}}>
    <div style={{ display: 'flex', justifyContent: '', alignItems: 'center', marginBottom: 10 }}>
        <img src={home} alt="Avatar" className="avatar" style={{ height: 20, width: 20, padding: 5 }}></img>
        <p style={{ textAlign: 'center', margin: 0 }}>Dashbord</p>
    </div>
    
    <div style={{ display: 'flex', justifyContent: '', alignItems: 'center' , marginBottom: 10}}>
        <img src={interview} alt="interview" className="interview" style={{ height: 20, width: 20, padding: 5 }}></img>
        <p style={{ textAlign: 'center', margin: 0 }}>mock_interview</p>
    </div>
    
    <div style={{ display: 'flex', justifyContent: '', alignItems: 'center' , marginBottom: 10}}>
        <img src={testing} alt="testing" className="testing" style={{ height: 20, width: 20, padding: 5 }}></img>
        <p style={{ textAlign: 'center', margin: 0 }}>progrmming_Test</p>
    </div>
    
    <div style={{ display: 'flex', justifyContent: '', alignItems: 'center', marginBottom: 10}}>
        <img src={testinga} alt="testinga" className="testinga" style={{ height: 20, width: 20, padding: 5 }}></img>
        <p style={{ textAlign: 'center', margin: 0 }}>Test_access</p>
    </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <hr style={{ backgroundColor: 'black', height: 1, width: '90%', margin: 0, border: 'none' }} />
    </div>
</div>


               <div style={{ backgroundColor: '', display: 'flex', flexDirection: 'column', width: 150 }}>
   
               <div style={{ display: 'flex', justifyContent: '', alignItems: 'center' }}>
                  <img src={setting} alt="Setting" className="setting" style={{ height: 20, width: 20, padding: 5 ,}}></img>
                  <p style={{ textAlign: 'center', margin: 0 }}>setting</p>
               </div>

              <div style={{ display: 'flex', justifyContent: '', alignItems: 'center' }}>
                 <img src={customer} alt="customer" className="customer" style={{ height: 20, width: 20, padding: 5 }}></img>
               <p style={{ textAlign: 'center', margin: 0 }}>help & Support</p>
              </div>
         </div>
    </div>

            

            <div style={{ width: '80%', backgroundColor: '', height: '100%', margin: 0, padding: 0, paddingRight: 10, }}>
                <div style={{ backgroundColor: 'blanchedalmond', display: 'flex', height: '10%', margin: 10, }}>
                    <h5 style={{ marginTop: 10, paddingLeft: 10 }}>Hell Jane Cooper!</h5>
                    <h7 style={{ marginTop: 8, paddingLeft: 12 }}>my name is sanjeet kumar...</h7>
                </div>
                
                <div style={{
                    backgroundColor: '', width: '98%', height: '150%', margin: 0, padding: 0,
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>

<div style={{
    width: '98%',
    height: '12%',
    margin: 5,
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap'
}}>
    <div style={{ width: '100%', margin: '8px auto', backgroundColor: 'white', padding: 0, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '2px' }}>
    </div>
</div>

<div style={{ backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
        <hr style={{ backgroundColor: 'black', height: 1, width: '90%', margin: 0, border: 'none', marginBottom: 20}} />
    </div>

                        
                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px'}}>
                </div>

                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px'}}>
                </div>

                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px' }}>
                </div>

                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px'}}>
                </div>

                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px'}}>
                </div>

                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px'}}>
                </div>

                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px'}}>
                </div>

                <div style={{ width: '22%', height: 250, margin: 5, backgroundColor: 'white', padding: 10 , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',  borderRadius: '4px'}}>
                </div>

                </div>
            </div>

        </div>
    );
}

export default SmartGrader;
