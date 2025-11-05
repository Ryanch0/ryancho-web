import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { PATH } from '@/constants/path'
import { listAllTagsHandler } from '@/external/handler/posts/postsHandler'
import TagLinkItem from '@/features/tags/components/TagLinkItem'

const TagLinkList = async () => {
  const tags = await listAllTagsHandler()

  return (
    <div
      className={
        'bg-background-light/95 dark:bg-background-dark/95 sticky top-13 z-40 -mx-4 transition-colors duration-300 ease-in-out md:-mx-6'
      }
    >
      <nav className={'mx-4 md:mx-6'}>
        <ScrollArea className="pt-2 pb-4 whitespace-nowrap">
          <ul className="align-center flex gap-2">
            <li key="all">
              <TagLinkItem href={PATH.POSTS} tagName={'All'} defaultTag />
            </li>
            {tags.map((tag) => (
              <li key={tag}>
                <TagLinkItem href={`${PATH.POSTS}?tag=${tag}`} tagName={tag} />
              </li>
            ))}
          </ul>

          <ScrollBar
            orientation="horizontal"
            className="h-[8px] bg-transparent opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-90"
          >
            <div className="flex-1 rounded-full bg-[#e6e6e6] dark:bg-[#303030]" />
          </ScrollBar>
        </ScrollArea>
      </nav>
    </div>
  )
}

export default TagLinkList
