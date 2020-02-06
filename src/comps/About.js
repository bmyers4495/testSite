import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import MyBar from './NavBar';
import '../styles/app.css';

class About extends Component{
  render() {
    return (
      <div>
      <Container>
        <Jumbotron>
          <h1>About Us</h1>
          <hr/>
            <p>
            Jannasa and I have been married for 23 years and have 2 children and one grandchild. Our oldest, Brandon is a Gospel preacher with his wife Clarisa by his side, they have our amazing grandson, Samuel. Jake is 11 and like most other boys his age, he loves sports.  We are currently members and work under the eldership at Second and Wallace Church of Christ in San Saba, TX.</p>
<p>Jannasa and I have worked in 2 different children homes and in that time we have had around 80 kids live with us. Each and every child is special to us. These kids are now our kids. We have built lasting relationships with them.  We’ve laughed, and cried with them, and  prayed with them. We ate with them, we studied the bible with them and worshipped with them. Through the years, we have seen a real need for those who have aged out or that were discharged from children’s homes. Many of these children that leave are Christians that were baptized while at the home. After they leave many of them have no support. Our mission is to be their support. While working for the home we started reaching out. We used our time off to go visit or pick up children that have left the home. We have found in doing so we have been able to not only help those children but also their families. We also have been able to set up rides for children to get to worship. Last year we were able to bring one of our girls on a 2 week vacation with us.</p>
<p> After only one month of leaving the children’s home we have been able to visit 7 of our kids. We are in direct contact with 25. We also have brought 6 to worship that literally have not been in years. We currently are helping young mothers that were once in a children homes. We realize that this mission is different than most because it is a domestic work. Jannasa and I have been blessed with this unique opportunity to help so many families. We ask that you please pray for this mission.
            </p>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}

export default About;
