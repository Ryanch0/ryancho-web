import LocaleTransitionLink from '@/shared/components/LocaleTransitionLink'

type Props = {
  previousPost: { slug?: string; title?: string }
  nextPost: { slug?: string; title?: string }
}
const PostNavigation = ({ previousPost, nextPost }: Props) => {
  const hasPrevPost = previousPost.slug && previousPost.title
  const hasNextPost = nextPost.slug && nextPost.title

  return (
    <section className="mt-16 mb-12 flex items-stretch justify-between gap-1">
      {hasPrevPost && (
        <LocaleTransitionLink
          className="group flex flex-col gap-1"
          href={`/posts/${previousPost.slug}`}
        >
          <div className="dark:text-second-dark dark:group-hover:text-base-dark group-hover:text-base-light text-[#909090] transition-colors ease-in-out">
            Previous
          </div>
          <span className="accent-font-style group-hover:bg-section-light dark:group-hover:bg-section-dark -mx-1 rounded-sm px-1 transition-colors ease-in-out">
            {previousPost.title}
          </span>
        </LocaleTransitionLink>
      )}

      {hasNextPost && (
        <LocaleTransitionLink
          className="group text-second hover:text-body ml-auto flex flex-col gap-1 text-right"
          href={`/posts/${nextPost.slug}`}
        >
          <div className="dark:text-second-dark dark:group-hover:text-base-dark group-hover:text-base-light text-[#909090] transition-colors ease-in-out">
            Next
          </div>
          <span className="accent-font-style group-hover:bg-section-light dark:group-hover:bg-section-dark -mx-1 rounded-sm px-1 transition-colors ease-in-out">
            {nextPost.title}
          </span>
        </LocaleTransitionLink>
      )}
    </section>
  )
}

export default PostNavigation
