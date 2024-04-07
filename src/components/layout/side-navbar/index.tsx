import { useState } from 'react';
import { Group, Code, rem } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconDashboard,
  IconMenuOrder,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './index.module.css';
import { Link } from 'react-router-dom';

const data = [
  { link: 'dashboard', label: 'Dashboard', icon: IconDashboard },
  { link: 'orders', label: 'Order', icon: IconMenuOrder },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

export default function SideNavbar() {
  const [active, setActive] = useState('Billing');
  const [isMiniMenu, setMiniMenu] = useState<boolean>(false);

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      {!isMiniMenu && <span>{item.label}</span>}
    </Link>
  ));

  const handleHideFullMenu = () => {
    setMiniMenu((prev) => !prev);
  };

  return (
    <nav style={{ width: isMiniMenu ? rem('100px') : rem('250px') }} className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify={isMiniMenu ? 'flex-end' : 'space-between'}>
          {!isMiniMenu && <MantineLogo size={28} />}
          {isMiniMenu ? (
            <IconChevronRight cursor="pointer" onClick={handleHideFullMenu} />
          ) : (
            <IconChevronLeft cursor="pointer" onClick={handleHideFullMenu} />
          )}
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          {!isMiniMenu && <span>Change account</span>}
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          {!isMiniMenu && <span>Logout</span>}
        </a>
      </div>
    </nav>
  );
}
