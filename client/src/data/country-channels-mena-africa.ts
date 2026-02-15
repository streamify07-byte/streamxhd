interface CountryChannel {
  name: string;
  logo: string;
}

interface ChannelCategory {
  name: string;
  iconName: string;
  color: string;
  channels: CountryChannel[];
}

interface CountryChannelData {
  categories: ChannelCategory[];
}

export const menaAfricaChannelsData: Record<string, CountryChannelData> = {
  // ==================== MIDDLE EAST ====================
  sa: {
    categories: [
      {
        name: "News & Business",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Al Arabiya", logo: "" },
          { name: "Al Ekhbariya", logo: "" },
          { name: "Al Hadath", logo: "" },
          { name: "SBC", logo: "" },
          { name: "Asharq News", logo: "" },
          { name: "CNBC Arabia", logo: "" },
          { name: "Sky News Arabia", logo: "" },
        ],
      },
      {
        name: "Entertainment & General",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Saudi TV 1", logo: "" },
          { name: "Saudi TV 2", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC 2", logo: "" },
          { name: "MBC 3", logo: "" },
          { name: "MBC 4", logo: "" },
          { name: "MBC Action", logo: "" },
          { name: "MBC Drama", logo: "" },
          { name: "MBC Drama+", logo: "" },
          { name: "MBC Max", logo: "" },
          { name: "MBC Persia", logo: "" },
          { name: "MBC Variety", logo: "" },
          { name: "MBC Bollywood", logo: "" },
          { name: "Rotana Cinema", logo: "" },
          { name: "Rotana Classic", logo: "" },
          { name: "Rotana Khalijia", logo: "" },
          { name: "Rotana Drama", logo: "" },
          { name: "Rotana Clip", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SSC 1", logo: "" },
          { name: "SSC 2", logo: "" },
          { name: "SSC 3", logo: "" },
          { name: "SSC 4", logo: "" },
          { name: "SSC 5", logo: "" },
          { name: "KSA Sports 1", logo: "" },
          { name: "KSA Sports 2", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
          { name: "beIN Sports 3", logo: "" },
          { name: "Abu Dhabi Sports", logo: "" },
          { name: "Dubai Sports", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Spacetoon", logo: "" },
          { name: "Cartoon Network Arabic", logo: "" },
          { name: "Nickelodeon Arabic", logo: "" },
          { name: "MBC 3", logo: "" },
          { name: "Baraem", logo: "" },
          { name: "Ajyal TV", logo: "" },
        ],
      },
      {
        name: "Music",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Rotana Music", logo: "" },
          { name: "Mazzika", logo: "" },
          { name: "Melody TV", logo: "" },
          { name: "Nogoum FM TV", logo: "" },
          { name: "Mix by MBC", logo: "" },
        ],
      },
      {
        name: "Religious & Cultural",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "Quran TV (Saudi)", logo: "" },
          { name: "Sunnah TV", logo: "" },
          { name: "Iqraa TV", logo: "" },
          { name: "Al Majd TV", logo: "" },
          { name: "Al Resalah", logo: "" },
          { name: "Kanat Al Maarefa", logo: "" },
        ],
      },
      {
        name: "International",
        iconName: "Globe",
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "BBC Arabic", logo: "" },
          { name: "France 24 Arabic", logo: "" },
          { name: "DW Arabic", logo: "" },
          { name: "Russia Today Arabic", logo: "" },
          { name: "TRT Arabic", logo: "" },
          { name: "China CGTN Arabic", logo: "" },
        ],
      },
    ],
  },
  ae: {
    categories: [
      {
        name: "News & Business",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Sky News Arabia", logo: "" },
          { name: "Al Aan TV", logo: "" },
          { name: "Abu Dhabi TV", logo: "" },
          { name: "Dubai TV", logo: "" },
          { name: "Sharjah TV", logo: "" },
          { name: "CNBC Arabia", logo: "" },
          { name: "Al Arabiya", logo: "" },
        ],
      },
      {
        name: "Entertainment & General",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Abu Dhabi TV", logo: "" },
          { name: "Abu Dhabi Drama", logo: "" },
          { name: "Dubai TV", logo: "" },
          { name: "Dubai One", logo: "" },
          { name: "Sama Dubai", logo: "" },
          { name: "Sharjah TV", logo: "" },
          { name: "Ajman TV", logo: "" },
          { name: "Fujairah TV", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC 2", logo: "" },
          { name: "MBC 4", logo: "" },
          { name: "MBC Action", logo: "" },
          { name: "MBC Drama", logo: "" },
          { name: "MBC Max", logo: "" },
          { name: "Rotana Cinema", logo: "" },
          { name: "Rotana Khalijia", logo: "" },
          { name: "OSN Movies", logo: "" },
          { name: "OSN Series", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Abu Dhabi Sports 1", logo: "" },
          { name: "Abu Dhabi Sports 2", logo: "" },
          { name: "Dubai Sports", logo: "" },
          { name: "Dubai Racing", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
          { name: "beIN Sports 3", logo: "" },
          { name: "beIN Sports 4", logo: "" },
          { name: "beIN Sports 5", logo: "" },
          { name: "SSC 1", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Spacetoon", logo: "" },
          { name: "Cartoon Network Arabic", logo: "" },
          { name: "Nickelodeon Arabic", logo: "" },
          { name: "Baraem", logo: "" },
          { name: "MBC 3", logo: "" },
          { name: "Majid TV", logo: "" },
        ],
      },
      {
        name: "Music & Lifestyle",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Rotana Music", logo: "" },
          { name: "Mazzika", logo: "" },
          { name: "Melody TV", logo: "" },
          { name: "Mix by MBC", logo: "" },
          { name: "Fatafeat", logo: "" },
        ],
      },
      {
        name: "Religious & Cultural",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "Quran Kareem TV", logo: "" },
          { name: "Iqraa TV", logo: "" },
          { name: "Sharjah Cultural TV", logo: "" },
          { name: "Abu Dhabi Emarat", logo: "" },
          { name: "Noor Dubai", logo: "" },
        ],
      },
    ],
  },
  qa: {
    categories: [
      {
        name: "News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Al Jazeera Arabic", logo: "" },
          { name: "Al Jazeera English", logo: "" },
          { name: "Al Jazeera Mubasher", logo: "" },
          { name: "Al Jazeera Documentary", logo: "" },
          { name: "Qatar TV", logo: "" },
          { name: "Al Rayyan TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Qatar TV", logo: "" },
          { name: "Al Rayyan TV", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC 2", logo: "" },
          { name: "MBC Drama", logo: "" },
          { name: "Rotana Cinema", logo: "" },
          { name: "OSN Movies", logo: "" },
          { name: "OSN Series", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
          { name: "beIN Sports 3", logo: "" },
          { name: "beIN Sports 4", logo: "" },
          { name: "beIN Sports 5", logo: "" },
          { name: "beIN Sports 6", logo: "" },
          { name: "beIN Sports 7", logo: "" },
          { name: "beIN Sports 8", logo: "" },
          { name: "beIN Sports 9", logo: "" },
          { name: "beIN Sports 10", logo: "" },
          { name: "beIN Sports Premium 1", logo: "" },
          { name: "beIN Sports Premium 2", logo: "" },
          { name: "beIN Sports Premium 3", logo: "" },
          { name: "Al Kass Sports 1", logo: "" },
          { name: "Al Kass Sports 2", logo: "" },
          { name: "Al Kass Sports 3", logo: "" },
          { name: "Al Kass Sports 4", logo: "" },
          { name: "Al Kass Sports 5", logo: "" },
        ],
      },
      {
        name: "Kids",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "JeemTV", logo: "" },
          { name: "Baraem", logo: "" },
          { name: "Spacetoon", logo: "" },
          { name: "Cartoon Network Arabic", logo: "" },
          { name: "Nickelodeon Arabic", logo: "" },
        ],
      },
      {
        name: "Music & Culture",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Rotana Music", logo: "" },
          { name: "Mazzika", logo: "" },
          { name: "Melody TV", logo: "" },
          { name: "Al Jazeera Documentary", logo: "" },
        ],
      },
    ],
  },
  kw: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "KTV 1", logo: "" },
          { name: "KTV 2", logo: "" },
          { name: "KTV Arabi", logo: "" },
          { name: "Al Rai TV", logo: "" },
          { name: "Scope TV", logo: "" },
          { name: "Al Watan TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "KTV Plus", logo: "" },
          { name: "Funoon TV", logo: "" },
          { name: "Al Rai TV", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC Drama", logo: "" },
          { name: "Rotana Khalijia", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "KTV Sport", logo: "" },
          { name: "KTV Sport Plus", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "KTV Kids", logo: "" },
          { name: "Spacetoon", logo: "" },
          { name: "Cartoon Network Arabic", logo: "" },
        ],
      },
    ],
  },
  bh: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Bahrain TV", logo: "" },
          { name: "Bahrain International", logo: "" },
          { name: "Al Quran Al Kareem (Bahrain)", logo: "" },
        ],
      },
      {
        name: "Sports & Entertainment",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Bahrain Sports", logo: "" },
          { name: "Bahrain Sports 2", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC Drama", logo: "" },
          { name: "beIN Sports 1", logo: "" },
        ],
      },
    ],
  },
  om: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Oman TV", logo: "" },
          { name: "Oman TV Live", logo: "" },
          { name: "Majan TV", logo: "" },
        ],
      },
      {
        name: "Sports & Entertainment",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Oman Sports TV", logo: "" },
          { name: "Oman Cultural TV", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
        ],
      },
      {
        name: "Religious & Cultural",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "Oman Quran TV", logo: "" },
          { name: "Oman Cultural TV", logo: "" },
        ],
      },
    ],
  },
  jo: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Jordan TV", logo: "" },
          { name: "Al Mamlaka TV", logo: "" },
          { name: "Roya TV", logo: "" },
          { name: "Roya News", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Roya TV", logo: "" },
          { name: "Jordan Drama", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC Drama", logo: "" },
          { name: "Rotana Cinema", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Jordan Sports TV", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
        ],
      },
    ],
  },
  lb: {
    categories: [
      {
        name: "News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "LBC", logo: "" },
          { name: "LBC International", logo: "" },
          { name: "MTV Lebanon", logo: "" },
          { name: "Al Jadeed", logo: "" },
          { name: "Al Manar", logo: "" },
          { name: "NBN", logo: "" },
          { name: "OTV", logo: "" },
          { name: "Tele Liban", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "LBC", logo: "" },
          { name: "MTV Lebanon", logo: "" },
          { name: "Al Jadeed", logo: "" },
          { name: "Future TV", logo: "" },
          { name: "Tele Lumiere", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC Drama", logo: "" },
          { name: "MBC 4", logo: "" },
          { name: "Rotana Cinema", logo: "" },
          { name: "Rotana Drama", logo: "" },
          { name: "OSN Movies", logo: "" },
          { name: "OSN Series", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
          { name: "beIN Sports 3", logo: "" },
          { name: "beIN Sports Premium 1", logo: "" },
          { name: "Abu Dhabi Sports", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Spacetoon", logo: "" },
          { name: "Cartoon Network Arabic", logo: "" },
          { name: "Nickelodeon Arabic", logo: "" },
          { name: "Tele Lumiere Kids", logo: "" },
          { name: "MBC 3", logo: "" },
        ],
      },
      {
        name: "Music",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Rotana Music", logo: "" },
          { name: "Mazzika", logo: "" },
          { name: "Melody TV", logo: "" },
          { name: "MTV Music", logo: "" },
          { name: "Mix by MBC", logo: "" },
        ],
      },
      {
        name: "Religious & Cultural",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "Al Manar", logo: "" },
          { name: "Tele Lumiere", logo: "" },
          { name: "Noursat", logo: "" },
          { name: "Iqraa TV", logo: "" },
        ],
      },
    ],
  },
  iq: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Al Iraqiya", logo: "" },
          { name: "Al Iraqiya News", logo: "" },
          { name: "Al Sharqiya", logo: "" },
          { name: "Al Sharqiya News", logo: "" },
          { name: "Al Sumaria", logo: "" },
          { name: "Al Baghdadia", logo: "" },
          { name: "Rudaw", logo: "" },
          { name: "Kurdistan TV", logo: "" },
          { name: "NRT", logo: "" },
          { name: "Hona Baghdad", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Al Iraqiya", logo: "" },
          { name: "Al Sharqiya", logo: "" },
          { name: "Al Sumaria", logo: "" },
          { name: "UTV Iraq", logo: "" },
          { name: "Al Rasheed", logo: "" },
          { name: "Dijlah TV", logo: "" },
          { name: "Al Fayhaa", logo: "" },
          { name: "MBC Iraq", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Al Iraqiya Sports", logo: "" },
          { name: "Kurdistan Sports", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
        ],
      },
      {
        name: "Religious",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "Karbala TV", logo: "" },
          { name: "Al Anwar TV", logo: "" },
          { name: "Al Forat", logo: "" },
          { name: "Imam Hussein TV", logo: "" },
        ],
      },
    ],
  },
  ir: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "IRIB TV1", logo: "" },
          { name: "IRIB TV2", logo: "" },
          { name: "IRIB TV3", logo: "" },
          { name: "IRIB TV4", logo: "" },
          { name: "IRIB TV5", logo: "" },
          { name: "IRIB Khabar (News)", logo: "" },
          { name: "Press TV", logo: "" },
          { name: "Iran International", logo: "" },
          { name: "BBC Persian", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "IRIB Tamasha", logo: "" },
          { name: "IRIB Nasim", logo: "" },
          { name: "IRIB Namayesh", logo: "" },
          { name: "Manoto TV", logo: "" },
          { name: "GEM TV", logo: "" },
          { name: "GEM Series", logo: "" },
          { name: "GEM Classic", logo: "" },
          { name: "GEM Bollywood", logo: "" },
          { name: "GEM Kids", logo: "" },
          { name: "MBC Persia", logo: "" },
          { name: "Farsi1", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "IRIB Varzesh (Sports)", logo: "" },
          { name: "IRIB TV3 (Youth/Sports)", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
          { name: "GEM Sports", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "IRIB Pooya", logo: "" },
          { name: "IRIB Amouzesh", logo: "" },
          { name: "GEM Kids", logo: "" },
          { name: "Cartoon Network Persian", logo: "" },
          { name: "Spacetoon", logo: "" },
        ],
      },
      {
        name: "Music",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "PMC (Persian Music Channel)", logo: "" },
          { name: "Manoto Music", logo: "" },
          { name: "GEM Music", logo: "" },
          { name: "Tapesh TV", logo: "" },
        ],
      },
      {
        name: "Religious & Cultural",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "IRIB Quran", logo: "" },
          { name: "IRIB Mostanad (Documentary)", logo: "" },
          { name: "IRIB Salamat (Health)", logo: "" },
          { name: "IRIB Ofogh", logo: "" },
        ],
      },
      {
        name: "Provincial",
        iconName: "MapPin",
        color: "text-teal-400 bg-teal-500/10",
        channels: [
          { name: "IRIB Tehran", logo: "" },
          { name: "IRIB Isfahan", logo: "" },
          { name: "IRIB Tabriz", logo: "" },
          { name: "IRIB Shiraz", logo: "" },
          { name: "IRIB Mashhad", logo: "" },
          { name: "IRIB Kurdistan", logo: "" },
        ],
      },
    ],
  },
  sy: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Syrian TV", logo: "" },
          { name: "Syria Satellite Channel", logo: "" },
          { name: "Syria News", logo: "" },
          { name: "Orient TV", logo: "" },
          { name: "Syria TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Syria Drama", logo: "" },
          { name: "Lana TV", logo: "" },
          { name: "Nour El Sham", logo: "" },
          { name: "MBC 1", logo: "" },
          { name: "MBC Drama", logo: "" },
        ],
      },
    ],
  },
  ye: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Yemen TV", logo: "" },
          { name: "Belqees TV", logo: "" },
          { name: "Yemen Shabab", logo: "" },
          { name: "Yemen Today", logo: "" },
          { name: "Al Masirah TV", logo: "" },
          { name: "Aden TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Suhail TV", logo: "" },
          { name: "Hadi TV", logo: "" },
          { name: "Azal TV", logo: "" },
        ],
      },
    ],
  },
  il: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Channel 12 (Keshet)", logo: "" },
          { name: "Channel 13 (Reshet)", logo: "" },
          { name: "Kan 11", logo: "" },
          { name: "i24 News English", logo: "" },
          { name: "i24 News French", logo: "" },
          { name: "i24 News Arabic", logo: "" },
          { name: "Channel 14", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Channel 12", logo: "" },
          { name: "Channel 13", logo: "" },
          { name: "HOT Cinema 1", logo: "" },
          { name: "HOT Cinema 2", logo: "" },
          { name: "HOT Cinema 3", logo: "" },
          { name: "HOT Zone", logo: "" },
          { name: "Yes Drama", logo: "" },
          { name: "Yes Action", logo: "" },
          { name: "Yes Movies", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Sport 5", logo: "" },
          { name: "Sport 5 Plus", logo: "" },
          { name: "Sport 5 Live", logo: "" },
          { name: "Sport 5 Gold", logo: "" },
          { name: "ONE", logo: "" },
        ],
      },
      {
        name: "Kids & Education",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Kan Educational", logo: "" },
          { name: "Hop!", logo: "" },
          { name: "Luli", logo: "" },
          { name: "Nickelodeon Israel", logo: "" },
        ],
      },
      {
        name: "Music & Culture",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Music 24", logo: "" },
          { name: "Channel 8 (Heritage)", logo: "" },
          { name: "Kan Tarbut", logo: "" },
        ],
      },
    ],
  },
  ps: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Palestine TV", logo: "" },
          { name: "Al Aqsa TV", logo: "" },
          { name: "Maan TV", logo: "" },
          { name: "Watan TV", logo: "" },
          { name: "Palestine Today", logo: "" },
          { name: "Al Quds TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Culture",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Maan Mix", logo: "" },
          { name: "Ajyal TV", logo: "" },
          { name: "Roya TV", logo: "" },
        ],
      },
    ],
  },

  // ==================== NORTH AFRICA ====================
  eg: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "CBC", logo: "" },
          { name: "CBC Extra", logo: "" },
          { name: "DMC", logo: "" },
          { name: "DMC News", logo: "" },
          { name: "ON E", logo: "" },
          { name: "ON Drama", logo: "" },
          { name: "Al Hayat", logo: "" },
          { name: "Al Hayat 2", logo: "" },
          { name: "Al Nahar", logo: "" },
          { name: "Al Nahar Drama", logo: "" },
          { name: "Extra News", logo: "" },
          { name: "Nile News", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "CBC Drama", logo: "" },
          { name: "CBC Sofra", logo: "" },
          { name: "MBC Masr", logo: "" },
          { name: "MBC Masr 2", logo: "" },
          { name: "DMC Drama", logo: "" },
          { name: "Al Kahera Wal Nas", logo: "" },
          { name: "Al Mehwar", logo: "" },
          { name: "Dream", logo: "" },
          { name: "Sada El Balad", logo: "" },
          { name: "Sada El Balad 2", logo: "" },
          { name: "TEN TV", logo: "" },
          { name: "Al Hayat Musalsalat", logo: "" },
          { name: "Nile Drama", logo: "" },
          { name: "Nile Cinema", logo: "" },
          { name: "Rotana Cinema", logo: "" },
          { name: "Rotana Drama", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
          { name: "beIN Sports 3", logo: "" },
          { name: "beIN Sports 4", logo: "" },
          { name: "beIN Sports Premium 1", logo: "" },
          { name: "Nile Sport", logo: "" },
          { name: "ON Sport", logo: "" },
          { name: "Al Ahly TV", logo: "" },
          { name: "Zamalek TV", logo: "" },
          { name: "DMC Sports", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Spacetoon", logo: "" },
          { name: "Cartoon Network Arabic", logo: "" },
          { name: "Nickelodeon Arabic", logo: "" },
          { name: "MBC 3", logo: "" },
          { name: "Nile Family", logo: "" },
          { name: "Toyor Al Jannah", logo: "" },
        ],
      },
      {
        name: "Music",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Mazzika", logo: "" },
          { name: "Melody TV", logo: "" },
          { name: "Rotana Music", logo: "" },
          { name: "Nogoum FM TV", logo: "" },
          { name: "Shaabi TV", logo: "" },
          { name: "Mix by MBC", logo: "" },
        ],
      },
      {
        name: "Religious & Cultural",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "Al Azhar TV", logo: "" },
          { name: "Iqraa TV", logo: "" },
          { name: "Al Nas TV", logo: "" },
          { name: "Al Rahma TV", logo: "" },
          { name: "Nile Culture", logo: "" },
          { name: "Nile Education", logo: "" },
        ],
      },
      {
        name: "Regional",
        iconName: "MapPin",
        color: "text-teal-400 bg-teal-500/10",
        channels: [
          { name: "Nile TV International", logo: "" },
          { name: "Channel 1 (Egyptian TV)", logo: "" },
          { name: "Channel 2 (Egyptian TV)", logo: "" },
          { name: "ESC Channels", logo: "" },
        ],
      },
    ],
  },
  ly: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Libya TV", logo: "" },
          { name: "Libya Al Ahrar", logo: "" },
          { name: "218 TV", logo: "" },
          { name: "Libya Panorama", logo: "" },
          { name: "Libya Al Hadath", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Libya Channel", logo: "" },
          { name: "Libya Al Rasmiya", logo: "" },
          { name: "Tanasuh TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Libya Sports", logo: "" },
          { name: "beIN Sports 1", logo: "" },
        ],
      },
    ],
  },
  tn: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Wataniya 1", logo: "" },
          { name: "Wataniya 2", logo: "" },
          { name: "Nessma TV", logo: "" },
          { name: "El Hiwar Ettounsi", logo: "" },
          { name: "Attessia TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Hannibal TV", logo: "" },
          { name: "Nessma TV", logo: "" },
          { name: "Zitouna TV", logo: "" },
          { name: "Tunisia National 1", logo: "" },
          { name: "MBC 1", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Tunisia Sports", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
        ],
      },
    ],
  },
  dz: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ENTV (Programme National)", logo: "" },
          { name: "Canal Algerie", logo: "" },
          { name: "TV4 Tamazight", logo: "" },
          { name: "TV5 Coran", logo: "" },
          { name: "Echorouk TV", logo: "" },
          { name: "Echorouk News", logo: "" },
          { name: "Ennahar TV", logo: "" },
          { name: "El Bilad TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Samira TV", logo: "" },
          { name: "Dzair TV", logo: "" },
          { name: "Dzair News", logo: "" },
          { name: "Numidia TV", logo: "" },
          { name: "El Heddaf TV", logo: "" },
          { name: "KBC (Algeria)", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "TV6 (Sports Algeria)", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
        ],
      },
    ],
  },
  ma: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Al Aoula", logo: "" },
          { name: "2M (Deuxieme)", logo: "" },
          { name: "Medi 1 TV", logo: "" },
          { name: "Medi 1 TV Maghreb", logo: "" },
          { name: "Al Aoula Laayoune", logo: "" },
          { name: "2M Monde", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Al Aoula", logo: "" },
          { name: "2M", logo: "" },
          { name: "Aflam TV", logo: "" },
          { name: "Chada TV", logo: "" },
          { name: "Assadissa", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Arryadia", logo: "" },
          { name: "Arryadia TNT", logo: "" },
          { name: "beIN Sports 1", logo: "" },
          { name: "beIN Sports 2", logo: "" },
        ],
      },
      {
        name: "Cultural",
        iconName: "Globe",
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "Tamazight TV", logo: "" },
          { name: "Al Amazighia", logo: "" },
          { name: "Assadissa (Religious)", logo: "" },
          { name: "Athaqafia (Cultural)", logo: "" },
        ],
      },
    ],
  },

  // ==================== SUB-SAHARAN AFRICA ====================
  ng: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "NTA (Nigerian Television Authority)", logo: "" },
          { name: "NTA News 24", logo: "" },
          { name: "Channels TV", logo: "" },
          { name: "Arise TV", logo: "" },
          { name: "TVC News", logo: "" },
          { name: "AIT (Africa Independent TV)", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Silverbird TV", logo: "" },
          { name: "ONTV", logo: "" },
          { name: "Wazobia TV", logo: "" },
          { name: "Africa Magic Epic", logo: "" },
          { name: "Africa Magic Yoruba", logo: "" },
          { name: "Africa Magic Igbo", logo: "" },
          { name: "Africa Magic Hausa", logo: "" },
          { name: "Africa Magic Family", logo: "" },
          { name: "Africa Magic Urban", logo: "" },
          { name: "Africa Magic Showcase", logo: "" },
          { name: "ROK TV", logo: "" },
          { name: "iROKOtv", logo: "" },
          { name: "EbonyLife TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SuperSport 1", logo: "" },
          { name: "SuperSport 2", logo: "" },
          { name: "SuperSport 3", logo: "" },
          { name: "SuperSport Premier League", logo: "" },
          { name: "SuperSport Football", logo: "" },
          { name: "SuperSport Action", logo: "" },
          { name: "NTA Sports", logo: "" },
          { name: "beIN Sports 1", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Nickelodeon Africa", logo: "" },
          { name: "Cartoon Network Africa", logo: "" },
          { name: "Disney Channel Africa", logo: "" },
          { name: "Jim Jam", logo: "" },
          { name: "Africa Magic Family", logo: "" },
        ],
      },
      {
        name: "Music",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Trace Naija", logo: "" },
          { name: "MTV Base Africa", logo: "" },
          { name: "Soundcity TV", logo: "" },
          { name: "Hip TV", logo: "" },
          { name: "Channel O", logo: "" },
        ],
      },
      {
        name: "Religious",
        iconName: "BookOpen",
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "Emmanuel TV", logo: "" },
          { name: "Dove TV", logo: "" },
          { name: "Loveworld TV", logo: "" },
          { name: "TBN Africa", logo: "" },
          { name: "Daystar Nigeria", logo: "" },
        ],
      },
    ],
  },
  gh: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "GTV (Ghana Television)", logo: "" },
          { name: "TV3 Ghana", logo: "" },
          { name: "UTV Ghana", logo: "" },
          { name: "Joy News", logo: "" },
          { name: "Citi TV", logo: "" },
          { name: "GHOne TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Adom TV", logo: "" },
          { name: "Angel TV", logo: "" },
          { name: "Metro TV Ghana", logo: "" },
          { name: "Crystal TV", logo: "" },
          { name: "Max TV", logo: "" },
        ],
      },
      {
        name: "Sports & Music",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SuperSport Ghana", logo: "" },
          { name: "Max TV Sports", logo: "" },
          { name: "StarTimes Sports", logo: "" },
          { name: "4Syte TV (Music)", logo: "" },
        ],
      },
    ],
  },
  ke: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "KBC (Kenya Broadcasting)", logo: "" },
          { name: "KTN News", logo: "" },
          { name: "KTN Home", logo: "" },
          { name: "Citizen TV", logo: "" },
          { name: "NTV Kenya", logo: "" },
          { name: "K24 TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Citizen TV", logo: "" },
          { name: "KTN Home", logo: "" },
          { name: "Maisha Magic East", logo: "" },
          { name: "Maisha Magic Plus", logo: "" },
          { name: "Switch TV", logo: "" },
          { name: "Rembo TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SuperSport Kenya", logo: "" },
          { name: "KBC Sports", logo: "" },
          { name: "StarTimes Sports", logo: "" },
        ],
      },
      {
        name: "Music & Culture",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Trace Africa", logo: "" },
          { name: "MTV Base", logo: "" },
          { name: "Channel O", logo: "" },
        ],
      },
    ],
  },
  et: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "EBC (Ethiopian Broadcasting)", logo: "" },
          { name: "Fana TV", logo: "" },
          { name: "Kana TV", logo: "" },
          { name: "LTV (Leyu TV)", logo: "" },
          { name: "Walta TV", logo: "" },
          { name: "AMHARA TV", logo: "" },
          { name: "OBN (Oromia Broadcasting)", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Kana TV", logo: "" },
          { name: "JTV Ethiopia", logo: "" },
          { name: "Nahoo TV", logo: "" },
          { name: "Arts TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "EBC Sport", logo: "" },
          { name: "SuperSport", logo: "" },
          { name: "StarTimes Sports", logo: "" },
        ],
      },
    ],
  },
  tz: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TBC (Tanzania Broadcasting)", logo: "" },
          { name: "ITV Tanzania", logo: "" },
          { name: "Azam TV", logo: "" },
          { name: "Clouds TV", logo: "" },
          { name: "Star TV Tanzania", logo: "" },
          { name: "Channel Ten", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Azam Two", logo: "" },
          { name: "Azam Max", logo: "" },
          { name: "Wasafi TV", logo: "" },
          { name: "Ayo TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Azam Sports", logo: "" },
          { name: "Azam Sports 2", logo: "" },
          { name: "SuperSport", logo: "" },
        ],
      },
    ],
  },
  ug: {
    categories: [
      {
        name: "News & General",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "UBC (Uganda Broadcasting)", logo: "" },
          { name: "NTV Uganda", logo: "" },
          { name: "NBS TV", logo: "" },
          { name: "BBS TV", logo: "" },
          { name: "Bukedde TV", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Urban TV", logo: "" },
          { name: "Record TV Uganda", logo: "" },
          { name: "Salt TV", logo: "" },
          { name: "Spark TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SuperSport Uganda", logo: "" },
          { name: "StarTimes Sports", logo: "" },
          { name: "Sanyuka TV", logo: "" },
        ],
      },
    ],
  },
  za: {
    categories: [
      {
        name: "News & Current Affairs",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "SABC News", logo: "" },
          { name: "eNCA", logo: "" },
          { name: "Newzroom Afrika", logo: "" },
          { name: "ANN7", logo: "" },
          { name: "Parliament TV", logo: "" },
        ],
      },
      {
        name: "General Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "SABC 1", logo: "" },
          { name: "SABC 2", logo: "" },
          { name: "SABC 3", logo: "" },
          { name: "e.tv", logo: "" },
          { name: "M-Net", logo: "" },
          { name: "M-Net Movies 1", logo: "" },
          { name: "M-Net Movies 2", logo: "" },
          { name: "M-Net Movies 3", logo: "" },
          { name: "M-Net Movies 4", logo: "" },
          { name: "Mzansi Magic", logo: "" },
          { name: "Mzansi Wethu", logo: "" },
          { name: "Mzansi Bioskop", logo: "" },
          { name: "kykNET", logo: "" },
          { name: "kykNET & Kie", logo: "" },
          { name: "1Magic", logo: "" },
          { name: "Vuzu", logo: "" },
          { name: "Africa Magic Showcase", logo: "" },
          { name: "BET Africa", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SuperSport 1", logo: "" },
          { name: "SuperSport 2", logo: "" },
          { name: "SuperSport 3", logo: "" },
          { name: "SuperSport 4", logo: "" },
          { name: "SuperSport Premier League", logo: "" },
          { name: "SuperSport La Liga", logo: "" },
          { name: "SuperSport Football", logo: "" },
          { name: "SuperSport Cricket", logo: "" },
          { name: "SuperSport Rugby", logo: "" },
          { name: "SuperSport Golf", logo: "" },
          { name: "SuperSport Motorsport", logo: "" },
          { name: "SuperSport Action", logo: "" },
          { name: "SuperSport Variety", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Nickelodeon Africa", logo: "" },
          { name: "Cartoon Network Africa", logo: "" },
          { name: "Disney Channel Africa", logo: "" },
          { name: "Disney Junior Africa", logo: "" },
          { name: "Boomerang Africa", logo: "" },
          { name: "Jim Jam", logo: "" },
        ],
      },
      {
        name: "Music",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Channel O", logo: "" },
          { name: "MTV Base Africa", logo: "" },
          { name: "Trace Urban", logo: "" },
          { name: "Trace Africa", logo: "" },
          { name: "VH1 Africa", logo: "" },
        ],
      },
      {
        name: "Documentary & Lifestyle",
        iconName: "Globe",
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "Discovery Channel Africa", logo: "" },
          { name: "National Geographic Africa", logo: "" },
          { name: "History Channel Africa", logo: "" },
          { name: "BBC Earth Africa", logo: "" },
          { name: "TLC Africa", logo: "" },
          { name: "Food Network Africa", logo: "" },
          { name: "Travel Channel Africa", logo: "" },
        ],
      },
      {
        name: "Regional & Language",
        iconName: "MapPin",
        color: "text-teal-400 bg-teal-500/10",
        channels: [
          { name: "e.tv Extra", logo: "" },
          { name: "eMovies", logo: "" },
          { name: "eMovies Extra", logo: "" },
          { name: "Soweto TV", logo: "" },
          { name: "Cape Town TV", logo: "" },
          { name: "Bay TV", logo: "" },
        ],
      },
    ],
  },
  cm: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "CRTV (Cameroon Radio Television)", logo: "" },
          { name: "Canal 2 International", logo: "" },
          { name: "Equinoxe TV", logo: "" },
          { name: "STV (Spectrum Television)", logo: "" },
          { name: "Vision 4", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Canal 2 Movies", logo: "" },
          { name: "LTM TV", logo: "" },
          { name: "Ariane TV", logo: "" },
          { name: "DBS TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "CRTV Sport", logo: "" },
          { name: "Canal 2 Sport", logo: "" },
          { name: "SuperSport", logo: "" },
        ],
      },
    ],
  },
  ci: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "RTI 1", logo: "" },
          { name: "RTI 2", logo: "" },
          { name: "NCI (Nouvelle Chaine Ivoirienne)", logo: "" },
          { name: "Life TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Sports",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "RTI Bouake", logo: "" },
          { name: "A+ Ivoire", logo: "" },
          { name: "Canal+ Afrique", logo: "" },
          { name: "SuperSport", logo: "" },
        ],
      },
    ],
  },
  sn: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "RTS (Radio Television Senegalaise)", logo: "" },
          { name: "TFM", logo: "" },
          { name: "2sTV", logo: "" },
          { name: "Walf TV", logo: "" },
          { name: "Sen TV", logo: "" },
          { name: "iTV Senegal", logo: "" },
        ],
      },
      {
        name: "Entertainment & Sports",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "RDV", logo: "" },
          { name: "Lamp Fall TV", logo: "" },
          { name: "Africa 7", logo: "" },
          { name: "Canal+ Afrique", logo: "" },
          { name: "SuperSport", logo: "" },
        ],
      },
    ],
  },
  ml: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ORTM", logo: "" },
          { name: "ORTM 2 (Africable)", logo: "" },
          { name: "Joliba TV", logo: "" },
          { name: "Renouveau TV", logo: "" },
        ],
      },
    ],
  },
  mg: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVM Madagascar", logo: "" },
          { name: "TV Plus Madagascar", logo: "" },
          { name: "Kolo TV", logo: "" },
          { name: "Dream'in", logo: "" },
        ],
      },
    ],
  },
  mz: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVM Mozambique", logo: "" },
          { name: "STV Mozambique", logo: "" },
          { name: "Miramar TV", logo: "" },
          { name: "TV Mana", logo: "" },
        ],
      },
    ],
  },
  ao: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TPA 1", logo: "" },
          { name: "TPA 2", logo: "" },
          { name: "TPA Internacional", logo: "" },
          { name: "TV Zimbo", logo: "" },
          { name: "Palanca TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Sports",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "ZAP Viva", logo: "" },
          { name: "ZAP Novelas", logo: "" },
          { name: "SuperSport Angola", logo: "" },
          { name: "Record TV Africa", logo: "" },
        ],
      },
    ],
  },
  cd: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "RTNC (Radio Television Nationale Congolaise)", logo: "" },
          { name: "Digital Congo", logo: "" },
          { name: "Moliere TV", logo: "" },
          { name: "RTGA", logo: "" },
        ],
      },
      {
        name: "Entertainment",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "B-One TV", logo: "" },
          { name: "CCTV (Congo)", logo: "" },
          { name: "Numerica TV", logo: "" },
          { name: "Antenne A", logo: "" },
        ],
      },
    ],
  },
  sd: {
    categories: [
      {
        name: "General & News",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Sudan TV", logo: "" },
          { name: "Blue Nile TV", logo: "" },
          { name: "Sudan News TV", logo: "" },
          { name: "Ashorooq TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Sports",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Tayba TV", logo: "" },
          { name: "Sudan Drama", logo: "" },
          { name: "Sudania 24", logo: "" },
        ],
      },
    ],
  },
  rw: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Rwanda TV (RBA)", logo: "" },
          { name: "TV1 Rwanda", logo: "" },
          { name: "StarTimes Rwanda", logo: "" },
          { name: "Isango TV", logo: "" },
        ],
      },
    ],
  },
  zm: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ZNBC TV1", logo: "" },
          { name: "ZNBC TV2", logo: "" },
          { name: "ZNBC TV3", logo: "" },
          { name: "Muvi TV", logo: "" },
          { name: "Diamond TV", logo: "" },
        ],
      },
    ],
  },
  zw: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ZBC TV", logo: "" },
          { name: "ZBC News", logo: "" },
          { name: "3K TV", logo: "" },
          { name: "Zimpapers TV", logo: "" },
        ],
      },
    ],
  },
  bw: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "BTV (Botswana Television)", logo: "" },
          { name: "eBotswana", logo: "" },
          { name: "Khuduga TV", logo: "" },
        ],
      },
    ],
  },
  na: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "NBC (Namibian Broadcasting)", logo: "" },
          { name: "One Africa TV", logo: "" },
          { name: "Namibia Live TV", logo: "" },
        ],
      },
    ],
  },
  mu: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "MBC 1 (Mauritius Broadcasting)", logo: "" },
          { name: "MBC 2 Mauritius", logo: "" },
          { name: "MBC 3 Mauritius", logo: "" },
          { name: "Top FM TV", logo: "" },
        ],
      },
    ],
  },
  so: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "SNTV (Somali National TV)", logo: "" },
          { name: "Universal TV", logo: "" },
          { name: "Horn Cable TV", logo: "" },
          { name: "Somaliland National TV", logo: "" },
          { name: "Bulsho TV", logo: "" },
        ],
      },
    ],
  },
  bf: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "RTB (Radiodiffusion Television du Burkina)", logo: "" },
          { name: "BF1", logo: "" },
          { name: "Savane TV", logo: "" },
        ],
      },
    ],
  },
  ne: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Tele Sahel", logo: "" },
          { name: "Tal TV Niger", logo: "" },
          { name: "Dounia TV", logo: "" },
        ],
      },
    ],
  },
  td: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Tele Tchad", logo: "" },
          { name: "Electron TV", logo: "" },
          { name: "Al Nassour TV", logo: "" },
        ],
      },
    ],
  },
  gn: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "RTG (Radio Television Guineenne)", logo: "" },
          { name: "Evasion TV", logo: "" },
          { name: "Guin TV", logo: "" },
        ],
      },
    ],
  },
  mw: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "MBC TV Malawi", logo: "" },
          { name: "Times TV Malawi", logo: "" },
          { name: "Zodiak TV", logo: "" },
        ],
      },
    ],
  },
  tg: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVT (Television Togolaise)", logo: "" },
          { name: "TV2 Togo", logo: "" },
          { name: "New World TV", logo: "" },
        ],
      },
    ],
  },
  bj: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ORTB (Office de Radiodiffusion et Television du Benin)", logo: "" },
          { name: "Canal 3 Benin", logo: "" },
          { name: "Eden TV", logo: "" },
        ],
      },
    ],
  },
  sl: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "SLBC (Sierra Leone Broadcasting)", logo: "" },
          { name: "AYV TV", logo: "" },
          { name: "Star TV Sierra Leone", logo: "" },
        ],
      },
    ],
  },
  lr: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "LNTV (Liberia National TV)", logo: "" },
          { name: "Real TV Liberia", logo: "" },
          { name: "DC TV", logo: "" },
        ],
      },
    ],
  },
  er: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Eri-TV", logo: "" },
          { name: "Eri-TV Arabic", logo: "" },
          { name: "Eri-TV Tigrinya", logo: "" },
        ],
      },
    ],
  },
  ga: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Gabon Television", logo: "" },
          { name: "Gabon 24", logo: "" },
          { name: "TV+ Gabon", logo: "" },
        ],
      },
    ],
  },
  gm: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "GRTS (Gambia Radio & Television)", logo: "" },
          { name: "QTV Gambia", logo: "" },
          { name: "Paradise TV", logo: "" },
        ],
      },
    ],
  },
  ls: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "LTV (Lesotho Television)", logo: "" },
          { name: "Catholic TV Lesotho", logo: "" },
        ],
      },
    ],
  },
  sc: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "SBC (Seychelles Broadcasting)", logo: "" },
          { name: "TeleSey", logo: "" },
        ],
      },
    ],
  },
  cv: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TCV (Televisao de Cabo Verde)", logo: "" },
          { name: "Record TV Africa (Cape Verde)", logo: "" },
        ],
      },
    ],
  },
  dj: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "RTD (Radiodiffusion Television de Djibouti)", logo: "" },
          { name: "RTD 2", logo: "" },
        ],
      },
    ],
  },
  gq: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVGE (Television de Guinea Ecuatorial)", logo: "" },
          { name: "TVGE Internacional", logo: "" },
        ],
      },
    ],
  },
  sz: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "EBIS TV (Eswatini Broadcasting)", logo: "" },
          { name: "Channel S", logo: "" },
        ],
      },
    ],
  },
  cg: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Tele Congo", logo: "" },
          { name: "DRTV", logo: "" },
          { name: "Top TV Congo", logo: "" },
        ],
      },
    ],
  },
  cf: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVCA (Television Centrafricaine)", logo: "" },
          { name: "Tropic RCA", logo: "" },
        ],
      },
    ],
  },
  bi: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "RTNB (Radio Television Nationale du Burundi)", logo: "" },
          { name: "Heritage TV", logo: "" },
          { name: "Salama TV", logo: "" },
        ],
      },
    ],
  },
  mr: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVM (Television de Mauritanie)", logo: "" },
          { name: "Al Mourabitoune TV", logo: "" },
          { name: "Sahel TV", logo: "" },
        ],
      },
    ],
  },
  km: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ORTC (Office de Radio et Television des Comores)", logo: "" },
          { name: "Comores TV", logo: "" },
        ],
      },
    ],
  },
  st: {
    categories: [
      {
        name: "General",
        iconName: "Tv",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVS (Televisao Santomense)", logo: "" },
          { name: "TVS 2", logo: "" },
        ],
      },
    ],
  },
};

