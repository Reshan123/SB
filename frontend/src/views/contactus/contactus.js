import React, { useState } from 'react';
import './styles.css';
import arrow from '../../images/arrow.png';
import twitter from '../../images/twitter.png';
import fb from '../../images/fb.png';
import discord from '../../images/discord.png';
import phone from '../../images/phone.png';
import mail from '../../images/mail.png';
import location from '../../images/location.png';

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    inquiry: '',
  });

  const handleInquiryChange = e => {
    setFormData({ ...formData, inquiry: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log('Form Data:', formData);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      inquiry: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="container">
        
        <div className='QorR'>
        <div className='topic'>Contact us</div>
          Any question or remarks? Just write us a message!
        </div>

        <div className='c766'>
          <div className='c746'>
            <div className='rectangle3840'></div>

            <div className='frame1'>
              <div className='rectangle3841'></div>
              <div className='eclipse793'></div>
              <div className='eclipse794'></div>
              <div className='ContactInformation'>Contact Information</div>
              <div className='saysomething'>
                Say something to start a live chat!
              </div>

              <div className='c752'>
                <div className='carbon:location-filled'>
                  {/* <div className="vector1"></div>
                <div className="vector2"></div> */}
                </div>

                <div className='c747'>
                  <div className='phone-call'>
                    <img className='phone' src={phone} alt='' />
                  </div>
                  +1012 3456 789
                </div>

                <div className='c748'>
                  Demo@gmail.com
                  <div className='gmail'>
                    <img className='mail' src={mail} alt='' />
                  </div>
                </div>

                <div className='c7488'>
                  <div className='address'>
                    <img className='location' src={location} alt='' />
                  </div>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </div>
              </div>
            </div>
          </div>

          <div className='c762'>
            <div className='firstname'>
              First Name{' '}
              <input
                value={formData.firstName}
                onChange={e =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className='fnameinput'
                type='text'
              />
            </div>
          </div>

          <div className='c759'>
            <div className='formemail'>
              Email{' '}
              <input
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='emailinput'
                type='text'
              />
            </div>
          </div>

          <div className='c761'>
            <div className='formlastmail'>
              Last Name{' '}
              <input
                value={formData.lastName}
                onChange={e =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className='lnameinput'
                type='text'
              />
            </div>
          </div>

          <div className='c760'>
            <div className='formphonenumber'>
              Phone Number{' '}
              <input
                className='phoneinput'
                type='text'
                value={formData.phoneNumber}
                onChange={e =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>

          <div className='c758'>
            <div className='selectsub'>Select Subject? </div>

            <div className='c754'>
              <div className='generalinquery1'>
                <input
                  type='radio'
                  name='inquiry'
                  value='General Inquiry1'
                  checked={formData.inquiry === 'General Inquiry1'}
                  onChange={handleInquiryChange}
                />
                General Inquiry1
              </div>
              <div className='generalinquery2'>
                <input
                  type='radio'
                  name='inquiry'
                  value='General Inquiry2'
                  checked={formData.inquiry === 'General Inquiry2'}
                  onChange={handleInquiryChange}
                />
                General Inquiry2
              </div>
              <div className='generalinquery3'>
                <input
                  type='radio'
                  name='inquiry'
                  value='General Inquiry3'
                  checked={formData.inquiry === 'General Inquiry3'}
                  onChange={handleInquiryChange}
                />
                General Inquiry3
              </div>
              <div className='generalinquery4'>
                <input
                  type='radio'
                  name='inquiry'
                  value='General Inquiry4'
                  checked={formData.inquiry === 'General Inquiry4'}
                  onChange={handleInquiryChange}
                />
                General Inquiry4
              </div>
            </div>
          </div>

          <div className='c757'>
            <div className='Message'>Message</div>
            <div className='writeyourmessage'>
              <input
                className='messageinput'
                type='text'
                placeholder='Write your message..'
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
          </div>

          <div className='frame2'>
            <button className='sendmsg'>Send Message</button>
          </div>

          <img className='arrow' src={arrow} alt='arrow' />

          <div className='c751'>
            <div className='elipse797'>
              <img src={twitter} className='twitter' alt='twitter' />
            </div>

            <div className='elipse796'>
              <img src={fb} className='fb' alt='fb' />
            </div>

            <div className='elipse795'>
              <img src={discord} className='discord' alt='discord' />
            </div>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
