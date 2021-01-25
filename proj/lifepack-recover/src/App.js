import './App.css';
import {Row, Col, Nav, Tab, Tabs, TabContainer, TabContent, TabPane} from 'react-bootstrap';

function Sonnet() {
	return (
		<p>
			test
		</p>
	);
}

function App() {
  return (
    <Tab.Container defaultActiveKey="first" className="main-tabs-container">
      <Row>
        <Col sm={12}>
          <Nav variant="pills" className="flex-row">
            <Nav.Item className="tab-selector">
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-selector">
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first" className="main-tab">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="main-tab">
              <Sonnet />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
