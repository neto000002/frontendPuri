import React from 'react';
import { Button, Grid, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const DashboardPanel = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('repartidor');
    navigate('/');
  };

  const buttons = [
    { path: '/register-deliveryman', label: 'Registrar Repartidor' },
    { path: '/sales', label: 'Ventas' },
    { path: '/fiados', label: 'Fiados' },
    { path: '/expenses', label: 'Reportes' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url('/images/logoPuri.jpg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Sección izquierda para los botones */}
      <div
        style={{
          width: isMobile ? '100%' : '30%',
          minHeight: isMobile ? 'auto' : '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '20px' : '5% 0 5% 5%',
          boxSizing: 'border-box',
          backgroundColor: isMobile ? 'rgba(0,0,0,0.5)' : 'transparent',
        }}
      >
        <h2
          style={{
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            marginBottom: '15px',
            textAlign: 'center',
          }}
        >
          Panel de Administración
        </h2>

        <Grid container spacing={2} justifyContent="center">
          {buttons.map((item, index) => (
            <Grid
              item
              xs={6}
              sm={12}
              key={index}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                onClick={() => navigate(item.path)}
                variant="contained"
                style={{
                  width: isMobile ? '90%' : '150px',
                  maxWidth: '300px',
                  height: '150px',
                  borderRadius: '20px',
                  color: 'white',
                  textTransform: 'none',
                  boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backgroundColor: '#007bff',
                }}
              >
                {item.label}
              </Button>
            </Grid>
          ))}

          {/* Botón cerrar sesión */}
          <Grid
            item
            xs={6}
            sm={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: isMobile ? '20px' : 0,
            }}
          >
            <Tooltip title="Cerrar sesión">
              <IconButton
                onClick={handleLogout}
                style={{
                  width: isMobile ? '90%' : '150px',
                  height: '150px',
                  borderRadius: '20px',
                  color: 'white',
                  backgroundColor: '#dc3545',
                  boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
                }}
              >
                <LogoutIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Grid>

          {/* Botón Inventario */}
          <Grid
            item
            xs={6}
            sm={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              onClick={() => navigate('/inventory')}
              variant="contained"
              style={{
                width: isMobile ? '90%' : '150px',
                maxWidth: '300px',
                height: '150px',
                borderRadius: '20px',
                color: 'white',
                textTransform: 'none',
                boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: '#007bff',
              }}
            >
              Inventario
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashboardPanel;
