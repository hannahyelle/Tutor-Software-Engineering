import React from 'react';

class StudentProfile extends React.Component{
    render(){
      return (
        <div>
          <meta charSet="UTF-8" />
          <title>Create Student Profile</title>
          <link rel="stylesheet" href="style.css" />
          <meta name="viewport" content="width=device-width, intial-scale=1.0" />
          <div className="container">
            <div className="title">Create Student Profile</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone Number</span>
                    <input type="text" placeholder="Enter your number" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Nationality</span>
                    <input type="text" placeholder="Enter your nationality" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Address</span>
                    <input type="text" placeholder="Enter your address" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Interests</span>
                    <input type="text" placeholder="Enter your interests" required />
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" />
                  <span className="gender-title">Gender</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one" />
                      <span className="gender">Male</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two" />
                      <span className="gender">Female</span>
                    </label>
                    <label htmlFor="dot-3">
                      <span className="dot three" />
                      <span className="gender">Prefer not to say</span>
                    </label>
                  </div>
                </div>
                <div className="button">
                  <input type="submit" data-testid="btn" defaultValue="Create Profile" />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

  export default StudentProfile;