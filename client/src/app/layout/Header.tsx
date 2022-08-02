import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  onThemeChange: () => void;
}

export function Header({ darkMode, onThemeChange }: Props) {
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">SahaiCart</Typography>
          <Switch
            checked={darkMode}
            color="secondary"
            onChange={onThemeChange}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
