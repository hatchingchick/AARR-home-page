import AppBar from '@mui/material/AppBar';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NextLink from 'next/link';
import { forwardRef } from 'react';
import Spacer from '~/components/Spacer';
import ThemeColorToggle from '~/components/ThemeColorToggle';
import SpacingLayoutHeaderLogo from '~/layouts/spacing/SpacingLayoutHeaderLogo';
import SpacingLayoutHeaderNavMenu from '~/layouts/spacing/SpacingLayoutHeaderNavMenu';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
const SpacingLayoutHeader = forwardRef<HTMLDivElement>(function SpacingLayoutHeader(_props, ref) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      ref={ref}
      elevation={0}
      sx={{ backgroundColor: 'background.paper' }}
    >
      <Toolbar disableGutters>
        <Spacer>
          <Stack direction='row'>
            <SpacingLayoutHeaderLogo />
            <Stack
              direction='row'
              spacing={1}
            >
              <ThemeColorToggle />
              {isSmallScreen && <SpacingLayoutHeaderNavMenu />}
              {!isSmallScreen && (
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={1}
                >
                  <NextLink passHref href='/blog/'>
                    <MuiLink color='text.secondary' underline='hover'>ブログ</MuiLink>
                  </NextLink>
                  <NextLink passHref href='/legal/privacy-policy/'>
                    <MuiLink color='text.secondary' underline='hover'>プライバシーポリシー</MuiLink>
                  </NextLink>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Spacer>
      </Toolbar>
    </AppBar>
  );
});

export default SpacingLayoutHeader;
