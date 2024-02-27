"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const JOB_TOKEN = `ShqzmndKzRu8xwRDxiTkGQqmgTqeVGoC`;
const JOB_URL = `https://web3.career/api/v1`;

const FeaturedCompanyCard = () => {
  const [company, setCompany] = useState([]);
  const limit = 4;

  useEffect(() => {
    fetch(`${JOB_URL}?token=${JOB_TOKEN}&limit=${limit}&remote=true&tag=dev`)

      .then((res) => res.json())

      .then((data) => {
        // console.log(data[2]);
        setCompany(data[2]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-4 border border-gray-300 rounded-lg border-opacity-40">
      <h3 className="font-semibold text-2xl mb-5">Featured Company</h3>
      <ul>
        {company.length > 0 ? (
          <div className="flex flex-col gap-2">
            {company?.map((company) => {
              return (
                <Link href='/' key={company.id} className="card flex gap-4 items-center">
                  <div className="h-12 min-w-12 rounded-lg text-center flex bg-slate-600 text-white font-bold justify-center items-center">
                  <span className="">{company.company.charAt(0).toUpperCase()}</span>
                  </div>
                 <p className="font-medium text-lg">{company.company}</p>
                </Link>
              );
            })}
          </div>
        ) : (
          <Image
          className="mx-auto"
          src="https://i.giphy.com/3oEjI6SIIHBdRxXI40.webp"
          alt="loading"
          width={100}
          height={100}
        />
        )}
      </ul>
    </div>
  );
};

export default FeaturedCompanyCard;
