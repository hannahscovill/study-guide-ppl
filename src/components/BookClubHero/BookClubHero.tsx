import React from "react";
import "./BookClubHero.css";

type Props = {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  imageWidth?: number | string;
  children?: React.ReactNode;
};

export default function BookClubHero({
  href,
  imageSrc,
  imageAlt = "",
  imageWidth = 300,
  children,
}: Props) {
  return (
    <div className='hero'>
      <a className='imageLink' href={href} target="_blank" rel="noreferrer">
        <img
          className='image'
          src={imageSrc}
          alt={imageAlt}
          width={typeof imageWidth === "number" ? imageWidth : undefined}
        />
      </a>

      <div className='text'>
        {children}
      </div>
    </div>
  );
}