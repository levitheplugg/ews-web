import Layout from "@components/Layout";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/solid";
import { workspaces } from "@lib/data";
import useMediaQuery from "@lib/Hooks/useMediaQuery";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import BoostSvg from "public/boost.svg";
import PeopleComn from "public/PeopleCommunity.svg";
import HomeIcon2 from "public/HomeVector.svg";
import vectorImg from "public/VectorImage.png";
import SearchIcon from "public/magnifier.svg";
import LocationIcon from "public/location-search.svg";
import step1 from "public/step-1.png";
import step2 from "public/step-2.png";
import step3 from "public/step-3.png";
import TickSvg from "public/tick.svg";

export default function Home() {
  const mq = useMediaQuery("(min-width: 800px)");

  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const inView = scrollY < 200;
      setShow(inView);
    };

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout initialTrans={show}>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div
        className='bg-lpbg w-full h-[600px] flex flex-col gap-10 md:gap-16 justify-center items-center
       text-white z-10 px-10'>
        <p className='text-2xl md:text-5xl text-center font-bold font-montserrat'>
          Work in a workspace near you
        </p>
        <div className='bg-white rounded-xl overflow-hidden h-16 flex items-center p-1 w-full md:w-1/2 gap-2'>
          <div className='pl-3'>{mq ? <SearchIcon /> : <LocationIcon />}</div>
          <input
            className='bg-transparent text-black/80 h-1/2 w-full placeholder:text-[#50484A]'
            placeholder='Enter city or region'
          />
          <button className='btn-green-g h-full rounded-xl w-24 md:w-36 flex justify-center items-center'>
            {mq ? "Search" : <SearchIcon />}
          </button>
        </div>
      </div>
      {/* div  */}
      {/* div  */}
      <div
        className='p-2 mt-12 md:mt-2 shadow-2xl border border-neutral-200 md:border-0 md:shadow-none
           rounded-xl w-11/12 mx-auto'>
        <h3 className='text-lg md:text-xl text-center md:text-start font-bold mb-7 md:mb-0 mt-5'>
          Find the best workspace rentals near you
        </h3>
        <div className='md:flex justify-between space-y-7 md:gap-5 px-4 pb-4'>
          <Temp1
            heading='Explore spaces that suit you'
            body='Browse through catalogue of workspaces with convenience and amenities that suit your style '>
            <HomeIcon2 className='w-10 md:w-auto' />
          </Temp1>
          <Temp1
            heading='Connect with people'
            body='Just like a normal work environment, connect and interact with people in the same field as you.'>
            <PeopleComn className='w-10 md:w-auto' />
          </Temp1>
          <Temp1
            heading='Boost Productivity'
            body="EWS has productivity at its core. Here, you save money and time, doing your best work, and being satisfied after a day's work.">
            <BoostSvg className='w-10 md:w-auto' />
          </Temp1>
        </div>
      </div>

      {/* div  */}
      <StepsDisplay mq={mq} />

      <div className='md:w-11/12 md:mx-auto mt-12 md:mt-2'>
        <h3 className='text-base md:text-xl text-start font-medium md:font-bold my-4 md:mb-8'>
          Explore workspaces near you
        </h3>
        <div className='overflow-x-auto'>
          <div className='w-fit flex gap-3 mx-auto'>
            {workspaces.map((workspace) => (
              <div key={workspace.id} className=''>
                <div className='w-64 text-sm p-1'>
                  <Image
                    alt='workspace'
                    src={workspace.thumbnail}
                    width={100}
                    height={100}
                    className='rounded-lg w-full'
                  />
                  <div className='flex items-center justify-between py-2'>
                    <h3 className='font-semibold'>{workspace.name}</h3>
                    <p className='rounded-md py-1 px-2 bg-neutral-300 text-white'>
                      {workspace.sub}
                    </p>
                    <p className='inline-flex items-center gap-1'>
                      <span>
                        <StarIcon width={18} />
                      </span>
                      {workspace.rating}
                    </p>
                  </div>
                  <p className='text-[13px] leading-3'>{"1"} occupant</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center py-6'>
          <Link
            href={"/catalogue"}
            className='text-base md:text-lg font-semibold p-2
             bg-neutral-300 rounded-lg border-2 border-neutral-400'>
            Load More
          </Link>
        </div>
      </div>

      <div className='w-full bg-[#E6E7ED] py-12'>
        <div
          className='bg-[#48adb97d] rounded-3xl flex flex-col md:flex-row items-center
         p-5 md:px-16 md:py-12 w-[92%] md:w-[90%] mx-auto'>
          <div className='w-full md:w-1/2 p-2 md:p-10 space-y-7'>
            <h3 className='text-xl md:text-4xl text-center font-medium text-white'>
              Increase <span className='text-[#0B707B]'>productivity</span> with
              EWS
            </h3>
            <p className='text-base'>
              Get more done and be more efficient in a calm, distraction-free
              environment.
            </p>
            <button className='block mx-auto py-2 px-4 bg-ews rounded-lg text-white text-sm'>
              Book now
            </button>
          </div>

          <div className='w-full md:w-1/2 flex justify-center pt-10 md:pt-0'>
            <Image alt='vector-image' src={vectorImg} className='w-[400px]' />
          </div>
        </div>
      </div>

      <PricingDisplay />

      {/* full */}
      <div className='bg-lpbg2 h-72 flex flex-col items-center justify-center gap-4 text-white'>
        <h3 className='w-4/5 md:w-1/2 text-base md:text-2xl text-center'>
          Would you like to list your space on EWS for partnership and rental
          income?
        </h3>
        <button className='btn-green-n rounded-lg text-sm py-1 px-3'>
          List your space
        </button>
      </div>

      {/* full */}
      <div className='pt-10 pb-5'>
        <div className='w-10/12 mx-auto relative'>
          <h3
            className='font-semibold border-b border-b-neutral-200 md:border-0 
          text-base md:text-xl my-3 text-start'>
            What EWS is all about?
          </h3>
          <ChevronDownIcon
            width={30}
            className='absolute top-0 right-1 md:hidden'
          />
          <p className='text-sm md:text-base'>
            le that work remotely become consistently productive by connecting
            them with nearby/serene locations, a responsive co-working community
            who can help them to get their work done, and minimise
            procrastination.
          </p>
          <div className='w-full border-b border-b-neutral-200 my-4 hidden md:block' />
          <h3
            className='font-semibold border-b border-b-neutral-200 md:border-0 
          text-[15px] md:text-xl my-3 text-start'>
            What makes our workspaces perfect for you?
          </h3>
          <p className='text-sm md:text-base'>
            {
              "Our goal is to boost your productivity by 10x and enable you to feel satisfied after a hard day's work.Instead of trying to do more with less, we encourage you to maximize the potential of what you already have, which is 8 hours of work time. Our approach is not just about enhancing your work performance but also about transforming you into a more efficient and effective worker."
            }
          </p>
        </div>
      </div>
    </Layout>
  );
}

const TickText = ({ text }: { text: string }) => {
  return (
    <div className='flex gap-3 items-center'>
      <TickSvg />
      <p>{text}</p>
    </div>
  );
};

const PricingDisplay = ({}: {}) => {
  const [active, setActive] = useState("monthly");

  return (
    <div className='bg-[#F6F3EF] p-7 space-y-8'>
      <h2 className='text-4xl font-semibold text-center'>
        Pick Your Perfect Plan
      </h2>
      <p className='text-center text-sm'>
        Find the perfect plan with our flexible pricing options.
      </p>

      <div className='flex w-11/12 md:w-1/3  mx-auto mt-4'>
        <button
          onClick={() => setActive("monthly")}
          className={`${
            active === "monthly"
              ? "bg-[#B4D6DE] text-ews border-transparent"
              : "border-[#B4D6DE]"
          } border w-1/2 rounded-l-lg text-sm py-2`}>
          Monthly
        </button>
        <button
          onClick={() => setActive("annually")}
          className={`${
            active === "annually"
              ? "bg-[#B4D6DE] text-ews border-transparent"
              : "border-[#B4D6DE]"
          } border w-1/2 rounded-r-lg text-sm py-2 flex flex-col justify-center items-center`}>
          <span>Annual</span> <span className='text-xs'>save up to 20%</span>
        </button>
      </div>

      <div className='md:flex md:w-7/12 justify-between mx-auto space-y-8 md:space-y-0'>
        <div className='bg-white rounded-3xl p-8 space-y-4 md:w-96'>
          <h3 className='text-lg font-light'>Mac</h3>
          {active === "monthly" ? (
            <p className=''>
              <span className='text-5xl font-bold'>$19</span> / month
            </p>
          ) : (
            <p className=''>
              <span className='text-5xl font-bold'>$183</span> / year. 20% off
            </p>
          )}
          <p className='py-4'>Ideal for Growing Companies.</p>
          <TickText text='Write feature details here' />
          <TickText text='Write feature details here' />
          <TickText text='Write feature details here' />
          <button className='bg-ewsblue text-ews font-semibold rounded-2xl py-4 w-full hover:bg-opacity-70'>
            Get Started
          </button>
        </div>

        <div className='bg-white rounded-3xl p-8 space-y-4 md:w-96'>
          <h3 className='text-lg font-light'>Milkshake</h3>
          {active === "monthly" ? (
            <p className=''>
              <span className='text-5xl font-bold'>$75</span> / month
            </p>
          ) : (
            <p className=''>
              <span className='text-5xl font-bold'>$720</span> / year. 20% off
            </p>
          )}
          <p className='py-4'>Ultimate for Enterprise Solutions.</p>
          <TickText text='Write feature details here' />
          <TickText text='Write feature details here' />
          <TickText text='Write feature details here' />
          <button className='bg-ewsblue text-ews font-semibold rounded-2xl py-4 w-full hover:bg-opacity-70'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const StepsDisplay = ({ mq }: { mq: boolean }) => {
  const [active, setActive] = useState(1);

  const lgSrc =
    active === 1 ? step1 : active === 2 ? step2 : active === 3 ? step3 : "";

  return (
    <>
      {!mq ? (
        <div className='bg-white mt-10 p-3 pb-10 space-y-16'>
          <div className='flex flex-col items-center text-center gap-3'>
            <h3 className='flex gap-2 text-ews text-xl items-center'>
              <span
                className='btn-green-g rounded-full w-6 h-6 flex text-white
             justify-center items-center'>
                1
              </span>
              Book a space
            </h3>
            <p className='text-[14px]'>
              Browse through our catalogue of workspaces near you or walk into
              any workspaces with our logo displayed.
            </p>
            <StepImage src={step1} />
          </div>
          {/* break */}
          <div className='flex flex-col items-center text-center gap-3'>
            <h3 className='flex gap-2 text-ews text-xl items-center'>
              <span
                className='btn-green-g rounded-full w-6 h-6 flex text-white
             justify-center items-center'>
                2
              </span>
              Subscribe to a plan
            </h3>
            <p className='text-[14px]'>
              Subscribe to any of our plans to be able to log into your
              dashboard and check in at an convenient time.
            </p>
            <StepImage src={step2} />
          </div>
          {/* break */}
          <div className='flex flex-col items-center text-center gap-3'>
            <h3 className='flex gap-2 text-ews text-xl items-center'>
              <span
                className='btn-green-g rounded-full w-6 h-6 flex text-white
             justify-center items-center'>
                3
              </span>
              Check in
            </h3>
            <p className='text-[14px]'>
              Check in either online or scan the QR code at the workspace with
              your phone camera and be more productive!
            </p>
            <StepImage src={step3} />
          </div>
        </div>
      ) : (
        <div className='w-full bg-[#E6E7ED] p-2'>
          <h2 className='text-lg font-medium text-center '>
            How does <span className='text-[#0B707B]'>EWS</span> works
          </h2>
          <p className='text-center text-sm leading-3'>Simple and fast!</p>

          <div className='w-fit gap-24 flex mx-auto p-7'>
            <div className='w-fit'>
              <StepImage src={lgSrc} />
              <div className='h-1 flex gap-5 mt-10 px-4'>
                <div
                  className={`w-1/3 rounded-full ${
                    active === 1 ? "bg-ews" : "bg-neutral-300"
                  }`}
                />
                <div
                  className={`w-1/3 rounded-full ${
                    active === 2 ? "bg-ews" : "bg-neutral-300"
                  }`}
                />
                <div
                  className={`w-1/3 rounded-full ${
                    active === 3 ? "bg-ews" : "bg-neutral-300"
                  }`}
                />
              </div>
            </div>

            <div className=' rounded-r-2xl rounded-l-md overflow-hidden w-[350px]'>
              <Temp2
                active={active === 1}
                no={1}
                heading='Book a space'
                body='Browse through our catalogue of workspaces near you or walk into any workspaces with our logo displayed.'
                onClick={() => setActive(1)}
              />
              <Temp2
                active={active === 2}
                no={2}
                heading='Subscribe to a plan'
                body='Subscribe to any of our plans to be able to log into your dashboard and check in at an convenient time.'
                onClick={() => setActive(2)}
              />
              <Temp2
                active={active === 3}
                no={3}
                heading='Check in'
                body='Check in either online or scan the QR code at the workspace with your phone camera and be more productive!'
                onClick={() => setActive(3)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const StepImage = ({ src }: { src: string | StaticImageData }) => {
  return (
    <div className=' border-2 border-ews relative w-56 h-48 rounded-xl p-1'>
      <div className='w-full h-full bg-ews rounded-lg' />
      <Image
        alt='frame'
        src={src}
        className='w-full absolute -bottom-4 -right-4'
      />
    </div>
  );
};

const Temp2 = ({
  active,
  no,
  heading,
  body,
  onClick,
}: {
  no: number;
  heading: string;
  body: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`py-2 px-4 cursor-pointer ${active ? "bg-ews" : ""}`}
      onClick={onClick}>
      <div className='flex gap-3'>
        <p className='rounded-full w-6 h-6 flex justify-center items-center bg-neutral-300'>
          {no}
        </p>
        <h3 className={`text-sm ${active ? "text-white" : "text-ews"}`}>
          {heading}
        </h3>
      </div>
      <p className={`text-[11px] ${active ? "text-white" : "text-black/80"}`}>
        {body}
      </p>
    </div>
  );
};

const Temp1 = ({
  heading,
  body,
  children,
}: {
  heading: string;
  body: string;
  children?: ReactNode;
}) => {
  return (
    <div className='flex gap-2 md:flex-col justify-end w-full md:w-1/3'>
      <div className='w-44'>{children}</div>
      <div className=''>
        <h3 className='font-semibold text-sm md:text-base md:font-medium'>
          {heading}
        </h3>
        <p className='text-[13px] md:text-sm font-normal'>{body}</p>
      </div>
    </div>
  );
};
