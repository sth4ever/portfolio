import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">
                Austin
              </span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              {`Welcome to ${siteMetadata.description}. I am a Senior Full Stack Engineer who is passionate about JavaScript, Python, Ruby and Automation. In my free time, I like developing `}
              side projects and learning new technologies.
            </h2>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              This is my place for{' '}
              <RoughNotation
                animate="true"
                type="box"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                thoughts, reflections & everything&nbsp;
              </RoughNotation>
              in between. Have a good read!
            </p>
            <p className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              This is my place for{' '}
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                thoughts, reflections & everything&nbsp;
              </RoughNotation>
              in between. Have a good read!{' '}
              <div className="mt-8 text-slate-600 dark:text-slate-400">
                <span className="text-sm">Press</span>{' '}
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ⌘
                </span>{' '}
                <span className="text-sm">+ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  K
                </span>{' '}
                <span className="text-sm">to start</span>
              </div>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/projects">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                        <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                      </span>
                      <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Projects&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <li className="py-6">
                  <article>
                    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                          {' • '}
                          <ViewCounter className="mx-1" slug={slug} />
                          views
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-4">
                        <div className="space-y-1">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                              >
                                {title}
                              </Link>
                            </h2>
                          </div>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <Link
            href="/blog"
            className=" special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
