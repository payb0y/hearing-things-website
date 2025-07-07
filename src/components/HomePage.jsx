import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  AppBar,
  Toolbar,
  Stack,
  Paper,
  Avatar,
  Modal,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import { PlayArrow, TrendingUp, People, Analytics, Close, MoreVert, DarkMode, LightMode } from "@mui/icons-material";

// Import assets
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import image4 from "../assets/image4.jpg";
import imageWebp from "../assets/image.webp";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mov";
import video3 from "../assets/video3.mov";
import video4 from "../assets/video4.mov";
import video5 from "../assets/video5.mov";

const HomePage = () => {
  // Modal state
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(true);

     // Theme configuration
   const theme = {
     light: {
       // Background colors
       primary: "#fafafa",
       secondary: "white",
       paper: "white",
       
       // Text colors
       primaryText: "#1a1a1a",
       secondaryText: "#666",
       
       // Twitter-specific colors
       twitterText: "#14171a",
       twitterSecondary: "#657786",
       twitterBorder: "#e1e8ed",
       twitterHover: "#f7f9fa",
       
       // Accent colors - Dark Yellow/Amber theme
       accent: "#b8860b", // Dark goldenrod
       accentHover: "#9a7209",
       
       // Border and divider
       border: "#e0e0e0",
       divider: "#e1e8ed"
     },
     dark: {
       // Background colors - Dark Yellow/Amber theme
       primary: "#2a1f0f", // Dark amber/brown
       secondary: "#3d2b15", // Slightly lighter dark amber
       paper: "#3d2b15",
       
       // Text colors
       primaryText: "#f5e6d3", // Warm light cream
       secondaryText: "#c4a876", // Muted gold
       
       // Twitter-specific colors (dark amber theme)
       twitterText: "#f5e6d3",
       twitterSecondary: "#c4a876",
       twitterBorder: "#5a4429", // Dark amber border
       twitterHover: "#4a3520", // Dark amber hover
       
       // Accent colors - Dark Yellow/Amber theme
       accent: "#daa520", // Goldenrod - brighter for dark mode
       accentHover: "#cd853f",
       
       // Border and divider
       border: "#5a4429",
       divider: "#5a4429"
     }
   };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Market stats data
  const marketStats = [
    { label: "Price", value: "$0.000742", change: "+23.5%", positive: true },
    { label: "24h Volume", value: "$2.3M", change: "+156%", positive: true },
    { label: "Market Cap", value: "$15.2M", change: "+18.7%", positive: true },
    { label: "Holders", value: "12,847", change: "+234", positive: true },
  ];

  // Feature stories
  const features = [
    {
      title: "Revolutionary Memecoin Takes Market by Storm",
      description: "Hearing Things Coin transforms auditory hallucinations into digital gold, capturing the imagination of traders worldwide.",
      image: image4,
      category: "Featured"
    },
    {
      title: "Community Celebrates Major Milestone",
      description: "Thousands of holders unite as the project reaches unprecedented growth and adoption rates.",
      image: imageWebp,
      category: "Community"
    },
    {
      title: "Technology Behind the Innovation",
      description: "Built on solid blockchain technology with robust security measures and sustainable tokenomics.",
      image: image,
      category: "Technology"
    }
  ];

  // Video content
  const videoContent = [
    { title: "Official Launch Trailer", video: video1, duration: "2:30" },
    { title: "Community Highlights", video: video2, duration: "1:45" },
    { title: "Trading Masterclass", video: video4, duration: "3:15" },
    { title: "Behind the Scenes", video: video5, duration: "2:10" }
  ];

     // News items
   const news = [
     "New partnership announced with major exchange",
     "Community votes on next development phase", 
     "Meme competition winner announced",
     "Developer AMA scheduled for next week",
     "Trading volume surges to new highs"
   ];

   // Mock comments data - larger pool for unique comments per post
   const commentPool = [
     // Post 0 - Revolutionary Memecoin
     {
       id: 1,
       author: "CryptoTrader42",
       handle: "@cryptotrader42",
       avatar: "CT",
       time: "1h",
       content: "This is huge! 🚀 Can't wait to see where this project goes. Already bought more tokens!",
       likes: Math.floor(Math.random() * 50) + 5,
       replies: Math.floor(Math.random() * 10) + 1
     },
     {
       id: 2,
       author: "AudioTechGuru",
       handle: "@audiotech_guru",
       avatar: "AT",
       time: "45m", 
       content: "Revolutionary indeed! The intersection of audio tech and blockchain is exactly what we needed. 🎵⛓️",
       likes: Math.floor(Math.random() * 30) + 8,
       replies: Math.floor(Math.random() * 5) + 2
     },
     {
       id: 3,
       author: "MemeLordSupreme",
       handle: "@memelord_supreme",
       avatar: "ML",
       time: "32m",
       content: "Finally, a memecoin with actual utility! Not just another dog coin 😂 Buying the dip!",
       likes: Math.floor(Math.random() * 40) + 12,
       replies: Math.floor(Math.random() * 8) + 1
     },
     {
       id: 4,
       author: "BlockchainBabe",
       handle: "@blockchain_babe",
       avatar: "BB",
       time: "28m",
       content: "The auditory hallucination concept is genius marketing. Viral potential is through the roof! 📈",
       likes: Math.floor(Math.random() * 25) + 6,
       replies: Math.floor(Math.random() * 4) + 1
     },
     {
       id: 5,
       author: "DiamondHandsDeep",
       handle: "@diamond_hands_deep",
       avatar: "DH",
       time: "15m",
       content: "💎🙌 Never selling! This community is unreal. See you all on the moon! 🌕",
       likes: Math.floor(Math.random() * 35) + 4,
       replies: Math.floor(Math.random() * 6) + 2
     },

     // Post 1 - Community Milestone
     {
       id: 6,
       author: "CommunityChamp",
       handle: "@community_champ",
       avatar: "CC",
       time: "2h",
       content: "So proud to be part of this amazing community! 12K holders and growing strong! 💪",
       likes: Math.floor(Math.random() * 45) + 10,
       replies: Math.floor(Math.random() * 7) + 3
     },
     {
       id: 7,
       author: "HearingThingsHero",
       handle: "@hearing_hero",
       avatar: "HH",
       time: "1h",
       content: "From 100 holders to 12K in just months! This growth is absolutely insane! 🚀🚀🚀",
       likes: Math.floor(Math.random() * 60) + 15,
       replies: Math.floor(Math.random() * 12) + 2
     },
     {
       id: 8,
       author: "EarlyAdopter2024",
       handle: "@early_adopter",
       avatar: "EA",
       time: "50m",
       content: "Been here since day 1! Watching this community grow has been incredible. Best decision ever! 🎉",
       likes: Math.floor(Math.random() * 35) + 8,
       replies: Math.floor(Math.random() * 6) + 1
     },
     {
       id: 9,
       author: "TokenomicsExpert",
       handle: "@tokenomics_pro",
       avatar: "TE",
       time: "35m",
       content: "The community-driven growth is organic and sustainable. Great fundamentals! 📊✅",
       likes: Math.floor(Math.random() * 28) + 5,
       replies: Math.floor(Math.random() * 4) + 2
     },
     {
       id: 10,
       author: "MoonBoundTrader",
       handle: "@moon_bound",
       avatar: "MB",
       time: "20m",
       content: "12K+ hodlers and we're just getting started! Next stop: 100K! 🌙🚀",
       likes: Math.floor(Math.random() * 42) + 7,
       replies: Math.floor(Math.random() * 9) + 1
     },

     // Post 2 - Technology Innovation  
     {
       id: 11,
       author: "TechAnalystPro",
       handle: "@tech_analyst_pro",
       avatar: "TA",
       time: "3h",
       content: "The smart contract architecture is really impressive. Solid security audits and clean code! 👨‍💻",
       likes: Math.floor(Math.random() * 55) + 12,
       replies: Math.floor(Math.random() * 8) + 4
     },
     {
       id: 12,
       author: "BlockchainDevLife",
       handle: "@blockchain_dev",
       avatar: "BD",
       time: "2h",
       content: "As a developer, I'm impressed by the tokenomics design. Well thought out and future-proof! 🔧",
       likes: Math.floor(Math.random() * 38) + 9,
       replies: Math.floor(Math.random() * 6) + 3
     },
     {
       id: 13,
       author: "CryptoSecurityGod",
       handle: "@crypto_security",
       avatar: "CS",
       time: "1h",
       content: "Security audit passed with flying colors. No red flags here! Safe to invest 🛡️✅",
       likes: Math.floor(Math.random() * 47) + 11,
       replies: Math.floor(Math.random() * 10) + 2
     },
     {
       id: 14,
       author: "SmartContractNinja",
       handle: "@contract_ninja",
       avatar: "SC",
       time: "45m",
       content: "Examined the contract code - it's clean, efficient, and follows best practices. Bullish! 💚",
       likes: Math.floor(Math.random() * 33) + 6,
       replies: Math.floor(Math.random() * 5) + 1
     },
     {
       id: 15,
       author: "DeFiWizard",
       handle: "@defi_wizard",
       avatar: "DW",
       time: "30m",
       content: "The tokenomics model is sustainable long-term. Finally, a project that did their homework! 📚",
       likes: Math.floor(Math.random() * 29) + 8,
       replies: Math.floor(Math.random() * 4) + 2
     }
   ];

   // Generate unique comments for each post
   const generateComments = (postIndex) => {
     const startIndex = postIndex * 5;
     const endIndex = startIndex + 5;
     return commentPool.slice(startIndex, endIndex);
   };

   // Handle post click
   const handlePostClick = (post, index) => {
     setSelectedPost({...post, comments: generateComments(index), postIndex: index});
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
     setSelectedPost(null);
   };

     return (
     <Box sx={{ minHeight: "100vh", backgroundColor: currentTheme.primary }}>
       {/* Header */}
       <AppBar position="static" elevation={0} sx={{ backgroundColor: currentTheme.secondary, borderBottom: `1px solid ${currentTheme.border}` }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
              <Avatar src={logo} sx={{ width: 40, height: 40, mr: 2 }} />
                             <Typography
                 variant="h6"
                 sx={{
                   fontWeight: 600,
                   color: currentTheme.primaryText,
                   letterSpacing: "-0.5px"
                 }}
               >
                 Hearing Things
               </Typography>
             </Box>
             <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
               <Typography variant="body1" sx={{ color: currentTheme.secondaryText, cursor: "pointer", "&:hover": { color: currentTheme.accent } }}>
                 Markets
               </Typography>
               <Typography variant="body1" sx={{ color: currentTheme.secondaryText, cursor: "pointer", "&:hover": { color: currentTheme.accent } }}>
                 Community
               </Typography>
               <Typography variant="body1" sx={{ color: currentTheme.secondaryText, cursor: "pointer", "&:hover": { color: currentTheme.accent } }}>
                 About
               </Typography>
             </Stack>
             <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
               <IconButton
                 onClick={toggleTheme}
                 sx={{
                   color: currentTheme.primaryText,
                   "&:hover": {
                     backgroundColor: currentTheme.twitterHover
                   }
                 }}
               >
                 {isDarkMode ? <LightMode /> : <DarkMode />}
               </IconButton>
               <Button
                 variant="contained"
                 sx={{
                   backgroundColor: currentTheme.accent,
                   borderRadius: "8px",
                   textTransform: "none",
                   px: 3,
                   "&:hover": {
                     backgroundColor: currentTheme.accentHover
                   }
                 }}
               >
                 Get Started
               </Button>
             </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                 <Box sx={{ textAlign: "center", mb: 8 }}>
           <Box sx={{ 
             display: "flex", 
             alignItems: "center", 
             justifyContent: "center", 
             gap: { xs: 2, md: 3 }, 
             mb: 3,
             flexDirection: { xs: "column", sm: "row" }
           }}>
             <img 
               src={logo} 
               alt="Hearing Things Logo" 
               style={{ 
                 height: "80px", 
                 width: "80px", 
                 objectFit: "contain"
               }} 
             />
             <Typography
               variant="h1"
               sx={{
                 fontSize: { xs: "2.5rem", md: "4rem" },
                 fontWeight: 700,
                 color: currentTheme.primaryText,
                 lineHeight: 1.1,
                 letterSpacing: "-2px"
               }}
             >
               <Box component="span" sx={{ color: currentTheme.accent }}>
                 Hearing Things
               </Box>
             </Typography>
           </Box>
           <Typography
             variant="h5"
             sx={{
               fontSize: { xs: "1.1rem", md: "1.3rem" },
               color: currentTheme.secondaryText,
               maxWidth: "600px",
               mx: "auto",
               mb: 4,
               lineHeight: 1.6,
               fontWeight: 400
             }}
           >
            Revolutionary memecoin that transforms auditory experiences into digital assets. 
            Join thousands of holders in the next generation of cryptocurrency.
          </Typography>
          
          {/* Contract Address */}
          <Paper
            elevation={0}
            onClick={() => {
              const ca = "0x1234567890AbCdEf1234567890AbCdEf12345678";
              navigator.clipboard.writeText(ca);
              // You can add a toast notification here if desired
            }}
            sx={{
              p: 2,
              backgroundColor: currentTheme.twitterHover,
              border: `1px solid ${currentTheme.border}`,
              borderRadius: 2,
              cursor: "pointer",
              maxWidth: "500px",
              mx: "auto",
              mb: 4,
              "&:hover": {
                backgroundColor: currentTheme.paper,
                borderColor: currentTheme.accent
              }
            }}
          >
            <Typography variant="body2" sx={{ color: currentTheme.secondaryText, mb: 0.5, fontSize: "0.85rem" }}>
              Contract Address
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: currentTheme.primaryText, 
                fontFamily: "monospace",
                fontSize: "0.95rem",
                wordBreak: "break-all"
              }}
            >
              0x1234567890AbCdEf1234567890AbCdEf12345678
            </Typography>
          </Paper>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 6 }}
          >
                         <Button
               variant="contained"
               size="large"
               sx={{
                 backgroundColor: currentTheme.accent,
                 borderRadius: "12px",
                 textTransform: "none",
                 px: 4,
                 py: 1.5,
                 fontSize: "1.1rem",
                 fontWeight: 600,
                 "&:hover": {
                   backgroundColor: currentTheme.accentHover
                 }
               }}
             >
               Buy Now
             </Button>
             {/* <Button
               variant="outlined"
               size="large"
               startIcon={<PlayArrow />}
               sx={{
                 borderRadius: "12px",
                 textTransform: "none",
                 px: 4,
                 py: 1.5,
                 fontSize: "1.1rem",
                 fontWeight: 600,
                 borderColor: currentTheme.border,
                 color: currentTheme.secondaryText,
                 "&:hover": {
                   borderColor: currentTheme.accent,
                   color: currentTheme.accent
                 }
               }}
             >
              Watch Video
            </Button> */}
          </Stack>
        </Box>

                 {/* News Ticker */}
