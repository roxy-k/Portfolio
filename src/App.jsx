import React from 'react';
import {
  Typography,
  Button,
  Stack,
  Grid,
  Box,
  Container,
  Chip,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#000';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.backgroundColor = '#000';

    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.backgroundColor = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', bgcolor: '#000' }}>
      <Box sx={{ position: 'relative', zIndex: 10 }}>
        {/* Navigation Menu */}
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300, color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          PaperProps={{ sx: { bgcolor: '#121212', color: 'white' } }}
        >
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <List sx={{ mt: 6 }}>
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((text) => (
                <ListItem button component="a" href={`#${text.toLowerCase()}`} key={text}>
                  <ListItemText primary={text} sx={{ color: 'white' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Home Section */}
        <Box id="home" sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1
            }}
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
         

          {/* Content */}
          <Container
            disableGutters
            maxWidth={false}
            sx={{ position: 'relative', zIndex: 1, color: 'white', py: 30 }}
          >
            <Typography variant="h3" gutterBottom align="center">
              Hello, World!
            </Typography>
            <Typography variant="h6" align="center">
              I am a growing Software Developer | From concept to clean, working code
            </Typography>
          </Container>
        </Box>
{/* About Section */}
<Box id="about" sx={{ py: 16, bgcolor: '#000' }}>
  <Container>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{  mb: 8, 
    fontWeight: 600, 
    color: '#ffffffff',   
    textTransform: 'uppercase',
    letterSpacing: 2  }}
    >
      About Me
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',   
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,                 
      }}
    >
    
      <Box
        component="img"
        src="/photo.PNG"
        alt="Portrait"
        sx={{
          width: 250,
          height: 250,
          borderRadius: 2,
          objectFit: 'contain',
          filter: 'grayscale(100%)',
          boxShadow: 3,
        }}
      />

      <Typography
        variant="body1"
        sx={{
          fontSize: '1.1rem',
          lineHeight: 1.7,
          color: 'white',
          maxWidth: 500,
          textAlign: 'left',
        }}
      >
        I am an aspiring Software Developer who is just starting the journey in tech. <br />
        I enjoy learning new technologies, writing clean code, and transforming creative ideas into working applications.
      </Typography>
    </Box>
  </Container>
</Box>


        {/* Projects Section */}
        <Box id="projects" sx={{ textAlign: 'center', py: 30 }}>
          <Container disableGutters maxWidth={false}>
<Typography
  variant="h4"
  align="center"
  sx={{
    mb: 8,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      display: 'block',
      width: '60%',
      height: '3px',
      backgroundColor: '#42a5f5', 
      margin: '8px auto 0',
      borderRadius: '2px',
    
    }
  }}
>
  My Projects
</Typography>






            <Box sx={{ width: '100%', overflow: 'visible', position: 'relative' }}>
              <ProjectCard />

              {/* Second project */}
              <Box sx={{ mt: 12 }}>
                <ProjectCardSecond />
              </Box>
            </Box>
          </Container>
        </Box>
        {/* Third project — Mobile App */}
<Box sx={{ mt: 12 }}>
  <ProjectCardMobile />
</Box>


        {/* Skills Section */}
        <Box id="skills" sx={{ py: 8 }}>
          <Container disableGutters maxWidth={false}>
            <Typography variant="h4" align="center" gutterBottom sx={{ mb: 8, 
    fontWeight: 600, 
    color: '#ffffffff',   
    textTransform: 'uppercase',
    letterSpacing: 2  }}>
              Skills
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
              {[
                'JavaScript',
                'React',
                'Node.js',
                'Express',
                'MongoDB',
                'Git & GitHub',
                'REST API',
                'EJS',
                'Bootstrap'
              ].map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{ m: 1 }}
                />
              ))}
            </Stack>
          </Container>
        </Box>

       

              
        {/* Contact Section */}
        <Box id="contact" sx={{ py: 8 }}>
          <Container disableGutters maxWidth={false}>
            <Typography variant="h4" gutterBottom align="center"  sx={{  mb: 8, 
    fontWeight: 600, 
    color: '#ffffffff',   
    textTransform: 'uppercase',
    letterSpacing: 2
  }}
>
  Contact me:
