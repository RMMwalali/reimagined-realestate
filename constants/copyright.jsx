import React from 'react';
import { Box } from '@chakra-ui/react'; // Import Box component from Chakra UI

class Copyright extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: new Date().getFullYear()
        };
    }

    render() {
        return (
            <Box textAlign="center" py={{ base: "2", md: "0" }} w="full"> {/* Center and add padding on smaller screens */}
                <p style={{ color: "white", margin: "20px 0" }}>© Patnan Investments. All Rights Reserved {this.state.currentYear}.</p>
            </Box>
        );
    }
}

export default Copyright;
