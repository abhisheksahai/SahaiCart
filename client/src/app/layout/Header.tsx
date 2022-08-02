import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  onThemeChange: () => void;
}

export function Header({ onThemeChange }: Props) {
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">SahaiCart</Typography>
          <Switch defaultChecked color="secondary" onChange={onThemeChange} />
        </Toolbar>
      </AppBar>
    </>
  );
}
