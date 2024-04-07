import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@mantine/core';
import SideNavbar from '@/components/layout/side-navbar';

type Props = {};

const Admin = (props: Props) => {
  return (
    <Flex>
      <SideNavbar />
      <Box my={6} mx={12}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Admin;
