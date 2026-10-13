import type { Review } from "@/types";

export const REVIEWS: Review[] = [
  // Talent Academy (lst-001)
  { id: "rev-001", listingId: "lst-001", authorName: "Ananya Baruah", rating: 5, body: "My son cracked JEE Mains thanks to Talent Academy. The teachers are genuinely invested in students.", verifiedGuest: true, createdAt: "2026-08-12T10:00:00Z" },
  { id: "rev-002", listingId: "lst-001", authorName: "Rishav Gogoi", rating: 4, body: "Solid coaching centre. Wish they had better AC in summer though. Content quality is great.", verifiedGuest: true, createdAt: "2026-07-20T14:30:00Z" },
  { id: "rev-003", listingId: "lst-001", authorName: "Priya Saikia", rating: 5, body: "Best coaching in Jorhat for competitive exams. Small batch size means everyone gets attention.", verifiedGuest: false, createdAt: "2026-06-15T09:00:00Z" },

  // BrightMinds (lst-002)
  { id: "rev-004", listingId: "lst-002", authorName: "Kunal Bora", rating: 4, body: "Good for board exam prep. My daughter improved from 65% to 88% in one year.", verifiedGuest: true, createdAt: "2026-09-01T11:00:00Z" },
  { id: "rev-005", listingId: "lst-002", authorName: "Dhriti Hazarika", rating: 4, body: "Affordable and effective. The teachers are patient and explain concepts well.", verifiedGuest: true, createdAt: "2026-08-05T16:30:00Z" },

  // Excel IIT Academy (lst-003)
  { id: "rev-006", listingId: "lst-003", authorName: "Arnab Phukan", rating: 5, body: "Excellent faculty. The mock test series is very close to actual JEE Advanced level.", verifiedGuest: true, createdAt: "2026-07-10T10:00:00Z" },
  { id: "rev-007", listingId: "lst-003", authorName: "Jutika Das", rating: 4, body: "Good institute but expensive compared to other options in Sivasagar.", verifiedGuest: false, createdAt: "2026-06-25T14:00:00Z" },

  // Study Circle (lst-004)
  { id: "rev-008", listingId: "lst-004", authorName: "Bikash Konwar", rating: 4, body: "Good for APSC prep. The current affairs sessions are particularly helpful.", verifiedGuest: true, createdAt: "2026-08-20T09:30:00Z" },
  { id: "rev-009", listingId: "lst-004", authorName: "Gitanjali Borah", rating: 3, body: "Average study material. Teaching is okay but could be more structured.", verifiedGuest: false, createdAt: "2026-07-15T11:00:00Z" },

  // Majuli River View (lst-013)
  { id: "rev-010", listingId: "lst-013", authorName: "Rahul Sharma", rating: 5, body: "Magical experience! Waking up to the Brahmaputra sunrise was unforgettable. The food was incredible.", verifiedGuest: true, createdAt: "2026-09-15T08:00:00Z" },
  { id: "rev-011", listingId: "lst-013", authorName: "Meenakshi Iyer", rating: 5, body: "The most authentic stay I have had in NE India. The host family treated us like their own.", verifiedGuest: true, createdAt: "2026-08-28T10:00:00Z" },
  { id: "rev-012", listingId: "lst-013", authorName: "Aditya Choudhury", rating: 5, body: "Perfect 3-day escape. The boat ride to the satra, the food, the peace. Will come back.", verifiedGuest: true, createdAt: "2026-08-10T16:00:00Z" },
  { id: "rev-013", listingId: "lst-013", authorName: "Sunita Devi", rating: 4, body: "Beautiful place. Only thing lacking is hot water in the morning. Otherwise perfect.", verifiedGuest: true, createdAt: "2026-07-22T12:00:00Z" },
  { id: "rev-014", listingId: "lst-013", authorName: "James Wilson", rating: 5, body: "As a foreign tourist, this was the highlight of my India trip. Genuine and peaceful.", verifiedGuest: false, createdAt: "2026-06-30T09:00:00Z" },

  // Brahmaputra Breeze (lst-014)
  { id: "rev-015", listingId: "lst-014", authorName: "Tanmoy Deka", rating: 4, body: "Clean bamboo cottages at a great price. The bike rental service was a nice touch.", verifiedGuest: true, createdAt: "2026-09-05T10:00:00Z" },
  { id: "rev-016", listingId: "lst-014", authorName: "Pooja Goswami", rating: 5, body: "Loved staying near Auniati Satra. The owner is very knowledgeable about Majuli history.", verifiedGuest: true, createdAt: "2026-08-15T14:00:00Z" },

  // Tea Garden Retreat (lst-015)
  { id: "rev-017", listingId: "lst-015", authorName: "Vikram Mehta", rating: 5, body: "Staying in a tea estate bungalow is a dream come true. The tea tasting session was educational.", verifiedGuest: true, createdAt: "2026-09-10T10:00:00Z" },
  { id: "rev-018", listingId: "lst-015", authorName: "Deepali Nath", rating: 5, body: "Heritage property with modern comforts. The garden walk at dawn was magical.", verifiedGuest: true, createdAt: "2026-08-22T08:00:00Z" },
  { id: "rev-019", listingId: "lst-015", authorName: "Arjun Singh", rating: 4, body: "Excellent property but a bit far from the city. Not a problem if you have your own vehicle.", verifiedGuest: false, createdAt: "2026-07-18T16:00:00Z" },

  // Kaziranga Wild Stay (lst-017)
  { id: "rev-020", listingId: "lst-017", authorName: "Neha Patil", rating: 5, body: "We saw a rhino on our first safari! The stay arranged everything. The machaan dinner was special.", verifiedGuest: true, createdAt: "2026-03-15T10:00:00Z" },
  { id: "rev-021", listingId: "lst-017", authorName: "Saurabh Kumar", rating: 4, body: "Good location right at the park entrance. Rooms are basic but comfortable enough.", verifiedGuest: true, createdAt: "2026-02-20T14:00:00Z" },
  { id: "rev-022", listingId: "lst-017", authorName: "Lakshmi Reddy", rating: 5, body: "The local guide they arranged was amazing. He knew every corner of the park.", verifiedGuest: true, createdAt: "2026-01-10T09:00:00Z" },

  // Khorikaa Restaurant (lst-021)
  { id: "rev-023", listingId: "lst-021", authorName: "Bhaskar Kalita", rating: 5, body: "Best Assamese food in Jorhat. The khar was made exactly like my grandmother used to make.", verifiedGuest: true, createdAt: "2026-09-20T13:00:00Z" },
  { id: "rev-024", listingId: "lst-021", authorName: "Rimjhim Baruah", rating: 4, body: "Great food quality. Service can be slow during peak hours but the taste makes up for it.", verifiedGuest: true, createdAt: "2026-08-30T19:00:00Z" },
  { id: "rev-025", listingId: "lst-021", authorName: "Debajit Sarmah", rating: 5, body: "Private dining rooms are perfect for family functions. The pitha platter is a must-try.", verifiedGuest: false, createdAt: "2026-07-25T12:00:00Z" },

  // Mishti Café (lst-022)
  { id: "rev-026", listingId: "lst-022", authorName: "Ankita Bhuyan", rating: 5, body: "Best café in Jorhat hands down. The filter coffee is addictive and the cakes are fresh.", verifiedGuest: true, createdAt: "2026-09-12T16:00:00Z" },
  { id: "rev-027", listingId: "lst-022", authorName: "Rohit Medhi", rating: 4, body: "Nice ambience for a work session. WiFi is reliable. Wish they stayed open past 9 PM.", verifiedGuest: false, createdAt: "2026-08-18T10:00:00Z" },

  // Bon Chon (lst-025)
  { id: "rev-028", listingId: "lst-025", authorName: "Pragya Sharma", rating: 5, body: "Fine dining experience at its best in NE India. The tasting menu tells a story through food.", verifiedGuest: true, createdAt: "2026-09-08T20:00:00Z" },
  { id: "rev-029", listingId: "lst-025", authorName: "Neel Kashyap", rating: 5, body: "Rooftop seating with city views. Cocktails are inventive. This place puts Guwahati on the map.", verifiedGuest: true, createdAt: "2026-08-25T21:00:00Z" },
  { id: "rev-030", listingId: "lst-025", authorName: "Monika Das", rating: 4, body: "Bit pricey but worth it for special occasions. Food is creative and presentation is beautiful.", verifiedGuest: true, createdAt: "2026-07-30T19:00:00Z" },

  // Srishti Events (lst-031)
  { id: "rev-031", listingId: "lst-031", authorName: "Papori Bora", rating: 5, body: "They handled our entire wedding flawlessly. From decor to catering, everything was top notch.", verifiedGuest: true, createdAt: "2026-09-05T10:00:00Z" },
  { id: "rev-032", listingId: "lst-031", authorName: "Jyotirmoy Dutta", rating: 5, body: "Professional team. They understood our budget and delivered beyond expectations.", verifiedGuest: true, createdAt: "2026-08-12T14:00:00Z" },
  { id: "rev-033", listingId: "lst-031", authorName: "Nibedita Hazarika", rating: 4, body: "Good event management. Only issue was the DJ was a bit late. Otherwise perfect.", verifiedGuest: false, createdAt: "2026-07-20T16:00:00Z" },

  // Grand Celebrations (lst-033)
  { id: "rev-034", listingId: "lst-033", authorName: "Rajdeep Chetia", rating: 5, body: "Luxury wedding experience. Our guests from Delhi were impressed. Worth every rupee.", verifiedGuest: true, createdAt: "2026-08-15T10:00:00Z" },
  { id: "rev-035", listingId: "lst-033", authorName: "Swapna Mahanta", rating: 5, body: "The makeup artist they arranged was phenomenal. The decoration was like something from a magazine.", verifiedGuest: true, createdAt: "2026-07-10T12:00:00Z" },

  // JEC (lst-009)
  { id: "rev-036", listingId: "lst-009", authorName: "Abhinav Borah", rating: 4, body: "Good engineering college with strong alumni network. Placement cell has improved recently.", verifiedGuest: true, createdAt: "2026-06-20T10:00:00Z" },
  { id: "rev-037", listingId: "lst-009", authorName: "Karishma Das", rating: 5, body: "Beautiful campus and dedicated professors. The tech fest is one of the best in NE India.", verifiedGuest: false, createdAt: "2026-05-15T14:00:00Z" },

  // Sibsagar College (lst-010)
  { id: "rev-038", listingId: "lst-010", authorName: "Hemanta Saikia", rating: 4, body: "Heritage institution with strong arts and literature departments. The library is excellent.", verifiedGuest: true, createdAt: "2026-07-05T09:00:00Z" },

  // DU Centre (lst-011)
  { id: "rev-039", listingId: "lst-011", authorName: "Pallav Jyoti Bora", rating: 5, body: "World-class research facilities. The petroleum engineering department is nationally recognised.", verifiedGuest: true, createdAt: "2026-06-10T10:00:00Z" },
  { id: "rev-040", listingId: "lst-011", authorName: "Rupali Deka", rating: 4, body: "Great campus life. The hostel facilities could use upgrades but academics are solid.", verifiedGuest: false, createdAt: "2026-05-25T16:00:00Z" },

  // Priyam Bora influencer (lst-037)
  { id: "rev-041", listingId: "lst-037", authorName: "Cafe Axom", rating: 5, body: "Priyam did a fantastic feature on our café. His content is authentic and drives real footfall.", verifiedGuest: true, createdAt: "2026-08-10T10:00:00Z" },
  { id: "rev-042", listingId: "lst-037", authorName: "Borpeta Homestay", rating: 4, body: "Good engagement from his followers. Content quality is high and he is professional to work with.", verifiedGuest: false, createdAt: "2026-07-15T14:00:00Z" },

  // Dipankar Hazarika (lst-038)
  { id: "rev-043", listingId: "lst-038", authorName: "TechNE Store", rating: 5, body: "Our gadget review video with Dipankar got 100K views. Great ROI for brand awareness.", verifiedGuest: true, createdAt: "2026-09-01T10:00:00Z" },

  // Additional reviews to reach 65
  { id: "rev-044", listingId: "lst-005", authorName: "Mrinmoy Dutta", rating: 4, body: "Good NEET coaching with practical lab sessions. The biology faculty is very experienced.", verifiedGuest: true, createdAt: "2026-08-01T10:00:00Z" },
  { id: "rev-045", listingId: "lst-006", authorName: "Pallavi Goswami", rating: 5, body: "Cleared APSC with their guidance. The study material is comprehensive and well-structured.", verifiedGuest: true, createdAt: "2026-07-05T14:00:00Z" },
  { id: "rev-046", listingId: "lst-006", authorName: "Ranjit Bora", rating: 5, body: "Best UPSC coaching in NE India. Period. The current affairs daily sessions are invaluable.", verifiedGuest: true, createdAt: "2026-06-20T10:00:00Z" },
  { id: "rev-047", listingId: "lst-016", authorName: "Mark Thompson", rating: 5, body: "Colonial charm with Assamese warmth. The garden is beautiful and the thali was the best meal of our trip.", verifiedGuest: true, createdAt: "2026-08-05T08:00:00Z" },
  { id: "rev-048", listingId: "lst-016", authorName: "Seema Choudhury", rating: 4, body: "Lovely heritage property. The hosts are very hospitable. Rooms could use some renovation.", verifiedGuest: true, createdAt: "2026-07-12T16:00:00Z" },
  { id: "rev-049", listingId: "lst-020", authorName: "Danish Ali", rating: 5, body: "The mask-making workshop was the highlight. Such a unique cultural experience.", verifiedGuest: true, createdAt: "2026-09-02T10:00:00Z" },
  { id: "rev-050", listingId: "lst-020", authorName: "Rupa Kalita", rating: 4, body: "Good cultural immersion. The Sattriya dance performance in the evening was mesmerising.", verifiedGuest: true, createdAt: "2026-08-18T14:00:00Z" },
  { id: "rev-051", listingId: "lst-023", authorName: "Partha Protim", rating: 4, body: "Authentic thali near Rang Ghar. The bamboo shoot curry is something else. Must try.", verifiedGuest: true, createdAt: "2026-09-10T13:00:00Z" },
  { id: "rev-052", listingId: "lst-023", authorName: "Jonali Bora", rating: 4, body: "Simple but delicious food. The fish preparations are the highlight here.", verifiedGuest: false, createdAt: "2026-08-22T12:00:00Z" },
  { id: "rev-053", listingId: "lst-026", authorName: "Bimal Dutta", rating: 5, body: "Best place for authentic NE tribal food in Guwahati. The smoked pork is heavenly.", verifiedGuest: true, createdAt: "2026-09-15T20:00:00Z" },
  { id: "rev-054", listingId: "lst-026", authorName: "Trisha Sen", rating: 4, body: "Interesting menu. Some dishes are quite spicy for those not used to it. Overall great.", verifiedGuest: true, createdAt: "2026-08-28T19:00:00Z" },
  { id: "rev-055", listingId: "lst-029", authorName: "Anamika Devi", rating: 5, body: "Farm fresh food on Majuli island. The duck curry was the best I have ever had.", verifiedGuest: true, createdAt: "2026-09-05T12:00:00Z" },
  { id: "rev-056", listingId: "lst-029", authorName: "Keshab Mahanta", rating: 4, body: "Unique dining experience. You eat what the river and farm provide. Very fresh.", verifiedGuest: true, createdAt: "2026-08-15T13:00:00Z" },
  { id: "rev-057", listingId: "lst-032", authorName: "Chayanika Bora", rating: 4, body: "They arranged a beautiful traditional Assamese wedding for us. The juron ceremony was perfect.", verifiedGuest: true, createdAt: "2026-07-28T10:00:00Z" },
  { id: "rev-058", listingId: "lst-034", authorName: "Dimple Dutta", rating: 4, body: "Beautiful flower mandap. Fresh flowers and the design was exactly what we wanted.", verifiedGuest: true, createdAt: "2026-08-10T16:00:00Z" },
  { id: "rev-059", listingId: "lst-035", authorName: "Nabajyoti Bora", rating: 5, body: "The wedding film they made is cinematic. Our friends thought it was a Bollywood trailer!", verifiedGuest: true, createdAt: "2026-09-15T10:00:00Z" },
  { id: "rev-060", listingId: "lst-035", authorName: "Madhu Bora", rating: 4, body: "Excellent drone shots and same-day edit. Professional team that respects the timeline.", verifiedGuest: true, createdAt: "2026-08-20T14:00:00Z" },
  { id: "rev-061", listingId: "lst-012", authorName: "Akash Nath", rating: 4, body: "Top commerce college. The CA coaching tie-up is very useful for students.", verifiedGuest: true, createdAt: "2026-06-15T10:00:00Z" },
  { id: "rev-062", listingId: "lst-012", authorName: "Shikha Baruah", rating: 5, body: "Great placement record. Many students get placed in Big 4 accounting firms.", verifiedGuest: false, createdAt: "2026-05-20T14:00:00Z" },
  { id: "rev-063", listingId: "lst-024", authorName: "Rajen Das", rating: 4, body: "Solid dhaba food. Big portions at good prices. The late night hours are a bonus.", verifiedGuest: true, createdAt: "2026-09-08T22:00:00Z" },
  { id: "rev-064", listingId: "lst-018", authorName: "Sumitra Phukan", rating: 4, body: "Quiet hilltop stay with amazing views. Perfect for a weekend getaway from Tezpur.", verifiedGuest: true, createdAt: "2026-08-01T08:00:00Z" },
  { id: "rev-065", listingId: "lst-042", authorName: "Junmoni Bora", rating: 4, body: "Bihu Beats did a great performance at our college fest. Energetic and professional.", verifiedGuest: true, createdAt: "2026-09-20T10:00:00Z" },
];