export const menaAfricaChannelDomains: Record<string, string> = {
  "mbc.net": "MBC Group",
  "aljazeera.net": "Al Jazeera",
  "alarabiya.net": "Al Arabiya",
  "skynewsarabia.com": "Sky News Arabia",
  "beinsports.com": "beIN Sports",
  "rotana.net": "Rotana",
  "ssc.sa": "SSC Sports",
  "osn.com": "OSN",
  "shahid.mbc.net": "Shahid (MBC)",
  "lbcgroup.tv": "LBC",
  "mtv.com.lb": "MTV Lebanon",
  "aljadeed.tv": "Al Jadeed",
  "almanar.com.lb": "Al Manar",
  "iraqiya.com": "Al Iraqiya",
  "rudaw.net": "Rudaw",
  "presstv.ir": "Press TV",
  "iranintl.com": "Iran International",
  "gemtv.ir": "GEM TV",
  "i24news.tv": "i24 News",
  "sport5.co.il": "Sport 5",
  "cbc.eg": "CBC Egypt",
  "dmc.tv": "DMC",
  "ontv.eg": "ON E",
  "2m.ma": "2M Morocco",
  "alaoula.ma": "Al Aoula",
  "entv.dz": "ENTV Algeria",
  "watania.tn": "Wataniya Tunisia",
  "channelstv.com": "Channels TV Nigeria",
  "arisetv.com": "Arise TV",
  "sabc.co.za": "SABC",
  "mnet.co.za": "M-Net",
  "supersport.com": "SuperSport",
  "enca.com": "eNCA",
  "newzroomafrika.com": "Newzroom Afrika",
  "etv.co.za": "e.tv",
  "kbc.co.ke": "KBC Kenya",
  "citizentv.co.ke": "Citizen TV Kenya",
  "ntv.co.ug": "NTV Uganda",
  "ebc.et": "EBC Ethiopia",
  "crtv.cm": "CRTV Cameroon",
  "rtsenegal.sn": "RTS Senegal",
  "tracetv.com": "Trace TV",
  "africamagic.tv": "Africa Magic",
  "spacetoon.com": "Spacetoon",
  "fatafeat.com": "Fatafeat",
  "mazzika.com": "Mazzika",
  "iqraa.com": "Iqraa TV",
};
