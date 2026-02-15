import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Film, Globe, Swords, FlaskConical, Drama, Ghost, Laugh, Sparkles, Clock, Star, ChevronLeft, ChevronRight, Heart, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "@shared/schema";

import poster1 from "@assets/poster-1.png";
import poster2 from "@assets/poster-2.png";
import poster3 from "@assets/poster-3.png";
import poster4 from "@assets/poster-4.png";
import poster5 from "@assets/poster-5.png";
import poster6 from "@assets/poster-6.png";
import poster7 from "@assets/poster-8.png";
import poster8 from "@assets/poster-9.png";
import poster9 from "@assets/poster-10.png";
import poster10 from "@assets/poster-11.png";
import poster11 from "@assets/poster-12.png";
import poster12 from "@assets/poster-13.png";
import poster13 from "@assets/poster-17.png";

const recentlyAdded = [
  { id: 13, title: "Fantastic Four", year: 2025, rating: "8.0", poster: poster13 },
  { id: 7, title: "A Knight of the Seven Kingdoms", year: 2026, rating: "8.8", poster: poster7 },
  { id: 8, title: "The Wrecking Crew", year: 2025, rating: "7.8", poster: poster8 },
  { id: 9, title: "Bridgerton", year: 2024, rating: "8.5", poster: poster9 },
  { id: 10, title: "Zootopia 2", year: 2025, rating: "8.2", poster: poster10 },
  { id: 11, title: "Greenland 2: Migration", year: 2025, rating: "7.9", poster: poster11 },
  { id: 12, title: "Anaconda", year: 2025, rating: "7.6", poster: poster12 },
];

