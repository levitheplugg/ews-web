import Footer from "@components//Footer";
import Header from "@components//Header";
import { StarIcon } from "@heroicons/react/24/solid";
import { workspaces } from "@lib/data";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header />
      <div className='bg-lpbg w-full h-full flex justify-center items-center text-white z-10'>
        <p className='text-5xl font-medium'>Connect to workspaces near you</p>
      </div>
      {/* div  */}
      <div className='bg-white p-2'>
        <div className='w-10/12 mx-auto'>
          <div className='flex bg-blue-200 rounded-lg p-5'>
            <div className='w-1/2 flex flex-col justify-center p-4'>
              <h3 className='text-3xl font-medium'>
                Join our productivity community
              </h3>
              <p>
                Receive exclusive offers, inspirational stories and travel
                regulation updates.
              </p>
            </div>

            <div className='w-1/2'>
              <div className='relative bg-white h-14 p-1 rounded-xl overflow-hidden'>
                <input
                  className='w-2/3 h-full p-1 outline-none'
                  placeholder='Enter email address'
                />
                <button className='bg-green-800 text-white rounded-lg text-sm h-full w-1/3'>
                  Request to join
                </button>
              </div>
              <p className='text-[15px] mt-3'>
                By signing up, you agree to our Terms of Service and Privacy
                Policy. Due to its exclusivity, you can only be invited. You
                will receive offers from EWS as soon as you’re invited to join
                and agree that we may share your hashed email address with third
                parties for the purpose of better tailoring advertising to your
                needs.
              </p>
            </div>
          </div>
          {/* div  */}
          <div className='p-2'>
            <h3 className='text-xl font-bold mb-10'>
              Find the best workspace rentals near you
            </h3>
            <div className='flex justify-between gap-5'>
              <Temp1
                heading='Explore spaces that suit you'
                body='Browse through catalogue of workspaces with convenience and amenities
        that suit your style'
              />
              <Temp1
                heading='Explore spaces that suit you'
                body='Browse through catalogue of workspaces with convenience and amenities
        that suit your style'
              />
              <Temp1
                heading='Explore spaces that suit you'
                body='Browse through catalogue of workspaces with convenience and amenities
        that suit your style'
              />
            </div>
          </div>

          {/* div  */}

          <div className='w-full'>
            <h3 className='text-xl font-bold mb-8'>
              Explore workspaces near you
            </h3>
            <div className='w-fit flex overflow-x-auto gap-3 mx-auto'>
              {workspaces.map((workspace) => (
                <div key={workspace.id} className=''>
                  <div className='w-64 text-sm'>
                    <Image
                      alt='workspace'
                      src={workspace.image}
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
                    <p className='text-[13px]'>{workspace.occupant} occupant</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-center py-6'>
              <button
                className='text-lg font-semibold p-2
             bg-neutral-300 rounded-lg ring-2 ring-neutral-400'>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* full */}
      <div className='bg-lpbg2 h-72 flex flex-col items-center justify-center gap-4 text-white'>
        <h3 className='text-2xl w-1/2 text-center'>
          Would you like to list your space on EWS for partnership and rental
          income?
        </h3>
        <button className='bg-green-700 rounded-lg text-sm p-1'>
          List your space
        </button>
      </div>

      {/* full */}
      <div className='pt-10 pb-5'>
        <div className='w-10/12 mx-auto'>
          <h3 className='font-semibold text-xl my-3'>What EWS is all about</h3>
          <p>
            At EWS, our utmost goal is to connect remote workers with workspaces
            with the look and feel of any work environment. The EWS community
            offers remote workers an array of rental spaces in different types
            of location such as cafes, restaurants, coffeeshops and more.
            Discover workspaces in locations that facilitates productivity and
            comfort much better than a office. EWS spaces have sophisticated
            system and technology that speeds up work processes for remote
            workers. We use maps to ensure that we pick secure and serene
            locations close to you, you can find workspaces on EWS that give you
            the efficiency and comfort with numerous amenities just for you and
            all within your budget.
          </p>
          <h3 className='font-semibold text-xl my-3'>
            What makes our workspaces perfect for you
          </h3>
          <p>
            EWS workspaces provides you an array of features that makes you feel
            comfortable and confidence, we help create more opportunities for
            creative collaboration by providing you with a co-working community
            thereby giving rise to consistent productivity and minimizing
            procrastination. So if you’re looking for a serene, productive
            environment with a co-working community that’s where spaces like
            ours come into play. Make a switch today to spaces that allow for
            privacy, collaboration, and networking.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

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
    <div className=''>
      {children}
      <h3>{heading}</h3>
      <p className='text-[15px]'>{body}</p>
    </div>
  );
};
