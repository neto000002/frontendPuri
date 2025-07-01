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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // botones arriba, logout abajo en desktop
          padding: isMobile ? '20px' : '5% 0 5% 5%',
          boxSizing: 'border-box',
          backgroundColor: isMobile ? 'rgba(0,0,0,0.5)' : 'transparent',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2
            style={{
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              marginBottom: '15px',
            }}
          >
            Panel de Administración
          </h2>

          <Grid
            container
            spacing={2}
            justifyContent={isMobile ? 'center' : 'flex-start'}
          >
            {buttons.map((item, index) => (
              <Grid
                item
                xs={isMobile ? 12 : 6}
                key={index}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button
                  onClick={() => navigate(item.path)}
                  variant="contained"
                  style={{
                    width: isMobile ? '90%' : 150,
                    maxWidth: 300,
                    height: 150,
                    borderRadius: 20,
                    color: 'white',
                    textTransform: 'none',
                    boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
                    fontSize: 14,
                    fontWeight: 'bold',
                    backgroundColor: '#007bff',
                  }}
                >
                  {item.label}
                </Button>
              </Grid>
            ))}

            {/* Botón Inventario */}
            <Grid
              item
              xs={isMobile ? 12 : 6}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                onClick={() => navigate('/inventory')}
                variant="contained"
                style={{
                  width: isMobile ? '90%' : 150,
                  maxWidth: 300,
                  height: 150,
                  borderRadius: 20,
                  color: 'white',
                  textTransform: 'none',
                  boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
                  fontSize: 14,
                  fontWeight: 'bold',
                  backgroundColor: '#007bff',
                }}
              >
                Inventario
              </Button>
            </Grid>
          </Grid>
        </div>

        {/* Botón cerrar sesión abajo */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: isMobile ? 20 : 0,
          }}
        >
          <Tooltip title="Cerrar sesión">
            <IconButton
              onClick={handleLogout}
              style={{
                width: isMobile ? '90%' : 150,
                height: 150,
                borderRadius: 20,
                color: 'white',
                backgroundColor: '#dc3545',
                boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',
              }}
            >
              <LogoutIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel;
