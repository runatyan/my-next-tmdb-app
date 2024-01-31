//pages/movies/[movieId].js

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import "../../app/globals.css";
import {
  fetchMovieImages,
  fetchNowPlayingMovies,
  fetchMovieCredits,
} from "../../utils/TMDbApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAuth } from "../../context/AuthContext";
import { firestore } from "../../firebaseConfig";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const router = useRouter();
  const { movieId } = router.query;
  const [movieImages, setMovieImages] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isVideoFullScreen, setIsVideoFullScreen] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const { currentUser } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async (movieId) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ja-JP`
        );
        //console.log(response.data);
        return response.data; // 返り値として映画のデータを返す
      } catch (error) {
        console.error(error);
        return null; // エラーが発生した場合はnullを返す
      }
    };

    const fetchData = async () => {
      if (!movieId) return;
      const movieDetails = await fetchMovieDetails(movieId);
      const images = await fetchMovieImages(movieId);
      const credits = await fetchMovieCredits(movieId);
      setMovie(movieDetails);
      setMovieImages(images);
      setMovieCredits(credits);
    };

    const fetchVideos = async () => {
      if (!movieId) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ja-JP`
        );
        const latestVideo =
          response.data.results.length > 0 ? [response.data.results[0]] : [];
        setVideos(latestVideo);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    const fetchRecommendations = async () => {
      if (!movieId) return;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ja-JP`
        );
        setRecommendations(response.data.results);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    const checkIfBookmarked = async () => {
      if (currentUser && movieId) {
        const bookmarkDoc = await firestore
          .collection("bookmarks")
          .doc(currentUser.uid)
          .get();
        if (bookmarkDoc.exists) {
          const bookmarks = bookmarkDoc.data().bookmarks || [];
          setIsBookmarked(bookmarks.some((b) => b.id === movieId));
        }
      }
    };

    fetchRecommendations();

    fetchVideos();

    fetchData();
    fetchNowPlayingMovies().then(setLatestMovies);
    checkIfBookmarked();
  }, [movieId]);

  const toggleOverview = () => {
    setIsOverviewExpanded(!isOverviewExpanded);
  };

  const displayedOverview = movie
    ? movie.overview
      ? isOverviewExpanded || movie.overview.length <= 80
        ? movie.overview
        : `${movie.overview.substring(0, 80)}...`
      : "テキストがありません"
    : null;

  const handleVideoClick = () => {
    setIsVideoFullScreen(true);
  };

  if (!movie)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );

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
  const logoPath = getPreferredLogo(movieImages);

  const adjustImageSize = (e) => {
    const imageHeight = e.target.offsetHeight;
    if (imageHeight > 250) {
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

  const renderRecommendations = (movies) => {
    return movies
      .filter((movie) => movie.poster_path)
      .map((movie) => (
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

  const renderMovieSection = () => {
    if (recommendations.length > 0) {
      return renderRecommendations(recommendations);
    } else {
      return renderRecommendations(latestMovies);
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
    if (!movieCredits || !movieCredits.crew) return null;

    const directors = movieCredits.crew.filter(
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

  const handleBookmark = async (movieId) => {
    if (currentUser) {
      const bookmarkRef = firestore
        .collection("bookmarks")
        .doc(currentUser.uid);
      const timestamp = new Date(); // 現在のタイムスタンプ

      // 既存のブックマークを取得
      const bookmarkDoc = await bookmarkRef.get();
      let bookmarks = bookmarkDoc.exists
        ? bookmarkDoc.data().bookmarks || []
        : [];

      // ブックマークが既に存在するかチェック
      const existingBookmark = bookmarks.find((b) => b.id === movieId);

      if (existingBookmark) {
        // ブックマークが存在する場合は削除
        bookmarks = bookmarks.filter((b) => b.id !== movieId);
        setIsBookmarked(false);
      } else {
        // 新しいブックマークを追加
        const newBookmark = {
          id: movieId,
          timestamp: timestamp.toISOString(),
          type: "movie",
        };
        bookmarks.push(newBookmark);
        setIsBookmarked(true);
      }

      // Firestoreに保存
      await bookmarkRef.set({ bookmarks }, { merge: true });
    }
  };

  const handleBookmarkClick = () => {
    handleBookmark(movieId);
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
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : "/damy.png"
            }
            alt={movie.title}
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
          className="w-full logo-mb"
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
              alt="Movie Logo"
              onLoad={adjustImageSize}
            />
          )}
        </div>
      </div>
      <div></div>

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
              {movie.title}
            </h1>
          )}

          <p
            className="text-xs leading-5 mb-4 item__text custom-lg:text-sm custom-lg:mb-10"
            onClick={toggleOverview}
          >
            {displayedOverview}
          </p>

          <div className="flex mb-3 text-xs items-center text-gray-500 custom-lg:text-sm custom-lg:text-gray-400">
            <div className="pr-2 mr-2 border-r  border-gray-500 custom-lg:border-gray-400">
              <StarsRating rating={calculateRating(movie.vote_average)} />
            </div>
            <p className="pr-2 mr-2 border-r  border-gray-500 custom-lg:border-gray-400">
              {movie.release_date.split("-")[0]}
            </p>
            <p className="pr-2 mr-2 border-r border-gray-500 custom-lg:border-gray-400">
              {movie.production_countries &&
              movie.production_countries.length > 0
                ? movie.production_countries[0].name
                : "not country"}
            </p>
            <p>{formatRuntime(movie.runtime)}</p>
          </div>

          <div className="mb-8">
            {movie && <Genres genres={movie.genres} />}
          </div>

          <div className="custom-lg:flex custom-lg:flex-wrap custom-lg:items-center">
            {hasSample ? (
              <button
                onClick={handleVideoClick}
                className="bg-white text-black bold w-full p-3 rounded-md custom-lg:w-1/4 hover:bg-transparent hover:text-white hover:border hover:border-white mb-5 custom-lg:mb-0 custom-lg:mr-4"
              >
                サンプルを視聴
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-400 text-black bold w-full p-3 rounded-md custom-lg:w-1/4 mb-5 custom-lg:mb-0 custom-lg:mr-4"
              >
                サンプルはありません
              </button>
            )}
            <button
              className="bg-white text-black bold w-full p-3 rounded-md custom-lg:w-1/4  hover:bg-transparent hover:text-white hover:border hover:border-white"
              onClick={handleBookmarkClick}
            >
              {isBookmarked ? "ブックマーク済み" : "ブックマークする"}
            </button>
          </div>
        </div>
      </div>

      <div className=" pt-6 border-t  border-white">
        <div className="w-11/12 mx-auto pb-10 custom-lg:text-lg">
          <div className="mb-10">
            <h2 className="mb-4 font-bold ">
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
                  slidesPerView: 7.1,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 7.1,
                  spaceBetween: 10,
                },
                1700: {
                  slidesPerView: 8.1,
                  spaceBetween: 10,
                },
                1900: {
                  slidesPerView: 8.5,
                  spaceBetween: 10,
                },
                2000: {
                  slidesPerView: 9.1,
                  spaceBetween: 10,
                },
              }}
            >
              {renderMovieSection()}{" "}
            </Swiper>
          </div>

          <div className="mb-6">
            <h2 className="mb-3 font-bold">主なキャスト</h2>
            <div className="cast-list">
              {movieCredits && renderCast(movieCredits)}
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

export default MovieDetailsPage;
