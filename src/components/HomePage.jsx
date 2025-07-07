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

  // Breaking news sidebar
  const breakingNews = [
    "Hearing Things Coin hits all-time high",
    "New partnership announced with major exchange", 
    "Community votes on next development phase",
    "Meme competition winner announced",
    "Developer AMA scheduled for next week"
  ];

  // Quick news items
  const quickNews = [
    {
      headline: "Whale Spotted",
      content: "Large holder accumulates 2M tokens in single transaction"
    },
    {
      headline: "Social Buzz",
      content: "Twitter mentions up 300% this week"
    },
    {
      headline: "Exchange Listing",
      content: "Negotiations underway with three major platforms"
    },
    {
      headline: "Price Alert",
      content: "Resistance level broken, next target $0.001"
    }
  ];

  // Feature stories with media
  const featureStories = [
    {
      headline: "EXCLUSIVE: Behind the Scenes of Crypto's Wildest Project",
      media: { type: "video", src: video5 },
      content: "An exclusive look at the creation process reveals the passion and creativity driving this revolutionary memecoin project. Meet the anonymous team who turned auditory confusion into crypto gold."
    },
    {
      headline: "Meme Culture Meets Financial Innovation", 
      media: { type: "image", src: imageWebp },
      content: "How internet culture and cryptocurrency are creating new opportunities for digital asset enthusiasts worldwide. The intersection of humor and finance has never been more profitable."
    },
    {
      headline: "WATCH: Community Goes Wild Over Latest Announcement",
      media: { type: "video", src: video2 },
      content: "Exclusive footage shows the raw emotion and excitement as community members react to major project updates. The genuine enthusiasm is infectious and speaks volumes about project loyalty."
    },
    {
      headline: "Trading Masterclass: How to Navigate the Chaos",
      media: { type: "video", src: video4 },
      content: "Professional traders share their strategies for maximizing gains in the volatile memecoin market. Learn the techniques that separate successful traders from the crowd."
    },
    {
      headline: "The Phenomenon Explained: Viral Marketing at its Finest",
      media: { type: "video", src: video3 },
      content: "Marketing experts analyze how Hearing Things Coin achieved viral status through organic community growth and genuine grassroots enthusiasm."
    },
    {
      headline: "Official Launch Trailer Breaks Internet",
      media: { type: "video", src: video1 },
      content: "The project's launch video has garnered millions of views across platforms, introducing mainstream audiences to the world of auditory-themed cryptocurrency."
    },
    {
      headline: "Community Artwork Showcases Creative Passion",
      media: { type: "image", src: image },
      content: "Talented community artists create stunning visual representations of the Hearing Things concept, showing the creative energy that drives the project forward."
    }
  ];

  // Market data
  const marketData = [
    { label: "Price", value: "$0.000742", change: "+23.5%" },
    { label: "24h Volume", value: "$2.3M", change: "+156%" },
    { label: "Market Cap", value: "$15.2M", change: "+18.7%" },
    { label: "Holders", value: "12,847", change: "+234" },
    { label: "Transactions", value: "45,892", change: "+1,203" }
  ];

  // Weather section (crypto weather)
  const cryptoWeather = {
    condition: "Bullish with scattered gains",
    temperature: "🔥 Hot",
    forecast: "Expect continued volatility with chance of moonshots"
  };

  // Sports section (crypto sports)
  const cryptoSports = [
    {
      headline: "Memecoin League Champions",
      score: "HTC vs DOGE: 15-8"
    },
    {
      headline: "Trading Tournament Finals",
      score: "Top trader nets 400% gains"
    }
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh", fontFamily: "serif" }}>
             {/* Newspaper Header/Masthead */}
       <Box sx={{ backgroundColor: "white", borderBottom: "3px solid black", py: { xs: 1, md: 2 } }}>
         <Container maxWidth="lg">
           {/* Top line with date and info */}
           <Box sx={{ 
             display: "flex", 
             justifyContent: "space-between", 
             alignItems: "center", 
             mb: { xs: 1, md: 2 },
             flexWrap: "wrap",
             gap: 1
           }}>
             <Typography variant="caption" sx={{ 
               fontFamily: "serif", 
               fontSize: { xs: "0.7rem", md: "0.8rem" }
             }}>
               {currentDate}
             </Typography>
             <Box sx={{ 
               display: { xs: "none", sm: "flex" }, 
               gap: { xs: 1, md: 2 },
               flexWrap: "wrap"
             }}>
               {sections.map((section, index) => (
                 <Typography 
                   key={index}
                   variant="caption" 
                   sx={{ 
                     fontFamily: "serif", 
                     fontSize: { xs: "0.7rem", md: "0.8rem" },
                     borderRight: index < sections.length - 1 ? "1px solid #ccc" : "none",
                     pr: index < sections.length - 1 ? { xs: 1, md: 2 } : 0
                   }}
                 >
                   {section}
                 </Typography>
               ))}
             </Box>
             <Typography variant="caption" sx={{ 
               fontFamily: "serif", 
               fontSize: { xs: "0.7rem", md: "0.8rem" }
             }}>
               Vol. 1, No. 1 • $0.50
             </Typography>
           </Box>

           {/* Main Masthead */}
           <Box sx={{ textAlign: "center", mb: { xs: 1, md: 2 } }}>
             <Box sx={{ 
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center", 
               gap: { xs: 1, md: 2 }, 
               mb: 1,
               flexDirection: { xs: "column", sm: "row" }
             }}>
               <img 
                 src={logo} 
                 alt="Hearing Things Logo" 
                 style={{ 
                   height: "40px", 
                   width: "40px", 
                   objectFit: "contain"
                 }} 
               />
               <Typography
                 variant="h1"
                 sx={{
                   fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
                   fontWeight: "bold",
                   fontFamily: "serif",
                   color: "black",
                   textTransform: "uppercase",
                   letterSpacing: { xs: "1px", md: "3px" },
                   lineHeight: 1,
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
                 py: 0.5,
                 fontSize: { xs: "0.8rem", md: "1rem" }
               }}
             >
               "All the Noise That's Fit to Print" • EST. 2024
             </Typography>
           </Box>
         </Container>
       </Box>

             {/* Breaking News Ticker */}
       <Box sx={{ backgroundColor: "#ff0000", color: "white", py: 1 }}>
         <Container maxWidth="lg">
           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
             <Typography variant="body2" sx={{ 
               fontWeight: "bold", 
               fontFamily: "sans-serif",
               fontSize: { xs: "0.8rem", md: "0.9rem" },
               whiteSpace: "nowrap"
             }}>
               BREAKING:
             </Typography>
             <Box sx={{ overflow: "hidden", flex: 1 }}>
               <Typography variant="body2" sx={{ 
                 fontFamily: "sans-serif",
                 fontSize: { xs: "0.8rem", md: "0.9rem" },
                 animation: "scroll 30s linear infinite",
                 whiteSpace: "nowrap"
               }}>
                 {breakingNews.join(" • ")}
               </Typography>
             </Box>
           </Box>
         </Container>
       </Box>

       {/* Main Newspaper Content */}
       <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
         <Paper elevation={0} sx={{ 
           backgroundColor: "white", 
           p: { xs: 2, sm: 3, md: 4 }, 
           border: "1px solid #ddd" 
         }}>
           
           {/* Lead Story */}
           <Box sx={{ mb: { xs: 2, md: 3 }, pb: { xs: 2, md: 3 }, borderBottom: "2px solid black" }}>
             <Typography
               variant="h2"
               sx={{
                 fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2.2rem", lg: "2.5rem" },
                 fontWeight: "bold",
                 fontFamily: "serif",
                 color: "black",
                 lineHeight: { xs: 1.2, md: 1.1 },
                 mb: 1,
                 textAlign: "center",
                 textTransform: "uppercase",
                 px: { xs: 1, md: 0 }
               }}
             >
               {mainStory.headline}
             </Typography>
             
             <Typography
               variant="h5"
               sx={{
                 fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                 fontFamily: "serif",
                 color: "black",
                 mb: 2,
                 textAlign: "center",
                 fontStyle: "italic",
                 px: { xs: 1, md: 0 }
               }}
             >
               {mainStory.subheadline}
             </Typography>

             <Typography
               variant="caption"
               sx={{
                 display: "block",
                 textAlign: "center",
                 mb: { xs: 2, md: 3 },
                 color: "gray",
                 fontSize: { xs: "0.8rem", md: "0.9rem" },
                 fontFamily: "serif",
                 borderBottom: "1px solid #eee",
                 pb: 1,
               }}
             >
               {mainStory.byline} • Special Investigation
             </Typography>

             <Grid container spacing={{ xs: 2, md: 3 }}>
               <Grid item xs={12} md={6}>
                 <Typography
                   variant="body1"
                   sx={{
                     fontSize: { xs: "0.9rem", md: "1rem" },
                     lineHeight: { xs: 1.6, md: 1.7 },
                     fontFamily: "serif",
                     color: "black",
                     textAlign: "justify",
                     textIndent: { xs: "1em", md: "2em" },
                   }}
                 >
                   {mainStory.content}
                 </Typography>
               </Grid>
               
               <Grid item xs={12} md={3}>
                 {/* Market Data Box */}
                 <Box sx={{ 
                   border: "2px solid black", 
                   p: { xs: 1, md: 1.5 }, 
                   backgroundColor: "#f0f0f0",
                   mb: 2
                 }}>
                   <Typography variant="h6" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold", 
                     mb: 1,
                     fontSize: { xs: "0.9rem", md: "1rem" },
                     textAlign: "center"
                   }}>
                     LIVE MARKET DATA
                   </Typography>
                   {marketData.map((item, index) => (
                     <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                       <Typography variant="caption" sx={{ fontFamily: "serif", fontSize: "0.7rem" }}>
                         {item.label}:
                       </Typography>
                       <Box>
                         <Typography variant="caption" sx={{ fontFamily: "monospace", fontSize: "0.7rem", fontWeight: "bold" }}>
                           {item.value}
                         </Typography>
                         <Typography variant="caption" sx={{ 
                           ml: 0.5, 
                           color: item.change.startsWith('+') ? 'green' : 'red',
                           fontSize: "0.6rem"
                         }}>
                           {item.change}
                         </Typography>
                       </Box>
                     </Box>
                   ))}
                 </Box>
                 
                 {/* Crypto Weather */}
                 <Box sx={{ 
                   border: "1px solid #ccc", 
                   p: { xs: 1, md: 1.5 }, 
                   backgroundColor: "#e3f2fd",
                   mb: 2
                 }}>
                   <Typography variant="h6" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold", 
                     fontSize: { xs: "0.8rem", md: "0.9rem" },
                     textAlign: "center",
                     mb: 1
                   }}>
                     CRYPTO WEATHER
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif", 
                     fontSize: "0.7rem",
                     display: "block",
                     textAlign: "center"
                   }}>
                     {cryptoWeather.temperature}
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif", 
                     fontSize: "0.65rem",
                     display: "block",
                     textAlign: "center"
                   }}>
                     {cryptoWeather.condition}
                   </Typography>
                 </Box>
               </Grid>
               
               <Grid item xs={12} md={3}>
                 {/* Quick News */}
                 <Box sx={{ 
                   border: "1px solid black", 
                   backgroundColor: "#fffbf0"
                 }}>
                   <Typography variant="h6" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold", 
                     fontSize: { xs: "0.8rem", md: "0.9rem" },
                     textAlign: "center",
                     backgroundColor: "black",
                     color: "white",
                     py: 0.5
                   }}>
                     QUICK HITS
                   </Typography>
                   {quickNews.map((item, index) => (
                     <Box key={index} sx={{ p: 1, borderBottom: index < quickNews.length - 1 ? "1px solid #ddd" : "none" }}>
                       <Typography variant="body2" sx={{ 
                         fontFamily: "serif", 
                         fontWeight: "bold",
                         fontSize: "0.75rem",
                         mb: 0.5
                       }}>
                         {item.headline}
                       </Typography>
                       <Typography variant="caption" sx={{ 
                         fontFamily: "serif",
                         fontSize: "0.65rem",
                         lineHeight: 1.3
                       }}>
                         {item.content}
                       </Typography>
                     </Box>
                   ))}
                 </Box>
               </Grid>
             </Grid>
           </Box>

                     {/* Secondary Stories Row */}
           <Grid container spacing={{ xs: 1, md: 2 }} sx={{ mb: { xs: 2, md: 3 } }}>
             {secondaryStories.map((story, index) => (
               <Grid item xs={12} md={4} key={index}>
                 <Box sx={{ 
                   border: "1px solid #ddd",
                   p: { xs: 1, md: 1.5 },
                   backgroundColor: "#fafafa",
                   height: "100%"
                 }}>
                   <Typography
                     variant="h6"
                     sx={{
                       fontSize: { xs: "0.9rem", md: "1rem" },
                       fontWeight: "bold",
                       fontFamily: "serif",
                       color: "black",
                       mb: 0.5,
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
                       fontSize: { xs: "0.7rem", md: "0.75rem" },
                     }}
                   >
                     By {story.byline}
                   </Typography>
                   
                   <Typography
                     variant="body2"
                     sx={{
                       fontFamily: "serif",
                       lineHeight: 1.5,
                       color: "black",
                       textAlign: "justify",
                       fontSize: { xs: "0.8rem", md: "0.85rem" },
                     }}
                   >
                     {story.content}
                   </Typography>
                 </Box>
               </Grid>
             ))}
           </Grid>

           {/* Advertisement Section */}
           <Box sx={{ 
             border: "3px solid black", 
             backgroundColor: "#ffeb3b", 
             p: 2, 
             textAlign: "center", 
             mb: { xs: 2, md: 3 } 
           }}>
             <Typography variant="h5" sx={{ 
               fontFamily: "serif", 
               fontWeight: "bold", 
               fontSize: { xs: "1.2rem", md: "1.5rem" } 
             }}>
               🚀 DON'T MISS THE ROCKET! 🚀
             </Typography>
             <Typography variant="body1" sx={{ 
               fontFamily: "serif", 
               fontSize: { xs: "0.9rem", md: "1rem" },
               mt: 1
             }}>
               Get your Hearing Things Coins before they moon! Limited time offer!
             </Typography>
             <Button variant="contained" sx={{ 
               mt: 1, 
               backgroundColor: "red", 
               fontWeight: "bold",
               fontSize: { xs: "0.8rem", md: "0.9rem" }
             }}>
               BUY NOW!
             </Button>
           </Box>

           {/* Sports Section */}
           <Grid container spacing={{ xs: 1, md: 2 }} sx={{ mb: { xs: 2, md: 3 } }}>
             <Grid item xs={12} md={6}>
               <Box sx={{ border: "2px solid black", p: { xs: 1, md: 1.5 } }}>
                 <Typography variant="h6" sx={{ 
                   fontFamily: "serif", 
                   fontWeight: "bold", 
                   textAlign: "center",
                   backgroundColor: "black",
                   color: "white",
                   py: 0.5,
                   mb: 1,
                   fontSize: { xs: "0.9rem", md: "1rem" }
                 }}>
                   CRYPTO SPORTS
                 </Typography>
                 {cryptoSports.map((sport, index) => (
                   <Box key={index} sx={{ mb: 1 }}>
                     <Typography variant="body2" sx={{ 
                       fontFamily: "serif", 
                       fontWeight: "bold",
                       fontSize: { xs: "0.8rem", md: "0.9rem" }
                     }}>
                       {sport.headline}
                     </Typography>
                     <Typography variant="caption" sx={{ 
                       fontFamily: "serif",
                       fontSize: { xs: "0.7rem", md: "0.8rem" }
                     }}>
                       {sport.score}
                     </Typography>
                   </Box>
                 ))}
               </Box>
             </Grid>
             
             <Grid item xs={12} md={6}>
               <Box sx={{ border: "1px solid #ccc", p: { xs: 1, md: 1.5 }, backgroundColor: "#e8f5e8" }}>
                 <Typography variant="h6" sx={{ 
                   fontFamily: "serif", 
                   fontWeight: "bold", 
                   textAlign: "center",
                   mb: 1,
                   fontSize: { xs: "0.9rem", md: "1rem" }
                 }}>
                   TODAY'S FORECAST
                 </Typography>
                 <Typography variant="body2" sx={{ 
                   fontFamily: "serif",
                   fontSize: { xs: "0.8rem", md: "0.9rem" },
                   textAlign: "center"
                 }}>
                   {cryptoWeather.forecast}
                 </Typography>
                 <Box sx={{ textAlign: "center", mt: 1 }}>
                   <Chip 
                     label="BULLISH OUTLOOK" 
                     size="small" 
                     sx={{ backgroundColor: "green", color: "white", fontSize: "0.7rem" }}
                   />
                 </Box>
               </Box>
             </Grid>
           </Grid>

                     <Divider sx={{ my: 2, borderColor: "black" }} />

           {/* Feature Stories with All Media - Dense Layout */}
           <Grid container spacing={{ xs: 1, md: 2 }} sx={{ mb: { xs: 2, md: 3 } }}>
             {featureStories.map((story, index) => (
               <Grid item xs={12} md={6} lg={4} key={index}>
                 <Box sx={{ 
                   border: "1px solid #ccc",
                   backgroundColor: "white",
                   height: "100%",
                   display: "flex",
                   flexDirection: "column"
                 }}>
                   {/* Media */}
                   <Box sx={{ position: "relative" }}>
                     {story.media.type === "video" ? (
                       <Box>
                         <video
                           controls
                           style={{
                             width: "100%",
                             height: "150px",
                             objectFit: "cover",
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
                             px: 0.5,
                             py: 0.25,
                             fontSize: "0.6rem",
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
                           height: "150px",
                           objectFit: "cover",
                         }}
                       />
                     )}
                   </Box>
                   
                   {/* Content */}
                   <Box sx={{ p: { xs: 1, md: 1.5 }, flex: 1 }}>
                     <Typography
                       variant="h6"
                       sx={{
                         fontSize: { xs: "0.85rem", md: "0.95rem" },
                         fontWeight: "bold",
                         fontFamily: "serif",
                         color: "black",
                         mb: 0.5,
                         lineHeight: 1.2,
                       }}
                     >
                       {story.headline}
                     </Typography>
                     
                     <Typography
                       variant="body2"
                       sx={{
                         fontFamily: "serif",
                         lineHeight: 1.4,
                         color: "black",
                         textAlign: "justify",
                         fontSize: { xs: "0.75rem", md: "0.8rem" },
                       }}
                     >
                       {story.content}
                     </Typography>
                   </Box>
                 </Box>
               </Grid>
             ))}
           </Grid>

           {/* More Ads and Content */}
           <Grid container spacing={{ xs: 1, md: 2 }} sx={{ mb: { xs: 2, md: 3 } }}>
             <Grid item xs={12} md={8}>
               <Box sx={{ border: "2px solid red", p: 2, backgroundColor: "#fff3cd" }}>
                 <Typography variant="h6" sx={{ 
                   fontFamily: "serif", 
                   fontWeight: "bold", 
                   textAlign: "center",
                   mb: 1,
                   fontSize: { xs: "1rem", md: "1.2rem" }
                 }}>
                   📈 TRADER'S CORNER 📈
                 </Typography>
                 <Typography variant="body2" sx={{ 
                   fontFamily: "serif",
                   fontSize: { xs: "0.8rem", md: "0.9rem" },
                   textAlign: "center",
                   mb: 1
                 }}>
                   "I made 500% gains following the Hearing Things signals! You won't believe what happened next..."
                 </Typography>
                 <Typography variant="caption" sx={{ 
                   fontFamily: "serif",
                   fontSize: "0.7rem",
                   fontStyle: "italic",
                   display: "block",
                   textAlign: "center"
                 }}>
                   - Anonymous Trader (Results may vary)
                 </Typography>
               </Box>
             </Grid>
             
             <Grid item xs={12} md={4}>
               <Box sx={{ border: "1px solid black", backgroundColor: "#f0f0f0" }}>
                 <Typography variant="h6" sx={{ 
                   fontFamily: "serif", 
                   fontWeight: "bold", 
                   textAlign: "center",
                   backgroundColor: "black",
                   color: "white",
                   py: 0.5,
                   fontSize: { xs: "0.8rem", md: "0.9rem" }
                 }}>
                   PUZZLE CORNER
                 </Typography>
                 <Box sx={{ p: 1.5 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.8rem",
                     mb: 1
                   }}>
                     Crypto Crossword #1
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.7rem"
                   }}>
                     1 Across: What you're not doing when HTC moons (7 letters)
                   </Typography>
                   <br />
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.7rem"
                   }}>
                     Answer: HEARING
                   </Typography>
                 </Box>
               </Box>
             </Grid>
           </Grid>

           {/* Opinion Column */}
           <Box sx={{ 
             border: "1px solid #ccc", 
             backgroundColor: "#f8f8f8", 
             p: { xs: 1.5, md: 2 },
             mb: { xs: 2, md: 3 }
           }}>
             <Typography variant="h6" sx={{ 
               fontFamily: "serif", 
               fontWeight: "bold", 
               mb: 1,
               fontSize: { xs: "1rem", md: "1.1rem" }
             }}>
               OPINION: Why Hearing Things Coin Is More Than Just A Meme
             </Typography>
             <Typography variant="caption" sx={{ 
               fontFamily: "serif",
               fontSize: "0.75rem",
               color: "gray",
               mb: 1,
               display: "block"
             }}>
               By Editorial Board
             </Typography>
             <Typography variant="body2" sx={{ 
               fontFamily: "serif",
               fontSize: { xs: "0.85rem", md: "0.9rem" },
               lineHeight: 1.6,
               textAlign: "justify",
               columnCount: { xs: 1, md: 2 },
               columnGap: "2rem",
               columnRule: { md: "1px solid #ddd" }
             }}>
               In a world where digital assets often lack substance, Hearing Things Coin represents something deeper than mere speculation. It's a reflection of our shared human experience - those moments when reality and perception blur, when we question what we think we've heard. This project has tapped into something universal, creating not just a cryptocurrency but a cultural phenomenon. The community that has formed around this concept demonstrates the power of shared experience in the digital age. Whether you're a seasoned trader or someone who's never owned crypto before, the Hearing Things experience speaks to something fundamental about human nature and our relationship with technology.
             </Typography>
           </Box>

                     {/* Expanded Classified Section */}
           <Box sx={{ 
             mt: { xs: 2, md: 3 }, 
             pt: { xs: 2, md: 3 }, 
             borderTop: "3px solid black", 
             backgroundColor: "#f5f5f5", 
             p: { xs: 1.5, md: 2 } 
           }}>
             <Typography variant="h6" sx={{ 
               fontFamily: "serif", 
               fontWeight: "bold", 
               mb: 2, 
               textAlign: "center",
               fontSize: { xs: "1rem", md: "1.25rem" },
               backgroundColor: "black",
               color: "white",
               py: 1
             }}>
               CLASSIFIED ADVERTISEMENTS
             </Typography>
             
             <Grid container spacing={{ xs: 1, md: 1.5 }}>
               <Grid item xs={12} sm={6} md={3}>
                 <Box sx={{ 
                   border: "2px solid #000", 
                   p: 1, 
                   backgroundColor: "#ffeb3b",
                   textAlign: "center"
                 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold",
                     fontSize: "0.8rem"
                   }}>
                     🚀 MOONSHOT ALERT! 🚀
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.7rem",
                     display: "block"
                   }}>
                     Don't miss out! Limited time offer!
                   </Typography>
                 </Box>
               </Grid>

               <Grid item xs={12} sm={6} md={3}>
                 <Box sx={{ 
                   border: "1px solid #ccc", 
                   p: 1, 
                   backgroundColor: "white"
                 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold",
                     fontSize: "0.75rem"
                   }}>
                     TRADING SIGNALS
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.65rem"
                   }}>
                     Premium alerts for serious traders. 99% accuracy*
                   </Typography>
                 </Box>
               </Grid>

               <Grid item xs={12} sm={6} md={3}>
                 <Box sx={{ 
                   border: "1px solid #ccc", 
                   p: 1, 
                   backgroundColor: "white"
                 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold",
                     fontSize: "0.75rem"
                   }}>
                     COMMUNITY EVENTS
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.65rem"
                   }}>
                     Weekly meetups, AMA sessions, meme contests
                   </Typography>
                 </Box>
               </Grid>

               <Grid item xs={12} sm={6} md={3}>
                 <Box sx={{ 
                   border: "1px solid #ccc", 
                   p: 1, 
                   backgroundColor: "white"
                 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold",
                     fontSize: "0.75rem"
                   }}>
                     EDUCATIONAL RESOURCES
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.65rem"
                   }}>
                     Learn crypto trading from the experts
                   </Typography>
                 </Box>
               </Grid>

               <Grid item xs={12} sm={6} md={4}>
                 <Box sx={{ 
                   border: "2px solid red", 
                   p: 1, 
                   backgroundColor: "#ffcccc"
                 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold",
                     fontSize: "0.8rem"
                   }}>
                     ⚠️ WHALE ALERT ⚠️
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.7rem"
                   }}>
                     Large transactions detected! Market moving news inside.
                   </Typography>
                 </Box>
               </Grid>

               <Grid item xs={12} sm={6} md={4}>
                 <Box sx={{ 
                   border: "1px solid green", 
                   p: 1, 
                   backgroundColor: "#ccffcc"
                 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold",
                     fontSize: "0.8rem"
                   }}>
                     📈 BULL MARKET CONFIRMED
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.7rem"
                   }}>
                     Technical analysis shows strong upward momentum
                   </Typography>
                 </Box>
               </Grid>

               <Grid item xs={12} sm={12} md={4}>
                 <Box sx={{ 
                   border: "1px solid #ccc", 
                   p: 1, 
                   backgroundColor: "white"
                 }}>
                   <Typography variant="body2" sx={{ 
                     fontFamily: "serif", 
                     fontWeight: "bold",
                     fontSize: "0.8rem"
                   }}>
                     SUBSCRIBE TO THE HEARING TIMES
                   </Typography>
                   <Typography variant="caption" sx={{ 
                     fontFamily: "serif",
                     fontSize: "0.7rem"
                   }}>
                     Daily crypto news delivered to your inbox
                   </Typography>
                 </Box>
               </Grid>
             </Grid>

             {/* Footer */}
             <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid #ccc" }}>
               <Typography 
                 variant="caption" 
                 sx={{ 
                   display: "block", 
                   textAlign: "center", 
                   fontFamily: "serif",
                   color: "gray",
                   fontSize: { xs: "0.65rem", md: "0.7rem" }
                 }}
               >
                 © 2024 The Hearing Times • All rights reserved • For entertainment purposes only
               </Typography>
               <Typography 
                 variant="caption" 
                 sx={{ 
                   display: "block", 
                   textAlign: "center", 
                   fontFamily: "serif",
                   color: "gray",
                   fontSize: { xs: "0.6rem", md: "0.65rem" },
                   mt: 0.5
                 }}
               >
                 *Results not guaranteed. Past performance does not indicate future results. DYOR.
               </Typography>
             </Box>
           </Box>

           {/* CSS for animations */}
           <style>
             {`
               @keyframes scroll {
                 0% { transform: translateX(100%); }
                 100% { transform: translateX(-100%); }
               }
             `}
           </style>
        </Paper>
      </Container>
    </Box>
  );
};

export default HomePage;

