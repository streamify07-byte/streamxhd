import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Tv, Search, Wifi, Monitor, Globe, Signal, ArrowRight,
  X, Newspaper, Film, Trophy, MapPin, BookOpen, Music, Baby,
  ChevronDown, ChevronUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Channel } from "@shared/schema";
import { europeChannelsData, europeChannelDomains } from "@/data/country-channels-europe";
import { asiaChannelsData, asiaChannelDomains } from "@/data/country-channels-asia";
import { americasChannelsData, americasChannelDomains } from "@/data/country-channels-americas";
import { menaAfricaChannelsData, menaAfricaChannelDomains } from "@/data/country-channels-mena-africa";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface CountryChannel {
  name: string;
  logo: string;
}

interface ChannelCategory {
  name: string;
  icon: typeof Tv;
  color: string;
  channels: CountryChannel[];
}

interface CountryChannelData {
  categories: ChannelCategory[];
}

const iconMap: Record<string, typeof Tv> = {
  Tv, Newspaper, Film, Trophy, Baby, Music, Globe, BookOpen, MapPin,
};

function convertExternalData(data: Record<string, { categories: Array<{ name: string; iconName: string; color: string; channels: Array<{ name: string; logo: string }> }> }>): Record<string, CountryChannelData> {
  const result: Record<string, CountryChannelData> = {};
  for (const [code, country] of Object.entries(data)) {
    result[code] = {
      categories: country.categories.map(cat => ({
        name: cat.name,
        icon: iconMap[cat.iconName] || Tv,
        color: cat.color,
        channels: cat.channels,
      })),
    };
  }
  return result;
}

