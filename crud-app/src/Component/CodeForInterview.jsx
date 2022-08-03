

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/youtube.jpg';
import InstaTele from '../Assets/Images/avenger.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">Marvel</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Youtube} />
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default CodeForInterview;