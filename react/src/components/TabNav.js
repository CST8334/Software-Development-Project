import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import HomeChart from './HomeChart';

import styled from 'styled-components';

class TabNav extends React.Component {
    render() {
        return (
            <div>
                <StyledTabs>
                    <TabList>
                        <Tab>Compliance</Tab>
                        <Tab>Product</Tab>
                        <Tab>Comments</Tab>
                    </TabList>

                    <StyledTabPanel>
                        <HomeChart />
                    </StyledTabPanel>
                    <TabPanel>
                        <h2>Product Stuff</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Comments Stuff</h2>
                    </TabPanel>
                </StyledTabs>
            </div>
        )
    }
}

const StyledTabs = styled(Tabs)`
    position: relative;
    width: 400px;
    left: 10%;
    top: 15vh;
`

const StyledTabPanel = styled(TabPanel)`
    background: white;
    border-radius: 5%;
`

export default TabNav