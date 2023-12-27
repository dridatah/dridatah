"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AuthorBox() {
  return (

    <div className="bdp-author-box d-flex align-items-center gap-4 rounded-4 bg-white flex-wrap flex-sm-nowrap">
      <div className="thumbnail rounded-4 overflow-hidden">
        <Image src="/assets/images/author/author-1.jpg" alt="author" className="img-fluid" width={329} height={256} />
      </div>
      <div>
        <h6 className="mb-3">About Author</h6>
        <p className="mb-4">Optimize resource eveling innoaion whereas visionary value Comlingly engage extensible process with business process improvements solution program make it easy.</p>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <Link href="/"><i className="fab fa-facebook-f"></i></Link>
          <Link href="/"><i className="fab fa-twitter"></i></Link>
          <Link href="/"><i className="fab fa-linkedin"></i></Link>
          <Link href="/"><i className="fab fa-google-plus"></i></Link>
        </div>
      </div>
    </div>

  )
}