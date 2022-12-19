import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const MuiTab = (props) => {
    const [value, setValue] = React.useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabHeader = [
        { lable: 'tab1', value: '0' },
        { lable: 'tab2', value: '1' },
        { lable: 'tab3', value: '2' },
        { lable: 'tab4', value: '3' },
    ]

    const tabContent = [
        { content: 'tabContent1', value: '0' },
        { content: 'tabContent2', value: '1' },
        { content: 'tabContent3', value: '2' },
        { content: 'tabContent4', value: '3' },
    ]

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {tabHeader.map((item, idx) =>
                        <TabList key={idx} onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label={item?.lable} value={item?.value} />
                        </TabList>)}
                </Box>
                {tabContent.map((item, idx)=>
                <div key={idx}>
                <TabPanel value={item?.value}>{item?.content}</TabPanel>
                </div>
                )}
            </TabContext>
        </Box>
    )
}

export default MuiTab