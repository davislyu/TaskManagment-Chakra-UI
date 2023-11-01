import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon,WarningIcon,WarningTwoIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { color } from "framer-motion";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
      <Tab _selected={{color: "white",bg: "purple.400"}}>
        Account Info
      </Tab>
      <Tab _selected={{color: "white",bg: "purple.400"}}>
        Task History
      </Tab>
      </TabList>

      <TabPanels>
         {/* List one */}
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}  />
              Email: Davislyu@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Email: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Email: Lorem ipsum dolor sit amet consectetur adipisicing elit.            </ListItem>

          </List>
        </TabPanel>
        {/* List one */}
          
        {/* List two */}
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningTwoIcon} color="red.900" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningTwoIcon}color="red.900"  />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
        {/* List two */}

      </TabPanels>
    </Tabs>
  )
}
