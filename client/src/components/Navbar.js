import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../styles/nav.css'


export default function Navbar() {
  return (
    <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Elite Supplements
      </Typography>
      <nav>
        <section className="nav-section">
           <CustomLink to="/">Home</CustomLink>
           <CustomLink to="/supplement">Supplements</CustomLink>
           <CustomLink to="/cart">Cart</CustomLink>
        </section>
         
      </nav>
      <Button href="/sign-in" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login
      </Button>
    </Toolbar>
  </AppBar>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : "nav-link"}>
      <Link  to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}