import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
// import damyBackImg from "../public/damy.";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const GenrePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ja-JP`
        );
        setPopularMovies(
          response.data.results.filter((video) => video.title && video.overview)
        );
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    let fetchedResults = [];
    let page = 1;
    const maxPages = 5; // 最大50件を取得するための最大ページ数 (各ページに10件)

    while (fetchedResults.length < 50 && page <= maxPages) {
      try {
        const response = await axios.get(
          `${BASE_URL}/search/multi?api_key=${API_KEY}&language=ja-JP&query=${encodeURIComponent(
            searchQuery
          )}&page=${page}`
        );
        fetchedResults = [...fetchedResults, ...response.data.results];
      } catch (error) {
        console.error("Search error:", error);
        break;
      }
      page++;
    }

    setSearchResults(fetchedResults.slice(0, 50)); // 最大50件までの結果を設定
  };

  return (
    <div className="w-11/12 mx-auto mt-14 md:mt-20 custom-lg:mt-20 pb-10">
      <form onSubmit={handleSearch} className="mb-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="検索したい作品のタイトルなど"
          style={{
            color: "#000",
          }}
          className="w-full p-2"
        />
        {/* <button type="submit">Search</button> */}
      </form>
      {/* 検索結果の表示 */}
      {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map((item, index) => (
            <div key={index} className="mb-4">
              <Link
                href={`/${item.media_type === "movie" ? "movies" : "anime"}/${
                  item.id
                }`}
              >
                <div className="flex justify-between flex-wrap items-center">
                  <div className="w-2/5">
                    <img
                      src={
                        item.backdrop_path
                          ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                          : "/damy.png"
                      }
                      alt={item.title || item.name}
                    />
                  </div>
                  <div className="w-7/12">
                    <p className="custom-lg:text-xl">
                      {item.title || item.name}
                    </p>
                    <p className="text-xs text-gray-500 custom-lg:text-sm pt-2">
                      {item.release_date
                        ? item.release_date.split("-")[0]
                        : item.first_air_date
                        ? item.first_air_date.split("-")[0]
                        : ""}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="popular-movies">
          <h2 className="mb-3">上位の検索結果</h2>
          <div className="flex flex-wrap justify-between search-last">
            {popularMovies.map((movie, index) => (
              <div key={index} style={{ width: "30%" }}>
                <Link href={`/movies/${movie.id}`}>
                  <div className="mb-4 custom-lg:mb-8">
                    {/* <div className="h-40 custom-sm:h-52 sm:h-64 md:h-80 custom-lg:h-96  mb-4"> */}
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    {/* </div> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenrePage;
