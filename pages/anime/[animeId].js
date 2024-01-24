//pages/movies/[movieId].js

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import "../../app/globals.css";
import {
  fetchAnimeImages,
  fetchNowPlayingAnimes,
  fetchAnimeCredits,
} from "../../utils/TMDbApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AnimeDetailsPage = () => {
  const [anime, setAnime] = useState(null);
  const router = useRouter();
  const { animeId } = router.query;
  const [animeImages, setAnimeImages] = useState(null);
  const [animeCredits, setAnimeCredits] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isVideoFullScreen, setIsVideoFullScreen] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [latestAnimes, setLatestAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimeDetails = async (animeId) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${animeId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ja-JP`
        );
        //console.log(response.data);
        return response.data; // 返り値として映画のデータを返す
      } catch (error) {
        console.error(error);
        return null; // エラーが発生した場合はnullを返す
      }
    };

    const fetchData = async () => {
      if (!animeId) return;
      const animeDetails = await fetchAnimeDetails(animeId);
      const images = await fetchAnimeImages(animeId);
      const credits = await fetchAnimeCredits(animeId);
      setAnime(animeDetails);
      setAnimeImages(images);
      setAnimeCredits(credits);
    };

    const fetchVideos = async () => {
      if (!animeId) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${animeId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ja-JP`
        );
        const latestVideo =
          response.data.results.length > 0 ? [response.data.results[0]] : [];
        setVideos(latestVideo);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    const fetchRecommendations = async () => {
      if (!animeId) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${animeId}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ja-JP`
        );
        setRecommendations(response.data.results);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();

    fetchVideos();

    fetchData();
    fetchNowPlayingAnimes().then(setLatestAnimes);
  }, [animeId]);

  const toggleOverview = () => {
    setIsOverviewExpanded(!isOverviewExpanded);
  };

  // 概要の表示ロジック
  // const displayedOverview =
  //   anime && (isOverviewExpanded || anime.overview.length <= 80)
  //     ? anime.overview
  //     : anime && `${anime.overview.substring(0, 80)}...`;

  const displayedOverview = anime
    ? anime.overview
      ? isOverviewExpanded || anime.overview.length <= 80
        ? anime.overview
        : `${anime.overview.substring(0, 80)}...`
      : "テキストがありません"
    : null;

  const handleVideoClick = () => {
    setIsVideoFullScreen(true);
  };

  if (!anime) return <div>Loading...</div>;

  const getPreferredLogo = (images) => {
    // 日本語のロゴを検索
    const japaneseLogos = images.logos.filter(
      (logo) => logo.iso_639_1 === "ja"
    );
    // 英語のロゴを検索
    const englishLogos = images.logos.filter((logo) => logo.iso_639_1 === "en");

    // 日本語のロゴがある場合はそれを使用
    if (japaneseLogos.length > 0) {
      return japaneseLogos[0].file_path;
    }
    // 日本語のロゴがなく、英語のロゴがある場合は英語のロゴを使用
    else if (englishLogos.length > 0) {
      return englishLogos[0].file_path;
    }
    // どちらのロゴもない場合は、利用可能な任意のロゴを使用
    else if (images.logos.length > 0) {
      return images.logos[0].file_path;
    }

    return null;
  };

  // コンポーネントのレンダリング部分でロゴを使用
  const logoPath = getPreferredLogo(animeImages);

  const adjustImageSize = (e) => {
    const imageHeight = e.target.offsetHeight;
    if (imageHeight > 1500) {
      e.target.style.width = "20%";
    } else if (imageHeight > 250) {
      e.target.style.width = "30%";
    } else if (imageHeight > 130) {
      e.target.style.width = "40%";
    } else {
      e.target.style.width = "60%";
    }
  };

  // 星評価の計算関数
  const calculateRating = (value) => {
    return value / 2; // TMDbの10点満点を5点満点に変換
  };

  // 星評価の表示コンポーネント
  const StarsRating = ({ rating }) => {
    const fullStarsCount = Math.floor(rating);
    const halfStarNeeded = rating % 1 >= 0.5;
    const emptyStarsCount = 5 - fullStarsCount - (halfStarNeeded ? 1 : 0);
    return (
      <div>
        {[...Array(fullStarsCount)].map((_, i) => (
          <FontAwesomeIcon key={`full_${i}`} icon={fullStar} />
        ))}
        {halfStarNeeded && <FontAwesomeIcon icon={halfStar} />}
        {[...Array(emptyStarsCount)].map((_, i) => (
          <FontAwesomeIcon key={`empty_${i}`} icon={emptyStar} />
        ))}
      </div>
    );
  };

  //時間のやつ
  function formatRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }

  // 映画のジャンルを表示するコンポーネント
  const Genres = ({ genres }) => {
    return (
      <div>
        {genres.map((genre) => (
          <span
            className="text-xs p-1 mr-1.5 rounded-sm border border-gray-500 text-gray-500 inline-block mb-0.5 custom-lg:border-gray-400 custom-lg:text-gray-400"
            key={genre.id}
          >
            {genre.name}
          </span>
        ))}
      </div>
    );
  };

  const renderRecommendations = (animes) => {
    return animes
      .filter((anime) => anime.poster_path)
      .map((anime) => (
        <SwiperSlide key={anime.id}>
          <Link href={`/anime/${anime.id}`}>
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

  const renderAnimeSection = () => {
    if (recommendations.length > 0) {
      return renderRecommendations(recommendations);
    } else {
      return renderRecommendations(latestAnimes);
    }
  };

  const hasSample = videos.length > 0;

  const renderCast = (cast) => {
    const limitedCast = cast.cast.slice(0, 5);
    return limitedCast.map((actor, index) => (
      <div key={index} className="text-sm">
        <div className="mb-0.5">
          <p className="custom-lg:text-base">{actor.name}</p>
          <p className="custom-lg:text-base">{actor.character}</p>
        </div>
      </div>
    ));
  };

  const getDirector = () => {
    if (!animeCredits || !animeCredits.crew) return null;
    console.log(animeCredits);

    const directors = animeCredits.crew.filter(
      (member) => member.job === "Director"
    );

    return (
      <div>
        {directors.map((director) => (
          <div key={director.id} className="flex justify-between mb-3">
            {director.profile_path && (
              <img
                className="w-1/4 rounded-lg custom-lg:w-1/5"
                src={`https://image.tmdb.org/t/p/original${director.profile_path}`}
                alt={director.name}
              />
            )}
            <div style={{ width: "70%" }}>
              <h3 className="mb-3 font-bold">監督</h3>
              <p className="text-sm custom-lg:text-base">{director.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%", // 画像の幅
          height: "100%", // 画像の高さ
        }}
      >
        <div className="responsive-image">
          <img
            src={
              anime.backdrop_path
                ? `https://image.tmdb.org/t/p/original${anime.backdrop_path}`
                : "/damy.png"
            }
            alt={anime.title}
            className="responsive-image"
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "20%",
            background:
              " linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1))",
          }}
        ></div>
        <div
          className="w-full"
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
        >
          {logoPath && (
            <img
              className="w-3/5 mx-auto"
              src={`https://image.tmdb.org/t/p/original${logoPath}`}
              alt="Anime Logo"
              onLoad={adjustImageSize}
            />
          )}
        </div>
      </div>

      <div className="w-11/12 mx-auto pt-10 sm:pt-16 md:pt-20 custom-lg:pt-64">
        <div className="mb-8">
          {logoPath ? (
            <img
              className="w-2/6 logo-pc mb-10"
              src={`https://image.tmdb.org/t/p/original${logoPath}`}
              alt="Movie Logo"
              onLoad={adjustImageSize}
            />
          ) : (
            // ロゴがない場合、タイトルを表示
            <h1 className="text-2xl font-bold text-center mb-4 custom-lg:text-left custom-lg:mb-10">
              {anime.name}
            </h1>
          )}

          <p
            className="text-xs leading-5 mb-4 custom-lg:text-sm custom-lg:mb-10 item__text"
            onClick={toggleOverview}
          >
            {displayedOverview}
          </p>

          <div className="flex mb-3 text-xs items-center text-gray-500 custom-lg:text-sm custom-lg:text-gray-400">
            <div className="pr-3 mr-3 border-r  border-gray-500 custom-lg:border-gray-400">
              <StarsRating rating={calculateRating(anime.vote_average)} />
            </div>
            <p className="pr-3 mr-3 border-r  border-gray-500 custom-lg:border-gray-400">
              {anime.first_air_date.split("-")[0]}
            </p>
            {/* <p>{anime.production_countries[0].name}</p> */}
            <p className="pr-2 mr-2 border-r border-gray-500 custom-lg:border-gray-400">
              {anime.production_countries &&
              anime.production_countries.length > 0
                ? anime.production_countries[0].name
                : "not country"}
            </p>
          </div>

          <div className="mb-8">
            {anime && <Genres genres={anime.genres} />}
          </div>

          {hasSample ? (
            <button
              onClick={handleVideoClick}
              className="bg-white text-black bold w-full p-3 rounded-md custom-lg:w-1/4"
            >
              サンプルを視聴
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-200 text-black bold w-full p-3 rounded-md custom-lg:w-1/4"
            >
              サンプルはありません
            </button>
          )}
        </div>
      </div>

      <div className=" pt-6 border-t  border-white">
        <div className="w-11/12 mx-auto pb-10 custom-lg:text-lg">
          <div className="mb-10">
            <h2 className="mb-4 font-bold">
              {recommendations.length > 0
                ? "この作品を観た人はこんな作品も観ています"
                : "この作品を観た人はこんな作品も観ています"}
            </h2>
            <Swiper
              className="mb-4"
              breakpoints={{
                320: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                425: {
                  slidesPerView: 4.2,
                  spaceBetween: 10,
                },
                450: {
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
                640: {
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
                860: {
                  slidesPerView: 6.2,
                  spaceBetween: 10,
                },
                920: {
                  slidesPerView: 6.6,
                  spaceBetween: 10,
                },
                970: {
                  slidesPerView: 6.8,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                1700: {
                  slidesPerView: 8,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 8.5,
                  spaceBetween: 10,
                },
                2000: {
                  slidesPerView: 9,
                  spaceBetween: 10,
                },
              }}
            >
              {renderAnimeSection()}{" "}
            </Swiper>
          </div>

          <div className="mb-6">
            <h2 className="mb-3 font-bold">主なキャスト</h2>
            <div className="cast-list">
              {animeCredits && renderCast(animeCredits)}
            </div>
          </div>

          <div className=" pt-6 mb-6 border-t  border-gray-500">
            {getDirector()}
          </div>
        </div>

        <div>
          {isVideoFullScreen && videos.length > 0 && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 999,
              }}
            >
              <iframe
                width="100%"
                height="100%"
                zIndex="100"
                src={`https://www.youtube.com/embed/${videos[0].key}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <button
                className="fixed top-14 right-2 text-xl p-3"
                style={{ zIndex: 9999 }}
                onClick={() => setIsVideoFullScreen(false)}
              >
                閉じる
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsPage;
