'use client'

import PostItem from '@/features/posts/components/PostItem'
import PostItemTitleInteractive from '@/features/posts/components/PostItemTitleInteractive'
import useSearchModalUseCase from '@/features/search/hooks/usecases/useSearchModalUseCase'

type Props = {
  isOpen: boolean
  onClose: () => void
}
const SearchModal = ({ isOpen, onClose }: Props) => {
  const { search, posts, loading, onChange, onCloseModal } =
    useSearchModalUseCase({ onClose })

  if (!isOpen) {
    return null
  }

  return (
    <div className="absolute top-1/2 left-1/2 h-32 w-dvw -translate-x-1/2 -translate-y-1/12 bg-white">
      <span onClick={onCloseModal} className="absolute right-2.5">
        X
      </span>
      <input
        className={'bg-amber-200'}
        value={search}
        onChange={onChange}
        placeholder="Search..."
        autoFocus
      />
      {loading && <h2>LOADING...</h2>}
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                preview={post.preview}
                tags={post.tags}
                title={
                  <PostItemTitleInteractive
                    title={post.title}
                    slug={post.slug}
                    onCloseModal={onCloseModal}
                  />
                }
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SearchModal
