import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/discover";

const GenrePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("movies");
  const [content, setContent] = useState([]);

  const buttonStyle = (genre) => {
    return selectedGenre === genre
      ? "bg-white text-black rounded-3xl w-16 p-1"
      : "text-white p-1";
  };

  useEffect(() => {
    const fetchContent = async () => {
      let fetchedContent = [];
      let page = 1;
      const maxItems = 30; // 取得するアイテムの最大数
      const maxPages = 10; // 最大ページ数

      while (fetchedContent.length < maxItems && page <= maxPages) {
        let url = "";
        switch (selectedGenre) {
          case "movies":
            url = `${BASE_URL}/movie?api_key=${API_KEY}&language=ja-JP&page=${page}`;
            break;
          case "anime":
            url = `${BASE_URL}/tv?api_key=${API_KEY}&language=ja-JP&with_genres=16&page=${page}`;
            break;
          case "tv":
            url = `${BASE_URL}/tv?api_key=${API_KEY}&language=ja-JP&page=${page}`;
            break;
        }

        try {
          const response = await axios.get(url);
          const newContent = response.data.results.filter(
            (item) => item.overview && item.overview
          );
          //   console.log(newContent);
          fetchedContent = [...fetchedContent, ...newContent].slice(
            0,
            maxItems
          );
        } catch (error) {
          console.error("Error fetching content:", error);
          break; // エラーが発生した場合はループを中断
        }

        page++;
      }

      setContent(fetchedContent);
    };

    fetchContent();
  }, [selectedGenre]);

  return (
    <div className="w-11/12 mx-auto mt-10 custom-lg:mt-14 pb-10">
      <Swiper slidesPerView={5} className="mb-4">
        <SwiperSlide>
          <button
            onClick={() => setSelectedGenre("movies")}
            className={buttonStyle("movies")}
          >
            映画
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() => setSelectedGenre("anime")}
            className={buttonStyle("anime")}
          >
            アニメ
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() => setSelectedGenre("tv")}
            className={buttonStyle("tv")}
          >
            TV番組
          </button>
        </SwiperSlide>
      </Swiper>
      <div className="content-display">
        {content.map((item, index) => (
          <Link
            key={index}
            href={`/${selectedGenre === "movies" ? "movies" : "anime"}/${
              item.id
            }`}
          >
            <div className="mb-5">
              <div className="flex justify-between flex-wrap items-center">
                <div className="w-2/5">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt={item.title || item.name}
                  />
                </div>
                <div className="w-7/12">
                  <p className="custom-lg:text-xl">{item.title || item.name}</p>
                  <p className="text-xs text-gray-500 custom-lg:pt-2">
                    {item.release_date
                      ? item.release_date.split("-")[0]
                      : item.first_air_date
                      ? item.first_air_date.split("-")[0]
                      : ""}
                  </p>
                  <p className="text-sm text-gray-500 mt-10 hidden custom-lg:block">
                    {item.overview.length > 200
                      ? item.overview.substring(0, 200) + "..."
                      : item.overview}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 custom-lg:hidden">
                {item.overview.length > 80
                  ? item.overview.substring(0, 80) + "..."
                  : item.overview}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
