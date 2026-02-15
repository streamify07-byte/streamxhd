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

export const americasChannelsData: Record<string, CountryChannelData> = {
  br: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "GloboNews", logo: "" }, { name: "BandNews TV", logo: "" },
          { name: "Record News", logo: "" }, { name: "CNN Brasil", logo: "" },
          { name: "Jovem Pan News", logo: "" }, { name: "TV Cultura", logo: "" },
          { name: "TV Brasil", logo: "" }, { name: "TV Senado", logo: "" },
          { name: "TV Câmara", logo: "" }, { name: "TV Justiça", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "TV Globo", logo: "" }, { name: "SBT", logo: "" },
          { name: "Record TV", logo: "" }, { name: "Band", logo: "" },
          { name: "RedeTV!", logo: "" }, { name: "Multishow", logo: "" },
          { name: "GNT", logo: "" }, { name: "Viva", logo: "" },
          { name: "Canal Brasil", logo: "" }, { name: "Comedy Central BR", logo: "" },
          { name: "Universal TV BR", logo: "" }, { name: "Warner Channel BR", logo: "" },
          { name: "Sony Channel BR", logo: "" }, { name: "A&E BR", logo: "" },
          { name: "TLC BR", logo: "" }, { name: "E! BR", logo: "" },
          { name: "Lifetime BR", logo: "" }, { name: "TNT BR", logo: "" },
          { name: "Space BR", logo: "" }, { name: "Studio Universal BR", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SporTV", logo: "" }, { name: "SporTV 2", logo: "" },
          { name: "SporTV 3", logo: "" }, { name: "ESPN Brasil", logo: "" },
          { name: "ESPN 2 BR", logo: "" }, { name: "ESPN Extra BR", logo: "" },
          { name: "Fox Sports Brasil", logo: "" }, { name: "Fox Sports 2 BR", logo: "" },
          { name: "Band Sports", logo: "" }, { name: "Premiere FC", logo: "" },
          { name: "Combate", logo: "" }, { name: "Canal OFF", logo: "" },
        ],
      },
      {
        name: "Movies & Premium",
        iconName: "Film",
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "Telecine Premium", logo: "" }, { name: "Telecine Action", logo: "" },
          { name: "Telecine Touch", logo: "" }, { name: "Telecine Fun", logo: "" },
          { name: "Telecine Pipoca", logo: "" }, { name: "Telecine Cult", logo: "" },
          { name: "HBO Brasil", logo: "" }, { name: "HBO 2 BR", logo: "" },
          { name: "HBO Family BR", logo: "" }, { name: "Cinemax BR", logo: "" },
          { name: "Megapix", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network BR", logo: "" }, { name: "Nickelodeon BR", logo: "" },
          { name: "Discovery Kids BR", logo: "" }, { name: "Disney Channel BR", logo: "" },
          { name: "Disney Junior BR", logo: "" }, { name: "Disney XD BR", logo: "" },
          { name: "Gloob", logo: "" }, { name: "Gloobinho", logo: "" },
          { name: "Nick Jr. BR", logo: "" }, { name: "Boomerang BR", logo: "" },
        ],
      },
      {
        name: "Documentary & Science",
        iconName: "Globe",
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "Discovery Channel BR", logo: "" }, { name: "National Geographic BR", logo: "" },
          { name: "Nat Geo Wild BR", logo: "" }, { name: "History Channel BR", logo: "" },
          { name: "Animal Planet BR", logo: "" }, { name: "Discovery Science BR", logo: "" },
          { name: "Discovery Home & Health BR", logo: "" }, { name: "Smithsonian Channel BR", logo: "" },
        ],
      },
      {
        name: "Music & Lifestyle",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "MTV Brasil", logo: "" }, { name: "BIS", logo: "" },
          { name: "Music Box Brazil", logo: "" }, { name: "PlayTV", logo: "" },
          { name: "VH1 Brasil", logo: "" },
        ],
      },
    ],
  },
  ar: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Todo Noticias (TN)", logo: "" }, { name: "C5N", logo: "" },
          { name: "A24", logo: "" }, { name: "Crónica TV", logo: "" },
          { name: "LN+", logo: "" }, { name: "Canal 26", logo: "" },
          { name: "IP Noticias", logo: "" }, { name: "TV Pública", logo: "" },
          { name: "CNN en Español AR", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "El Trece (Canal 13)", logo: "" }, { name: "Telefe", logo: "" },
          { name: "América TV", logo: "" }, { name: "Canal 9", logo: "" },
          { name: "Net TV (Canal 10)", logo: "" }, { name: "Warner Channel AR", logo: "" },
          { name: "Sony Channel AR", logo: "" }, { name: "Universal TV AR", logo: "" },
          { name: "TNT AR", logo: "" }, { name: "Space AR", logo: "" },
          { name: "Comedy Central AR", logo: "" }, { name: "E! AR", logo: "" },
          { name: "Lifetime AR", logo: "" }, { name: "A&E AR", logo: "" },
          { name: "TLC AR", logo: "" }, { name: "El Gourmet", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "TyC Sports", logo: "" }, { name: "ESPN Argentina", logo: "" },
          { name: "ESPN 2 AR", logo: "" }, { name: "ESPN 3 AR", logo: "" },
          { name: "Fox Sports Argentina", logo: "" }, { name: "Fox Sports 2 AR", logo: "" },
          { name: "Fox Sports 3 AR", logo: "" }, { name: "Fox Sports Premium AR", logo: "" },
          { name: "DeporTV", logo: "" }, { name: "Golf Channel AR", logo: "" },
        ],
      },
      {
        name: "Movies & Premium",
        iconName: "Film",
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "HBO AR", logo: "" }, { name: "HBO 2 AR", logo: "" },
          { name: "HBO Family AR", logo: "" }, { name: "Cinemax AR", logo: "" },
          { name: "Cinecanal", logo: "" }, { name: "The Film Zone AR", logo: "" },
          { name: "Studio Universal AR", logo: "" }, { name: "TCM AR", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network AR", logo: "" }, { name: "Nickelodeon AR", logo: "" },
          { name: "Disney Channel AR", logo: "" }, { name: "Disney Junior AR", logo: "" },
          { name: "Discovery Kids AR", logo: "" }, { name: "Nick Jr. AR", logo: "" },
          { name: "Boomerang AR", logo: "" }, { name: "Pakapaka", logo: "" },
        ],
      },
      {
        name: "Music & Lifestyle",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "MTV AR", logo: "" }, { name: "VH1 AR", logo: "" },
          { name: "Quiero Música", logo: "" }, { name: "CM (Canal de la Música)", logo: "" },
          { name: "Much Music AR", logo: "" },
        ],
      },
    ],
  },
  mx: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Milenio Televisión", logo: "" }, { name: "ADN 40", logo: "" },
          { name: "Foro TV", logo: "" }, { name: "Canal del Congreso", logo: "" },
          { name: "Canal Once", logo: "" }, { name: "Canal 22", logo: "" },
          { name: "Canal del Gobierno", logo: "" }, { name: "Imagen Televisión", logo: "" },
          { name: "N+", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Canal de las Estrellas (Televisa)", logo: "" }, { name: "Azteca Uno", logo: "" },
          { name: "Azteca 7", logo: "" }, { name: "Canal 5 (Televisa)", logo: "" },
          { name: "Nu9ve", logo: "" }, { name: "Tlnovelas", logo: "" },
          { name: "De Película", logo: "" }, { name: "Golden", logo: "" },
          { name: "Golden Edge", logo: "" }, { name: "Warner Channel MX", logo: "" },
          { name: "Sony Channel MX", logo: "" }, { name: "Universal TV MX", logo: "" },
          { name: "TNT MX", logo: "" }, { name: "Comedy Central MX", logo: "" },
          { name: "E! MX", logo: "" }, { name: "Lifetime MX", logo: "" },
          { name: "A&E MX", logo: "" }, { name: "TLC MX", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "TUDN", logo: "" }, { name: "Fox Sports Mexico", logo: "" },
          { name: "Fox Sports 2 MX", logo: "" }, { name: "Fox Sports 3 MX", logo: "" },
          { name: "ESPN Mexico", logo: "" }, { name: "ESPN 2 MX", logo: "" },
          { name: "ESPN 3 MX", logo: "" }, { name: "Claro Sports", logo: "" },
          { name: "Azteca Deportes", logo: "" }, { name: "TVC Deportes", logo: "" },
          { name: "Golf Channel MX", logo: "" },
        ],
      },
      {
        name: "Movies & Premium",
        iconName: "Film",
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "HBO MX", logo: "" }, { name: "HBO 2 MX", logo: "" },
          { name: "HBO Family MX", logo: "" }, { name: "Cinemax MX", logo: "" },
          { name: "Cinecanal MX", logo: "" }, { name: "The Film Zone MX", logo: "" },
          { name: "Studio Universal MX", logo: "" }, { name: "TCM MX", logo: "" },
          { name: "AMC MX", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network MX", logo: "" }, { name: "Nickelodeon MX", logo: "" },
          { name: "Disney Channel MX", logo: "" }, { name: "Disney Junior MX", logo: "" },
          { name: "Discovery Kids MX", logo: "" }, { name: "Nick Jr. MX", logo: "" },
          { name: "Boomerang MX", logo: "" }, { name: "Baby TV MX", logo: "" },
        ],
      },
      {
        name: "Music & Lifestyle",
        iconName: "Music",
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "MTV MX", logo: "" }, { name: "VH1 MX", logo: "" },
          { name: "Telehit", logo: "" }, { name: "Telehit Música", logo: "" },
          { name: "Bandamax", logo: "" }, { name: "Ritmoson Latino", logo: "" },
        ],
      },
      {
        name: "Documentary & Culture",
        iconName: "Globe",
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "Discovery Channel MX", logo: "" }, { name: "National Geographic MX", logo: "" },
          { name: "History Channel MX", logo: "" }, { name: "Animal Planet MX", logo: "" },
          { name: "Discovery H&H MX", logo: "" }, { name: "Nat Geo Wild MX", logo: "" },
        ],
      },
    ],
  },
  co: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Noticias Caracol", logo: "" }, { name: "Noticias RCN", logo: "" },
          { name: "Canal Capital", logo: "" }, { name: "NTN24", logo: "" },
          { name: "Cablenoticias", logo: "" }, { name: "Señal Colombia", logo: "" },
          { name: "Canal Institucional", logo: "" }, { name: "Caracol Radio TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Caracol TV", logo: "" }, { name: "RCN Televisión", logo: "" },
          { name: "Canal Uno", logo: "" }, { name: "CityTV", logo: "" },
          { name: "Canal Trece", logo: "" }, { name: "Teleantioquia", logo: "" },
          { name: "Telepacífico", logo: "" }, { name: "TeleCaribe", logo: "" },
          { name: "Warner Channel CO", logo: "" }, { name: "Sony Channel CO", logo: "" },
          { name: "TNT CO", logo: "" }, { name: "A&E CO", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Win Sports", logo: "" }, { name: "Win Sports+", logo: "" },
          { name: "ESPN Colombia", logo: "" }, { name: "ESPN 2 CO", logo: "" },
          { name: "Fox Sports CO", logo: "" }, { name: "Fox Sports 2 CO", logo: "" },
          { name: "DirecTV Sports CO", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network CO", logo: "" }, { name: "Nickelodeon CO", logo: "" },
          { name: "Disney Channel CO", logo: "" }, { name: "Discovery Kids CO", logo: "" },
          { name: "Disney Junior CO", logo: "" },
        ],
      },
      {
        name: "Movies & Premium",
        iconName: "Film",
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "HBO CO", logo: "" }, { name: "Cinemax CO", logo: "" },
          { name: "Cinecanal CO", logo: "" }, { name: "The Film Zone CO", logo: "" },
          { name: "TCM CO", logo: "" },
        ],
      },
    ],
  },
  cl: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "24 Horas", logo: "" }, { name: "T13 (Canal 13 Noticias)", logo: "" },
          { name: "CHV Noticias", logo: "" }, { name: "Meganoticias", logo: "" },
          { name: "CNN Chile", logo: "" }, { name: "Canal 24 Horas TVN", logo: "" },
          { name: "TV Senado Chile", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "TVN", logo: "" }, { name: "Canal 13", logo: "" },
          { name: "Mega", logo: "" }, { name: "Chilevisión", logo: "" },
          { name: "La Red", logo: "" }, { name: "TV+", logo: "" },
          { name: "Warner Channel CL", logo: "" }, { name: "Sony Channel CL", logo: "" },
          { name: "TNT CL", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN Chile", logo: "" }, { name: "ESPN 2 CL", logo: "" },
          { name: "Fox Sports CL", logo: "" }, { name: "Fox Sports 2 CL", logo: "" },
          { name: "CDF Premium", logo: "" }, { name: "CDF HD", logo: "" },
          { name: "DirecTV Sports CL", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network CL", logo: "" }, { name: "Nickelodeon CL", logo: "" },
          { name: "Disney Channel CL", logo: "" }, { name: "Discovery Kids CL", logo: "" },
          { name: "Nick Jr. CL", logo: "" },
        ],
      },
      {
        name: "Movies & Premium",
        iconName: "Film",
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "HBO CL", logo: "" }, { name: "Cinemax CL", logo: "" },
          { name: "Cinecanal CL", logo: "" }, { name: "The Film Zone CL", logo: "" },
        ],
      },
    ],
  },
  pe: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Canal N", logo: "" }, { name: "RPP Noticias", logo: "" },
          { name: "TV Perú Noticias", logo: "" }, { name: "ATV Noticias", logo: "" },
          { name: "Willax TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "América Televisión", logo: "" }, { name: "Latina", logo: "" },
          { name: "ATV", logo: "" }, { name: "Panamericana Televisión", logo: "" },
          { name: "TV Perú", logo: "" }, { name: "Global TV", logo: "" },
          { name: "ATV+", logo: "" }, { name: "Warner Channel PE", logo: "" },
          { name: "Sony Channel PE", logo: "" }, { name: "TNT PE", logo: "" },
          { name: "A&E PE", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN PE", logo: "" }, { name: "ESPN 2 PE", logo: "" },
          { name: "Fox Sports PE", logo: "" }, { name: "GOLPERU", logo: "" },
          { name: "DirecTV Sports PE", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network PE", logo: "" }, { name: "Nickelodeon PE", logo: "" },
          { name: "Disney Channel PE", logo: "" }, { name: "Discovery Kids PE", logo: "" },
        ],
      },
      {
        name: "Movies & Premium",
        iconName: "Film",
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "HBO PE", logo: "" }, { name: "Cinemax PE", logo: "" },
          { name: "Cinecanal PE", logo: "" },
        ],
      },
    ],
  },
  ve: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Globovisión", logo: "" }, { name: "VTV (Venezolana de Televisión)", logo: "" },
          { name: "NTN24 VE", logo: "" }, { name: "VPI TV", logo: "" },
          { name: "TeleSUR", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Venevisión", logo: "" }, { name: "Televen", logo: "" },
          { name: "RCTV", logo: "" }, { name: "TVES", logo: "" },
          { name: "Venevisión Plus", logo: "" }, { name: "La Tele", logo: "" },
          { name: "IVC", logo: "" }, { name: "Vale TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Meridiano TV", logo: "" }, { name: "ESPN VE", logo: "" },
          { name: "Fox Sports VE", logo: "" }, { name: "DirecTV Sports VE", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network VE", logo: "" }, { name: "Nickelodeon VE", logo: "" },
          { name: "Disney Channel VE", logo: "" }, { name: "Discovery Kids VE", logo: "" },
        ],
      },
    ],
  },
  ec: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Ecuavisa Noticias", logo: "" }, { name: "Teleamazonas Noticias", logo: "" },
          { name: "Ecuador TV", logo: "" }, { name: "Oromar TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Ecuavisa", logo: "" }, { name: "Teleamazonas", logo: "" },
          { name: "TC Televisión", logo: "" }, { name: "RTS", logo: "" },
          { name: "Canal Uno", logo: "" }, { name: "GamaTV", logo: "" },
          { name: "RTU", logo: "" }, { name: "Telerama", logo: "" },
          { name: "Warner Channel EC", logo: "" }, { name: "Sony Channel EC", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN EC", logo: "" }, { name: "Fox Sports EC", logo: "" },
          { name: "DirecTV Sports EC", logo: "" }, { name: "GolTV Ecuador", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        iconName: "Baby",
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network EC", logo: "" }, { name: "Nickelodeon EC", logo: "" },
          { name: "Disney Channel EC", logo: "" }, { name: "Discovery Kids EC", logo: "" },
        ],
      },
    ],
  },
  bo: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Bolivia TV", logo: "" }, { name: "Cadena A", logo: "" },
          { name: "Full TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Unitel", logo: "" }, { name: "Red Uno", logo: "" },
          { name: "ATB", logo: "" }, { name: "Bolivisión", logo: "" },
          { name: "TVB (TV Boliviana)", logo: "" }, { name: "Gigavisión", logo: "" },
          { name: "PAT", logo: "" }, { name: "RTP Bolivia", logo: "" },
          { name: "Abya Yala TV", logo: "" }, { name: "Canal 21 Bolivia", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Tigo Sports BO", logo: "" }, { name: "ESPN BO", logo: "" },
          { name: "Fox Sports BO", logo: "" },
        ],
      },
    ],
  },
  py: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ABC TV", logo: "" }, { name: "GEN", logo: "" },
          { name: "C9N", logo: "" }, { name: "NPY", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "SNT", logo: "" }, { name: "Telefuturo", logo: "" },
          { name: "RPC (Red Paraguaya de Comunicación)", logo: "" }, { name: "Paravisión", logo: "" },
          { name: "Latele", logo: "" }, { name: "Canal 13 Paraguay", logo: "" },
          { name: "Unicanal", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Tigo Sports PY", logo: "" }, { name: "ESPN PY", logo: "" },
          { name: "Fox Sports PY", logo: "" }, { name: "GolTV PY", logo: "" },
        ],
      },
    ],
  },
  uy: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Telenoche (Canal 4)", logo: "" }, { name: "Subrayado (Canal 10)", logo: "" },
          { name: "Telemundo (Canal 12)", logo: "" }, { name: "TV Ciudad", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Monte Carlo TV (Canal 4)", logo: "" }, { name: "Canal 10 Saeta", logo: "" },
          { name: "Teledoce (Canal 12)", logo: "" }, { name: "La Tele (Canal 5)", logo: "" },
          { name: "VTV Uruguay", logo: "" }, { name: "TNU (TV Nacional Uruguay)", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "VTV Plus", logo: "" }, { name: "ESPN UY", logo: "" },
          { name: "Fox Sports UY", logo: "" }, { name: "DirecTV Sports UY", logo: "" },
          { name: "GolTV UY", logo: "" }, { name: "Tenfield", logo: "" },
        ],
      },
    ],
  },
  cr: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Teletica Noticias (Canal 7)", logo: "" }, { name: "Repretel Noticias", logo: "" },
          { name: "Canal 15 (UCR)", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Teletica (Canal 7)", logo: "" }, { name: "Repretel (Canal 6)", logo: "" },
          { name: "Canal 11 (Repretel)", logo: "" }, { name: "Multimedios CR", logo: "" },
          { name: "Trece Costa Rica", logo: "" }, { name: "Extra TV (Canal 42)", logo: "" },
          { name: "Sinart Costa Rica", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN CR", logo: "" }, { name: "Fox Sports CR", logo: "" },
          { name: "FUTV", logo: "" },
        ],
      },
    ],
  },
  pa: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVN Noticias Panama", logo: "" }, { name: "Telemetro Reporta", logo: "" },
          { name: "ECO TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "TVN Panama", logo: "" }, { name: "Telemetro", logo: "" },
          { name: "RPC TV", logo: "" }, { name: "SERTV", logo: "" },
          { name: "NexTV", logo: "" }, { name: "Mall TV", logo: "" },
          { name: "Más 23 TV", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN PA", logo: "" }, { name: "Fox Sports PA", logo: "" },
          { name: "TVMax Deportes", logo: "" },
        ],
      },
    ],
  },
  cu: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Cubavisión", logo: "" }, { name: "Cubavisión Internacional", logo: "" },
          { name: "Canal Caribe", logo: "" },
        ],
      },
      {
        name: "Entertainment & Education",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Tele Rebelde", logo: "" }, { name: "Canal Educativo", logo: "" },
          { name: "Canal Educativo 2", logo: "" }, { name: "Multivisión", logo: "" },
          { name: "Clave", logo: "" }, { name: "Canal Habana", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Tele Rebelde (Deportes)", logo: "" }, { name: "Canal Deportivo", logo: "" },
        ],
      },
    ],
  },
  do: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "CDN (Canal de Noticias)", logo: "" }, { name: "Noticias SIN", logo: "" },
          { name: "Teleantillas Noticias", logo: "" }, { name: "Telemicro Noticias", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Telesistema (Canal 11)", logo: "" }, { name: "Color Visión (Canal 9)", logo: "" },
          { name: "Teleantillas (Canal 2)", logo: "" }, { name: "Telemicro (Canal 5)", logo: "" },
          { name: "Antena Latina (Canal 7)", logo: "" }, { name: "Coral 39", logo: "" },
          { name: "Digital 15", logo: "" }, { name: "RNN (Canal 27)", logo: "" },
          { name: "SuperCanal", logo: "" }, { name: "Telecentro", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN DO", logo: "" }, { name: "Fox Sports DO", logo: "" },
          { name: "CDN Deportes", logo: "" },
        ],
      },
    ],
  },
  gt: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Guatevisión Noticias", logo: "" }, { name: "Canal Antigua Noticias", logo: "" },
          { name: "Emisoras Unidas TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Guatevisión", logo: "" }, { name: "Canal 3", logo: "" },
          { name: "Canal 7 (Televisiete)", logo: "" }, { name: "Canal Antigua", logo: "" },
          { name: "Azteca Guatemala", logo: "" }, { name: "TV Maya", logo: "" },
          { name: "Canal 33 Guatemala", logo: "" }, { name: "VEA Canal", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN GT", logo: "" }, { name: "Tigo Sports GT", logo: "" },
        ],
      },
    ],
  },
  hn: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "HCH (Hable Como Habla)", logo: "" }, { name: "UNE TV", logo: "" },
          { name: "Canal 6 Noticias", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Televicentro (Canal 3/7)", logo: "" }, { name: "TVC (Canal 5)", logo: "" },
          { name: "Canal 11 Honduras", logo: "" }, { name: "Hondured", logo: "" },
          { name: "Canal 6 Honduras", logo: "" }, { name: "Vica TV", logo: "" },
          { name: "Maya TV", logo: "" }, { name: "SoroTV Honduras", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "TVC Deportes HN", logo: "" }, { name: "Tigo Sports HN", logo: "" },
        ],
      },
    ],
  },
  sv: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Canal 33 Noticias", logo: "" }, { name: "Gentevé (Canal 29)", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Canal 12 El Salvador", logo: "" }, { name: "TCS (Canal 2/4/6)", logo: "" },
          { name: "Canal 33", logo: "" }, { name: "Megavisión (Canal 21)", logo: "" },
          { name: "Canal 10 TV Legislativa", logo: "" }, { name: "Agape TV", logo: "" },
          { name: "TV Usulután", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN SV", logo: "" }, { name: "Tigo Sports SV", logo: "" },
        ],
      },
    ],
  },
  ni: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "100% Noticias", logo: "" }, { name: "Canal 15 Nicaragua", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Canal 2 (Televicentro Nicaragua)", logo: "" }, { name: "Canal 8 Nicaragua", logo: "" },
          { name: "Canal 10 Nicaragua", logo: "" }, { name: "Canal 4 Nicaragua", logo: "" },
          { name: "Canal 6 Nicaragua", logo: "" }, { name: "Canal 14 Nicaragua", logo: "" },
          { name: "Canal 23 Nicaragua", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN NI", logo: "" }, { name: "TN8 Deportes", logo: "" },
        ],
      },
    ],
  },
  jm: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TVJ News", logo: "" }, { name: "CVM News", logo: "" },
          { name: "Nationwide News Network", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "TVJ (Television Jamaica)", logo: "" }, { name: "CVM TV", logo: "" },
          { name: "RE TV", logo: "" }, { name: "Hype TV", logo: "" },
          { name: "Love TV", logo: "" }, { name: "PBCJ (Public Broadcasting)", logo: "" },
          { name: "RETV Jamaica", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SportsMax", logo: "" }, { name: "SportsMax 2", logo: "" },
          { name: "ESPN Caribbean", logo: "" },
        ],
      },
    ],
  },
  tt: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TTT News", logo: "" }, { name: "TV6 News", logo: "" },
          { name: "CNC3 News", logo: "" }, { name: "CCN TV6 News", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "TTT (Trinidad & Tobago Television)", logo: "" }, { name: "TV6", logo: "" },
          { name: "CNC3", logo: "" }, { name: "Synergy TV", logo: "" },
          { name: "IE Network", logo: "" }, { name: "IBN TV", logo: "" },
          { name: "Parliament Channel TT", logo: "" }, { name: "Gayelle The Channel", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "SportsMax TT", logo: "" }, { name: "ESPN Caribbean TT", logo: "" },
        ],
      },
    ],
  },
  ht: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "TNH (Télévision Nationale d'Haïti)", logo: "" }, { name: "Radio Télé Métropole", logo: "" },
          { name: "Télé Ginen", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Télé Haïti", logo: "" }, { name: "Télé Eclair", logo: "" },
          { name: "Radio Télé Caraïbes", logo: "" }, { name: "Télé 20", logo: "" },
          { name: "TV Pa Nou", logo: "" }, { name: "Canal Bleu Télé", logo: "" },
          { name: "Télémax", logo: "" }, { name: "Radio Tele Soleil", logo: "" },
        ],
      },
    ],
  },
  pr: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "WAPA Noticias", logo: "" }, { name: "Telemundo PR Noticias", logo: "" },
          { name: "NotiCentro (WAPA)", logo: "" }, { name: "NotiUno", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "WAPA TV (Canal 4)", logo: "" }, { name: "Telemundo PR (WKAQ Canal 2)", logo: "" },
          { name: "Univisión Puerto Rico", logo: "" }, { name: "WIPR TV (Canal 6)", logo: "" },
          { name: "Mega TV PR", logo: "" }, { name: "WLII (Canal 11)", logo: "" },
          { name: "WSTE (Canal 7)", logo: "" },
        ],
      },
      {
        name: "Sports",
        iconName: "Trophy",
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN Puerto Rico", logo: "" }, { name: "Fox Sports PR", logo: "" },
          { name: "Fox Deportes PR", logo: "" }, { name: "WAPA Deportes", logo: "" },
        ],
      },
    ],
  },
  gp: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Guadeloupe La 1ère", logo: "" }, { name: "France 24 Antilles", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "ATV Guadeloupe", logo: "" }, { name: "Canal 10 Guadeloupe", logo: "" },
          { name: "Zouk TV", logo: "" }, { name: "Eclair TV GP", logo: "" },
          { name: "TF1 Antilles", logo: "" }, { name: "France 2 Antilles", logo: "" },
        ],
      },
    ],
  },
  mq: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Martinique La 1ère", logo: "" }, { name: "France 24 Martinique", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "ATV Martinique", logo: "" }, { name: "KMT (Kanal Martinique Télévision)", logo: "" },
          { name: "Zouk TV MQ", logo: "" }, { name: "TF1 Martinique", logo: "" },
          { name: "France 2 Martinique", logo: "" }, { name: "France 3 Martinique", logo: "" },
        ],
      },
    ],
  },
  re: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Réunion La 1ère", logo: "" }, { name: "France 24 Réunion", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Antenne Réunion", logo: "" }, { name: "Télé Kréol", logo: "" },
          { name: "TF1 Réunion", logo: "" }, { name: "France 2 Réunion", logo: "" },
          { name: "France 3 Réunion", logo: "" }, { name: "Canal+ Réunion", logo: "" },
        ],
      },
    ],
  },
  gy: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "NCN (National Communications Network)", logo: "" }, { name: "Guyana Chronicle TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Guyana Learning Channel", logo: "" }, { name: "TVG (Television Guyana)", logo: "" },
          { name: "Hits & Jams TV", logo: "" }, { name: "Little Rock TV", logo: "" },
          { name: "iTV Guyana", logo: "" }, { name: "Channel 9 Guyana", logo: "" },
        ],
      },
    ],
  },
  sr: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "STVS (Surinaamse Televisie Stichting)", logo: "" }, { name: "ATV Suriname", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Apintie TV", logo: "" }, { name: "ABC Suriname", logo: "" },
          { name: "SCCN", logo: "" }, { name: "Garuda TV", logo: "" },
          { name: "Trishul TV", logo: "" }, { name: "Rasonic TV", logo: "" },
        ],
      },
    ],
  },
  bz: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Channel 5 Belize (Great Belize TV)", logo: "" }, { name: "Channel 7 Belize", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Plus TV Belize", logo: "" }, { name: "Tropical Vision (Channel 9)", logo: "" },
          { name: "Belize Telemedia TV", logo: "" }, { name: "CTV 3 Belize", logo: "" },
          { name: "WAVE TV Belize", logo: "" }, { name: "Positive Vibes TV", logo: "" },
        ],
      },
    ],
  },
  bb: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "CBC TV 8 (Caribbean Broadcasting Corp)", logo: "" }, { name: "Starcom Network", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Direct TV Barbados", logo: "" }, { name: "MCTV (Multi-Choice TV)", logo: "" },
          { name: "TeleBarbados", logo: "" }, { name: "Caribbean Super Station", logo: "" },
          { name: "BET Caribbean", logo: "" }, { name: "Flow Sports Barbados", logo: "" },
        ],
      },
    ],
  },
  bs: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ZNS (Broadcasting Corp of the Bahamas)", logo: "" }, { name: "Our News Bahamas", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Cable 12 Bahamas", logo: "" }, { name: "JCN (Jones Communications)", logo: "" },
          { name: "Island FM TV", logo: "" }, { name: "Bahamas Christian Network", logo: "" },
          { name: "REV TV Bahamas", logo: "" }, { name: "One Caribbean TV Bahamas", logo: "" },
        ],
      },
    ],
  },
  ag: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ABS TV (Antigua Broadcasting Service)", logo: "" },
          { name: "Observer Media TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "CTV Antigua", logo: "" }, { name: "MTV Antigua", logo: "" },
          { name: "Life TV Antigua", logo: "" }, { name: "Good News TV Antigua", logo: "" },
          { name: "Crusader Radio TV", logo: "" },
        ],
      },
    ],
  },
  lc: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "HTS (Helen Television System)", logo: "" }, { name: "DBS (Daher Broadcasting)", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "NTN Saint Lucia", logo: "" }, { name: "Choice TV", logo: "" },
          { name: "MBC (Calabash) TV", logo: "" }, { name: "One Caribbean TV LC", logo: "" },
          { name: "Catholic TV LC", logo: "" },
        ],
      },
    ],
  },
  gd: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "GBN (Grenada Broadcasting Network)", logo: "" },
          { name: "MTV Grenada", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "GIS TV Grenada", logo: "" }, { name: "SOS Radio & TV", logo: "" },
          { name: "We FM TV Grenada", logo: "" }, { name: "One Caribbean TV GD", logo: "" },
          { name: "Real FM TV Grenada", logo: "" },
        ],
      },
    ],
  },
  vc: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "SVG TV", logo: "" }, { name: "VC3 (St. Vincent & the Grenadines)", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "CBS TV St. Vincent", logo: "" }, { name: "Star FM TV", logo: "" },
          { name: "We FM TV SVG", logo: "" }, { name: "One Caribbean TV VC", logo: "" },
          { name: "Nice Radio TV SVG", logo: "" },
        ],
      },
    ],
  },
  kn: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "ZIZ TV", logo: "" }, { name: "WINN FM TV", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Freedom FM TV", logo: "" }, { name: "Sugar City TV", logo: "" },
          { name: "NIS (Nevis Information Service) TV", logo: "" }, { name: "One Caribbean TV KN", logo: "" },
          { name: "VON Radio TV", logo: "" },
        ],
      },
    ],
  },
  dm: {
    categories: [
      {
        name: "News & Information",
        iconName: "Newspaper",
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "DBS Radio/TV (Dominica Broadcasting)", logo: "" },
          { name: "GIS Dominica", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        iconName: "Film",
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Marpin TV", logo: "" }, { name: "SAB TV Dominica", logo: "" },
          { name: "Kairi FM TV", logo: "" }, { name: "One Caribbean TV DM", logo: "" },
          { name: "Q95 FM TV", logo: "" },
        ],
      },
    ],
  },
};

