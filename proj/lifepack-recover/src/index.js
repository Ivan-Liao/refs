import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Row, Col, Nav, Tab, Tabs, TabContainer, TabContent, TabPane} from 'react-bootstrap'

function Sonnet() {
	return (
		<p>
			test
		</p>
	);
}

function App() {
  return (
	<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
	  <Tab eventKey="home" title="Home">
	    <Sonnet />
	  </Tab>
	  <Tab eventKey="profile" title="Profile">
	    <Sonnet />
	  </Tab>
	  <Tab eventKey="contact" title="Contact" disabled>
	    <Sonnet />
	  </Tab>
	</Tabs>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
