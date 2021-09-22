import React from 'react';


const AppCardBullets = props =>(

    <div>
   
      <hr />
      <h5>{props.date}</h5>
   
      <ul>
        {props.bullets.map(bullet => (<li><strong>{bullet.type}</strong>{bullet.title}</li>))}
      </ul>
      <hr />
   
    </div>
    );

    export default AppCardBullets;