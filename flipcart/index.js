
import '../App.css';
import { useState } from 'react';
function FlipCart() {
  const [text, setText] = useState('')


  const onChnageText = (e) => {
    //console.log('====== e =====', e.target.value)
    setText(e.target.value)
  }

  return (
    <div>
      <div
        style={{
          height: 60,
          width: '100%',
          //backgroundColor: 'gray',
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'center'
        }}>
        <p style={{
          fontSize: 28,
          color: 'black',
          marginLeft: 30,
          // paddingTop: 10
        }}>FlipCart</p>

        <input placeholder='serach here' value={text} onChange={ onChnageText} style={{ textAlign: 'center', height: 30, width: 400, marginLeft: 40, borderRadius: 20, borderColor: 'gray' }} />
        <p style={{ fontSize: 20, marginLeft: 190 }}>Login</p>
        <p style={{ fontSize: 20, marginLeft: 160 }}>Cart</p>
        <p style={{ fontSize: 20, marginLeft: 150 }}>Become a seller</p>
      </div>
      <div style={{
        height: 350,
        width: '100%',
        backgroundColor: 'lightGray',
        marginTop: 20


      }}>
        <div
          style={{
            borderWidth: 1,
            borderColor: 'red',
            boxShadow: 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            // backgroundColor: 'gray',
            display: 'flex',
          }}
        >
          <div className='container_hover'>
            <div className='container'>
              <p style={{
                textAlign: 'center'
              }}><strong>Best of Electricals</strong></p>
              <img height={200} width={180} src="https://www.shutterstock.com/image-photo/laptop-blank-screen-on-table-600nw-340152863.jpg" />
              <p style={{ textAlign: 'center' }}>Monitor</p>
            </div>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{ textAlign: 'center' }}><strong>Best of Electricals</strong></p>
            <img height={200} width={180} src="https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/h/m/d/2-spt113-114-limestone-boys-girls-original-imagtfzh7zgvsghk.jpeg?q=90&crop=false" />
            <p style={{ textAlign: 'center' }}>Watch</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{ textAlign: 'center' }}><strong>Best of Electricals</strong></p>
            <img height={200} width={180} src="https://www.hindustantimes.com/ht-img/img/2023/12/14/550x309/earbuds_under_Rs_1500_1702544800631_1702544817721.jpg" />
            <p style={{ textAlign: 'center' }}>Ear birds</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Best of Electricals</strong></p>
            <img height={200} width={180} src="https://media.viskanassets.com/v2/pellepprod/normal/C1-Sunglasses-solglas%C3%B6gon-PP93C1-6010-D.jpg" />
            <p style={{ textAlign: 'center' }}>Sun glasses</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Best of Electricals</strong></p>
            <img height={200} width={180} src="https://images-cdn.ubuy.co.in/633ff63fb6f81a210247378f-fake-phone-is-a-replica-that-looks-and.jpg" />
            <p style={{ textAlign: 'center' }}>Phone</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Best of Electricals</strong></p>
            <img height={200} width={180} src="https://www.firedog.eu/uploaded/products/gallery/big/firedog_mini_dummy_bag_deluxe_black_brown-33790.jpg" />
            <p style={{ textAlign: 'center' }}>Bag</p>
          </div>
        </div>

      </div>

      <div
        style={{
          height: 350,
          width: '100%',
          backgroundColor: 'lightGray', marginTop: 20
        }}>

        <div style={{
          borderWidth: 1,
          borderColor: 'red',
          boxShadow: 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
          //backgroundColor: 'gray',
          display: 'flex',

        }}>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Gym Accessories</strong></p>
            <img height={200} width={180} src="https://www.jiomart.com/images/product/original/rvr2in92ir/kraftlik-handicrafts-yoga-mat-for-women-and-men-fitness-6mm-extra-thick-exercise-mat-for-workout-yoga-anti-slip-for-home-gym-use-pack-of-1-blue-product-images-orvr2in92ir-p591680514-7-202205282154.jpg?im=Resize=(420,420)" />
            <p style={{ textAlign: 'center' }}>Camera</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Gym Accessories</strong></p>
            <img height={200} width={180} src="https://www.hashtagfitness.in/wp-content/uploads/2020/08/hex-d.png" />
            <p style={{ textAlign: 'center' }}>Dumbbell</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Gym Accessories</strong></p>
            <img height={200} width={180} src="https://www.sportswing.in/wp-content/uploads/2022/01/Bodyfit-22KG-3-FT-CURL-Rod-Weight-Lifting-Plates-Complete-Home-Gym-Set-Dumbbell-Kit.jpg" />
            <p style={{ textAlign: 'center' }}>Home gym set</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Gym Accessories</strong></p>
            <img height={200} width={180} src="https://5.imimg.com/data5/SELLER/Default/2023/10/353331175/GH/KU/QZ/12736245/71ayxr0yeel-500x500.jpg" />
            <p style={{ textAlign: 'center' }}>Mini Home gym set</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Gym Accessories</strong></p>
            <img height={200} width={180} src="https://www.jiomart.com/images/product/original/rvnx4jab9n/gym-insane-dumbbell-set-20kg-weight-plates-with-gym-connector-bar-gym-workout-adjustable-dumbbell-product-images-orvnx4jab9n-p597540562-0-202301131453.jpg?im=Resize=(1000,1000)" />
            <p style={{ textAlign: 'center' }}>Plates bar weight set</p>
          </div>

          <div className='container' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
            <p style={{
              textAlign: 'center'
            }}><strong>Gym Accessories</strong></p>
            <img height={200} width={180} src="https://5.imimg.com/data5/SELLER/Default/2023/7/321575022/CZ/PF/WN/31203671/anti-brust-gym-ball.jpg" />
            <p style={{ textAlign: 'center' }}>Lose belly fat ball</p>
          </div>
        </div>
      </div>

      <div

      >
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: 300, margin: 10, borderRadius: 1, backgroundColor: '#002244', display: 'flex', justifyContent: 'space-around' }}>
          <div >
            <h3 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>About Us.</h3>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Annual Returns</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Careers</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Contact Us</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>GoDaddy Blog</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Legal</h6>
          </div>
          <div >
            <h3 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Support.</h3>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Product</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Support</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Report Abuse</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Resources</h6>
          </div>
          <div >
            <h3 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Resources.</h3>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Webmail</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>WHOIS</h6>
          </div>

          <div >
            <h3 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Partner Programs.</h3>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Affiliates</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Reseller Programs</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>GoDaddy Pro</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Hosting</h6>
          </div>

          <div >
            <h3 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Account.</h3>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>My Products</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Create Account</h6>
            <h6 style={{ color: 'white', marginTop: 20, marginLeft: 70 }}>Renewals & Billing</h6>
          </div>
        </div>
      </div>
      {/* <div>
        <hr>
        <p>Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.
        </p>
        </hr>
      </div> */}

    </div>


  );
}



export default FlipCart;