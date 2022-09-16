import { useEffect, useState } from 'react';
import { Box, Text } from 'theme-ui';
import { Button } from '@/components/index';

export const Hero = () => {
  const [height, setHeight] = useState(0);

  const setHeroHeight = () => {
    const headerHeight = document.querySelector('header')?.clientHeight ?? 0;
    setHeight(window.innerHeight - headerHeight - 36);
  };

  useEffect(() => {
    setHeroHeight();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setHeroHeight);

    return () => {
      window.removeEventListener('resize', setHeroHeight);
    };
  }, [height]);

  return (
    <Box
      as="section"
      sx={{
        placeContent: 'center',
        gap: 3,
        gridColumnStart: [3],
        gridColumnEnd: [11],
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'center',
        alignItems: 'center',
        height: `${height}px`
      }}
    >
      <Box
        sx={{
          img: { maxWidth: '100%' },
          flexBasis: [null, '100%', null, null, '100%']
        }}
      >
        <img
          alt="An illustration of a person at a computer"
          src="/images/hero.svg"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: [2, 2, 2, 2, 3],
          button: {
            fontSize: [2, 2, 3, 3, 6],
            px: [3, 3, 4, 4, 4],
            maxWidth: 'fit-content'
          }
        }}
      >
        <Text
          sx={{
            fontWeight: 'bold',
            fontSize: [6, 6, 8, 8, 9],
            color: 'text.primary',
            lineHeight: 1
          }}
        >
          The #1
          <Text
            sx={{
              display: 'block',
              textShadow: '0px 1px 5px hsla(157, 60%, 40%, 60%)',
              color: 'primary'
            }}
          >
            Developer
          </Text>
          Discord Bot
        </Text>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Text
            sx={{ fontSize: [0, 0, 2, 4, 5], py: 2, color: 'text.offText' }}
          >
            Manage merge requests, custom webhook integrations with GitLab and
            GitHub, role reactions and much more.
          </Text>
          <Button
            variant="cta"
            name="features"
            aria-label="Click to go to the features section"
            type="button"
          >
            See Features
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
