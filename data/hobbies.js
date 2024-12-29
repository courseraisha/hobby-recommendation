const hobbies = [
    {
        name: "Board Games",
        description: "Playing games with boards and pieces.",
        tags: ["Indoor",      // Q1: Indoor/Outdoor
               "Analytical",   // Q2: Creative/Analytical
               "Relaxed",     // Q3: Active/Relaxed
               "Group",       // Q4: Solo/Group
               "Short-Term",  // Q5: Short-Term/Long-Term
               "Digital",     // Q6: Crafting/Digital
               "Collaborative", // Q7: Competitive/Collaborative
               "Technology",  // Q8: Nature/Technology
               "Low-Cost",    // Q9: Low-Cost/High-Cost
               "New People"]  // Q10: New People/Familiar Faces
    },
    {
        name: "Video Gaming",
        description: "Playing interactive games on a console or computer.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Table Tennis",
        description: "Playing ping pong with a small ball and paddles.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Crafting",    // Q6: Changed from Digital
               "Competitive", // Q7
               "Nature",      // Q8: Changed from Technology
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Football",
        description: "A team sport played with a ball and goals.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Crafting",    // Q6: Changed from Digital to Crafting as it's physical
               "Competitive", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9: Changed from High-Cost as basic equipment is affordable
               "New People"]  // Q10
    },
    {
        name: "Basketball",
        description: "A team sport where players shoot a ball through a hoop.",
        tags: ["Indoor",      // Q1: Can be both, but primarily indoor
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Crafting",    // Q6: Changed from Digital to Crafting
               "Competitive", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9: Basic equipment is affordable
               "New People"]  // Q10
    },
    {
        name: "Baseball",
        description: "A team sport involving a bat, ball, and bases.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Crafting",    // Q6: Changed from Digital
               "Competitive", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9: Basic participation is affordable
               "New People"]  // Q10
    },
    {
        name: "Golf",
        description: "A game of hitting a small ball into holes using clubs.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Bowling",
        description: "Rolling a ball to knock down pins.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Crafting",    // Q6: Changed from Digital
               "Competitive", // Q7
               "Nature",      // Q8: Changed from Technology
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Photography",
        description: "Capturing moments through a camera.",
        tags: ["Outdoor",     // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Gardening",
        description: "Cultivating plants and flowers.",
        tags: ["Outdoor",     // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Reading",
        description: "Exploring stories and knowledge in books.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Geocaching",
        description: "Using GPS to hide and seek treasure.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Camping",
        description: "Staying outdoors in a tent or shelter for recreation.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Journaling",
        description: "Writing down thoughts and experiences in a journal.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Podcasting",
        description: "Creating and sharing audio content.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Blogging",
        description: "Writing articles or content for a blog.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Woodworking",
        description: "Creating objects and furniture using wood.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Playing Chess",
        description: "A strategy game played on a board with pieces.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Relaxed",     // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Making Jewelry",
        description: "Designing and crafting wearable art.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Tae Kwon Do",
        description: "A Korean martial art focusing on high, fast kicks.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Salsa Dancing",
        description: "A fast-paced Latin dance style.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Rock Music",
        description: "Listening to or playing rock music.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Hip-Hop Dancing",
        description: "A dance style focused on rhythm and movement.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Cycling",
        description: "Riding bicycles as a form of transport or leisure.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Zumba",
        description: "A dance-based exercise program.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Learning a Language",
        description: "Studying a new language for communication or travel.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Boxing",
        description: "A combat sport using punches with gloves.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Archery",
        description: "Shooting arrows at targets using a bow.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Snowboarding",
        description: "Gliding down snow-covered slopes on a board.",
        tags: ["Outdoor",     // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Volleyball",
        description: "A team sport where players hit a ball over a net.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Sailing",
        description: "Operating a boat using wind power.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Motorcycling",
        description: "Riding a motorcycle for leisure or sport.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Videography",
        description: "Recording video footage for creative or professional purposes.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Scrapbooking",
        description: "Creating personalized photo albums and memories.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Sculpting",
        description: "Shaping materials into artistic creations.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Tennis",
        description: "A racquet sport played on a rectangular court.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Painting",
        description: "Creating art using paint and canvas.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Yoga",
        description: "Physical and mental exercises for wellness.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Group",       // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Bird Watching",
        description: "Observing and identifying different bird species.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Pottery",
        description: "Creating objects from clay.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Astronomy",
        description: "Studying celestial objects and phenomena.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Cooking",
        description: "Preparing and experimenting with different foods.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Baking",
        description: "Making breads, pastries, and desserts.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Short-Term",  // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Knitting",
        description: "Creating garments and items using yarn and needles.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Cross-stitch",
        description: "Creating decorative designs using thread and fabric.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Model Building",
        description: "Assembling scale models of vehicles or buildings.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "High-Cost",   // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Drone Flying",
        description: "Operating and flying remote-controlled drones.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Short-Term",  // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Technology",  // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Rock Climbing",
        description: "Climbing natural rock formations or artificial walls.",
        tags: ["Outdoor",     // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Group",       // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Swimming",
        description: "Moving through water for exercise or recreation.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Active",      // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Competitive", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "New People"]  // Q10
    },
    {
        name: "Meditation",
        description: "Practicing mindfulness and mental clarity.",
        tags: ["Indoor",      // Q1
               "Creative",    // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Crafting",    // Q6
               "Collaborative", // Q7
               "Nature",      // Q8
               "Low-Cost",    // Q9
               "Familiar Faces"] // Q10
    },
    {
        name: "Coin Collecting",
        description: "Collecting and studying different currencies.",
        tags: ["Indoor",      // Q1
               "Analytical",  // Q2
               "Relaxed",     // Q3
               "Solo",        // Q4
               "Long-Term",   // Q5
               "Digital",     // Q6
               "Collaborative", // Q7
               "Technology",  // Q8
               "High-Cost",   // Q9
               "New People"]  // Q10
    },
    {
        name: "Piano Playing",
        description: "Learning and performing music on piano.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Ballet",
        description: "Classical dance form requiring precision and grace.",
        tags: ["Indoor", "Creative", "Active", "Group", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Soap Making",
        description: "Creating handmade soaps using natural ingredients.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Candle Making",
        description: "Crafting decorative and scented candles.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Ultimate Frisbee",
        description: "Team sport played with a flying disc.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Nature", "Low-Cost", "New People"]
    },
    {
        name: "3D Printing",
        description: "Creating objects using additive manufacturing.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Beekeeping",
        description: "Maintaining bee colonies for honey production.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Origami",
        description: "Japanese art of paper folding.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Martial Arts",
        description: "Traditional combat practices for self-defense.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"]
    },
    {
        name: "DJing",
        description: "Mixing and playing recorded music.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Glass Blowing",
        description: "Shaping molten glass into artistic pieces.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Stand-up Comedy",
        description: "Performing comedy routines live.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Competitive", "Technology", "Low-Cost", "New People"]
    },
    {
        name: "Surfing",
        description: "Riding ocean waves on a board.",
        tags: ["Outdoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Bookbinding",
        description: "Creating and repairing books by hand.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Ice Skating",
        description: "Gliding on ice using skates.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Aquascaping",
        description: "Creating underwater landscapes in aquariums.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"]
    },
    {
        name: "Calligraphy",
        description: "Artistic handwriting and lettering.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Bonsai",
        description: "Growing and training miniature trees.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"]
    },
    {
        name: "Parkour",
        description: "Moving efficiently through urban environments.",
        tags: ["Outdoor", "Creative", "Active", "Group", "Long-Term", "Digital", "Competitive", "Nature", "Low-Cost", "New People"]
    },
    {
        name: "Wine Tasting",
        description: "Sampling and evaluating different wines.",
        tags: ["Indoor", "Analytical", "Relaxed", "Group", "Long-Term", "Digital", "Collaborative", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Robotics",
        description: "Building and programming robots.",
        tags: ["Indoor", "Analytical", "Active", "Solo", "Long-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Improv Theater",
        description: "Performing unscripted theatrical scenes.",
        tags: ["Indoor", "Creative", "Active", "Group", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"]
    },
    {
        name: "Kayaking",
        description: "Paddling small boats through water.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Terrarium Making",
        description: "Creating miniature gardens in containers.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Laser Cutting",
        description: "Creating designs using laser technology.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Historical Reenactment",
        description: "Recreating historical events and periods.",
        tags: ["Outdoor", "Creative", "Active", "Group", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Axe Throwing",
        description: "Throwing axes at wooden targets.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Nature", "Low-Cost", "New People"]
    },
    {
        name: "Hydroponics",
        description: "Growing plants without soil.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "Familiar Faces"]
    },
    {
        name: "Escape Room Design",
        description: "Creating puzzle-based room experiences.",
        tags: ["Indoor", "Creative", "Active", "Group", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Fencing",
        description: "Competitive sword fighting sport.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Long-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Voice Acting",
        description: "Performing character voices for media.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Foraging",
        description: "Gathering wild food and materials.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"]
    },
    {
        name: "Puzzle Making",
        description: "Creating custom jigsaw puzzles.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Technology", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Drone Racing",
        description: "Racing remote-controlled aircraft.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Long-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Stop Motion Animation",
        description: "Creating animations frame by frame.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "Familiar Faces"]
    },
    {
        name: "Urban Sketching",
        description: "Drawing city scenes and landscapes.",
        tags: ["Outdoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "New People"]
    },
    {
        name: "Fire Dancing",
        description: "Performing dance with fire props.",
        tags: ["Outdoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Mushroom Cultivation",
        description: "Growing edible and medicinal fungi.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Ice Hockey",
        description: "Team sport played on ice.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Macro Photography",
        description: "Taking extreme close-up photos.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "Familiar Faces"]
    },
    {
        name: "Virtual Reality Gaming",
        description: "Playing immersive digital games.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Circus Arts",
        description: "Performing acrobatic and aerial acts.",
        tags: ["Indoor", "Creative", "Active", "Group", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Metal Detecting",
        description: "Searching for buried artifacts.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Digital", "Collaborative", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Leather Crafting",
        description: "Creating items from leather.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"]
    },
    {
        name: "Radio Control Cars",
        description: "Operating miniature racing vehicles.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Cheese Making",
        description: "Producing homemade cheeses.",
        tags: ["Indoor", "Creative", "Active", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "High-Cost", "Familiar Faces"]
    },
    {
        name: "Ghost Hunting",
        description: "Investigating paranormal activity.",
        tags: ["Indoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Paper Quilling",
        description: "Creating designs with rolled paper.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Falconry",
        description: "Training and hunting with birds of prey.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Long-Term", "Crafting", "Competitive", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Mathematical Origami",
        description: "Creating geometric paper designs.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Crafting", "Collaborative", "Technology", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Digital Art",
        description: "Creating artwork using digital tools.",
        tags: ["Indoor",      // Q1: Always indoor activity
               "Creative",    // Q2: Highly creative
               "Relaxed",     // Q3: Generally relaxed pace
               "Solo",        // Q4: Primarily solo activity
               "Long-Term",   // Q5: Takes time to master
               "Digital",     // Q6: Definitely digital
               "Collaborative", // Q7: Can be both, but more collaborative
               "Technology",  // Q8: Heavily technology-based
               "High-Cost",   // Q9: Requires expensive software/hardware
               "New People"]  // Q10: Can connect with new people online
    },
    {
        name: "Cosplay",
        description: "Creating and wearing character costumes.",
        tags: ["Indoor", "Creative", "Active", "Group", "Long-Term", "Crafting", "Collaborative", "Technology", "High-Cost", "New People"]
    },
    {
        name: "Rugby",
        description: "Full-contact team sport.",
        tags: ["Outdoor", "Analytical", "Active", "Group", "Short-Term", "Digital", "Competitive", "Nature", "Low-Cost", "New People"]
    },
    {
        name: "Soap Carving",
        description: "Creating sculptures from soap.",
        tags: ["Indoor", "Creative", "Relaxed", "Solo", "Short-Term", "Crafting", "Collaborative", "Nature", "Low-Cost", "Familiar Faces"]
    },
    {
        name: "Mountain Biking",
        description: "Cycling on rough terrain.",
        tags: ["Outdoor", "Analytical", "Active", "Solo", "Short-Term", "Digital", "Competitive", "Nature", "High-Cost", "New People"]
    },
    {
        name: "Microscopy",
        description: "Studying tiny objects with microscopes.",
        tags: ["Indoor", "Analytical", "Relaxed", "Solo", "Long-Term", "Digital", "Collaborative", "Technology", "High-Cost", "New People"]
    }
];

export default hobbies; 
  