const countryChannelsData: Record<string, CountryChannelData> = {
  us: {
    categories: [
      {
        name: "News & Business",
        icon: Newspaper,
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "CNN", logo: "" }, { name: "CNN International", logo: "" }, { name: "CNN en Español", logo: "" },
          { name: "Fox News Channel", logo: "" }, { name: "Fox Business Network", logo: "" },
          { name: "MSNBC", logo: "" }, { name: "CNBC", logo: "" }, { name: "CNBC World", logo: "" },
          { name: "Bloomberg TV", logo: "" }, { name: "HLN", logo: "" },
          { name: "ABC (National Feed)", logo: "" }, { name: "CBS (National Feed)", logo: "" },
          { name: "NBC (National Feed)", logo: "" }, { name: "PBS", logo: "" },
          { name: "BBC World News", logo: "" }, { name: "BBC America", logo: "" },
          { name: "Newsmax TV", logo: "" }, { name: "NewsNation", logo: "" },
          { name: "One America News", logo: "" }, { name: "The Weather Channel", logo: "" },
          { name: "WeatherNation", logo: "" }, { name: "C-SPAN 1", logo: "" },
          { name: "C-SPAN 2", logo: "" }, { name: "C-SPAN 3", logo: "" },
        ],
      },
      {
        name: "Entertainment & Drama",
        icon: Film,
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "AMC", logo: "" }, { name: "A&E", logo: "" }, { name: "Bravo", logo: "" },
          { name: "E!", logo: "" }, { name: "FX", logo: "" }, { name: "FXX", logo: "" },
          { name: "FX Movie Channel", logo: "" }, { name: "Freeform", logo: "" },
          { name: "Hallmark Channel", logo: "" }, { name: "Hallmark Drama", logo: "" },
          { name: "Hallmark Movies & Mysteries", logo: "" }, { name: "IFC", logo: "" },
          { name: "Lifetime", logo: "" }, { name: "Lifetime Movies", logo: "" },
          { name: "Lifetime Real Women", logo: "" }, { name: "OWN", logo: "" },
          { name: "Oxygen", logo: "" }, { name: "Paramount Network", logo: "" },
          { name: "Reelz", logo: "" }, { name: "Sundance TV", logo: "" },
          { name: "Syfy", logo: "" }, { name: "TBS", logo: "" }, { name: "TNT", logo: "" },
          { name: "TLC", logo: "" }, { name: "TruTV", logo: "" }, { name: "TV Land", logo: "" },
          { name: "TV One", logo: "" }, { name: "USA Network", logo: "" },
          { name: "WE tv", logo: "" }, { name: "The CW", logo: "" },
          { name: "MyNetworkTV", logo: "" }, { name: "Pop TV", logo: "" },
          { name: "Bounce TV", logo: "" }, { name: "Aspire", logo: "" },
          { name: "Grit", logo: "" }, { name: "GetTV", logo: "" }, { name: "Buzzr", logo: "" },
          { name: "Crime & Investigation", logo: "" }, { name: "Investigation Discovery", logo: "" },
          { name: "ION Television", logo: "" }, { name: "ION Mystery", logo: "" },
          { name: "Justice Central", logo: "" },
        ],
      },
      {
        name: "Sports",
        icon: Trophy,
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "ESPN", logo: "" }, { name: "ESPN 2", logo: "" }, { name: "ESPN U", logo: "" },
          { name: "ESPN News", logo: "" }, { name: "ESPN Deportes", logo: "" },
          { name: "ESPN College Extra", logo: "" }, { name: "ESPN Goal Line", logo: "" },
          { name: "Fox Sports 1 (FS1)", logo: "" }, { name: "Fox Sports 2 (FS2)", logo: "" },
          { name: "Fox Soccer Plus", logo: "" }, { name: "Fox Deportes", logo: "" },
          { name: "CBS Sports Network", logo: "" }, { name: "NBC Sports Network", logo: "" },
          { name: "NFL Network", logo: "" }, { name: "NFL RedZone", logo: "" },
          { name: "NBA TV", logo: "" }, { name: "MLB Network", logo: "" },
          { name: "MLB Strike Zone", logo: "" }, { name: "NHL Network", logo: "" },
          { name: "Golf Channel", logo: "" }, { name: "Tennis Channel", logo: "" },
          { name: "Olympic Channel", logo: "" }, { name: "beIN Sports", logo: "" },
          { name: "beIN Sports en Español", logo: "" }, { name: "Big Ten Network", logo: "" },
          { name: "ACC Network", logo: "" }, { name: "SEC Network", logo: "" },
          { name: "Longhorn Network", logo: "" }, { name: "Pac-12 Network", logo: "" },
          { name: "Stadium", logo: "" }, { name: "Outdoor Channel", logo: "" },
          { name: "Sportsman Channel", logo: "" }, { name: "Pursuit Channel", logo: "" },
          { name: "Willow TV (Cricket)", logo: "" }, { name: "YES Network", logo: "" },
          { name: "MavTV", logo: "" }, { name: "Ride TV", logo: "" },
          { name: "World Fishing Network", logo: "" }, { name: "Ginx eSports TV", logo: "" },
          { name: "AXS TV", logo: "" },
        ],
      },
      {
        name: "Movies & Premium",
        icon: Film,
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "HBO East", logo: "" }, { name: "HBO West", logo: "" }, { name: "HBO 2", logo: "" },
          { name: "HBO Signature", logo: "" }, { name: "HBO Family", logo: "" },
          { name: "HBO Comedy", logo: "" }, { name: "HBO Zone", logo: "" }, { name: "HBO Latino", logo: "" },
          { name: "Cinemax (Max)", logo: "" }, { name: "MoreMax", logo: "" },
          { name: "ActionMax", logo: "" }, { name: "ThrillerMax", logo: "" },
          { name: "MovieMax", logo: "" }, { name: "5StarMax", logo: "" }, { name: "OuterMax", logo: "" },
          { name: "Showtime East", logo: "" }, { name: "Showtime West", logo: "" },
          { name: "Showtime 2", logo: "" }, { name: "Showtime Showcase", logo: "" },
          { name: "Showtime Extreme", logo: "" }, { name: "Showtime Beyond", logo: "" },
          { name: "Showtime Next", logo: "" }, { name: "Showtime Women", logo: "" },
          { name: "The Movie Channel (TMC)", logo: "" }, { name: "TMC Xtra", logo: "" }, { name: "Flix", logo: "" },
          { name: "Starz East", logo: "" }, { name: "Starz West", logo: "" },
          { name: "Starz Edge", logo: "" }, { name: "Starz In Black", logo: "" },
          { name: "Starz Cinema", logo: "" }, { name: "Starz Kids & Family", logo: "" }, { name: "Starz Comedy", logo: "" },
          { name: "MGM+", logo: "" }, { name: "MGM+ Hits", logo: "" },
          { name: "MGM+ Marquee", logo: "" }, { name: "MGM+ Drive-In", logo: "" },
          { name: "TCM (Turner Classic Movies)", logo: "" }, { name: "HDNet Movies", logo: "" },
          { name: "Sony Movie Channel", logo: "" }, { name: "FYI", logo: "" },
          { name: "Esquire Network", logo: "" },
        ],
      },
      {
        name: "Kids & Family",
        icon: Baby,
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network", logo: "" }, { name: "Nickelodeon", logo: "" },
          { name: "Nick Jr.", logo: "" }, { name: "Nicktoons", logo: "" },
          { name: "NickMusic", logo: "" }, { name: "TeenNick", logo: "" },
          { name: "Disney Channel (East)", logo: "" }, { name: "Disney Channel (West)", logo: "" },
          { name: "Disney Junior", logo: "" }, { name: "Disney XD", logo: "" },
          { name: "Boomerang", logo: "" }, { name: "Universal Kids", logo: "" },
          { name: "PBS Kids", logo: "" }, { name: "BabyFirst TV", logo: "" },
          { name: "Baby TV", logo: "" }, { name: "DogTV", logo: "" },
        ],
      },
      {
        name: "Music, Comedy & Lifestyle",
        icon: Music,
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "MTV", logo: "" }, { name: "MTV 2", logo: "" }, { name: "MTV Classic", logo: "" },
          { name: "MTV Live", logo: "" }, { name: "MTV U", logo: "" },
          { name: "VH1", logo: "" }, { name: "CMT", logo: "" }, { name: "CMT Music", logo: "" },
          { name: "BET", logo: "" }, { name: "BET Her", logo: "" }, { name: "BET Jams", logo: "" },
          { name: "BET Soul", logo: "" }, { name: "Fuse", logo: "" }, { name: "Revolt", logo: "" },
          { name: "Comedy Central", logo: "" }, { name: "Comedy.TV", logo: "" },
          { name: "Adult Swim", logo: "" }, { name: "Logo TV", logo: "" },
          { name: "Vice TV", logo: "" }, { name: "G4 (Gaming)", logo: "" },
        ],
      },
      {
        name: "Discovery & Science",
        icon: Globe,
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "Discovery Channel", logo: "" }, { name: "Discovery Family", logo: "" },
          { name: "Discovery Life", logo: "" }, { name: "Destination America", logo: "" },
          { name: "Science Channel", logo: "" }, { name: "Animal Planet", logo: "" },
          { name: "Nat Geo Wild", logo: "" }, { name: "National Geographic", logo: "" },
          { name: "Smithsonian Channel", logo: "" }, { name: "History Channel", logo: "" },
          { name: "History en Español", logo: "" }, { name: "H2 (History 2)", logo: "" },
          { name: "American Heroes Channel", logo: "" }, { name: "Military History", logo: "" },
          { name: "MotorTrend", logo: "" }, { name: "Travel Channel", logo: "" },
        ],
      },
      {
        name: "Home, Food & DIY",
        icon: Tv,
        color: "text-orange-400 bg-orange-500/10",
        channels: [
          { name: "HGTV", logo: "" }, { name: "Food Network", logo: "" },
          { name: "Cooking Channel", logo: "" }, { name: "DIY Network", logo: "" },
          { name: "GAC Family", logo: "" }, { name: "Great American Country", logo: "" },
          { name: "UPtv", logo: "" }, { name: "RFD-TV", logo: "" },
          { name: "Game Show Network", logo: "" },
        ],
      },
      {
        name: "Spanish / Latino",
        icon: Globe,
        color: "text-red-400 bg-red-500/10",
        channels: [
          { name: "Univision", logo: "" }, { name: "Unimás", logo: "" },
          { name: "Telemundo", logo: "" }, { name: "NBC Universo", logo: "" },
          { name: "Galavisión", logo: "" }, { name: "TUDN (Univision Sports)", logo: "" },
          { name: "Univision tlnovelas", logo: "" }, { name: "Bandamax", logo: "" },
          { name: "El Rey Network", logo: "" }, { name: "Fusion", logo: "" },
          { name: "Discovery en Español", logo: "" }, { name: "CNN en Español", logo: "" },
          { name: "History en Español", logo: "" }, { name: "ESPN Deportes", logo: "" },
          { name: "Fox Deportes", logo: "" }, { name: "Cine Latino", logo: "" },
          { name: "ViendoMovies", logo: "" },
        ],
      },
      {
        name: "Religious & Inspirational",
        icon: BookOpen,
        color: "text-indigo-400 bg-indigo-500/10",
        channels: [
          { name: "TBN (Trinity Broadcasting)", logo: "" }, { name: "Daystar", logo: "" },
          { name: "EWTN", logo: "" }, { name: "BYUtv", logo: "" },
          { name: "Inspiration Network", logo: "" }, { name: "Impact Network", logo: "" },
          { name: "Jewish Life TV", logo: "" },
        ],
      },
      {
        name: "Shopping & Specialty",
        icon: Tv,
        color: "text-violet-400 bg-violet-500/10",
        channels: [
          { name: "QVC 1", logo: "" }, { name: "QVC 2", logo: "" }, { name: "QVC 3", logo: "" },
          { name: "HSN 1", logo: "" }, { name: "HSN 2", logo: "" },
          { name: "ShopHQ", logo: "" }, { name: "Jewelry Television", logo: "" },
          { name: "ShortsTV", logo: "" }, { name: "Domino", logo: "" },
          { name: "GEM", logo: "" }, { name: "Zee TV (USA Feed)", logo: "" },
          { name: "Nugget", logo: "" },
          { name: "WWE Network", logo: "" },
        ],
      },
      {
        name: "Local Stations (Major Cities)",
        icon: MapPin,
        color: "text-teal-400 bg-teal-500/10",
        channels: [
          { name: "WABC-TV (ABC 7) - New York", logo: "" }, { name: "WCBS-TV (CBS 2) - New York", logo: "" },
          { name: "WNBC (NBC 4) - New York", logo: "" }, { name: "WNYW (FOX 5) - New York", logo: "" },
          { name: "WPIX (CW 11) - New York", logo: "" }, { name: "WNET (PBS 13) - New York", logo: "" },
          { name: "WNJU (Telemundo 47) - New York", logo: "" }, { name: "WXTV (Univision 41) - New York", logo: "" },
          { name: "WJLA (ABC 7) - Washington DC", logo: "" }, { name: "WUSA (CBS 9) - Washington DC", logo: "" },
          { name: "WRC-TV (NBC 4) - Washington DC", logo: "" }, { name: "WTTG (FOX 5) - Washington DC", logo: "" },
          { name: "WPLG (ABC 10) - Miami", logo: "" }, { name: "WFOR (CBS 4) - Miami", logo: "" },
          { name: "WTVJ (NBC 6) - Miami", logo: "" }, { name: "WSVN (FOX 7) - Miami", logo: "" },
          { name: "WCVB (ABC 5) - Boston", logo: "" }, { name: "WBZ-TV (CBS 4) - Boston", logo: "" },
          { name: "WBTS (NBC 10) - Boston", logo: "" }, { name: "WFXT (FOX 25) - Boston", logo: "" },
          { name: "KABC-TV (ABC 7) - Los Angeles", logo: "" }, { name: "KCBS-TV (CBS 2) - Los Angeles", logo: "" },
          { name: "KNBC (NBC 4) - Los Angeles", logo: "" }, { name: "KTTV (FOX 11) - Los Angeles", logo: "" },
          { name: "KTLA (CW 5) - Los Angeles", logo: "" }, { name: "KCAL (Ch 9) - Los Angeles", logo: "" },
          { name: "KMEX (Univision 34) - Los Angeles", logo: "" },
          { name: "KGO-TV (ABC 7) - San Francisco", logo: "" }, { name: "KPIX (CBS 5) - San Francisco", logo: "" },
          { name: "KNTV (NBC 11) - San Francisco", logo: "" }, { name: "KTVU (FOX 2) - San Francisco", logo: "" },
          { name: "KOMO-TV (ABC 4) - Seattle", logo: "" }, { name: "KIRO-TV (CBS 7) - Seattle", logo: "" },
          { name: "KING-TV (NBC 5) - Seattle", logo: "" }, { name: "KCPQ (FOX 13) - Seattle", logo: "" },
          { name: "WLS-TV (ABC 7) - Chicago", logo: "" }, { name: "WBBM-TV (CBS 2) - Chicago", logo: "" },
          { name: "WMAQ-TV (NBC 5) - Chicago", logo: "" }, { name: "WFLD (FOX 32) - Chicago", logo: "" },
          { name: "WGN-TV (Ch 9) - Chicago", logo: "" },
          { name: "WFAA (ABC 8) - Dallas", logo: "" }, { name: "KTVT (CBS 11) - Dallas", logo: "" },
          { name: "KXAS (NBC 5) - Dallas", logo: "" }, { name: "KDFW (FOX 4) - Dallas", logo: "" },
          { name: "KTRK (ABC 13) - Houston", logo: "" }, { name: "KHOU (CBS 11) - Houston", logo: "" },
          { name: "KPRC (NBC 2) - Houston", logo: "" }, { name: "KRIV (FOX 26) - Houston", logo: "" },
        ],
      },
      {
        name: "Regional Sports Networks",
        icon: Trophy,
        color: "text-lime-400 bg-lime-500/10",
        channels: [
          { name: "YES Network (NY Yankees)", logo: "" }, { name: "SNY (SportsNet New York)", logo: "" },
          { name: "MSG Network (NY)", logo: "" }, { name: "NESN (New England)", logo: "" },
          { name: "Spectrum SportsNet (LA Lakers)", logo: "" }, { name: "MASN (Mid-Atlantic)", logo: "" },
          { name: "Altitude Sports (Denver)", logo: "" },
          { name: "NBC Sports Boston", logo: "" }, { name: "NBC Sports Chicago", logo: "" },
          { name: "NBC Sports Philadelphia", logo: "" }, { name: "NBC Sports Washington", logo: "" },
          { name: "NBC Sports Bay Area", logo: "" }, { name: "NBC Sports California", logo: "" },
          { name: "Bally Sports South", logo: "" }, { name: "Bally Sports Midwest", logo: "" },
          { name: "Bally Sports Florida", logo: "" }, { name: "Bally Sports Detroit", logo: "" },
          { name: "Bally Sports Southwest", logo: "" }, { name: "Bally Sports West", logo: "" },
          { name: "Bally Sports North", logo: "" }, { name: "Bally Sports Ohio", logo: "" },
          { name: "Bally Sports Wisconsin", logo: "" },
          { name: "AT&T SportsNet Pittsburgh", logo: "" }, { name: "AT&T SportsNet Rocky Mountain", logo: "" },
          { name: "Marquee Sports Network (Cubs)", logo: "" },
        ],
      },
      {
        name: "South Asian (Desi Package)",
        icon: Globe,
        color: "text-orange-400 bg-orange-500/10",
        channels: [
          { name: "Willow TV (Cricket)", logo: "" }, { name: "Zee TV USA", logo: "" },
          { name: "Sony Entertainment TV Asia", logo: "" }, { name: "TV Asia", logo: "" },
          { name: "Aapka Colors", logo: "" }, { name: "Star Plus USA", logo: "" },
        ],
      },
      {
        name: "Music Choice (Audio Channels)",
        icon: Music,
        color: "text-fuchsia-400 bg-fuchsia-500/10",
        channels: [
          { name: "Hit List", logo: "" }, { name: "Pop Rhythmic", logo: "" },
          { name: "Dance/EDM", logo: "" }, { name: "Hip-Hop and R&B", logo: "" },
          { name: "Rap", logo: "" }, { name: "Throwback Jamz", logo: "" },
          { name: "R&B Classics", logo: "" }, { name: "Rock", logo: "" },
          { name: "Alternative", logo: "" }, { name: "Adult Alternative", logo: "" },
          { name: "Rock Hits", logo: "" }, { name: "Classic Rock", logo: "" },
          { name: "Soft Rock", logo: "" }, { name: "Love Songs", logo: "" },
          { name: "Pop Country", logo: "" }, { name: "Today's Country", logo: "" },
          { name: "Toddler Tunes", logo: "" }, { name: "Classical Masterpieces", logo: "" },
          { name: "Smooth Jazz", logo: "" }, { name: "Blues", logo: "" },
          { name: "Singers & Swing", logo: "" }, { name: "Easy Listening", logo: "" },
        ],
      },
    ],
  },
  gb: {
    categories: [
      {
        name: "General Entertainment",
        icon: Film,
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "BBC One", logo: "" }, { name: "BBC Two", logo: "" },
          { name: "BBC Three", logo: "" }, { name: "BBC Four", logo: "" },
          { name: "ITV 1", logo: "" }, { name: "ITV 2", logo: "" },
          { name: "ITV 3", logo: "" }, { name: "ITV 4", logo: "" }, { name: "ITVBe", logo: "" },
          { name: "Channel 4", logo: "" }, { name: "E4", logo: "" },
          { name: "More4", logo: "" }, { name: "4Seven", logo: "" },
          { name: "Channel 5", logo: "" }, { name: "5USA", logo: "" },
          { name: "5Star", logo: "" }, { name: "5Select", logo: "" }, { name: "5Action", logo: "" },
          { name: "Sky Showcase", logo: "" }, { name: "Sky Max", logo: "" },
          { name: "Sky Atlantic", logo: "" }, { name: "Sky Comedy", logo: "" },
          { name: "Sky Witness", logo: "" }, { name: "Sky Arts", logo: "" },
          { name: "Sky Crime", logo: "" }, { name: "Sky Documentaries", logo: "" },
          { name: "Sky Nature", logo: "" },
          { name: "Dave", logo: "" }, { name: "Gold", logo: "" }, { name: "W", logo: "" },
          { name: "Alibi", logo: "" }, { name: "Drama", logo: "" }, { name: "Yesterday", logo: "" },
          { name: "Eden", logo: "" }, { name: "Quest", logo: "" }, { name: "Quest Red", logo: "" },
          { name: "Really", logo: "" }, { name: "Challenge", logo: "" }, { name: "Pick", logo: "" },
          { name: "Blaze", logo: "" }, { name: "PBS America", logo: "" },
          { name: "Comedy Central", logo: "" }, { name: "Comedy Central Extra", logo: "" },
        ],
      },
      {
        name: "Movie Channels",
        icon: Film,
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "Sky Cinema Premiere", logo: "" }, { name: "Sky Cinema Select", logo: "" },
          { name: "Sky Cinema Hits", logo: "" }, { name: "Sky Cinema Greats", logo: "" },
          { name: "Sky Cinema Animation", logo: "" }, { name: "Sky Cinema Family", logo: "" },
          { name: "Sky Cinema Action", logo: "" }, { name: "Sky Cinema Comedy", logo: "" },
          { name: "Sky Cinema Thriller", logo: "" }, { name: "Sky Cinema Drama", logo: "" },
          { name: "Sky Cinema Sci-Fi & Horror", logo: "" },
          { name: "Film4", logo: "" }, { name: "Great! Movies", logo: "" },
          { name: "Great! Movies Action", logo: "" }, { name: "Great! Movies Classic", logo: "" },
          { name: "Legend", logo: "" }, { name: "Talking Pictures TV", logo: "" },
          { name: "Horror Xtra", logo: "" },
        ],
      },
      {
        name: "Sports",
        icon: Trophy,
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Sky Sports Main Event", logo: "" }, { name: "Sky Sports Premier League", logo: "" },
          { name: "Sky Sports Football", logo: "" }, { name: "Sky Sports Cricket", logo: "" },
          { name: "Sky Sports Golf", logo: "" }, { name: "Sky Sports F1", logo: "" },
          { name: "Sky Sports Action", logo: "" }, { name: "Sky Sports Arena", logo: "" },
          { name: "Sky Sports Racing", logo: "" }, { name: "Sky Sports Mix", logo: "" },
          { name: "Sky Sports News", logo: "" },
          { name: "TNT Sports 1", logo: "" }, { name: "TNT Sports 2", logo: "" },
          { name: "TNT Sports 3", logo: "" }, { name: "TNT Sports 4", logo: "" },
          { name: "TNT Sports Ultimate 4K", logo: "" },
          { name: "Eurosport 1", logo: "" }, { name: "Eurosport 2", logo: "" },
          { name: "Viaplay Sports 1", logo: "" }, { name: "Viaplay Sports 2", logo: "" },
          { name: "Racing TV", logo: "" }, { name: "LFCTV (Liverpool)", logo: "" },
          { name: "MUTV (Man Utd)", logo: "" },
        ],
      },
      {
        name: "News",
        icon: Newspaper,
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "BBC News", logo: "" }, { name: "Sky News", logo: "" },
          { name: "GB News", logo: "" }, { name: "TalkTV", logo: "" },
          { name: "CNBC Europe", logo: "" }, { name: "Bloomberg TV", logo: "" },
          { name: "BBC Parliament", logo: "" }, { name: "Al Jazeera English", logo: "" },
          { name: "CNN International", logo: "" }, { name: "Euronews", logo: "" },
        ],
      },
      {
        name: "Kids",
        icon: Baby,
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "CBeebies", logo: "" }, { name: "CBBC", logo: "" },
          { name: "Nickelodeon", logo: "" }, { name: "Nick Jr.", logo: "" },
          { name: "Nick Jr. Too", logo: "" }, { name: "Nicktoons", logo: "" },
          { name: "Cartoon Network", logo: "" }, { name: "Boomerang", logo: "" },
          { name: "Cartoonito", logo: "" }, { name: "POP", logo: "" },
          { name: "Tiny Pop", logo: "" }, { name: "POP Max", logo: "" },
          { name: "BabyTV", logo: "" },
        ],
      },
      {
        name: "Music",
        icon: Music,
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "MTV Music", logo: "" }, { name: "MTV Hits", logo: "" },
          { name: "MTV 90s", logo: "" }, { name: "MTV 80s", logo: "" },
          { name: "The Box", logo: "" }, { name: "4Music", logo: "" },
          { name: "Kiss", logo: "" }, { name: "Magic", logo: "" },
          { name: "Kerrang! TV", logo: "" }, { name: "Clubland TV", logo: "" },
          { name: "Now 70s", logo: "" }, { name: "Now 80s", logo: "" }, { name: "Now 90s", logo: "" },
        ],
      },
      {
        name: "Asian / Desi (UK Feed)",
        icon: Globe,
        color: "text-orange-400 bg-orange-500/10",
        channels: [
          { name: "Geo News UK", logo: "" }, { name: "Geo TV UK", logo: "" },
          { name: "ARY News UK", logo: "" }, { name: "ARY Digital UK", logo: "" },
          { name: "Hum TV Europe", logo: "" }, { name: "Samaa TV", logo: "" },
          { name: "Dunya News", logo: "" }, { name: "92 News UK", logo: "" },
          { name: "Star Plus UK", logo: "" }, { name: "Utsav Gold", logo: "" },
          { name: "Utsav Bharat", logo: "" }, { name: "Sony TV UK", logo: "" },
          { name: "Sony MAX UK", logo: "" }, { name: "Zee TV UK", logo: "" },
          { name: "Zee Cinema UK", logo: "" }, { name: "Colors TV UK", logo: "" },
          { name: "Colors Rishtey", logo: "" }, { name: "B4U Movies UK", logo: "" },
          { name: "B4U Music UK", logo: "" }, { name: "BritAsia TV", logo: "" },
          { name: "PTC Punjabi UK", logo: "" },
        ],
      },
    ],
  },
  in: {
    categories: [
      {
        name: "Hindi Entertainment",
        icon: Film,
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Star Plus", logo: "" }, { name: "Sony Entertainment Television", logo: "" },
          { name: "Zee TV", logo: "" }, { name: "Colors", logo: "" },
          { name: "SAB TV", logo: "" }, { name: "Star Bharat", logo: "" },
          { name: "&TV (And TV)", logo: "" }, { name: "Dangal TV", logo: "" },
          { name: "Sony Pal", logo: "" }, { name: "Star Utsav", logo: "" },
          { name: "Zee Anmol", logo: "" }, { name: "Colors Rishtey", logo: "" },
          { name: "Shemaroo TV", logo: "" }, { name: "Ishara TV", logo: "" },
        ],
      },
      {
        name: "Hindi Movies",
        icon: Film,
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "Star Gold", logo: "" }, { name: "Sony Max", logo: "" },
          { name: "Zee Cinema", logo: "" }, { name: "Colors Cineplex", logo: "" },
          { name: "&pictures", logo: "" }, { name: "Star Gold 2", logo: "" },
          { name: "Sony Max 2", logo: "" }, { name: "Zee Action", logo: "" },
          { name: "Zee Bollywood", logo: "" }, { name: "Zee Classic", logo: "" },
          { name: "Sony Wah", logo: "" }, { name: "B4U Movies", logo: "" },
          { name: "B4U Kadak", logo: "" }, { name: "Goldmines", logo: "" },
        ],
      },
      {
        name: "Sports",
        icon: Trophy,
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "Star Sports 1", logo: "" }, { name: "Star Sports 2", logo: "" },
          { name: "Star Sports Select 1 HD", logo: "" }, { name: "Star Sports Select 2 HD", logo: "" },
          { name: "Star Sports First", logo: "" },
          { name: "Sony Sports Ten 1", logo: "" }, { name: "Sony Sports Ten 2", logo: "" },
          { name: "Sony Sports Ten 3", logo: "" }, { name: "Sony Sports Ten 5", logo: "" },
          { name: "Sports18", logo: "" }, { name: "Sports18 Khel", logo: "" },
          { name: "DD Sports", logo: "" }, { name: "Eurosport", logo: "" },
        ],
      },
      {
        name: "News (Hindi)",
        icon: Newspaper,
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Aaj Tak", logo: "" }, { name: "Zee News", logo: "" },
          { name: "ABP News", logo: "" }, { name: "India TV", logo: "" },
          { name: "Republic Bharat", logo: "" }, { name: "News18 India", logo: "" },
          { name: "TV9 Bharatvarsh", logo: "" }, { name: "News 24", logo: "" },
          { name: "NDTV India", logo: "" }, { name: "India News", logo: "" },
          { name: "Good News Today (GNT)", logo: "" },
        ],
      },
      {
        name: "News (English)",
        icon: Newspaper,
        color: "text-sky-400 bg-sky-500/10",
        channels: [
          { name: "Republic TV", logo: "" }, { name: "Times Now", logo: "" },
          { name: "India Today", logo: "" }, { name: "CNN-News18", logo: "" },
          { name: "NDTV 24x7", logo: "" }, { name: "WION", logo: "" },
          { name: "Mirror Now", logo: "" },
        ],
      },
      {
        name: "Regional (South, East, West, Punjab)",
        icon: MapPin,
        color: "text-teal-400 bg-teal-500/10",
        channels: [
          { name: "Sun TV (Tamil)", logo: "" }, { name: "Star Maa (Telugu)", logo: "" },
          { name: "Asianet (Malayalam)", logo: "" }, { name: "Zee Kannada", logo: "" },
          { name: "Gemini TV (Telugu)", logo: "" }, { name: "KTV (Tamil Movies)", logo: "" },
          { name: "Star Jalsha (Bengali)", logo: "" }, { name: "Zee Bangla", logo: "" },
          { name: "Colors Bangla", logo: "" },
          { name: "Star Pravah (Marathi)", logo: "" }, { name: "Zee Marathi", logo: "" },
          { name: "Colors Marathi", logo: "" },
          { name: "PTC Punjabi", logo: "" }, { name: "Zee Punjab Haryana Himachal", logo: "" },
          { name: "Pitaara TV (Punjabi Movies)", logo: "" },
        ],
      },
      {
        name: "Kids",
        icon: Baby,
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Nickelodeon (Nick)", logo: "" }, { name: "Cartoon Network", logo: "" },
          { name: "Hungama TV", logo: "" }, { name: "Disney Channel", logo: "" },
          { name: "Super Hungama", logo: "" }, { name: "Pogo", logo: "" },
          { name: "Sonic", logo: "" }, { name: "Sony YAY!", logo: "" },
          { name: "Discovery Kids", logo: "" }, { name: "Nick Jr.", logo: "" },
          { name: "Gubbare", logo: "" },
        ],
      },
      {
        name: "Music & Youth",
        icon: Music,
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "MTV", logo: "" }, { name: "9XM", logo: "" },
          { name: "Mastiii", logo: "" }, { name: "Zoom", logo: "" },
          { name: "B4U Music", logo: "" }, { name: "MTV Beats", logo: "" },
          { name: "Sony Mix", logo: "" }, { name: "Zing", logo: "" },
          { name: "VH1", logo: "" },
        ],
      },
      {
        name: "Infotainment & Discovery",
        icon: Globe,
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "Discovery Channel", logo: "" }, { name: "Animal Planet", logo: "" },
          { name: "National Geographic", logo: "" }, { name: "Nat Geo Wild", logo: "" },
          { name: "History TV18", logo: "" }, { name: "Sony BBC Earth", logo: "" },
          { name: "TLC", logo: "" }, { name: "Food Food", logo: "" },
        ],
      },
      {
        name: "Doordarshan (Government)",
        icon: Tv,
        color: "text-orange-400 bg-orange-500/10",
        channels: [
          { name: "DD National", logo: "" }, { name: "DD News", logo: "" },
          { name: "DD Bharati", logo: "" }, { name: "DD Retro", logo: "" },
          { name: "DD Kisan", logo: "" }, { name: "DD Urdu", logo: "" },
        ],
      },
    ],
  },
  pk: {
    categories: [
      {
        name: "News Channels",
        icon: Newspaper,
        color: "text-blue-400 bg-blue-500/10",
        channels: [
          { name: "Geo News", logo: "" },
          { name: "ARY News", logo: "" },
          { name: "Samaa TV", logo: "" },
          { name: "Dunya News", logo: "" },
          { name: "Express News", logo: "" },
          { name: "92 News HD", logo: "" },
          { name: "Dawn News", logo: "" },
          { name: "GNN", logo: "" },
          { name: "Bol News", logo: "" },
          { name: "Neo News", logo: "" },
          { name: "Aaj News", logo: "" },
          { name: "Abb Takk News", logo: "" },
          { name: "Public News", logo: "" },
          { name: "Capital TV", logo: "" },
          { name: "PTV News", logo: "" },
          { name: "PTV World", logo: "" },
          { name: "Lahore News", logo: "" },
          { name: "Metro 1 News", logo: "" },
          { name: "Din News", logo: "" },
          { name: "Roze News", logo: "" },
          { name: "K21 News", logo: "" },
          { name: "Mashriq TV", logo: "" },
        ],
      },
      {
        name: "Entertainment (Dramas)",
        icon: Film,
        color: "text-purple-400 bg-purple-500/10",
        channels: [
          { name: "Hum TV", logo: "" },
          { name: "Geo Entertainment", logo: "" },
          { name: "ARY Digital", logo: "" },
          { name: "Green TV Entertainment", logo: "" },
          { name: "A-Plus TV", logo: "" },
          { name: "TV One", logo: "" },
          { name: "Express Entertainment", logo: "" },
          { name: "PTV Home", logo: "" },
          { name: "ARY Zindagi", logo: "" },
          { name: "Geo Kahani", logo: "" },
          { name: "Hum Sitaray", logo: "" },
          { name: "Play Entertainment", logo: "" },
          { name: "Aan TV", logo: "" },
          { name: "Aur Life", logo: "" },
          { name: "LTN Family", logo: "" },
          { name: "Urdu 1", logo: "" },
          { name: "Filmazia", logo: "" },
          { name: "Filmax", logo: "" },
        ],
      },
      {
        name: "Sports Channels",
        icon: Trophy,
        color: "text-green-400 bg-green-500/10",
        channels: [
          { name: "PTV Sports", logo: "" },
          { name: "A-Sports HD", logo: "" },
          { name: "Geo Super", logo: "" },
          { name: "Ten Sports Pakistan", logo: "" },
        ],
      },
      {
        name: "Regional Channels",
        icon: MapPin,
        color: "text-amber-400 bg-amber-500/10",
        channels: [
          { name: "KTN News (Sindhi)", logo: "" },
          { name: "KTN Entertainment", logo: "" },
          { name: "Sindh TV News", logo: "" },
          { name: "Sindh TV", logo: "" },
          { name: "Awaz TV", logo: "" },
          { name: "Mehran TV", logo: "" },
          { name: "Dharti TV", logo: "" },
          { name: "Time News", logo: "" },
          { name: "AVT Khyber (Pashto)", logo: "" },
          { name: "Khyber News", logo: "" },
          { name: "Pashto 1", logo: "" },
          { name: "Kay2 TV", logo: "" },
          { name: "Punjab TV (Punjabi)", logo: "" },
          { name: "Apna Channel", logo: "" },
          { name: "Waseb TV (Saraiki)", logo: "" },
          { name: "Rohi TV", logo: "" },
          { name: "VSH News (Balochi)", logo: "" },
          { name: "PTV Bolan", logo: "" },
        ],
      },
      {
        name: "Religious (Mazhabi)",
        icon: BookOpen,
        color: "text-emerald-400 bg-emerald-500/10",
        channels: [
          { name: "ARY Qtv", logo: "" },
          { name: "Madani Channel", logo: "" },
          { name: "Paigham TV", logo: "" },
          { name: "Hadi TV", logo: "" },
          { name: "Hidayat TV", logo: "" },
          { name: "Noor TV", logo: "" },
          { name: "Labbaik TV", logo: "" },
          { name: "Haq TV", logo: "" },
        ],
      },
      {
        name: "Music, Food & Lifestyle",
        icon: Music,
        color: "text-pink-400 bg-pink-500/10",
        channels: [
          { name: "Masala TV (Hum Masala)", logo: "" },
          { name: "8XM", logo: "" },
          { name: "Jalwa", logo: "" },
          { name: "Oxygene", logo: "" },
          { name: "Discover Pakistan 4K", logo: "" },
          { name: "Health TV", logo: "" },
        ],
      },
      {
        name: "Kids & Education",
        icon: Baby,
        color: "text-cyan-400 bg-cyan-500/10",
        channels: [
          { name: "Cartoon Network Pakistan", logo: "" },
          { name: "Nickelodeon Pakistan", logo: "" },
          { name: "Pop Kids", logo: "" },
          { name: "Kidzone", logo: "" },
          { name: "Virtual University VU1", logo: "" },
          { name: "Virtual University VU2", logo: "" },
          { name: "Virtual University VU3", logo: "" },
          { name: "Virtual University VU4", logo: "" },
          { name: "AJK TV", logo: "" },
        ],
      },
    ],
  },
  ...convertExternalData(europeChannelsData),
  ...convertExternalData(asiaChannelsData),
  ...convertExternalData(americasChannelsData),
  ...convertExternalData(menaAfricaChannelsData),
};

