import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
  Chip,
  Paper,
} from "@mui/material";

// Import assets
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import imageWebp from "../assets/image.webp";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mov";
import video3 from "../assets/video3.mov";
import video4 from "../assets/video4.mov";
import video5 from "../assets/video5.mov";

const HomePage = () => {
  // Get current date for newspaper header
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Navigation/Index items
  const sections = ["Markets", "Technology", "Community", "Trading", "Analysis"];

  // Main news stories
  const mainStory = {
    headline: "REVOLUTIONARY MEMECOIN TAKES CRYPTO WORLD BY STORM",
    subheadline: "Hearing Things Coin Transforms Auditory Hallucinations Into Digital Gold",
    byline: "By Financial Crypto Reporter",
    content: "In an unprecedented move that has left the cryptocurrency community both bewildered and excited, Hearing Things Coin has emerged as the latest phenomenon in the digital asset space. Born from the universal experience of mishearing sounds and questioning one's own perception, this memecoin has captured the imagination of traders worldwide. 'You're not hearing things,' proclaimed the anonymous development team, 'this coin's real — and it's making noise!' The project represents a unique fusion of psychological humor and financial opportunity, turning those awkward moments of auditory confusion into a rallying cry for a new generation of crypto enthusiasts."
  };

  // Secondary stories
  const secondaryStories = [
    {
      headline: "Community Celebrates Milestone",
      byline: "Community Desk",
      content: "Thousands of holders unite in celebration as Hearing Things Coin reaches new heights. The vibrant community continues to grow, sharing memes and spreading the word about their favorite auditory-themed cryptocurrency."
    },
    {
      headline: "Trading Volume Surges",
      byline: "Market Analysis Team", 
      content: "Market data shows unprecedented trading activity as investors flock to this unique memecoin. Volume has increased by over 500% in recent weeks, suggesting strong market confidence."
    },
    {
      headline: "Technology Behind the Madness",
      byline: "Tech Correspondent",
      content: "Despite its humorous origins, Hearing Things Coin is built on solid blockchain technology. The development team has implemented robust security measures and sustainable tokenomics."
    }
  ];

  // Feature stories with media
  const featureStories = [
    {
      headline: "EXCLUSIVE: Behind the Scenes of Crypto's Wildest Project",
      media: { type: "video", src: video5 },
      content: "An exclusive look at the creation process reveals the passion and creativity driving this revolutionary memecoin project."
    },
    {
      headline: "Meme Culture Meets Financial Innovation",
      media: { type: "image", src: imageWebp },
      content: "How internet culture and cryptocurrency are creating new opportunities for digital asset enthusiasts worldwide."
    }
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh", fontFamily: "serif" }}>
      {/* Newspaper Header/Masthead */}
      <Box sx={{ backgroundColor: "white", borderBottom: "3px solid black", py: 2 }}>
        <Container maxWidth="lg">
          {/* Top line with date and info */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="caption" sx={{ fontFamily: "serif", fontSize: "0.8rem" }}>
              {currentDate}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {sections.map((section, index) => (
                <Typography 
                  key={index}
                  variant="caption" 
                  sx={{ 
                    fontFamily: "serif", 
                    fontSize: "0.8rem",
                    borderRight: index < sections.length - 1 ? "1px solid #ccc" : "none",
                    pr: index < sections.length - 1 ? 2 : 0
                  }}
                >
                  {section}
                </Typography>
              ))}
            </Box>
            <Typography variant="caption" sx={{ fontFamily: "serif", fontSize: "0.8rem" }}>
              Vol. 1, No. 1 • $0.50
            </Typography>
          </Box>

          {/* Main Masthead */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 1 }}>
              <img 
                src={logo} 
                alt="Hearing Things Logo" 
                style={{ height: "60px", width: "60px", objectFit: "contain" }} 
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: "bold",
                  fontFamily: "serif",
                  color: "black",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                THE HEARING TIMES
              </Typography>
            </Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontStyle: "italic", 
                color: "gray",
                fontFamily: "serif",
                borderTop: "1px solid #ccc",
                borderBottom: "2px solid black",
                py: 0.5
              }}
            >
              "All the Noise That's Fit to Print" • ESTABLISHED 2024 • DAILY EDITION
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Newspaper Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={0} sx={{ backgroundColor: "white", p: 4, border: "1px solid #ddd" }}>
          
          {/* Lead Story */}
          <Box sx={{ mb: 4, pb: 3, borderBottom: "2px solid black" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: "bold",
                fontFamily: "serif",
                color: "black",
                lineHeight: 1.1,
                mb: 1,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {mainStory.headline}
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontFamily: "serif",
                color: "black",
                mb: 2,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              {mainStory.subheadline}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "center",
                mb: 3,
                color: "gray",
                fontSize: "0.9rem",
                fontFamily: "serif",
                borderBottom: "1px solid #eee",
                pb: 1,
              }}
            >
              {mainStory.byline} • Special Investigation
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    fontFamily: "serif",
                    color: "black",
                    textAlign: "justify",
                    textIndent: "2em",
                    columnCount: { xs: 1, md: 2 },
                    columnGap: "2rem",
                    columnRule: "1px solid #ddd",
                  }}
                >
                  {mainStory.content}
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ border: "1px solid #ccc", p: 2, backgroundColor: "#f9f9f9" }}>
                  <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold", mb: 1 }}>
                    MARKET SNAPSHOT
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Chip 
                      label="🚀 TRENDING" 
                      size="small" 
                      sx={{ backgroundColor: "#4caf50", color: "white", fontFamily: "sans-serif" }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ fontFamily: "serif", lineHeight: 1.6 }}>
                    Hearing Things Coin continues its meteoric rise as traders worldwide embrace the chaos of misheard opportunities.
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      mt: 2,
                      backgroundColor: "black",
                      fontFamily: "serif",
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                      "&:hover": { backgroundColor: "#333" }
                    }}
                  >
                    Join the Noise
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Secondary Stories Row */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {secondaryStories.map((story, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ borderRight: { md: index < 2 ? "1px solid #ddd" : "none" }, pr: { md: 2 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      fontFamily: "serif",
                      color: "black",
                      mb: 1,
                      lineHeight: 1.2,
                    }}
                  >
                    {story.headline}
                  </Typography>
                  
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      mb: 1,
                      color: "gray",
                      fontFamily: "serif",
                      fontSize: "0.8rem",
                    }}
                  >
                    By {story.byline}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "serif",
                      lineHeight: 1.6,
                      color: "black",
                      textAlign: "justify",
                    }}
                  >
                    {story.content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3, borderColor: "black" }} />

          {/* Feature Stories with Media */}
          {featureStories.map((story, index) => (
            <Box key={index} sx={{ mb: 4, pb: 3, borderBottom: index < featureStories.length - 1 ? "1px solid #ccc" : "none" }}>
              <Grid container spacing={3} alignItems="flex-start">
                <Grid item xs={12} md={4} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
                  <Box sx={{ position: "relative" }}>
                    {story.media.type === "video" ? (
                      <Box>
                        <video
                          controls
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "200px",
                            objectFit: "cover",
                            border: "1px solid #ccc",
                          }}
                          preload="metadata"
                        >
                          <source src={story.media.src} />
                        </video>
                        <Typography
                          variant="caption"
                          sx={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            color: "white",
                            px: 1,
                            py: 0.5,
                            fontSize: "0.7rem",
                          }}
                        >
                          VIDEO
                        </Typography>
                      </Box>
                    ) : (
                      <Box
                        component="img"
                        src={story.media.src}
                        sx={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "200px",
                          objectFit: "cover",
                          border: "1px solid #ccc",
                        }}
                      />
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        textAlign: "center",
                        fontStyle: "italic",
                        color: "gray",
                        mt: 0.5,
                        fontSize: "0.75rem",
                        fontFamily: "serif",
                      }}
                    >
                      Photo/Video: Hearing Things Archives
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={8} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      fontFamily: "serif",
                      color: "black",
                      mb: 1,
                      lineHeight: 1.2,
                    }}
                  >
                    {story.headline}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "serif",
                      lineHeight: 1.7,
                      color: "black",
                      textAlign: "justify",
                      textIndent: "1.5em",
                    }}
                  >
                    {story.content}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}

          {/* Footer/Classified Section */}
          <Box sx={{ mt: 4, pt: 3, borderTop: "2px solid black", backgroundColor: "#f5f5f5", p: 2 }}>
            <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold", mb: 2, textAlign: "center" }}>
              CLASSIFIED ADVERTISEMENTS
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ border: "1px solid #ccc", p: 2, backgroundColor: "white" }}>
                  <Typography variant="body2" sx={{ fontFamily: "serif", fontWeight: "bold" }}>
                    INVESTMENT OPPORTUNITY
                  </Typography>
                  <Typography variant="caption" sx={{ fontFamily: "serif" }}>
                    Join the Hearing Things revolution. DYOR. Not financial advice.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ border: "1px solid #ccc", p: 2, backgroundColor: "white" }}>
                  <Typography variant="body2" sx={{ fontFamily: "serif", fontWeight: "bold" }}>
                    COMMUNITY NOTICE
                  </Typography>
                  <Typography variant="caption" sx={{ fontFamily: "serif" }}>
                    Follow us on social media for the latest updates and memes.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Typography 
              variant="caption" 
              sx={{ 
                display: "block", 
                textAlign: "center", 
                mt: 2, 
                fontFamily: "serif",
                color: "gray"
              }}
            >
              © 2024 The Hearing Times. All rights reserved. For entertainment purposes only.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default HomePage;

