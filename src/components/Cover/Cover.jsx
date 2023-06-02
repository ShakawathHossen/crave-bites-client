import React from 'react';

const Cover = ({img,title,subTitle}) => {
    return (
        <div className="hero h-[500px]" style={{backgroundImage: `url("${img}")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 px-20 py-10">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="">{subTitle}</p>
    </div>
  </div>
</div>
    );
};

export default Cover;