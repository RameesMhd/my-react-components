import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const MyTabs=() => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="program1" title="program1">
        Tab content for program1
      </Tab>
      <Tab eventKey="program2" title="program2">
        Tab content for program2
      </Tab>
      <Tab eventKey="program3" title="program3">
        Tab content for program3
      </Tab>
    </Tabs>
  );
}

export default MyTabs;