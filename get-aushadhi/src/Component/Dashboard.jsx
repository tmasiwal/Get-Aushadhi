import React,{useState} from 'react'
import { Flex, Spacer ,Box,WrapItem,Avatar,useColorModeValue,Tabs,TabList,Tab,TabPanel,TabPanels} from '@chakra-ui/react'
const Dashboard = () => {
    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
      )
      const [tabIndex, setTabIndex] = useState(0)
      const bg = colors[tabIndex]
  return (
    <Flex direction={"column"} >
  <WrapItem>
          <Avatar size='lg' name='Christian Nwamba' src='https://i.ibb.co/ncCJZQx/Screenshot-2023-06-13-212223.jpg' />
        </WrapItem>
  <Spacer />
  <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab>Red</Tab>
        <Tab>Teal</Tab>
        <Tab>Blue</Tab>
      </TabList>
      <TabPanels p='2rem'>
        <TabPanel>The Primary Colors</TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>

    
</Flex>
  )
}

export default Dashboard
