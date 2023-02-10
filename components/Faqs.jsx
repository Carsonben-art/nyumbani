import { Text,Box, Flex } from "@chakra-ui/react";
import { Accordion,AccordionItem, AccordionButton,AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const Faqs =() =>(
    <Box background={"#f7f7f7"}>
        <Flex justifyContent={"center"} flexDirection="column" alignItems={"center"} paddingTop="30px">
            <Text color={"#d9d9d9"}>FAQs</Text>
            <Text fontSize={"3xl"} fontWeight="bold">Frequently Asked Questions</Text>
        </Flex>
        <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
          What is Nyumbani?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Nyumbani is a real estate platform that helps you to find the best and suitable residence for you with an easier process, faster and more affordable prices.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
          What are the Advantages of using Nyumbani?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      1. Time-saving: Our automated property search tools can quickly and easily sort through thousands of listings, saving time and effort compared to manual searching. <br/>
      2. Accurate information: Our system typically provide detailed information about properties, such as square footage, number of bedrooms and bathrooms, and other important details.<br/>
      3. Convenience: Users can easily search for properties from any location and at any time, eliminating the need for physically visiting properties.<br/>
      4. Multiple listings: Our system connects to multiple agencies with several properties, providing a wider range of options for users to choose from.<br/>
      5. Up-to-date data: Our system are updated in realtime whenever new properties are uploaded, providing users with the latest information about properties and pricing.<br/>
      6. Comparison: Users can easily compare properties and pricing, helping them make informed decisions about their property search.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
          How is the Buying Process at Nyumbani?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      1. User visits our system/ website. <br/>
      2. User search for property and views the details.<br/>
      3. User selects property of choice and books the property.<br/>
      4. User is the connected to the property agent for transaction completion.<br/>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
);

export default Faqs;