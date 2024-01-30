import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { firestore } from "../firebaseConfig";

const BookmarksPage = () => {
  const { currentUser } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!currentUser) return;

      const bookmarkRef = firestore
        .collection("bookmarks")
        .doc(currentUser.uid);
      const doc = await bookmarkRef.get();

      if (doc.exists) {
        const bookmarksData = doc.data().bookmarks || [];
        // IDとタイプを基に詳細情報を取得
        const details = await Promise.all(
          bookmarksData.map(async (bookmark) => {
            const url = `https://api.themoviedb.org/3/${
              bookmark.type === "movie" ? "movie" : "tv"
            }/${bookmark.id}?api_key=${API_KEY}&language=ja-JP`;
            try {
              const response = await axios.get(url);
              return { ...response.data, ...bookmark }; // APIの応答とブックマークデータを組み合わせる
            } catch (error) {
              console.error("Error fetching details:", error);
              return null;
            }
          })
        );

        // nullを除外し、ブックマーク日付でソート
        const validBookmarks = details.filter((detail) => detail !== null);
        const sortedBookmarks = validBookmarks.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );

        setBookmarks(sortedBookmarks);
      }
    };

    fetchBookmarks();
  }, [currentUser, API_KEY]);

  // ここにブックマークデータを表示するロジックを追加

  return (
    <div className="w-11/12 mx-auto mt-14 md:mt-20 custom-lg:mt-20 pb-10">
      {/* ブックマークのデータをマッピングして表示 */}
      <div className="flex flex-wrap justify-between">
        {bookmarks.map((bookmark, index) => (
          <div key={index} style={{ width: "30%" }}>
            <Link
              href={`/${bookmark.type === "movie" ? "movies" : "anime"}/${
                bookmark.id
              }`}
              passHref
            >
              <div className="mb-4 custom-lg:mb-8">
                <img
                  src={`https://image.tmdb.org/t/p/original${bookmark.poster_path}`}
                  alt={bookmark.title || bookmark.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarksPage;
