import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
	<React.Fragment>
	  <main>
	    <section class="glass">
	      <div class="dashboard">
	        <div class="user">
	          <img src="./images/avatar.png" alt="" />
	          <h3>Simo Edwin</h3>
	          <p>Pro Member</p>
	        </div>
	        <div class="links">
	          <div class="link">
	            <img src="./images/twitch.png" alt="" />
	            <h2>Streams</h2>
	          </div>
	          <div class="link">
	            <img src="./images/steam.png" alt="" />
	            <h2>Games</h2>
	          </div>
	          <div class="link">
	            <img src="./images/upcoming.png" alt="" />
	            <h2>New</h2>
	          </div>
	          <div class="link">
	            <img src="./images/library.png" alt="" />
	            <h2>Library</h2>
	          </div>
	        </div>
	        <div class="pro">
	          <h2>Join pro for free games.</h2>
	          <img src="./images/controller.png" alt="" />
	        </div>
	      </div>
	      <div class="games">
	        <div class="status">
	          <h1>Active Games</h1>
	          <input type="text" />
	        </div>
	        <div class="cards">
	          <div class="card">
	            <img src="./images/assassins.png" alt="" />
	            <div class="card-info">
	              <h2>Assassins Creed Valhalla</h2>
	              <p>PS5 Version</p>
	              <div class="progress"></div>
	            </div>
	            <h2 class="percentage">60%</h2>
	          </div>
	          <div class="card">
	            <img src="./images/sackboy.png" alt="" />
	            <div class="card-info">
	              <h2>Sackboy A Great Advanture</h2>
	              <p>PS5 Version</p>
	              <div class="progress"></div>
	            </div>
	            <h2 class="percentage">60%</h2>
	          </div>
	          <div class="card">
	            <img src="./images/spiderman.png" alt="" />
	            <div class="card-info">
	              <h2>Spiderman Miles Morales</h2>
	              <p>PS5 Version</p>
	              <div class="progress"></div>
	            </div>
	            <h2 class="percentage">60%</h2>
	          </div>
	        </div>
	      </div>
	    </section>
	  </main>
	  <div class="circle1"></div>
	  <div class="circle2"></div>
	</React.Fragment>,

  
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
