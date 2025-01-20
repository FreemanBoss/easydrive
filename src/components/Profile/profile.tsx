import React from 'react';
import './ProfileCard.css'; // Scoped styles

const ProfileCard = () => {
  return (
    <div className="profile-container">
      {/* Background */}
      <span className="main_bg"></span>

      <div className="container">
        {/* Header */}
        <header>
          <div className="brandLogo">
            <figure>
              <img src="web_logo.jpg" alt="logo" width="40px" height="40px" />
            </figure>
            <span>MarqueTech</span>
          </div>
        </header>

        {/* User Profile */}
        <section className="userProfile card">
          <div className="profile">
            <figure>
              <img src="profile.png" alt="profile" width="250px" height="250px" />
            </figure>
          </div>
        </section>

        {/* Work & Skills */}
        <section className="work_skills card">
          <div className="work">
            <h1 className="heading">Work</h1>
            <div className="primary">
              <h1>Spotify New York</h1>
              <span>Primary</span>
              <p>
                170 William Street <br /> New York, NY 10038-212-315-51
              </p>
            </div>

            <div className="secondary">
              <h1>Metropolitan Museum</h1>
              <span>Secondary</span>
              <p>
                S34 E 65th Street <br /> New York, NY 10651-78 156-187-60
              </p>
            </div>
          </div>

          <div className="skills">
            <h1 className="heading">Skills</h1>
            <ul>
              <li style={{ '--i': 0 } as React.CSSProperties}>Android</li>
              <li style={{ '--i': 1 } as React.CSSProperties}>Web-Design</li>
              <li style={{ '--i': 2 } as React.CSSProperties}>UI/UX</li>
              <li style={{ '--i': 3 } as React.CSSProperties}>Video Editing</li>
            </ul>
          </div>
        </section>

        {/* User Details */}
        <section className="userDetails card">
          <div className="userName">
            <h1 className="name">Jeremy Rose</h1>
            <div className="map">
              <i className="ri-map-pin-fill ri"></i>
              <span>New York, NY</span>
            </div>
            <p>Product Designer</p>
          </div>

          <div className="rank">
            <h1 className="heading">Rankings</h1>
            <span>8,6</span>
            <div className="rating">
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate"></i>
              <i className="ri-star-fill rate underrate"></i>
            </div>
          </div>

          <div className="btns">
            <ul>
              <li className="sendMsg">
                <i className="ri-chat-4-fill ri"></i>
                <a href="#">Send Message</a>
              </li>
              <li className="sendMsg active">
                <i className="ri-check-fill ri"></i>
                <a href="#">Contacts</a>
              </li>
              <li className="sendMsg">
                <a href="#">Report User</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Timeline & About */}
        <section className="timeline_about card">
          <div className="tabs">
            <ul>
              <li className="timeline">
                <i className="ri-eye-fill ri"></i>
                <span>Timeline</span>
              </li>
              <li className="about active">
                <i className="ri-user-3-fill ri"></i>
                <span>About</span>
              </li>
            </ul>
          </div>

          <div className="contact_Info">
            <h1 className="heading">Contact Information</h1>
            <ul>
              <li className="phone">
                <h1 className="label">Phone:</h1>
                <span className="info">+11 234 567 890</span>
              </li>
              <li className="address">
                <h1 className="label">Address:</h1>
                <span className="info">
                  S34 E 65th Street <br /> New York, NY 10651-78 156-187-60
                </span>
              </li>
              <li className="email">
                <h1 className="label">E-mail:</h1>
                <span className="info">hello@rsmarquetech.com</span>
              </li>
              <li className="site">
                <h1 className="label">Site:</h1>
                <span className="info">www.rsmarquetech.com</span>
              </li>
            </ul>
          </div>

          <div className="basic_info">
            <h1 className="heading">Basic Information</h1>
            <ul>
              <li className="birthday">
                <h1 className="label">Birthday:</h1>
                <span className="info">Dec 25, 2000</span>
              </li>
              <li className="sex">
                <h1 className="label">Gender:</h1>
                <span className="info">Male</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileCard;
