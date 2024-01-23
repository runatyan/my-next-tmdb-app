// pages/index.js

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchPopularAnimes,
  fetchDateAnimes,
  fetchAverageAnimes,
  fetchMovieImages,
} from "../utils/TMDbApi";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../app/globals.css";

const HomePage = () => {
  // 状態変数の設定
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [averageAnimes, setAverageAnimes] = useState([]);
  const [dateAnimes, setDateAnimes] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);

  // 映画データの取得
  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      const nowPlaying = await fetchNowPlayingMovies();
      const moviesWithImages = await Promise.all(
        nowPlaying.slice(0, 10).map(async (movie) => {
          const images = await fetchMovieImages(movie.id);
          const japaneseBackdrop =
            images.backdrops.find((image) => image.iso_639_1 === "ja") ||
            images.backdrops.find(
              (image) => image.iso_639_1 === "en" || image.iso_639_1 === null
            );

          return {
            ...movie,
            backdrop: japaneseBackdrop?.file_path,
          };
        })
      );
      setFeaturedMovies(moviesWithImages);
    };

    fetchPopularMovies().then(setPopularMovies);
    fetchNowPlayingMovies().then(setNowPlayingMovies);
    fetchTopRatedMovies().then(setTopRatedMovies);
    fetchPopularAnimes().then(setPopularAnimes);
    fetchAverageAnimes().then(setAverageAnimes);
    fetchDateAnimes().then(setDateAnimes);
    fetchFeaturedMovies();
  }, []);

  // 映画リストを表示する関数
  const renderMovies = (movies) => {
    return movies.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Link href={`/movies/${movie.id}`}>
          <div className="w-full mb-2 h-36 sm:h-44 mg:h-58 lg:h-64 xl:h-72 2xl-84">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </Link>
      </SwiperSlide>
    ));
  };

  const renderMoviesStand = (movies) => {
    return movies.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Link href={`/movies/${movie.id}`}>
          <div className="w-full mb-2 h-52 sm:h-56 mg:h-64 lg:h-72 xl:h-96 2xl-96">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </Link>
      </SwiperSlide>
    ));
  };

  const renderAnimes = (animes) => {
    return animes.map((anime) => (
      <SwiperSlide key={anime.id}>
        <Link href={`/anime/${anime.id}`} key={anime.id}>
          <div className="w-full mb-2 h-36 sm:h-44 mg:h-58 lg:h-64 xl:h-72 2xl-84">
            <img
              src={`https://image.tmdb.org/t/p/original${anime.poster_path}`}
              alt={anime.title}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </Link>
      </SwiperSlide>
    ));
  };

  // 特集映画を表示する関数
  const renderFeaturedMovies = () => {
    return featuredMovies.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Link href={`/movies/${movie.id}`}>
          <div className="thumbnail__img">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop}`}
              alt={movie.title}
              className="object-cover w-full h-full" // 横長のサムネイル
            />
          </div>
        </Link>
      </SwiperSlide>
    ));
  };

  const commonBreakpoints = {
    320: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 4.2,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 4.8,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 5.2,
      spaceBetween: 10,
    },
    760: {
      slidesPerView: 5.4,
      spaceBetween: 10,
    },
    790: {
      slidesPerView: 5.8,
      spaceBetween: 10,
    },
    920: {
      slidesPerView: 6.6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    1700: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    2000: {
      slidesPerView: 9,
      spaceBetween: 10,
    },
  };

  const commonBreakpointsStand = {
    320: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 3.1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    760: {
      slidesPerView: 3.7,
      spaceBetween: 10,
    },
    790: {
      slidesPerView: 4.1,
      spaceBetween: 10,
    },
    920: {
      slidesPerView: 4.9,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5.3,
      spaceBetween: 10,
    },
    1700: {
      slidesPerView: 6.3,
      spaceBetween: 10,
    },
    2000: {
      slidesPerView: 7.3,
      spaceBetween: 10,
    },
  };

  return (
    <div>
      <Swiper
        slidesPerView={1.8} // 1つのスライドが完全に見え、他のスライドが部分的に見えるように設定
        centeredSlides={true} // アクティブなスライドを中心に配置
        spaceBetween={20}
        modules={[Pagination]} //修正
        pagination={{ clickable: true }}
        loop={true}
        className="mb-4 pt-5"
      >
        {renderFeaturedMovies()}
      </Swiper>
      <div className="w-11/12 mx-auto mt-5 pb-10">
        <h2 className="text-sm sm:text-xl my-3 font-bold tracking-wider">
          新作映画
        </h2>
        <Swiper className="mb-4" breakpoints={commonBreakpoints}>
          {renderMovies(nowPlayingMovies)}
        </Swiper>

        <h2 className="text-sm sm:text-xl my-3 font-bold tracking-wider">
          最近よく見られているアニメ
        </h2>
        <Swiper className="mb-4" breakpoints={commonBreakpoints}>
          {renderAnimes(averageAnimes)}
        </Swiper>

        <h2 className="text-sm sm:text-xl mb-3 font-bold tracking-wider">
          人気の映画
        </h2>
        <Swiper className="mb-4" breakpoints={commonBreakpoints}>
          {renderMovies(popularMovies)}
        </Swiper>

        <h2 className="text-sm sm:text-xl my-3 font-bold tracking-wider">
          評価の高いアニメ
        </h2>
        <Swiper className="mb-4" breakpoints={commonBreakpoints}>
          {renderAnimes(popularAnimes)}
        </Swiper>

        <h2 className="text-sm sm:text-xl my-3 font-bold tracking-wider">
          高評価の映画
        </h2>
        <Swiper className="mb-4" breakpoints={commonBreakpointsStand}>
          {renderMoviesStand(topRatedMovies)}
        </Swiper>

        <h2 className="text-sm sm:text-xl my-3 font-bold tracking-wider">
          話題になったアニメ
        </h2>
        <Swiper className="mb-4" breakpoints={commonBreakpoints}>
          {renderAnimes(dateAnimes)}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