:
                 {/* Twitter-Style Posts */}
         <Box sx={{ mb: 8 }}>
           <Typography variant="h3" sx={{ mb: 1, fontWeight: 700, color: currentTheme.primaryText }}>
             Latest Stories
           </Typography>
           <Typography variant="body1" sx={{ mb: 4, color: currentTheme.secondaryText }}>
             Stay updated with the latest developments and community highlights
           </Typography>
           <Box sx={{ maxWidth: "600px", mx: "auto" }}>
             {features.map((feature, index) => (
                               <Paper 
                  key={index} 
                  elevation={0} 
                  onClick={() => handlePostClick(feature, index)}
                  sx={{ 
                    border: `1px solid ${currentTheme.twitterBorder}`, 
                    borderRadius: 2, 
                    mb: 2, 
                    p: 3,
                    backgroundColor: currentTheme.paper,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: currentTheme.twitterHover
                    }
                  }}
                >
                 {/* Header with profile info */}
                 <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                   <Avatar 
                     src={logo}
                     sx={{ 
                       width: 48, 
                       height: 48, 
                       mr: 2, 
                       backgroundColor: currentTheme.accent 
                     }}
                   >
                     HT
                   </Avatar>
                   <Box sx={{ flex: 1 }}>
                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                       <Typography variant="body1" sx={{ fontWeight: 600, color: currentTheme.twitterText }}>
                         Hearing Things
                       </Typography>
                       <Box sx={{ 
                         width: 20, 
                         height: 20, 
                         backgroundColor: currentTheme.accent, 
                         borderRadius: "50%", 
                         display: "flex", 
                         alignItems: "center", 
                         justifyContent: "center" 
                       }}>
                         <Typography variant="caption" sx={{ color: "white", fontSize: "10px", fontWeight: "bold" }}>
                           ✓
                         </Typography>
                       </Box>
                       <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                         @hearingthings
                       </Typography>
                       <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                         ·
                       </Typography>
                       <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                         {index === 0 ? "2h" : index === 1 ? "4h" : "6h"}
                       </Typography>
                     </Box>
                     <Chip
                       label={feature.category}
                       size="small"
                       sx={{ 
                         mt: 0.5,
                         height: "20px",
                         backgroundColor: isDarkMode ? "#4a3520" : "#fff8dc", 
                         color: currentTheme.accent,
                         fontSize: "0.7rem",
                         fontWeight: 600
                       }}
                     />
                   </Box>
                 </Box>

                 {/* Tweet content */}
                 <Box sx={{ mb: 2 }}>
                   <Typography 
                     variant="body1" 
                     sx={{ 
                       color: currentTheme.twitterText, 
                       lineHeight: 1.5, 
                       fontSize: "15px",
                       mb: 2
                     }}
                   >
                     {feature.title}
                   </Typography>
                   <Typography 
                     variant="body2" 
                     sx={{ 
                       color: currentTheme.twitterSecondary, 
                       lineHeight: 1.4,
                       fontSize: "14px"
                     }}
                   >
                     {feature.description}
                   </Typography>
                 </Box>

                 {/* Image */}
                 <Box sx={{ 
                   borderRadius: 2, 
                   overflow: "hidden", 
                   border: `1px solid ${currentTheme.twitterBorder}`,
                   mb: 2
                 }}>
                   <CardMedia
                     component="img"
                     height="250"
                     image={feature.image}
                     alt={feature.title}
                     sx={{ objectFit: "cover" }}
                   />
                 </Box>

                 {/* Engagement buttons */}
                 <Box sx={{ 
                   display: "flex", 
                   justifyContent: "space-between", 
                   maxWidth: "425px",
                   color: currentTheme.twitterSecondary
                 }}>
                   <Box sx={{ 
                     display: "flex", 
                     alignItems: "center", 
                     gap: 1,
                     cursor: "pointer",
                     "&:hover": { color: currentTheme.accent }
                   }}>
                     <Box sx={{ 
                       width: 18, 
                       height: 18, 
                       borderRadius: "50%", 
                       border: "2px solid currentColor",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center"
                     }}>
                       <Typography variant="caption" sx={{ fontSize: "10px", lineHeight: 1 }}>
                         ↵
                       </Typography>
                     </Box>
                     <Typography variant="caption" sx={{ fontSize: "13px" }}>
                       {Math.floor(Math.random() * 50) + 10}
                     </Typography>
                   </Box>

                   <Box sx={{ 
                     display: "flex", 
                     alignItems: "center", 
                     gap: 1,
                     cursor: "pointer",
                     "&:hover": { color: "#f91880" }
                   }}>
                     <Typography variant="body2" sx={{ fontSize: "16px" }}>
                       ♡
                     </Typography>
                     <Typography variant="caption" sx={{ fontSize: "13px" }}>
                       {Math.floor(Math.random() * 200) + 50}
                     </Typography>
                   </Box>

                   <Box sx={{ 
                     display: "flex", 
                     alignItems: "center", 
                     gap: 1,
                     cursor: "pointer",
                     "&:hover": { color: currentTheme.accent }
                   }}>
                     <Typography variant="body2" sx={{ fontSize: "16px" }}>
                       ↗
                     </Typography>
                     <Typography variant="caption" sx={{ fontSize: "13px" }}>
                       {Math.floor(Math.random() * 30) + 5}
                     </Typography>
                   </Box>

                   <Box sx={{ 
                     cursor: "pointer",
                     "&:hover": { color: currentTheme.accent }
                   }}>
                     <Typography variant="body2" sx={{ fontSize: "16px" }}>
                       ⋯
                     </Typography>
                   </Box>
                 </Box>
               </Paper>
             ))}
           </Box>
         </Box>

                 {/* Video Section */}
         <Box sx={{ mb: 8 }}>
           <Typography variant="h3" sx={{ mb: 1, fontWeight: 700, color: currentTheme.primaryText }}>
             Video Content
           </Typography>
           <Typography variant="body1" sx={{ mb: 4, color: currentTheme.secondaryText }}>
             Exclusive videos and behind-the-scenes content
           </Typography>
          <Grid container spacing={3}>
            {videoContent.map((video, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                                 <Card elevation={0} sx={{ borderRadius: 3, border: `1px solid ${currentTheme.border}`, backgroundColor: currentTheme.paper }}>
                   <Box sx={{ position: "relative" }}>
                     <video
                       style={{
                         width: "100%",
                         height: "180px",
                         objectFit: "cover",
                         borderRadius: "12px 12px 0 0"
                       }}
                       poster=""
                       controls
                     >
                       <source src={video.video} />
                     </video>
                     <Box
                       sx={{
                         position: "absolute",
                         top: 8,
                         right: 8,
                         backgroundColor: "rgba(0,0,0,0.8)",
                         color: "white",
                         px: 1,
                         py: 0.5,
                         borderRadius: 1,
                         fontSize: "0.75rem"
                       }}
                     >
                       {video.duration}
                     </Box>
                   </Box>
                   <CardContent sx={{ p: 2 }}>
                     <Typography variant="body1" sx={{ fontWeight: 600, color: currentTheme.primaryText }}>
                       {video.title}
                     </Typography>
                   </CardContent>
                 </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

                 {/* CTA Section */}
         <Paper
           elevation={0}
           sx={{
             p: 6,
             textAlign: "center",
             backgroundColor: currentTheme.accent,
             borderRadius: 3,
             color: "white",
             mb: 8
           }}
         >
           <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
             Ready to Join the Revolution?
           </Typography>
           <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: "500px", mx: "auto" }}>
             Don't miss out on the opportunity to be part of the most innovative audio-finance project in crypto.
           </Typography>
           <Button
             variant="contained"
             size="large"
             sx={{
               backgroundColor: currentTheme.secondary,
               color: currentTheme.accent,
               borderRadius: "12px",
               textTransform: "none",
               px: 4,
               py: 1.5,
               fontSize: "1.1rem",
               fontWeight: 600,
               "&:hover": {
                 backgroundColor: currentTheme.twitterHover
               }
             }}
           >
             Get Started Now
           </Button>
         </Paper>

                 {/* Quick Stats */}
         {/* <Grid container spacing={4} sx={{ mb: 8 }}>
           <Grid item xs={12} sm={4}>
             <Box sx={{ textAlign: "center" }}>
               <TrendingUp sx={{ fontSize: 48, color: currentTheme.accent, mb: 2 }} />
               <Typography variant="h4" sx={{ fontWeight: 700, color: currentTheme.primaryText, mb: 1 }}>
                 500%+
               </Typography>
               <Typography variant="body1" sx={{ color: currentTheme.secondaryText }}>
                 Volume Growth
               </Typography>
             </Box>
           </Grid>
           <Grid item xs={12} sm={4}>
             <Box sx={{ textAlign: "center" }}>
               <People sx={{ fontSize: 48, color: currentTheme.accent, mb: 2 }} />
               <Typography variant="h4" sx={{ fontWeight: 700, color: currentTheme.primaryText, mb: 1 }}>
                 12K+
               </Typography>
               <Typography variant="body1" sx={{ color: currentTheme.secondaryText }}>
                 Community Members
               </Typography>
             </Box>
           </Grid>
           <Grid item xs={12} sm={4}>
             <Box sx={{ textAlign: "center" }}>
               <Analytics sx={{ fontSize: 48, color: currentTheme.accent, mb: 2 }} />
               <Typography variant="h4" sx={{ fontWeight: 700, color: currentTheme.primaryText, mb: 1 }}>
                 $15M+
               </Typography>
               <Typography variant="body1" sx={{ color: currentTheme.secondaryText }}>
                 Market Cap
               </Typography>
             </Box>
           </Grid>
         </Grid> */}
      </Container>

             {/* Footer */}
       <Box sx={{ backgroundColor: isDarkMode ? "#1f150a" : "#1a1a1a", color: "white", py: 6 }}>
         <Container maxWidth="lg">
           <Grid container spacing={4}>
             <Grid item xs={12} md={6}>
               <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                 <Avatar src={logo} sx={{ width: 32, height: 32, mr: 2 }} />
                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
                   Hearing Things
                 </Typography>
               </Box>
               <Typography variant="body2" sx={{ color: "#999", maxWidth: "400px", lineHeight: 1.6 }}>
                 The future of audio finance. Revolutionary memecoin transforming auditory experiences 
                 into digital assets with a vibrant community of thousands.
               </Typography>
             </Grid>
             <Grid item xs={12} md={6}>
               <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
                 <Typography variant="body2" sx={{ color: "#999", mb: 2 }}>
                   © 2025 Hearing Things. All rights reserved.
                 </Typography>
                 <Typography variant="caption" sx={{ color: "#999" }}>
                   For entertainment purposes only. DYOR. Past performance does not guarantee future results.
                 </Typography>
               </Box>
             </Grid>
           </Grid>
         </Container>
       </Box>

             {/* Animation CSS */}
       <style>
         {`
           @keyframes scroll {
             0% { transform: translateX(100%); }
             100% { transform: translateX(-100%); }
           }
         `}
       </style>

       {/* Expanded Post Modal */}
       <Modal
         open={isModalOpen}
         onClose={handleCloseModal}
         sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           p: 2
         }}
       >
         <Box
           sx={{
             backgroundColor: currentTheme.paper,
             borderRadius: 3,
             maxWidth: "600px",
             width: "100%",
             maxHeight: "90vh",
             overflow: "auto",
             position: "relative",
             "&:focus": {
               outline: "none"
             }
           }}
         >
           {selectedPost && (
             <>
               {/* Modal Header */}
               <Box sx={{ 
                 display: "flex", 
                 alignItems: "center", 
                 justifyContent: "space-between",
                 p: 2,
                 borderBottom: `1px solid ${currentTheme.twitterBorder}`
               }}>
                 <Typography variant="h6" sx={{ fontWeight: 600, color: currentTheme.twitterText }}>
                   Post
                 </Typography>
                 <IconButton onClick={handleCloseModal} size="small" sx={{ color: currentTheme.twitterSecondary }}>
                   <Close />
                 </IconButton>
               </Box>

               {/* Main Post Content */}
               <Box sx={{ p: 3 }}>
                 {/* Post Header */}
                 <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                   <Avatar 
                     src={logo}
                     sx={{ 
                       width: 48, 
                       height: 48, 
                       mr: 2, 
                       backgroundColor: currentTheme.accent 
                     }}
                   >
                     HT
                   </Avatar>
                   <Box sx={{ flex: 1 }}>
                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                       <Typography variant="body1" sx={{ fontWeight: 600, color: currentTheme.twitterText }}>
                         Hearing Things
                       </Typography>
                       <Box sx={{ 
                         width: 20, 
                         height: 20, 
                         backgroundColor: currentTheme.accent, 
                         borderRadius: "50%", 
                         display: "flex", 
                         alignItems: "center", 
                         justifyContent: "center" 
                       }}>
                         <Typography variant="caption" sx={{ color: "white", fontSize: "10px", fontWeight: "bold" }}>
                           ✓
                         </Typography>
                       </Box>
                       <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                         @hearingthings
                       </Typography>
                       <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                         ·
                       </Typography>
                       <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                         {selectedPost.postIndex === 0 ? "2h" : selectedPost.postIndex === 1 ? "4h" : "6h"}
                       </Typography>
                     </Box>
                     <Chip
                       label={selectedPost.category}
                       size="small"
                       sx={{ 
                         mt: 0.5,
                         height: "20px",
                         backgroundColor: isDarkMode ? "#4a3520" : "#fff8dc", 
                         color: currentTheme.accent,
                         fontSize: "0.7rem",
                         fontWeight: 600
                       }}
                     />
                   </Box>
                   <IconButton size="small" sx={{ color: currentTheme.twitterSecondary }}>
                     <MoreVert />
                   </IconButton>
                 </Box>

                 {/* Post Content */}
                 <Box sx={{ mb: 3 }}>
                   <Typography 
                     variant="h6" 
                     sx={{ 
                       color: currentTheme.twitterText, 
                       lineHeight: 1.4, 
                       mb: 2,
                       fontSize: "18px",
                       fontWeight: 600
                     }}
                   >
                     {selectedPost.title}
                   </Typography>
                   <Typography 
                     variant="body1" 
                     sx={{ 
                       color: currentTheme.twitterText, 
                       lineHeight: 1.5,
                       fontSize: "16px",
                       mb: 3
                     }}
                   >
                     {selectedPost.description}
                   </Typography>
                 </Box>

                 {/* Expanded Image */}
                 <Box sx={{ 
                   borderRadius: 2, 
                   overflow: "hidden", 
                   border: `1px solid ${currentTheme.twitterBorder}`,
                   mb: 3
                 }}>
                   <CardMedia
                     component="img"
                     image={selectedPost.image}
                     alt={selectedPost.title}
                     sx={{ 
                       width: "100%",
                       maxHeight: "400px",
                       objectFit: "cover"
                     }}
                   />
                 </Box>

                 {/* Engagement Stats */}
                 <Box sx={{ 
                   display: "flex", 
                   gap: 3,
                   mb: 2,
                   color: currentTheme.twitterSecondary,
                   fontSize: "14px"
                 }}>
                   <Typography variant="body2">
                     <strong>{Math.floor(Math.random() * 50) + 20}</strong> replies
                   </Typography>
                   <Typography variant="body2">
                     <strong>{Math.floor(Math.random() * 200) + 100}</strong> likes
                   </Typography>
                   <Typography variant="body2">
                     <strong>{Math.floor(Math.random() * 30) + 10}</strong> shares
                   </Typography>
                 </Box>

                 {/* Action Buttons */}
                 <Box sx={{ 
                   display: "flex", 
                   justifyContent: "space-around", 
                   py: 1,
                   borderTop: `1px solid ${currentTheme.twitterBorder}`,
                   borderBottom: `1px solid ${currentTheme.twitterBorder}`,
                   mb: 3
                 }}>
                   <Button
                     startIcon={<Typography>↵</Typography>}
                     sx={{ 
                       color: currentTheme.twitterSecondary, 
                       textTransform: "none",
                       "&:hover": { backgroundColor: isDarkMode ? "#4a3520" : "#fff8dc", color: currentTheme.accent }
                     }}
                   >
                     Reply
                   </Button>
                   <Button
                     startIcon={<Typography>♡</Typography>}
                     sx={{ 
                       color: currentTheme.twitterSecondary, 
                       textTransform: "none",
                       "&:hover": { backgroundColor: isDarkMode ? "#4a1a2e" : "#fce8e6", color: "#f91880" }
                     }}
                   >
                     Like
                   </Button>
                   <Button
                     startIcon={<Typography>↗</Typography>}
                     sx={{ 
                       color: currentTheme.twitterSecondary, 
                       textTransform: "none",
                       "&:hover": { backgroundColor: isDarkMode ? "#4a3520" : "#fff8dc", color: currentTheme.accent }
                     }}
                   >
                     Share
                   </Button>
                 </Box>

                 {/* Comments Section */}
                 <Box>
                   <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: currentTheme.twitterText }}>
                     Comments
                   </Typography>
                   
                   {/* Comment Input */}
                   <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                     <Avatar sx={{ width: 40, height: 40, backgroundColor: currentTheme.twitterSecondary }}>
                       You
                     </Avatar>
                     <TextField
                       fullWidth
                       placeholder="Tweet your reply"
                       variant="outlined"
                       size="small"
                       sx={{
                         "& .MuiOutlinedInput-root": {
                           borderRadius: "20px",
                           backgroundColor: currentTheme.twitterHover,
                           color: currentTheme.twitterText,
                           "& fieldset": {
                             borderColor: currentTheme.twitterBorder
                           },
                           "&:hover fieldset": {
                             borderColor: currentTheme.accent
                           },
                           "&.Mui-focused fieldset": {
                             borderColor: currentTheme.accent
                           }
                         },
                         "& .MuiInputBase-input::placeholder": {
                           color: currentTheme.twitterSecondary,
                           opacity: 1
                         }
                       }}
                     />
                   </Box>

                   {/* Comments List */}
                   {selectedPost.comments.map((comment) => (
                     <Box key={comment.id} sx={{ mb: 3 }}>
                       <Box sx={{ display: "flex", gap: 2 }}>
                         <Avatar sx={{ 
                           width: 40, 
                           height: 40, 
                           backgroundColor: currentTheme.accent,
                           fontSize: "12px"
                         }}>
                           {comment.avatar}
                         </Avatar>
                         <Box sx={{ flex: 1 }}>
                           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                             <Typography variant="body2" sx={{ fontWeight: 600, color: currentTheme.twitterText }}>
                               {comment.author}
                             </Typography>
                             <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                               {comment.handle}
                             </Typography>
                             <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                               ·
                             </Typography>
                             <Typography variant="body2" sx={{ color: currentTheme.twitterSecondary }}>
                               {comment.time}
                             </Typography>
                           </Box>
                           <Typography variant="body2" sx={{ 
                             color: currentTheme.twitterText, 
                             lineHeight: 1.4,
                             mb: 1
                           }}>
                             {comment.content}
                           </Typography>
                           <Box sx={{ display: "flex", gap: 4, color: currentTheme.twitterSecondary }}>
                             <Box sx={{ 
                               display: "flex", 
                               alignItems: "center", 
                               gap: 0.5,
                               cursor: "pointer",
                               "&:hover": { color: currentTheme.accent }
                             }}>
                               <Typography variant="caption">↵</Typography>
                               <Typography variant="caption">{comment.replies}</Typography>
                             </Box>
                             <Box sx={{ 
                               display: "flex", 
                               alignItems: "center", 
                               gap: 0.5,
                               cursor: "pointer",
                               "&:hover": { color: "#f91880" }
                             }}>
                               <Typography variant="caption">♡</Typography>
                               <Typography variant="caption">{comment.likes}</Typography>
                             </Box>
                           </Box>
                         </Box>
                       </Box>
                     </Box>
                   ))}
                 </Box>
               </Box>
             </>
           )}
         </Box>
       </Modal>
     </Box>
   );
 };

 export default HomePage;

