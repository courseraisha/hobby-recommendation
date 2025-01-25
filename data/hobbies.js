const hobbies = [
    {
        name: "Board Games",
        description: "A social indoor activity combining strategic thinking and problem-solving in a relaxed group setting. Minimal equipment costs and flexible time commitment make it ideal for meeting new people through gaming groups and cafes.",
        tags: ["Indoor", "Analytical", "Relaxed", "Group", "Short-Term", "Digital", "Collaborative", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=ItihOOB9_Ec&ab_channel=OperationGameTable"
    },
    {
        name: "Video Gaming",
        description: "Digital entertainment combining creative storytelling with interactive challenges. Perfect for solo players seeking indoor recreation with flexible time commitment and online social connections with familiar friends.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Short-Term", "Digital", "Competitive", "Technology", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=7v80Oe9Bvkg&ab_channel=UnGeek"
    },
    {
        name: "Table Tennis",
        description: "Fast-paced indoor sport combining hand-eye coordination with tactical thinking. Excellent for active group exercise in short sessions while meeting new people in community settings.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Short-Term", "Crafting", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=k-MzcgTA-Mw&ab_channel=TomLodziak"
    },
    {
        name: "Football",
        description: "Dynamic outdoor team sport blending strategy with physical activity. Emphasizes group competition and fitness with minimal equipment needs, perfect for joining local teams and meeting new players.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Crafting", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=Phnt5QZ7X7o&t=43s&ab_channel=Unisport"
    },
    {
        name: "Basketball",
        description: "Indoor team sport requiring strategic play and constant movement. Combines analytical thinking with physical agility, offering competitive group dynamics and easy access to new social connections.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Short-Term", "Crafting", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=CMQp0bwjokw&ab_channel=GetHandlesBasketball"
    },
    {
        name: "Baseball",
        description: "Traditional outdoor team sport mixing strategy with physical skill. Emphasizes analytical thinking in a competitive group environment, providing accessible entry for meeting new teammates.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Crafting", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=E160D9rEY0M&ab_channel=TheSchoolOfSports"
    },
    {
        name: "Golf",
        description: "Precision outdoor sport requiring analytical focus and technical skill. Offers relaxed, individual play with opportunities to meet new people, though equipment costs are significant.",
        tags: ["Outdoor", "Analytical", "Relaxed", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=xxi4zG0Mig0&ab_channel=Meandmygolf"
    },
    {
        name: "Bowling",
        description: "Indoor precision sport combining physical technique with strategic thinking. Perfect for group entertainment with competitive elements, while maintaining accessibility for newcomers.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Short-Term", "Crafting", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=qdg5ISvzhZk&ab_channel=InsideBowling"

    },
    {
        name: "Photography",
        description: "Creative outdoor pursuit capturing moments through digital technology. Requires significant equipment investment and long-term skill development, while offering opportunities to connect with other enthusiasts.",
        tags: ["Outdoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=V7z7BAZdt2M&ab_channel=DavidManning"
    },
    {
        name: "Gardening",
        description: "Hands-on outdoor activity blending creative design with nature connection. Offers long-term project satisfaction with minimal initial costs, typically shared with close friends and family.",
        tags: ["Outdoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=BO8yuSTc3fo&ab_channel=Dig%2CPlant%2CWater%2CRepeat"
    },
    {
        name: "Reading",
        description: "Relaxing indoor activity exploring diverse content through digital or physical books. Perfect for solo enjoyment with minimal costs and long-term educational benefits.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=cdnbgBvJRvA&ab_channel=ReadTravelBecome"
    },
    {
        name: "Geocaching",
        description: "Technology-driven outdoor treasure hunting combining exploration with problem-solving. Perfect for meeting new people while engaging in short-term adventures using digital tools.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Collaborative", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=jJqjfNE9nbs&ab_channel=CleverGeocacheHides"
    },
    {
        name: "Camping",
        description: "Outdoor recreational activity emphasizing nature connection and practical skills. Combines group collaboration with physical activity, ideal for building relationships through shared adventures.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=jJqjfNE9nbs&ab_channel=CleverGeocacheHides"
    },
    {
        name: "Journaling",
        description: "Reflective indoor writing practice focusing on personal expression and creativity. Offers long-term emotional benefits through solo crafting, typically shared with close confidants.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=jJqjfNE9nbs&ab_channel=CleverGeocacheHides"

    },
    {
        name: "Podcasting",
        description: "Digital content creation combining creative expression with technical skills. Requires minimal initial investment while offering opportunities to connect with diverse audiences online.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=8UYbUsfbBW0&ab_channel=ThinkMedia"
    },
    {
        name: "Blogging",
        description: "Digital writing platform combining creative expression with online community building. Offers long-term development opportunities with low entry costs and potential for wide audience reach.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=iC5dWobPSik&ab_channel=TravelingPetiteGirl"
    },
    {
        name: "Woodworking",
        description: "Creative crafting practice requiring precision and artistic vision. Involves significant tool investment and long-term skill development, typically enjoyed individually or with fellow enthusiasts.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=hLT1M9O0K0c&ab_channel=FoureyesFurniture"
    },
    {
        name: "Playing Chess",
        description: "Strategic indoor board game emphasizing analytical thinking and tactical planning. Offers both digital and physical play options with opportunities to meet new opponents.",
        tags: ["Indoor", "Analytical", "Relaxed", "Group", "Short-Term", "Digital", "Competitive", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=OCSbzArwB10&ab_channel=GothamChess"
    },
    {
        name: "Making Jewelry",
        description: "Detailed crafting activity combining artistic design with technical skill. Requires investment in materials while offering creative satisfaction through long-term skill development.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/shorts/7waukoB64aA"
    },
    {
        name: "Tae Kwon Do",
        description: "Disciplined martial art combining physical training with mental focus. Requires long-term commitment and regular group practice, offering opportunities for competitive advancement.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=nx1R3ALOMzs&ab_channel=TactusXII"
    },
    {
        name: "Salsa Dancing",
        description: "Energetic partner dance combining rhythm with social interaction. Perfect for meeting new people while developing long-term physical skills in a collaborative environment.",
        tags: ["Indoor", "Creative", "Active", "Group", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=wV8cDpJa2f4&ab_channel=Salsaventura"
    },
    {
        name: "Rock Music",
        description: "Creative musical expression combining instrumental skill with group dynamics. Requires equipment investment and long-term practice, offering opportunities for public performance.",
        tags: ["Indoor", "Creative", "Active", "Group", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/shorts/mwyJDT-XDLw"
    },
    {
        name: "Hip-Hop Dancing",
        description: "Dynamic dance style emphasizing individual expression and group energy. Combines physical training with creative movement, perfect for building new social connections.",
        tags: ["Indoor", "Creative", "Active", "Group", "Long-Term", "Crafting", "Collaborative", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=kbUzi7meesU&ab_channel=JefferyHu"
    },
    {
        name: "Cycling",
        description: "Road and leisure cycling focusing on fitness and transportation. Combines cardio exercise with practical commuting and scenic route exploration.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=4ssLDk1eX9w&ab_channel=GlobalCyclingNetwork"
    },
    {
        name: "Zumba",
        description: "High-energy dance fitness program combining choreography with aerobic exercise. Perfect for group participation and meeting new people with minimal equipment needs.",
        tags: ["Indoor", "Creative", "Active", "Group", "Short-Term", "Digital", "Collaborative", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=9_MxwQw10RI&ab_channel=NestleMalaysia"
    },
    {
        name: "Learning a Language",
        description: "Analytical skill development combining digital tools with practical application. Offers long-term cognitive benefits and opportunities for cultural exchange.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=E6588DlZW-c&ab_channel=easy%2Cactually"
    },
    {
        name: "Boxing",
        description: "Intense combat sport combining physical conditioning with strategic thinking. Requires long-term commitment and regular training, offering both competitive and fitness benefits.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=kKDHdsVN0b8&ab_channel=TonyJeffries"
    },
    {
        name: "Archery",
        description: "Precision target sport requiring focus and technical mastery. Combines outdoor activity with individual skill development, suitable for both competition and recreation.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=5_c6K_DYpRU&ab_channel=OnlineArcheryAcademy"
    },
    {
        name: "Snowboarding",
        description: "Dynamic winter sport combining physical skill with creative expression. Requires significant equipment investment while offering opportunities for both individual and group enjoyment.",
        tags: ["Outdoor", "Creative", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=7VBalG0IhhI&ab_channel=SnowboardProCamp"
    },
    {
        name: "Volleyball",
        description: "Team-based outdoor sport emphasizing coordination and strategy. Perfect for group competition and social interaction with minimal equipment requirements.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=o7nZ8TIhHQM&ab_channel=PMEvolleyball"
    },
    {
        name: "Sailing",
        description: "Technical water sport combining navigation skills with nature appreciation. Requires significant investment and long-term learning, while offering both competitive and leisure opportunities.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=FCcKeOmYHFY&ab_channel=StickScience"
    },
    {
        name: "Motorcycling",
        description: "Dynamic outdoor activity combining mechanical knowledge with adventure. Requires significant investment in equipment while offering both solo exploration and community connection.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=7lTKO_UmBkk&ab_channel=YammieNoob"
    },
    {
        name: "Videography",
        description: "Creative digital storytelling combining technical skill with artistic vision. Requires equipment investment and offers opportunities for both individual expression and collaborative projects.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=0nG7pAXRgvE&ab_channel=LearnOnlineVideo"
    },
    {
        name: "Scrapbooking",
        description: "Creative memory preservation combining crafting with personal expression. Perfect for solo artistic development with minimal initial costs, often shared with close friends.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=IWwvzn81A4Y&ab_channel=CreatedByGwen"
    },
    {
        name: "Sculpting",
        description: "Three-dimensional art form combining creative vision with technical skill. Requires long-term dedication and material investment, typically practiced individually.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=9rpcX1X_whs&ab_channel=AndrewJosephKeith"
    },
    {
        name: "Tennis",
        description: "Dynamic racquet sport combining physical agility with strategic play. Requires equipment investment while offering both competitive matches and social interaction.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=YqgcykDGB2A&ab_channel=IntuitiveTennis"
    },
    {
        name: "Painting",
        description: "Visual art practice combining color theory with creative expression. Requires ongoing material investment and offers long-term artistic development opportunities.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=CiVkU-UOG4g&ab_channel=PaintellectualPriyA"
    },
    {
        name: "Yoga",
        description: "Mindful movement practice combining physical postures with breathing techniques. Offers group instruction with personal development focus and minimal equipment needs.",
        tags: ["Indoor", "Creative", "Relaxed", "Group", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=149Iac5fmoE&ab_channel=SCImplify"
    },
    {
        name: "Bird Watching",
        description: "Nature observation combining wildlife identification with outdoor exploration. Requires minimal initial investment while offering both solo and group participation opportunities.",
        tags: ["Outdoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=WyB0QuFGiYU&ab_channel=AARP"
    },
    {
        name: "Pottery",
        description: "Tactile art form combining hand skills with creative design. Requires dedicated space and equipment investment while offering opportunities for artistic community engagement.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=FkjNbTCFY1Q&ab_channel=KlayCeramics-WendyStone"
    },
    {
        name: "Astronomy",
        description: "Scientific hobby combining celestial observation with technical knowledge. Requires equipment investment and offers opportunities for both individual study and community sharing.",
        tags: ["Outdoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=0rHUDWjR5gg&t=180s&ab_channel=CrashCourse"
    },
    {
        name: "Cooking",
        description: "Culinary art combining technical skill with creative expression. Requires ongoing ingredient investment while offering opportunities for both personal enjoyment and social sharing.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=P6W8kwmwcno&ab_channel=JoshuaWeissman"
    },
    {
        name: "Baking",
        description: "Creating pastries, cakes, and desserts with precise measurements and decorative techniques. Perfect for sharing sweet creations with others.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=k3QmXcqND6g&ab_channel=BakeWithShivesh"
    },
    {
        name: "Bread Making",
        description: "Artisanal bread crafting focusing on fermentation, dough development, and traditional baking methods. Explores different grains and techniques.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=BsgUcpTLQww&ab_channel=JillWinger-OldFashionedonPurpose"
    },
    {
        name: "Knitting",
        description: "Traditional fiber art combining pattern work with creative design. Offers long-term skill development with minimal initial costs, typically enjoyed individually.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=Q6aZ-VQWWFM&ab_channel=HybridCalisthenics"
    },
    {
        name: "Opera Singing",
        description: "Classical vocal art combining musical technique with theatrical performance. Requires long-term training and offers opportunities for both solo and ensemble performances.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=evWIerF3eeU&ab_channel=TakeLessons"
    },
    {
        name: "Surfing",
        description: "Dynamic water sport blending physical skill with nature connection. Requires equipment investment while offering both solo practice and community engagement.",
        tags: ["Outdoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=PBmijBB57Go&ab_channel=BarefootSurf"
    },
    {
        name: "3D Printing",
        description: "Modern making technology combining digital design with physical creation. Requires initial equipment investment and technical knowledge while offering creative possibilities.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=705L35B9YWc&ab_channel=FranklyBuilt"
    },
    {
        name: "Rock Climbing",
        description: "Physical challenge sport combining strength with problem-solving. Offers both indoor and outdoor opportunities with equipment needs and safety considerations.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=S-4XZgARAuA&ab_channel=SendEdition"
    },
    {
        name: "Origami",
        description: "Paper folding art combining precision with geometric understanding. Minimal material costs while offering long-term skill development opportunities.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=mfI3MIbbkgM&ab_channel=OrigamiPrincess"
    },
    {
        name: "Beekeeping",
        description: "Nature stewardship combining biological knowledge with hands-on care. Requires equipment investment and ongoing commitment while supporting environmental awareness.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=jeFxOUZreXI&ab_channel=BeekeepingMadeSimple"
    },
    {
        name: "Calligraphy",
        description: "Artistic writing practice combining traditional techniques with creative expression. Minimal initial investment with opportunities for long-term skill refinement.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=sBoVGqiSzr4&ab_channel=AmandaRachLee"
    },
    {
        name: "Drone Flying",
        description: "Modern aerial photography combining technology with outdoor exploration. Requires significant equipment investment while offering both recreational and professional opportunities.",
        tags: ["Outdoor", "Analytical", "Relaxed", "Solo", "Short-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=1tnc0Vx3sXU&ab_channel=JevenDovey"
    },
    {
        name: "Wine Tasting",
        description: "Developing palate sensitivity through sampling and analyzing different wines. Focus on variety identification, regional characteristics, and food pairing.",
        tags: ["Indoor", "Analytical", "Relaxed", "Group", "Long-Term", "Digital", "Collaborative", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=R4Qs2Gj-nSg&ab_channel=JulielinhMouret"
    },
    {
        name: "Wine Making",
        description: "Home production of wines through fermentation and aging processes. Involves selecting grapes, monitoring fermentation, and understanding wine chemistry.",
        tags: ["Indoor", "Analytical", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=Q6aZ-VQWWFM&ab_channel=HybridCalisthenics"
    },
    {
        name: "Martial Arts",
        description: "Traditional combat training combining physical discipline with mental focus. Requires long-term commitment while offering both fitness and self-defense benefits.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=_91IJWdT-Iw&ab_channel=ArmchairViolence"
    },
    {
        name: "Stamp Collecting",
        description: "Historical preservation hobby combining research with organization. Moderate ongoing investment while offering connection to global culture.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=A_ZJ6WFHSmg&ab_channel=ThatDadGuy"
    },
    {
        name: "Parkour",
        description: "Urban movement discipline combining athleticism with creative navigation. Minimal equipment needs while offering both physical challenge and community connection.",
        tags: ["Outdoor", "Creative", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=drNY6DhqLbA&ab_channel=JasonPaul"
    },
    {
        name: "Soap Making",
        description: "Chemical crafting hobby combining science with artistic presentation. Moderate material investment while offering practical and creative satisfaction.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=lBc-dWQmFIM&ab_channel=Elly%27sEverydaySoapMaking"
    },
    {
        name: "Meditation",
        description: "Mental wellness practice combining mindfulness with relaxation techniques. Minimal equipment needs while offering long-term personal development benefits.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=U9YKY7fdwyg&ab_channel=Goodful"
    },
    {
        name: "Urban Sketching",
        description: "Outdoor art practice combining observation with quick drawing techniques. Minimal material needs while offering both solo practice and group meetups.",
        tags: ["Outdoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=Q6aZ-VQWWFM&ab_channel=HybridCalisthenics"
    },
    {
        name: "Magic Tricks",
        description: "Performance art combining sleight of hand with showmanship. Moderate equipment investment while offering both practice and entertainment opportunities.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Competitive", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=hV8x6CiFPiU&ab_channel=AboutMagic"
    },
    {
        name: "Cross-Country Skiing",
        description: "Winter endurance sport combining outdoor exploration with physical fitness. Requires equipment investment while offering both solo and group activities.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=SuKn-acPvVk&ab_channel=REI"
    },
    {
        name: "Voice Acting",
        description: "Performance art combining vocal skills with character interpretation. Requires equipment investment while offering both creative and professional opportunities.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=UGULxhi3XFo&ab_channel=ImproveYourVoice"
    },
    {
        name: "Tai Chi",
        description: "Meditative movement practice combining gentle exercise with mental focus. Minimal equipment needs while offering both health and social benefits.",
        tags: ["Indoor", "Analytical", "Relaxed", "Group", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=Q6aZ-VQWWFM&ab_channel=HybridCalisthenics"
    },
    {
        name: "Coin Collecting",
        description: "Numismatic hobby combining historical research with preservation. Ongoing investment while offering both educational and collection value.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=mwXvvh6XXa0&ab_channel=TreasureTown"
    },
    {
        name: "Stand-up Comedy",
        description: "Performance art combining writing with public speaking. Minimal initial investment while offering both creative and social opportunities.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Competitive", "Technology", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=vOM-ekg708I&ab_channel=CasuallyExplained"
    },
    {
        name: "Terrarium Building",
        description: "Mini ecosystem creation combining plant care with artistic design. Moderate setup costs while offering long-term maintenance satisfaction.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=t2jL3QP4hTA&ab_channel=WorcesterTerrariums"
    },
    {
        name: "Badminton",
        description: "Racquet sport combining agility with strategic play. Minimal equipment needs while offering both casual and competitive opportunities.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Nature", "Low-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=1UIhKZCPMYM&ab_channel=NatWeerasak"
    },
    {
        name: "Mountain Biking",
        description: "Challenging off-road cycling combining trail navigation with technical riding skills. Requires specialized equipment for rough terrain adventures and obstacle management.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=x_Gm4pW-AI8&ab_channel=BBKDRAGOON"
    },
    {
        name: "Costume Design",
        description: "Creative craft combining sewing skills with character interpretation. Requires material investment while offering both practical and artistic satisfaction.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=48mrV0VZsWc&ab_channel=DanielNetzel"
    },
    {
        name: "Rowing",
        description: "Water sport combining physical endurance with technical precision. Requires equipment access while offering both team and individual options.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Long-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=EAXjPZInTUY&ab_channel=LearntoRow"
    },
    {
        name: "Bonsai",
        description: "Plant cultivation art combining patience with aesthetic vision. Requires long-term commitment while offering meditative practice and artistic expression.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=COWIGUwS8u0&ab_channel=BonsaiEmpire"
    },
    {
        name: "Pet Training",
        description: "Animal behavior practice combining psychology with patience. Ongoing investment while offering both skill development and emotional connection.",
        tags: ["Indoor", "Analytical", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=jFMA5ggFsXU&ab_channel=ZakGeorge%E2%80%99sDogTrainingRevolution"
    },
    {
        name: "Fencing",
        description: "Traditional combat sport combining strategy with physical agility. Requires equipment investment while offering both competitive and social opportunities.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Technology", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=a8IdfA5fXJs&ab_channel=THNKR"
    },
    {
        name: "Glass Blowing",
        description: "Hot glass art combining technical skill with creative vision. Requires specialized equipment access while offering unique artistic possibilities.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=A_n9ZpONB-k&ab_channel=AlleyPicked"
    },
    {
        name: "Puppet Making",
        description: "Creative craft combining sculpture with performance art. Moderate material costs while offering both construction and entertainment possibilities.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Short-Term", "Crafting", "Collaborative", "Technology", "Low-Cost", "Familiar Faces"],
        youtube: "https://www.youtube.com/watch?v=54YroFGrbPQ&ab_channel=PuppetNerd"
    },
    {
        name: "Fire Dancing",
        description: "Performance art combining movement with prop manipulation. Requires safety equipment while offering both practice and performance opportunities.",
        tags: ["Outdoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"],
        youtube: "https://www.youtube.com/watch?v=2HEyjHHcC4o&ab_channel=SacredFlowArt-LED%26FireProps"
    },
]
 export default hobbies;
