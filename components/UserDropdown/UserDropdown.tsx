import { useState, useEffect } from 'react';
import { Box, Text } from 'theme-ui';
import { Avatar, Icon } from '@/components/index';

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isHovered || isOpen) return setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isHovered, isOpen]);

  return (
    <Box
      sx={{
        gridColumnStart: [8, 7],
        gridColumnEnd: [13, 13, 13, 13],
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 2,
        position: 'relative',
        '.hover': {
          opacity: 1
        }
      }}
    >
      <Text
        sx={{ display: ['none', 'none', 'block', 'block'] }}
        color="text.primary"
      >
        Username
      </Text>
      <Avatar alt="Profile picture placeholder" size="sm" />
      <Box
        sx={{
          cursor: 'pointer',
          borderRadius: 'default',
          '&:focus-visible': {
            outlineColor: 'secondary',
            outlineOffset: '2px',
            outlineStyle: 'solid'
          }
        }}
        role="button"
        aria-label="Profile options"
        className="expand-profile-dropdown"
        aria-expanded={visible}
        tabIndex={0}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <Icon icon="chevron-down" size="md" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: [-55, -50, -50, -50, -45],
          width: '200px',
          background: 'background.dashboard.secondary',
          borderRadius: 'default',
          overflow: 'hidden',
          color: 'text.primary',
          fontSize: [1],
          gridTemplateColumns: '1fr',
          opacity: 0,
          transition: 'opacity 0.2s ease-in',
          display: 'grid',
          pointerEvents: visible ? 'all' : 'none'
        }}
        data-testid="profile-dropdown"
        className={`profile-dropdown ${visible ? 'hover' : ''}`}
        aria-hidden={!visible}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', py: 2, px: 3, gap: 2 }}
        >
          <Avatar alt="Profile picture placeholder" />
          Username
        </Box>
        <Box
          as="a"
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 2,
            px: 3,
            background: 'background.dashboard.tertiary',
            cursor: 'pointer',
            transition: 'all 0.1s ease-out',
            ':hover + span': {
              textDecoration: 'underline'
            },
            ':active': {
              background: 'primary'
            },
            '&:focus-visible': {
              outlineColor: 'secondary',
              outlineOffset: '-3px',
              outlineStyle: 'solid'
            }
          }}
          tabIndex={visible ? 0 : -1}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          <Text sx={{ flexBasis: '100%' }}>Log out</Text>
          <Icon icon="log-out" fontSizeHeights />
        </Box>
      </Box>
    </Box>
  );
};
