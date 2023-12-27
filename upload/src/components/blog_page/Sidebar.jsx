"use client"
import React from 'react'
import CategoryWidget from './widgets/CategoryWidget'
import RecentPosts from './widgets/RecentPosts'
import Gallery from './widgets/Gallery'
import Tags from './widgets/Tags'
import SearchBox from './widgets/SearchBox'

export default function Sidebar() {
  return (
    <div className="col-xl-4">
      <div className="blog-sidebar mt-5 mt-xl-0">
        <SearchBox />
        <CategoryWidget />
        <RecentPosts />
        <Gallery />
        <Tags />
      </div>
    </div>
  )
}