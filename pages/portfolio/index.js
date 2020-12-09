import React, { useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import News from "../../components/News";
import YellowHeader from "../../components/YellowHeader";
import usePagination from "../../utils/usePagination";

const Button = ({ children, className, disabled, ...other }) => {
  const styled = `px-4 py-2 border border-gray-400 ${className} ${
    disabled
      ? "text-gray-500 cursor-not-allowed"
      : "text-blue-500 hover:bg-blue-500 hover:text-white"
  } uppercase text-sm transition-all ease-in-out duration-200 focus:outline-none`;

  return (
    <button disabled={disabled} className={styled} {...other}>
      {children}
    </button>
  );
};

export default function index({ news }) {
  const _DATA = usePagination(news, 6);

  return (
    <Layout title="Portfolio">
      <YellowHeader>Portfolio</YellowHeader>

      <div className="container pt-10 pb-20">
        <div className="row">
          {_DATA.currentData().map((item) => {
            return <News news={item} key={item.slug} />;
          })}
        </div>
        <div className="row mt-16">
          <div className="col-12">
            <div className="flex flex-col md:flex-row items-center justify-between py-4 border-t border-gray-400">
              <p className="text-gray-500 mb-4 md:mb-0">
                Showing page
                <span className="font-bold px-1">{_DATA.currentPage}</span>from
                <span className="font-bold px-1">{_DATA.maxPage}</span>pages
                total
              </p>

              <div className="inline-flex items-center">
                <Button
                  disabled={_DATA.currentPage == 1}
                  className="mr-4"
                  onClick={() => _DATA.prev()}
                >
                  Previous
                </Button>
                <Button
                  disabled={_DATA.currentPage == _DATA.maxPage}
                  onClick={() => _DATA.next()}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("content/blog/mk");

  let items = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/blog/mk/${filename}`)
      .toString();

    let { data, content } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      ...data,
      content,
    };
  });

  // Sort by date
  items.sort((a, b) => b.date - a.date);

  items = Array.from(items).map((item) => {
    return {
      ...item,
      date: item.date.toLocaleDateString(),
    };
  });

  return {
    props: {
      news: items,
    },
  };
}
