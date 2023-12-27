"use client"
import { handleHomeFiveActiveSection } from '@/rtk/features/global/globalSlice';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function SidebarNav() {
  const dispatch = useDispatch()

  // get active section from global state
  const activeSection = useSelector((state) => state.global.home_five_active_section);

  // handle active section menu
  const handleActiveMenu = (section) => {
    dispatch(handleHomeFiveActiveSection(section));
  }

  return (
    <ul className="hm5-sidebar-navigation">
      <li>
        <button href="#banner-box" className={`${activeSection === 'banner-box' && 'active'}`} onClick={() => handleActiveMenu('banner-box')}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3793 17.0391C17.3793 17.294 17.2776 17.5384 17.0965 17.7186C16.9154 17.8988 16.6699 18 16.4138 18H0.965517C0.709446 18 0.463863 17.8988 0.282794 17.7186C0.101724 17.5384 2.3241e-07 17.294 2.3241e-07 17.0391V6.94019C-0.000101846 6.79376 0.0334235 6.64925 0.0980154 6.51769C0.162607 6.38613 0.256557 6.271 0.37269 6.18109L8.09683 0.202453C8.26632 0.0712394 8.47492 0 8.68965 0C8.90439 0 9.11299 0.0712394 9.28248 0.202453L17.0066 6.18109C17.1228 6.271 17.2167 6.38613 17.2813 6.51769C17.3459 6.64925 17.3794 6.79376 17.3793 6.94019V17.0391ZM15.4483 16.0782V7.4091L8.68965 2.17804L1.93103 7.4091V16.0782H15.4483Z" fill="white" />
          </svg>
          <span className="title-text">Home</span>
        </button>
      </li>
      <li>
        <button href="#about" className={`${activeSection === 'about' && 'active'}`} onClick={() => handleActiveMenu('about')} >
          <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 21C0.447715 21 -0.00645391 20.5505 0.0623925 20.0026C0.282756 18.2486 1.0799 16.6064 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C14.9201 16.6064 15.7172 18.2486 15.9376 20.0026C16.0065 20.5505 15.5523 21 15 21C14.4477 21 14.0085 20.5492 13.9169 20.0046C13.7113 18.7825 13.1304 17.6452 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.86956 17.6452 2.28871 18.7825 2.08312 20.0046C1.9915 20.5492 1.55228 21 1 21ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="#4132DA" />
            <path d="M1 21C0.447715 21 -0.00645391 20.5505 0.0623925 20.0026C0.282756 18.2486 1.0799 16.6064 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C14.9201 16.6064 15.7172 18.2486 15.9376 20.0026C16.0065 20.5505 15.5523 21 15 21C14.4477 21 14.0085 20.5492 13.9169 20.0046C13.7113 18.7825 13.1304 17.6452 12.2426 16.7574C11.1174 15.6321 9.5913 15 8 15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.86956 17.6452 2.28871 18.7825 2.08312 20.0046C1.9915 20.5492 1.55228 21 1 21ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="url(#paint0_linear_1465_254)" />
            <defs>
              <linearGradient id="paint0_linear_1465_254" x1="16" y1="-2.81615e-06" x2="3.67641" y2="-6.73102" gradientUnits="userSpaceOnUse">
                <stop stopColor="#66D5EC" stopOpacity="0.4" />
                <stop offset="1" stopColor="#4132DA" stopOpacity="0.67" />
              </linearGradient>
            </defs>
          </svg>
          <span className="title-text">About</span>
        </button>
      </li>
      <li>
        <button href="#project" className={`${activeSection === 'project' && 'active'}`} onClick={() => handleActiveMenu('project')}>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.90421 2.90422C3.06427 1.74395 4.62021 1.06531 6.2598 1.00447C9.05036 0.900933 12.4328 0.903859 15.2234 1.00598C16.861 1.06592 18.4156 1.74219 19.5759 2.89943C20.7361 4.05666 21.4165 5.60945 21.4807 7.24691C21.5449 8.88438 20.9883 10.4857 19.9222 11.7302L12.1572 19.5202C11.8005 19.8771 11.322 20.0859 10.8177 20.1048C10.3135 20.1238 9.8207 19.9514 9.43821 19.6222L9.32821 19.5212L1.56421 11.7302C0.498696 10.4868 -0.0582136 8.88693 0.00482177 7.2506C0.0678572 5.61428 0.746192 4.06204 1.90421 2.90422ZM3.31821 4.31822C2.50045 5.13621 2.02906 6.23767 2.00187 7.39399C1.97469 8.55032 2.39379 9.67271 3.17221 10.5282L3.31821 10.6822L8.09121 15.4552C9.55583 16.9198 11.9305 16.9197 13.395 15.455L14.279 14.5708C15.255 13.5946 15.2549 12.012 14.2788 11.0358L13.5712 10.3282C12.9858 9.7428 12.0366 9.7428 11.4512 10.3282C11.1727 10.6069 10.842 10.828 10.478 10.9788C10.114 11.1297 9.72391 11.2074 9.32991 11.2075C8.5342 11.2077 7.771 10.8917 7.20821 10.3292C6.64542 9.7667 6.32914 9.00365 6.32895 8.20793C6.32876 7.41221 6.64468 6.64901 7.20721 6.08622C8.32818 4.96472 8.14542 3.02108 6.55988 3.00057C6.49201 2.99969 6.424 3.00034 6.35589 3.00255C5.28617 3.03719 4.2638 3.45188 3.47221 4.17222L3.31821 4.31822ZM11.8042 7.14622C11.9917 6.95875 12.246 6.85344 12.5112 6.85344C12.7764 6.85344 13.0307 6.95875 13.2182 7.14622L16.7532 10.6812C17.1438 11.0718 17.777 11.0723 18.1682 10.6822C18.9997 9.85136 19.473 8.72814 19.487 7.55278C19.5011 6.37743 19.0546 5.24324 18.2432 4.39278C17.4318 3.54232 16.3199 3.04309 15.1452 3.00188C13.9704 2.96066 12.8262 3.38072 11.9572 4.17222L11.8042 4.31822L8.62221 7.50022C8.44888 7.67344 8.34518 7.90427 8.3308 8.14889C8.31642 8.39351 8.39236 8.6349 8.54421 8.82722L8.62221 8.91422C8.79542 9.08755 9.02625 9.19125 9.27087 9.20563C9.51549 9.22001 9.75688 9.14407 9.94921 8.99222L10.0362 8.91422L11.8042 7.14622Z" fill="#4132DA" />
            <path d="M1.90421 2.90422C3.06427 1.74395 4.62021 1.06531 6.2598 1.00447C9.05036 0.900933 12.4328 0.903859 15.2234 1.00598C16.861 1.06592 18.4156 1.74219 19.5759 2.89943C20.7361 4.05666 21.4165 5.60945 21.4807 7.24691C21.5449 8.88438 20.9883 10.4857 19.9222 11.7302L12.1572 19.5202C11.8005 19.8771 11.322 20.0859 10.8177 20.1048C10.3135 20.1238 9.8207 19.9514 9.43821 19.6222L9.32821 19.5212L1.56421 11.7302C0.498696 10.4868 -0.0582136 8.88693 0.00482177 7.2506C0.0678572 5.61428 0.746192 4.06204 1.90421 2.90422ZM3.31821 4.31822C2.50045 5.13621 2.02906 6.23767 2.00187 7.39399C1.97469 8.55032 2.39379 9.67271 3.17221 10.5282L3.31821 10.6822L8.09121 15.4552C9.55583 16.9198 11.9305 16.9197 13.395 15.455L14.279 14.5708C15.255 13.5946 15.2549 12.012 14.2788 11.0358L13.5712 10.3282C12.9858 9.7428 12.0366 9.7428 11.4512 10.3282C11.1727 10.6069 10.842 10.828 10.478 10.9788C10.114 11.1297 9.72391 11.2074 9.32991 11.2075C8.5342 11.2077 7.771 10.8917 7.20821 10.3292C6.64542 9.7667 6.32914 9.00365 6.32895 8.20793C6.32876 7.41221 6.64468 6.64901 7.20721 6.08622C8.32818 4.96472 8.14542 3.02108 6.55988 3.00057C6.49201 2.99969 6.424 3.00034 6.35589 3.00255C5.28617 3.03719 4.2638 3.45188 3.47221 4.17222L3.31821 4.31822ZM11.8042 7.14622C11.9917 6.95875 12.246 6.85344 12.5112 6.85344C12.7764 6.85344 13.0307 6.95875 13.2182 7.14622L16.7532 10.6812C17.1438 11.0718 17.777 11.0723 18.1682 10.6822C18.9997 9.85136 19.473 8.72814 19.487 7.55278C19.5011 6.37743 19.0546 5.24324 18.2432 4.39278C17.4318 3.54232 16.3199 3.04309 15.1452 3.00188C13.9704 2.96066 12.8262 3.38072 11.9572 4.17222L11.8042 4.31822L8.62221 7.50022C8.44888 7.67344 8.34518 7.90427 8.3308 8.14889C8.31642 8.39351 8.39236 8.6349 8.54421 8.82722L8.62221 8.91422C8.79542 9.08755 9.02625 9.19125 9.27087 9.20563C9.51549 9.22001 9.75688 9.14407 9.94921 8.99222L10.0362 8.91422L11.8042 7.14622Z" fill="url(#paint0_linear_1465_257)" />
            <defs>
              <linearGradient id="paint0_linear_1465_257" x1="21.4857" y1="0.999997" x2="8.46312" y2="-9.49818" gradientUnits="userSpaceOnUse">
                <stop stopColor="#66D5EC" stopOpacity="0.4" />
                <stop offset="1" stopColor="#4132DA" stopOpacity="0.67" />
              </linearGradient>
            </defs>
          </svg>
          <span className="title-text">Project</span>
        </button>
      </li>
      <li>
        <button href="#blog" className={`${activeSection === 'blog' && 'active'}`} onClick={() => handleActiveMenu('blog')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V11C16 12.1046 16.8954 13 18 13C19.1046 13 20 13.8954 20 15V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20ZM17 15C16.4477 15 16 15.4477 16 16V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V16C18 15.4477 17.5523 15 17 15ZM6 18C10.4183 18 14 14.4183 14 10V8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H6ZM4 6C4 5.44772 4.44772 5 5 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H5C4.44772 7 4 6.55228 4 6ZM4 10C4 9.44771 4.44772 9 5 9H11C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H8C8.55229 13 9 13.4477 9 14C9 14.5523 8.55229 15 8 15H5C4.44772 15 4 14.5523 4 14Z" fill="#4132DA" />
            <path d="M17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V11C16 12.1046 16.8954 13 18 13C19.1046 13 20 13.8954 20 15V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20ZM17 15C16.4477 15 16 15.4477 16 16V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V16C18 15.4477 17.5523 15 17 15ZM6 18C10.4183 18 14 14.4183 14 10V8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H6ZM4 6C4 5.44772 4.44772 5 5 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H5C4.44772 7 4 6.55228 4 6ZM4 10C4 9.44771 4.44772 9 5 9H11C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H8C8.55229 13 9 13.4477 9 14C9 14.5523 8.55229 15 8 15H5C4.44772 15 4 14.5523 4 14Z" fill="url(#paint0_linear_1465_264)" />
            <defs>
              <linearGradient id="paint0_linear_1465_264" x1="20" y1="-2.68205e-06" x2="6.78916" y2="-9.47051" gradientUnits="userSpaceOnUse">
                <stop stopColor="#66D5EC" stopOpacity="0.4" />
                <stop offset="1" stopColor="#4132DA" stopOpacity="0.67" />
              </linearGradient>
            </defs>
          </svg>
          <span className="title-text">Blog</span>
        </button>
      </li>
      <li>
        <button href="#contact" className={`${activeSection === 'contact' && 'active'}`} onClick={() => handleActiveMenu('contact')}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20ZM15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H15ZM2 13.1508C2 13.6486 2.50218 14 3 14H10C13.3137 14 16 11.3137 16 8C16 4.68629 13.3137 2 10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13.1508ZM9 8C8.46957 8 7.96086 7.78929 7.58579 7.41421C7.21071 7.03914 7 6.53043 7 6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4C9.53043 4 10.0391 4.21071 10.4142 4.58579C10.7893 4.96086 11 5.46957 11 6C11 6.53043 10.7893 7.03914 10.4142 7.41421C10.0391 7.78929 9.53043 8 9 8ZM8.35614 12C7.05488 12 5.95855 10.7988 6.87868 9.87868C7.44129 9.31607 8.20435 9 9 9C9.79565 9 10.5587 9.31607 11.1213 9.87868C12.0415 10.7988 10.9451 12 9.64386 12H8.35614Z" fill="#4132DA" />
            <path d="M17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20ZM15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H15ZM2 13.1508C2 13.6486 2.50218 14 3 14H10C13.3137 14 16 11.3137 16 8C16 4.68629 13.3137 2 10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13.1508ZM9 8C8.46957 8 7.96086 7.78929 7.58579 7.41421C7.21071 7.03914 7 6.53043 7 6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4C9.53043 4 10.0391 4.21071 10.4142 4.58579C10.7893 4.96086 11 5.46957 11 6C11 6.53043 10.7893 7.03914 10.4142 7.41421C10.0391 7.78929 9.53043 8 9 8ZM8.35614 12C7.05488 12 5.95855 10.7988 6.87868 9.87868C7.44129 9.31607 8.20435 9 9 9C9.79565 9 10.5587 9.31607 11.1213 9.87868C12.0415 10.7988 10.9451 12 9.64386 12H8.35614Z" fill="url(#paint0_linear_1465_261)" />
            <defs>
              <linearGradient id="paint0_linear_1465_261" x1="18" y1="-2.68205e-06" x2="5.29052" y2="-8.19999" gradientUnits="userSpaceOnUse">
                <stop stopColor="#66D5EC" stopOpacity="0.4" />
                <stop offset="1" stopColor="#4132DA" stopOpacity="0.67" />
              </linearGradient>
            </defs>
          </svg>
          <span className="title-text">Contact</span>
        </button>
      </li>
    </ul>
  )
}