const genres = [
  { id: "all", label: "All Movies", icon: Globe },
  { id: "action", label: "Action", icon: Swords },
  { id: "sci-fi", label: "Sci-Fi", icon: FlaskConical },
  { id: "drama", label: "Drama", icon: Drama },
  { id: "horror", label: "Horror", icon: Ghost },
  { id: "comedy", label: "Comedy", icon: Laugh },
  { id: "thriller", label: "Thriller", icon: Sparkles },
  { id: "animation", label: "Animation", icon: Film },
  { id: "mystery", label: "Mystery", icon: Search },
  { id: "fantasy", label: "Fantasy", icon: Sparkles },
  { id: "romance", label: "Romance", icon: Heart },
  { id: "adventure", label: "Adventure", icon: Mountain },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const genreColors: Record<string, string> = {
  action: "bg-red-500/10 text-red-400",
  "sci-fi": "bg-blue-500/10 text-blue-400",
  drama: "bg-amber-500/10 text-amber-400",
  horror: "bg-purple-500/10 text-purple-400",
  comedy: "bg-green-500/10 text-green-400",
  thriller: "bg-orange-500/10 text-orange-400",
  animation: "bg-pink-500/10 text-pink-400",
  mystery: "bg-cyan-500/10 text-cyan-400",
  fantasy: "bg-violet-500/10 text-violet-400",
  romance: "bg-rose-500/10 text-rose-400",
  adventure: "bg-emerald-500/10 text-emerald-400",
};

const MOVIES_PER_PAGE = 16;

export default function LatestMovies() {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: movies = [], isLoading } = useQuery<Movie[]>({
    queryKey: ["/api/movies"],
  });

  const filteredMovies = movies
    .filter((movie) => {
      const matchesGenre = selectedGenre === "all" || movie.genre === selectedGenre;
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    })
    .sort((a, b) => b.year - a.year);

  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * MOVIES_PER_PAGE,
    currentPage * MOVIES_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedGenre, searchQuery]);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const moviesSectionRef = useRef<HTMLElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let intervalId: ReturnType<typeof setInterval>;
    let paused = false;
    const itemWidth = 336;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (paused) return;
        const maxScroll = container.scrollWidth / 2;
        const nextPos = container.scrollLeft + itemWidth;
        if (nextPos >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollTo({ left: nextPos, behavior: "smooth" });
        }
      }, 5000);
    };

    startAutoScroll();

    const handleEnter = () => { paused = true; };
    const handleLeave = () => { paused = false; };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <motion.h2
            className="text-xl sm:text-2xl font-bold"
            {...fadeUp}
            data-testid="text-recently-added"
          >
            Recently Added
          </motion.h2>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden px-4 sm:px-6 lg:px-8"
          style={{ scrollBehavior: "auto" }}
          data-testid="carousel-recently-added"
        >
          {[...recentlyAdded, ...recentlyAdded].map((movie, i) => (
            <div key={`${movie.id}-${i}`} className="flex-shrink-0 w-64 sm:w-72 md:w-80">
              <div className="relative rounded-md overflow-hidden group cursor-pointer">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-base font-semibold truncate">{movie.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{movie.year}</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    {movie.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <Badge variant="secondary" className="text-xs mb-4">
              <Film className="w-3 h-3 mr-1" />
              Movie Collection
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-movies-title">
              <span className="gradient-text">Movies</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of the latest blockbusters, critically acclaimed films, 
              and exclusive releases available on StreamXHD.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={moviesSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search movies..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-movies"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {genres.map((genre) => (
            <Button
              key={genre.id}
              variant={selectedGenre === genre.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGenre(genre.id)}
              data-testid={`button-genre-${genre.id}`}
            >
              <genre.icon className="w-4 h-4 mr-1" />
              {genre.label}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {Array.from({ length: 16 }).map((_, i) => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <div className="aspect-[2/3] bg-muted" />
                <div className="p-4 space-y-2">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-3 bg-muted rounded w-full" />
                </div>
              </Card>
            ))}
          </div>
        ) : filteredMovies.length === 0 ? (
          <div className="text-center py-16">
            <Film className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No movies found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or genre filter
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {paginatedMovies.map((movie, i) => (
                <motion.div
                  key={movie.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 16) * 0.03 }}
                >
                  <Card className="overflow-hidden h-full hover-elevate group" data-testid={`card-movie-${movie.id}`}>
                    <div className="aspect-[2/3] bg-gradient-to-br from-primary/20 via-card to-chart-2/20 flex items-center justify-center relative">
                      {movie.posterUrl ? (
                        <img
                          src={movie.posterUrl}
                          alt={movie.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.parentElement?.querySelector('.poster-fallback');
                            if (fallback) (fallback as HTMLElement).style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="poster-fallback items-center justify-center" style={{ display: movie.posterUrl ? 'none' : 'flex' }}>
                        <Film className="w-12 h-12 text-primary/40" />
                      </div>
                      <div className="absolute top-3 right-3 z-10">
                        <Badge variant="secondary" className="text-xs font-semibold">
                          <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" />
                          {movie.rating}
                        </Badge>
                      </div>
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className={`text-xs ${genreColors[movie.genre] || ""}`}>
                          {movie.genre}
                        </Badge>
                      </div>
                      {movie.posterUrl && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-[1]" />
                      )}
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-sm truncate" data-testid={`text-movie-title-${movie.id}`}>
                        {movie.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span>{movie.year}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {movie.duration}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {movie.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-10 pb-10" data-testid="pagination-movies">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((p) => p - 1);
                    moviesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid="button-prev-page"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                {getPageNumbers().map((page, idx) =>
                  typeof page === "string" ? (
                    <span key={`dots-${idx}`} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  ) : (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setCurrentPage(page);
                        moviesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      data-testid={`button-page-${page}`}
                    >
                      {page}
                    </Button>
                  )
                )}

                <Button
                  variant="default"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((p) => p + 1);
                    moviesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-bold"
                  data-testid="button-next-page"
                >
                  NEXT
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}

            <div className="text-center mt-4 text-sm text-muted-foreground pb-8">
              Page {currentPage} of {totalPages} — Showing {paginatedMovies.length} of {filteredMovies.length} movies
            </div>
          </>
        )}
      </section>
    </div>
  );
}