const countries = [
  { code: "us", name: "United States" }, { code: "gb", name: "United Kingdom" }, { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" }, { code: "de", name: "Germany" }, { code: "fr", name: "France" },
  { code: "it", name: "Italy" }, { code: "es", name: "Spain" }, { code: "pt", name: "Portugal" },
  { code: "nl", name: "Netherlands" }, { code: "be", name: "Belgium" }, { code: "ch", name: "Switzerland" },
  { code: "at", name: "Austria" }, { code: "se", name: "Sweden" }, { code: "no", name: "Norway" },
  { code: "dk", name: "Denmark" }, { code: "fi", name: "Finland" }, { code: "ie", name: "Ireland" },
  { code: "pl", name: "Poland" }, { code: "cz", name: "Czech Republic" }, { code: "sk", name: "Slovakia" },
  { code: "hu", name: "Hungary" }, { code: "ro", name: "Romania" }, { code: "bg", name: "Bulgaria" },
  { code: "hr", name: "Croatia" }, { code: "rs", name: "Serbia" }, { code: "si", name: "Slovenia" },
  { code: "gr", name: "Greece" }, { code: "tr", name: "Turkey" }, { code: "ru", name: "Russia" },
  { code: "ua", name: "Ukraine" }, { code: "by", name: "Belarus" }, { code: "lt", name: "Lithuania" },
  { code: "lv", name: "Latvia" }, { code: "ee", name: "Estonia" }, { code: "ge", name: "Georgia" },
  { code: "am", name: "Armenia" }, { code: "az", name: "Azerbaijan" }, { code: "kz", name: "Kazakhstan" },
  { code: "uz", name: "Uzbekistan" }, { code: "in", name: "India" }, { code: "pk", name: "Pakistan" },
  { code: "bd", name: "Bangladesh" }, { code: "lk", name: "Sri Lanka" }, { code: "np", name: "Nepal" },
  { code: "af", name: "Afghanistan" }, { code: "cn", name: "China" }, { code: "jp", name: "Japan" },
  { code: "kr", name: "South Korea" }, { code: "tw", name: "Taiwan" }, { code: "hk", name: "Hong Kong" },
  { code: "mn", name: "Mongolia" }, { code: "th", name: "Thailand" }, { code: "vn", name: "Vietnam" },
  { code: "ph", name: "Philippines" }, { code: "my", name: "Malaysia" }, { code: "sg", name: "Singapore" },
  { code: "id", name: "Indonesia" }, { code: "mm", name: "Myanmar" }, { code: "kh", name: "Cambodia" },
  { code: "la", name: "Laos" }, { code: "br", name: "Brazil" }, { code: "ar", name: "Argentina" },
  { code: "mx", name: "Mexico" }, { code: "co", name: "Colombia" }, { code: "cl", name: "Chile" },
  { code: "pe", name: "Peru" }, { code: "ve", name: "Venezuela" }, { code: "ec", name: "Ecuador" },
  { code: "bo", name: "Bolivia" }, { code: "py", name: "Paraguay" }, { code: "uy", name: "Uruguay" },
  { code: "cr", name: "Costa Rica" }, { code: "pa", name: "Panama" }, { code: "cu", name: "Cuba" },
  { code: "do", name: "Dominican Rep." }, { code: "gt", name: "Guatemala" }, { code: "hn", name: "Honduras" },
  { code: "sv", name: "El Salvador" }, { code: "ni", name: "Nicaragua" }, { code: "jm", name: "Jamaica" },
  { code: "tt", name: "Trinidad & Tobago" }, { code: "ht", name: "Haiti" }, { code: "sa", name: "Saudi Arabia" },
  { code: "ae", name: "UAE" }, { code: "qa", name: "Qatar" }, { code: "kw", name: "Kuwait" },
  { code: "bh", name: "Bahrain" }, { code: "om", name: "Oman" }, { code: "jo", name: "Jordan" },
  { code: "lb", name: "Lebanon" }, { code: "iq", name: "Iraq" }, { code: "ir", name: "Iran" },
  { code: "sy", name: "Syria" }, { code: "ye", name: "Yemen" }, { code: "il", name: "Israel" },
  { code: "ps", name: "Palestine" }, { code: "eg", name: "Egypt" }, { code: "ly", name: "Libya" },
  { code: "tn", name: "Tunisia" }, { code: "dz", name: "Algeria" }, { code: "ma", name: "Morocco" },
  { code: "ng", name: "Nigeria" }, { code: "gh", name: "Ghana" }, { code: "ke", name: "Kenya" },
  { code: "et", name: "Ethiopia" }, { code: "tz", name: "Tanzania" }, { code: "ug", name: "Uganda" },
  { code: "za", name: "South Africa" }, { code: "cm", name: "Cameroon" }, { code: "ci", name: "Ivory Coast" },
  { code: "sn", name: "Senegal" }, { code: "ml", name: "Mali" }, { code: "mg", name: "Madagascar" },
  { code: "mz", name: "Mozambique" }, { code: "ao", name: "Angola" }, { code: "cd", name: "DR Congo" },
  { code: "sd", name: "Sudan" }, { code: "rw", name: "Rwanda" }, { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" }, { code: "bw", name: "Botswana" }, { code: "na", name: "Namibia" },
  { code: "mu", name: "Mauritius" }, { code: "so", name: "Somalia" }, { code: "bf", name: "Burkina Faso" },
  { code: "ne", name: "Niger" }, { code: "td", name: "Chad" }, { code: "gn", name: "Guinea" },
  { code: "mw", name: "Malawi" }, { code: "tg", name: "Togo" }, { code: "bj", name: "Benin" },
  { code: "sl", name: "Sierra Leone" }, { code: "lr", name: "Liberia" }, { code: "er", name: "Eritrea" },
  { code: "ga", name: "Gabon" }, { code: "gm", name: "Gambia" }, { code: "ls", name: "Lesotho" },
  { code: "nz", name: "New Zealand" }, { code: "fj", name: "Fiji" }, { code: "pg", name: "Papua New Guinea" },
  { code: "ws", name: "Samoa" }, { code: "to", name: "Tonga" }, { code: "is", name: "Iceland" },
  { code: "lu", name: "Luxembourg" }, { code: "mt", name: "Malta" }, { code: "cy", name: "Cyprus" },
  { code: "al", name: "Albania" }, { code: "me", name: "Montenegro" }, { code: "mk", name: "N. Macedonia" },
  { code: "ba", name: "Bosnia" }, { code: "md", name: "Moldova" }, { code: "kg", name: "Kyrgyzstan" },
  { code: "tj", name: "Tajikistan" }, { code: "tm", name: "Turkmenistan" }, { code: "bn", name: "Brunei" },
  { code: "mv", name: "Maldives" }, { code: "bt", name: "Bhutan" }, { code: "tl", name: "Timor-Leste" },
  { code: "pr", name: "Puerto Rico" }, { code: "gp", name: "Guadeloupe" }, { code: "mq", name: "Martinique" },
  { code: "re", name: "Reunion" }, { code: "gy", name: "Guyana" }, { code: "sr", name: "Suriname" },
  { code: "bz", name: "Belize" }, { code: "bb", name: "Barbados" }, { code: "bs", name: "Bahamas" },
  { code: "ag", name: "Antigua" }, { code: "lc", name: "Saint Lucia" }, { code: "gd", name: "Grenada" },
  { code: "vc", name: "St. Vincent" }, { code: "kn", name: "St. Kitts" }, { code: "dm", name: "Dominica" },
  { code: "sc", name: "Seychelles" }, { code: "cv", name: "Cape Verde" }, { code: "dj", name: "Djibouti" },
  { code: "gq", name: "Eq. Guinea" }, { code: "sz", name: "Eswatini" }, { code: "cg", name: "Congo" },
  { code: "cf", name: "Central Africa" }, { code: "bi", name: "Burundi" }, { code: "mr", name: "Mauritania" },
  { code: "km", name: "Comoros" }, { code: "st", name: "Sao Tome" },
];

const channelDomains: Record<string, string> = {
  "CNN": "cnn.com", "CNN International": "cnn.com", "CNN en Español": "cnn.com",
  "Fox News Channel": "foxnews.com", "Fox Business Network": "foxbusiness.com",
  "MSNBC": "msnbc.com", "CNBC": "cnbc.com", "CNBC World": "cnbc.com",
  "Bloomberg TV": "bloomberg.com", "HLN": "cnn.com",
  "ABC (National Feed)": "abc.com", "CBS (National Feed)": "cbs.com",
  "NBC (National Feed)": "nbc.com", "PBS": "pbs.org",
  "BBC World News": "bbc.com", "BBC America": "bbc.com",
  "Newsmax TV": "newsmax.com", "NewsNation": "newsnationnow.com",
  "One America News": "oann.com", "The Weather Channel": "weather.com",
  "C-SPAN 1": "c-span.org", "C-SPAN 2": "c-span.org", "C-SPAN 3": "c-span.org",
  "AMC": "amc.com", "A&E": "aetv.com", "Bravo": "bravotv.com",
  "E!": "eonline.com", "FX": "fxnetworks.com", "FXX": "fxnetworks.com",
  "Freeform": "freeform.com", "Hallmark Channel": "hallmarkchannel.com",
  "IFC": "ifc.com", "Lifetime": "mylifetime.com",
  "OWN": "oprah.com", "Oxygen": "oxygen.com", "Paramount Network": "paramountnetwork.com",
  "Syfy": "syfy.com", "TBS": "tbs.com", "TNT": "tntdrama.com",
  "TLC": "tlc.com", "USA Network": "usanetwork.com",
  "The CW": "cwtv.com",
  "Investigation Discovery": "investigationdiscovery.com",
  "ION Television": "iontelevision.com",
  "ESPN": "espn.com", "ESPN 2": "espn.com", "ESPN U": "espn.com",
  "ESPN News": "espn.com", "ESPN Deportes": "espn.com",
  "ESPN College Extra": "espn.com", "ESPN Goal Line": "espn.com",
  "Fox Sports 1 (FS1)": "foxsports.com", "Fox Sports 2 (FS2)": "foxsports.com",
  "Fox Soccer Plus": "foxsports.com", "Fox Deportes": "foxsports.com",
  "CBS Sports Network": "cbssports.com", "NBC Sports Network": "nbcsports.com",
  "NFL Network": "nfl.com", "NFL RedZone": "nfl.com",
  "NBA TV": "nba.com", "MLB Network": "mlb.com", "NHL Network": "nhl.com",
  "Golf Channel": "golfchannel.com", "Tennis Channel": "tennischannel.com",
  "Olympic Channel": "olympics.com", "beIN Sports": "beinsports.com",
  "beIN Sports en Español": "beinsports.com",
  "Big Ten Network": "bigtennetwork.com",
  "HBO East": "hbo.com", "HBO West": "hbo.com", "HBO 2": "hbo.com",
  "HBO Signature": "hbo.com", "HBO Family": "hbo.com",
  "HBO Comedy": "hbo.com", "HBO Zone": "hbo.com", "HBO Latino": "hbo.com",
  "Showtime East": "showtime.com", "Showtime West": "showtime.com",
  "Showtime 2": "showtime.com", "Showtime Showcase": "showtime.com",
  "Showtime Extreme": "showtime.com", "Showtime Beyond": "showtime.com",
  "Showtime Next": "showtime.com", "Showtime Women": "showtime.com",
  "Starz East": "starz.com", "Starz West": "starz.com",
  "Starz Edge": "starz.com", "Starz In Black": "starz.com",
  "Starz Cinema": "starz.com", "Starz Kids & Family": "starz.com", "Starz Comedy": "starz.com",
  "MGM+": "mgmplus.com",
  "TCM (Turner Classic Movies)": "tcm.com",
  "Cartoon Network": "cartoonnetwork.com", "Nickelodeon": "nick.com",
  "Nick Jr.": "nickjr.com", "Nicktoons": "nick.com", "TeenNick": "nick.com",
  "Disney Channel (East)": "disneychannel.com", "Disney Channel (West)": "disneychannel.com",
  "Disney Junior": "disneyjunior.com", "Disney XD": "disney.com",
  "Boomerang": "boomerangtv.com", "PBS Kids": "pbskids.org",
  "MTV": "mtv.com", "MTV 2": "mtv.com", "MTV Classic": "mtv.com",
  "VH1": "vh1.com", "CMT": "cmt.com",
  "BET": "bet.com", "Comedy Central": "cc.com",
  "Adult Swim": "adultswim.com",
  "Discovery Channel": "discovery.com", "Discovery Family": "discovery.com",
  "Science Channel": "sciencechannel.com", "Animal Planet": "animalplanet.com",
  "National Geographic": "nationalgeographic.com", "Nat Geo Wild": "nationalgeographic.com",
  "Smithsonian Channel": "smithsonianchannel.com", "History Channel": "history.com",
  "MotorTrend": "motortrend.com", "Travel Channel": "travelchannel.com",
  "HGTV": "hgtv.com", "Food Network": "foodnetwork.com",
  "Cooking Channel": "cookingchanneltv.com", "DIY Network": "diynetwork.com",
  "Game Show Network": "gsntv.com",
  "Univision": "univision.com", "Telemundo": "telemundo.com",
  "TBN (Trinity Broadcasting)": "tbn.org", "EWTN": "ewtn.com",
  "QVC 1": "qvc.com", "QVC 2": "qvc.com", "QVC 3": "qvc.com",
  "HSN 1": "hsn.com", "HSN 2": "hsn.com",
  "WWE Network": "wwe.com",
  "BBC One": "bbc.co.uk", "BBC Two": "bbc.co.uk", "BBC Three": "bbc.co.uk", "BBC Four": "bbc.co.uk",
  "ITV 1": "itv.com", "ITV 2": "itv.com", "ITV 3": "itv.com", "ITV 4": "itv.com", "ITVBe": "itv.com",
  "Channel 4": "channel4.com", "E4": "channel4.com", "More4": "channel4.com",
  "Channel 5": "channel5.com",
  "Sky Showcase": "sky.com", "Sky Max": "sky.com", "Sky Atlantic": "sky.com",
  "Sky Comedy": "sky.com", "Sky Witness": "sky.com", "Sky Arts": "sky.com",
  "Sky Crime": "sky.com", "Sky Documentaries": "sky.com", "Sky Nature": "sky.com",
  "Sky Cinema Premiere": "sky.com", "Sky Cinema Select": "sky.com",
  "Sky Cinema Hits": "sky.com", "Sky Cinema Greats": "sky.com",
  "Sky Cinema Animation": "sky.com", "Sky Cinema Family": "sky.com",
  "Sky Cinema Action": "sky.com", "Sky Cinema Comedy": "sky.com",
  "Sky Cinema Thriller": "sky.com", "Sky Cinema Drama": "sky.com",
  "Sky Cinema Sci-Fi & Horror": "sky.com",
  "Sky Sports Main Event": "sky.com", "Sky Sports Premier League": "sky.com",
  "Sky Sports Football": "sky.com", "Sky Sports Cricket": "sky.com",
  "Sky Sports Golf": "sky.com", "Sky Sports F1": "sky.com",
  "Sky Sports Action": "sky.com", "Sky Sports Arena": "sky.com",
  "Sky Sports Racing": "sky.com", "Sky Sports Mix": "sky.com", "Sky Sports News": "sky.com",
  "BBC News": "bbc.com", "Sky News": "news.sky.com", "GB News": "gbnews.com",
  "Al Jazeera English": "aljazeera.com", "Euronews": "euronews.com",
  "CBeebies": "bbc.co.uk", "CBBC": "bbc.co.uk",
  "Eurosport 1": "eurosport.com", "Eurosport 2": "eurosport.com", "Eurosport": "eurosport.com",
  "MUTV (Man Utd)": "manutd.com", "LFCTV (Liverpool)": "liverpoolfc.com",
  "Star Plus": "hotstar.com", "Star Plus UK": "hotstar.com", "Star Plus USA": "hotstar.com",
  "Sony Entertainment Television": "sonyliv.com",
  "Zee TV": "zee5.com", "Zee TV UK": "zee5.com", "Zee TV USA": "zee5.com",
  "Colors": "voot.com", "Colors TV UK": "voot.com", "Colors Rishtey": "voot.com",
  "SAB TV": "sonyliv.com", "Star Bharat": "hotstar.com",
  "Dangal TV": "dangaltv.in", "Sony Pal": "sonyliv.com",
  "Star Utsav": "hotstar.com", "Zee Anmol": "zee5.com",
  "Star Gold": "hotstar.com", "Sony Max": "sonyliv.com", "Sony MAX UK": "sonyliv.com",
  "Zee Cinema": "zee5.com", "Zee Cinema UK": "zee5.com",
  "Colors Cineplex": "voot.com", "Star Gold 2": "hotstar.com",
  "Sony Max 2": "sonyliv.com", "Zee Action": "zee5.com",
  "Zee Bollywood": "zee5.com", "Zee Classic": "zee5.com", "Sony Wah": "sonyliv.com",
  "B4U Movies": "b4u.com", "B4U Movies UK": "b4u.com", "B4U Kadak": "b4u.com",
  "B4U Music": "b4u.com", "B4U Music UK": "b4u.com",
  "Star Sports 1": "hotstar.com", "Star Sports 2": "hotstar.com",
  "Star Sports Select 1 HD": "hotstar.com", "Star Sports Select 2 HD": "hotstar.com",
  "Star Sports First": "hotstar.com",
  "Sony Sports Ten 1": "sonyliv.com", "Sony Sports Ten 2": "sonyliv.com",
  "Sony Sports Ten 3": "sonyliv.com", "Sony Sports Ten 5": "sonyliv.com",
  "Aaj Tak": "aajtak.in", "Zee News": "zeenews.com",
  "ABP News": "abplive.com", "India TV": "indiatvnews.com",
  "Republic Bharat": "republic.in", "Republic TV": "republic.in",
  "News18 India": "news18.com", "NDTV India": "ndtv.com",
  "Times Now": "timesnownews.com", "India Today": "indiatoday.in",
  "CNN-News18": "news18.com", "NDTV 24x7": "ndtv.com", "WION": "wionews.com",
  "Sun TV (Tamil)": "suntv.in",
  "Asianet (Malayalam)": "hotstar.com", "Zee Kannada": "zee5.com",
  "Star Jalsha (Bengali)": "hotstar.com", "Zee Bangla": "zee5.com", "Colors Bangla": "voot.com",
  "Star Pravah (Marathi)": "hotstar.com", "Zee Marathi": "zee5.com", "Colors Marathi": "voot.com",
  "PTC Punjabi": "ptcpunjabi.co.in", "PTC Punjabi UK": "ptcpunjabi.co.in",
  "Nickelodeon (Nick)": "nick.com", "Disney Channel": "disneychannel.com",
  "Discovery Kids": "discovery.com", "Sony YAY!": "sonyliv.com",
  "9XM": "9xm.in", "MTV Beats": "mtv.com",
  "Sony BBC Earth": "sonyliv.com",
  "History TV18": "history.com",
  "DD National": "prasarbharati.gov.in", "DD News": "prasarbharati.gov.in",
  "DD Sports": "prasarbharati.gov.in",
  "Geo News": "geo.tv", "Geo News UK": "geo.tv", "Geo Entertainment": "geo.tv",
  "Geo TV UK": "geo.tv", "Geo Super": "geo.tv", "Geo Kahani": "geo.tv",
  "ARY News": "arynews.tv", "ARY News UK": "arynews.tv", "ARY Digital": "arynews.tv",
  "ARY Digital UK": "arynews.tv", "ARY Zindagi": "arynews.tv", "ARY Qtv": "arynews.tv",
  "Samaa TV": "samaa.tv", "Dunya News": "dunyanews.tv",
  "Express News": "expressnews.tv", "92 News HD": "92newshd.tv", "92 News UK": "92newshd.tv",
  "Dawn News": "dawn.com", "Bol News": "bolnews.com",
  "Hum TV": "humtv.pk", "Hum TV Europe": "humtv.pk", "Hum Sitaray": "humtv.pk",
  "PTV Sports": "ptv.com.pk", "PTV News": "ptv.com.pk", "PTV World": "ptv.com.pk",
  "PTV Home": "ptv.com.pk", "PTV Bolan": "ptv.com.pk",
  "A-Sports HD": "arynews.tv", "Ten Sports Pakistan": "tensports.com",
  "Sony TV UK": "sonyliv.com", "Sony Entertainment TV Asia": "sonyliv.com",
  "Aapka Colors": "voot.com",
  "TNT Sports 1": "tntdrama.com", "TNT Sports 2": "tntdrama.com",
  "TNT Sports 3": "tntdrama.com", "TNT Sports 4": "tntdrama.com",
  "TNT Sports Ultimate 4K": "tntdrama.com",
  "Willow TV (Cricket)": "willow.tv",
  "Masala TV (Hum Masala)": "humtv.pk",
  "Cartoon Network Pakistan": "cartoonnetwork.com",
  "Health TV": "healthtv.pk",
  "Madani Channel": "madanichannel.tv",
  "Express Entertainment": "expressnews.tv",
  "Capital TV": "capital.com.pk",
  "Sports18": "jiocinema.com", "Sports18 Khel": "jiocinema.com",
  "Star Maa (Telugu)": "hotstar.com", "Gemini TV (Telugu)": "hotstar.com",
  "Hungama TV": "hungama.com", "Pogo": "pogo.tv",
  "MTV Music": "mtv.com", "MTV Hits": "mtv.com", "MTV 90s": "mtv.com", "MTV 80s": "mtv.com",
  "Zoom": "zoomtventertainment.com",
  "CNBC Europe": "cnbc.com",
  "BBC Parliament": "bbc.co.uk",
  "Film4": "channel4.com",
  "Racing TV": "racingtv.com",
  "Viaplay Sports 1": "viaplay.com", "Viaplay Sports 2": "viaplay.com",
  "BabyTV": "babytv.com", "BabyFirst TV": "babyfirsttv.com",
  "Utsav Gold": "hotstar.com", "Utsav Bharat": "hotstar.com",
  "Nick Jr. Too": "nickjr.com",
  "4Music": "channel4.com",
  "Cartoonito": "cartoonnetwork.com",
  "BritAsia TV": "britasia.tv",
  "YES Network": "yesnetwork.com", "YES Network (NY Yankees)": "yesnetwork.com",
  "SNY (SportsNet New York)": "sny.tv", "MSG Network (NY)": "msgnetworks.com",
  "NESN (New England)": "nesn.com",
  "WeatherNation": "weathernationtv.com",
  "Daystar": "daystar.com", "BYUtv": "byutv.org",
  "Revolt": "revolt.tv", "Fuse": "fuse.tv",
  "Vice TV": "vice.com",
  "TalkTV": "talk.tv",
  ...europeChannelDomains,
  ...asiaChannelDomains,
  ...americasChannelDomains,
  ...menaAfricaChannelDomains,
};

const bgColors = [
  "dc2626", "2563eb", "16a34a", "d97706", "9333ea",
  "db2777", "0891b2", "ea580c", "4f46e5", "0d9488",
  "e11d48", "059669", "0284c7", "c2410c", "7c3aed",
  "65a30d", "be123c", "0e7490", "b45309", "6d28d9",
];

function getColorForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return bgColors[Math.abs(hash) % bgColors.length];
}

function getFallbackUrl(name: string) {
  const initials = name.split(/[\s&()+\-/]+/).filter(w => w.length > 0).slice(0, 3).map(w => w[0]).join("").toUpperCase();
  const bg = getColorForName(name);
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${bg}&color=fff&size=128&bold=true&font-size=0.38&format=svg`;
}

function ChannelLogo({ name, logo }: { name: string; logo: string }) {
  const [srcIndex, setSrcIndex] = useState(0);

  const domain = channelDomains[name];
  const sources: string[] = [];
  if (logo) sources.push(logo);
  if (domain) sources.push(`https://cdn.brandfetch.io/${domain}/w/128/h/128`);
  sources.push(getFallbackUrl(name));

  const currentSrc = sources[srcIndex] || sources[sources.length - 1];
  const isBrandLogo = currentSrc.includes("brandfetch.io");

  return (
    <img
      src={currentSrc}
      alt={name}
      onError={() => setSrcIndex(i => Math.min(i + 1, sources.length - 1))}
      className={`w-9 h-9 rounded-md flex-shrink-0 ${isBrandLogo ? 'object-contain bg-white p-0.5' : 'object-cover'}`}
      data-testid={`logo-${name.replace(/\s+/g, '-').toLowerCase()}`}
    />
  );
}

function CountryChannelModal({
  countryCode,
  countryName,
  onClose,
}: {
  countryCode: string;
  countryName: string;
  onClose: () => void;
}) {
  const data = countryChannelsData[countryCode];
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
    Object.fromEntries((data?.categories || []).map((c) => [c.name, true]))
  );

  if (!data) return null;

  const totalChannels = data.categories.reduce((sum, cat) => sum + cat.channels.length, 0);

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-sm p-4 pt-20 pb-10"
      onClick={onClose}
      data-testid="modal-country-channels"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="p-0 border-primary/20">
          <div className="sticky top-0 z-10 bg-card border-b border-border rounded-t-md p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={`https://flagcdn.com/w80/${countryCode}.png`}
                  alt={countryName}
                  className="w-10 h-7 object-cover rounded-sm border border-border/30"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold" data-testid="text-modal-country-name">{countryName}</h2>
                  <p className="text-xs text-muted-foreground">{totalChannels} channels in {data.categories.length} categories</p>
                </div>
              </div>
              <Button variant="outline" size="icon" onClick={onClose} data-testid="button-close-modal">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-4">
            {data.categories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategories[category.name] !== false;
              const [textColor, bgColor] = category.color.split(" ");
              return (
                <div key={category.name} className="rounded-md border border-border/50" data-testid={`section-category-${category.name}`}>
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 hover-elevate rounded-md"
                    data-testid={`button-toggle-${category.name}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-md ${bgColor} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${textColor}`} />
                      </div>
                      <span className="font-semibold text-sm sm:text-base">{category.name}</span>
                      <Badge variant="secondary" className="text-[10px]">{category.channels.length}</Badge>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-3 pt-0 sm:p-4 sm:pt-0">
                          {category.channels.map((channel) => (
                            <div
                              key={channel.name}
                              className="flex items-center gap-2.5 p-2 rounded-md bg-muted/30"
                              data-testid={`channel-item-${channel.name.replace(/\s+/g, '-').toLowerCase()}`}
                            >
                              <ChannelLogo name={channel.name} logo={channel.logo} />
                              <span className="text-xs sm:text-sm font-medium truncate">{channel.name}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="pt-4 text-center">
              <a href="https://wa.me/923137287777" target="_blank" rel="noopener noreferrer">
                <Button data-testid="button-modal-trial">
                  Get All {countryName} Channels
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function LiveChannels() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<{ code: string; name: string } | null>(null);

  const { data: channels = [] } = useQuery<Channel[]>({
    queryKey: ["/api/channels"],
  });

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountryClick = (country: { code: string; name: string }) => {
    if (countryChannelsData[country.code]) {
      setSelectedCountry(country);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge variant="secondary" className="text-xs mb-4" data-testid="badge-live-channels">
              <Signal className="w-3 h-3 mr-1" />
              Live TV Channels
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-live-channels-title">
              46,000+ <span className="gradient-text">Live Channels</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Stream live sports, entertainment, news, music, and more from around the world.
              Click on any country flag to see available channels.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { icon: Tv, value: "46K+", label: "Channels" },
              { icon: Monitor, value: "4K", label: "Ultra HD" },
              { icon: Globe, value: "180+", label: "Countries" },
              { icon: Wifi, value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <Card key={stat.label} className="p-4 text-center bg-card/80" data-testid={`card-channel-stat-${i}`}>
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div></div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-country-search"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filteredCountries.map((country, i) => {
            const hasChannels = !!countryChannelsData[country.code];
            return (
              <motion.div
                key={country.code}
                {...stagger}
                transition={{ duration: 0.3, delay: Math.min(i * 0.01, 0.5) }}
              >
                <Card
                  className={`p-3 text-center hover-elevate group ${hasChannels ? "cursor-pointer border-primary/30 ring-1 ring-primary/10" : ""}`}
                  onClick={() => handleCountryClick(country)}
                  data-testid={`card-country-${country.code}`}
                >
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    srcSet={`https://flagcdn.com/w160/${country.code}.png 2x`}
                    alt={country.name}
                    className="w-12 h-8 object-cover rounded-sm mx-auto mb-2 border border-border/30"
                    loading="lazy"
                  />
                  <p className="text-[10px] text-muted-foreground truncate leading-tight" data-testid={`text-country-name-${country.code}`}>
                    {country.name}
                  </p>
                  {hasChannels && (
                    <Badge variant="default" className="text-[8px] mt-1.5 px-1.5 py-0">
                      <Tv className="w-2.5 h-2.5 mr-0.5" />
                      View
                    </Badge>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-16">
            <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No countries found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your search.</p>
          </div>
        )}

        <motion.div {...fadeUp} className="mt-16 text-center">
          <Card className="p-8 sm:p-10 bg-gradient-to-br from-primary/5 via-card to-card border-primary/10">
            <Signal className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3" data-testid="text-channel-cta-title">
              This is Just a <span className="gradient-text">Preview</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
              We offer 46,000+ live channels from 180+ countries including premium sports,
              entertainment, news, kids, and more. Start your free 24-hour trial to explore all channels.
            </p>
            <a href="https://wa.me/923137287777" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-channel-trial">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedCountry && (
          <CountryChannelModal
            countryCode={selectedCountry.code}
            countryName={selectedCountry.name}
            onClose={() => setSelectedCountry(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