</Typography>
            <Typography
              variant="body1"
              align="center"
              maxWidth="sm"
              sx={{  mx: 'auto', mb: 4 }}
            >
              Feel free to reach out for collaboration, questions, or opportunities.
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={4}>
              <a
                href="https://www.linkedin.com/in/oksana-katysheva-0417741a1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ color: '#90caf9', fontSize: 40 }} />
              </a>
              <a
                href="https://github.com/roxy-k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: '#90caf9', fontSize: 40 }} />
              </a>
            </Stack>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{ py: 4, textAlign: 'center', borderTop: '1px solid #222' }}
        >
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Oksana Katysheva. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function ProjectCard() {
  const screenshots = [
    { src: "/screenshot1.png", alt: "Homepage with note list", caption: "User dashboard " },
    { src: "/screenshot2.png", alt: "New note form", caption: "Creating a new note" },
    { src: "/screenshot3.png", alt: "Responsive layout", caption: "Edit your preferences" }
  ];

  return (
    <Box>
  
<Typography
  variant="h5"
  align="center"
  sx={{
    mb: 2,
    fontWeight: 500,
    color: '#42a5f5', 
    border: '2px solid #42a5f5',
    borderRadius: '8px',
    display: 'inline-block',
    px: 3,
    py: 1
  }}
>
  Note-Taking App
</Typography>



<Box sx={{ maxWidth: 700, mx: 'auto', mb: 6, textAlign: 'center' }}>
<Typography
  variant="body2"
  align="center"
  sx={{
    mb: 6,
    color: 'rgba(255,255,255,0.8)',
    maxWidth: 600,
    mx: 'auto',
    lineHeight: 1.6
  }}
>
  A full-stack web application for managing personal notes. Features include secure user authentication, CRUD operations for creating, editing, and deleting notes, RESTful API integration with server-side validation, and error handling for invalid requests. Built with Node.js, Express, and MongoDB.
</Typography>

</Box>


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          px: 8,
          py: 6,
          overflowX: 'auto',
          overflowY: 'visible',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {screenshots.map((shot, index) => (
          <Box
            key={index}
            sx={{
              width: 400,
              height: 300,
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: 'center',
              flexShrink: 0,
              '&:hover': {
                transform: 'scale(1.3)',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                zIndex: 10
              }
            }}
          >
            <Box
              sx={{
                height: '75%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                backgroundColor: 'rgba(255,255,255,0.02)'
              }}
            >
              <Box
                component="img"
                src={shot.src}
                alt={shot.alt}
                sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 1, opacity: 0.9 }}
              />
            </Box>
            <Box
              sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2 }}
            >
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 400, textAlign: 'center', lineHeight: 1.3 , mt:-3}}>
                {shot.caption}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ProjectCardSecond() {
  const screenshots = [
    { src: "/screenshot4.png", alt: "Temperature unit toggle",         caption: "Temperature Unit Toggle (°C/°F)" },
    { src: "/screenshot5.png", alt: "Dark mode interface",  caption: "Dark Mode Interface" },
    { src: "/screenshot6.png", alt: "Geolocation-based weather data",    caption: "Geolocation-Based Weather Data" }
  ];

  return (
    <Box>
     
  <Typography
  variant="h5"
  align="center"
  sx={{
    mb: 2,
    fontWeight: 500,
    color: '#42a5f5', 
    border: '2px solid #42a5f5',
    borderRadius: '8px',
    display: 'inline-block',
    px: 3,
    py: 1
  }}
>
  Weather Forecasting App
</Typography>


    
      <Typography
        variant="body2"
        align="center"
        sx={{
          mb: 6,
          color: 'rgba(255,255,255,0.8)',
          maxWidth: 600,
          mx: 'auto',
          lineHeight: 1.6
        }}
      >
        A dynamic web application for real-time weather insights. Features include:
        integration with the OpenWeatherMap API for live data, city and coordinate search,
        detailed weather metrics (temperature, humidity, wind speed, forecast),
        smooth animations, responsive design, and error handling. Built with React,
        JavaScript, and the OpenWeatherMap API.
      </Typography>

     
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          px: 8,
          py: 6,
          overflowX: 'auto',
          overflowY: 'visible',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {screenshots.map((shot, index) => (
          <Box
            key={index}
            sx={{
              width: 400,
              height: 300,
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: 'center',
              flexShrink: 0,
              '&:hover': {
                transform: 'scale(1.3)',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                zIndex: 10
              }
            }}
          >
            <Box sx={{ height: '75%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <Box
                component="img"
                src={shot.src}
                alt={shot.alt}
                sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 1, opacity: 0.9 }}
                onError={(e) => { e.currentTarget.src = '/placeholder.png'; }}
              />
            </Box>
            <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2 }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 400, textAlign: 'center', lineHeight: 1.3, mt: -2 }}>
                {shot.caption}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ProjectCardMobile() {
  const phoneShots = [
    { src: "/screenshot7.png", alt: "Light theme screen", caption: "Light theme • °C mode" },
    { src: "/screenshot9.png", alt: "Dark theme screen",  caption: "Dark theme • °F mode" },
    { src: "/screenshot8.png", alt: "5-day screen",       caption: "Hourly & 5-day forecast" },
  ];

  return (
    <Box>
<Typography
  variant="h5"
  sx={{
    mb: 2,
    fontWeight: 500,
    color: '#42a5f5',
    border: '2px solid #42a5f5',
    borderRadius: '8px',
    display: 'inline-block', 
    px: 3,
    py: 1,
    mx: 'auto', 
  }}
  align="center"
>
  Weather Forecast — Mobile App
</Typography>


<Typography
  variant="body2"
  align="center"
  sx={{
    mb: 6,
    color: 'rgba(255,255,255,0.8)',
    maxWidth: 600,
    mx: 'auto',
    lineHeight: 1.6
  }}
>
 A mobile weather app with a sleek glass-style interface that displays current conditions, hourly and 5-day forecasts, and supports geolocation and city search with autocomplete. It includes °C/°F unit toggle, adaptive dark/light themes, and smart error handling for API or location issues.
</Typography>


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 4,
          px: 8,
          py: 6,
          overflowX: 'auto',
          overflowY: 'visible',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {phoneShots.map((shot, i) => (
          <GlassPhone key={i} {...shot} />
        ))}
      </Box>
    </Box>
  );
}

function GlassPhone({ src, alt, caption }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: 260,
        height: 520,
        borderRadius: '36px',
        p: '14px',
        position: 'relative',
        backdropFilter: 'blur(10px)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.45)',
        transition: 'transform .3s ease, box-shadow .3s ease',
        '&:hover': {
          transform: 'scale(1.06)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.55)'
        },

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 90,
          height: 18,
          borderRadius: '12px',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }
      }}
    >

      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '28px',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
          <Box
            component="img"
            src={src}
            alt={alt}
            onError={(e) => { e.currentTarget.src = '/placeholder.png'; }}
            sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
        </Box>

   
        <Box
          sx={{
            py: 1,
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: 'rgba(255,255,255,0.02)'
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            {caption}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;