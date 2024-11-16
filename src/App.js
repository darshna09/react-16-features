import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles/main.css';
import DemoErrorBoundary from './components/DemoErrorBoundary';
import RendererElements from './components/RenderElements';
import LazyLoading from './components/LazyLoading';

const App = () => (
    <Tabs>
        <TabList>
            <Tab>Error Boundary</Tab>
            <Tab>Render Array and Fragment</Tab>
            <Tab>Lazy Loading</Tab>
            <Tab>Hooks</Tab>
        </TabList>

        <TabPanel>
            <DemoErrorBoundary />
        </TabPanel>
        <TabPanel>
            <RendererElements />
        </TabPanel>
        <TabPanel>
            <LazyLoading />
        </TabPanel>
        <TabPanel>
            <Link to="/hooks">Hooks</Link>
        </TabPanel>
    </Tabs>
);

export default App;
