
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { FiUserCheck } from 'react-icons/fi';
import { MdTravelExplore } from 'react-icons/md';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='#d7d7d7' background='#5b8181'>
    <Box fontSize='3xl' color='#ffffff' fontWeight='bold' paddingLeft={10} fontFamily='Poppins'>
      <Link href='/' paddingLeft='4'>NYUMBANI</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu >
        {/* variant='outline' */}
        <MenuButton as={IconButton} icon={<FcMenu />} border='none' borderRadius={5} color='#5b8181' width={30} height={30} />
        <MenuList border='1px solid #5b8181'>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />} fontSize='1.3rem' border='none'>Home</MenuItem>
          </Link>
          <Link href='/explore' passHref>
            <MenuItem icon={<MdTravelExplore />} fontSize='1.3rem' border='none'>Explore Housing</MenuItem>
          </Link>
          <Link href='/Search' passHref>
            <MenuItem icon={<BsSearch />} fontSize='1.3rem' border='none'>Search</MenuItem>
          </Link>
          <Link href='/Search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />} fontSize='1.3rem' border='none'>Buy Property</MenuItem>
          </Link>
          <Link href='/Search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />} fontSize='1.3rem' border='none'>Rent Property</MenuItem>
          </Link>
          <Link href='/Register' passHref>
            <MenuItem icon={<FiUserCheck />} fontSize='1.3rem' border='none'>Register</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      
    </Box>
    
  </Flex>
);

export default Navbar;