export const americasChannelDomains: Record<string, string> = {
  "TV Globo": "globo.com",
  "GloboNews": "globonews.globo.com",
  "SBT": "sbt.com.br",
  "Record TV": "recordtv.r7.com",
  "Band": "band.uol.com.br",
  "RedeTV!": "redetv.uol.com.br",
  "CNN Brasil": "cnnbrasil.com.br",
  "SporTV": "sportv.globo.com",
  "ESPN Brasil": "espn.com.br",
  "Multishow": "multishow.globo.com",
  "GNT": "gnt.globo.com",
  "Telecine Premium": "telecine.com.br",
  "Cartoon Network BR": "cartoonnetwork.com.br",
  "Canal de las Estrellas (Televisa)": "televisa.com",
  "Azteca Uno": "tvazteca.com",
  "Azteca 7": "azteca7.com",
  "Imagen Televisión": "imagentv.com",
  "Milenio Televisión": "milenio.com",
  "Foro TV": "forotv.com.mx",
  "ADN 40": "adn40.mx",
  "TUDN": "tudn.com",
  "Fox Sports Mexico": "foxsports.com.mx",
  "ESPN Mexico": "espn.com.mx",
  "Telefe": "telefe.com",
  "El Trece (Canal 13)": "eltrecetv.com.ar",
  "América TV": "americatv.com.ar",
  "Todo Noticias (TN)": "tn.com.ar",
  "C5N": "c5n.com",
  "Crónica TV": "cronica.com.ar",
  "TyC Sports": "tycsports.com",
  "ESPN Argentina": "espn.com.ar",
  "Fox Sports Argentina": "foxsports.com.ar",
  "Caracol TV": "caracoltv.com",
  "RCN Televisión": "canalrcn.com",
  "NTN24": "ntn24.com",
  "Win Sports": "winsports.co",
  "ESPN Colombia": "espn.com.co",
  "TVN": "tvn.cl",
  "Canal 13": "13.cl",
  "Mega": "mega.cl",
  "Chilevisión": "chilevision.cl",
  "CNN Chile": "cnnchile.com",
  "ESPN Chile": "espn.cl",
  "CDF Premium": "estadiocdf.cl",
  "América Televisión": "americatv.com.pe",
  "Latina": "latina.pe",
  "GOLPERU": "golperu.pe",
  "Venevisión": "venevision.com",
  "Globovisión": "globovision.com",
  "TeleSUR": "telesurtv.net",
  "Ecuavisa": "ecuavisa.com",
  "Teleamazonas": "teleamazonas.com",
  "TC Televisión": "tctelevision.com",
  "Unitel": "unitel.bo",
  "Red Uno": "reduno.com.bo",
  "SNT": "snt.com.py",
  "Telefuturo": "telefuturo.com.py",
  "Monte Carlo TV (Canal 4)": "canal4.com.uy",
  "Teledoce (Canal 12)": "teledoce.com",
  "Teletica (Canal 7)": "teletica.com",
  "TVN Panama": "tvn-2.com",
  "Telemetro": "telemetro.com",
  "Cubavisión": "cubavision.icrt.cu",
  "Telesistema (Canal 11)": "telesistema11.com.do",
  "Guatevisión": "guatevision.com",
  "WAPA TV (Canal 4)": "wapa.tv",
  "Guadeloupe La 1ère": "la1ere.francetvinfo.fr/guadeloupe",
  "Martinique La 1ère": "la1ere.francetvinfo.fr/martinique",
  "Réunion La 1ère": "la1ere.francetvinfo.fr/reunion",
  "ZNS (Broadcasting Corp of the Bahamas)": "znsbahamas.com",
  "TVJ (Television Jamaica)": "televisionjamaica.com",
  "GBN (Grenada Broadcasting Network)": "gaboradiogrenada.com",
};
